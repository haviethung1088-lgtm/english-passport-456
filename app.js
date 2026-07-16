// ============================================================
// APP LOGIC - Ho chieu hanh trinh Tieng Anh (tich hop nhieu khoi lop 4-5-6)
// ============================================================

const STORAGE_PROFILE = "eaPassport_profile_v2";
const STORAGE_PROGRESS_PREFIX = "eaPassport_progress_v2_";

let state = {
  profile: null,
  progress: {},
  currentUnitId: null,
  currentTab: "vocab",
  quiz: { list: [], index: 0, correct: 0, mode: "core" },
};

// Tao ma dinh danh rieng cho tung hoc sinh (dua tren ten + lop + khoi)
// de moi tai khoan luu tien do rieng, khong bi lan sang nhau giua cac khoi.
function makeAccountKey(name, cls, grade) {
  return (name.trim() + "|" + (cls || "").trim() + "|" + grade).toLowerCase();
}

// ---------- Grade (khoi lop) data loader ----------
const GRADE_LABELS = { 4: "Lớp 4", 5: "Lớp 5", 6: "Lớp 6" };

function loadGradeData(grade) {
  const g = Number(grade);
  const data = window.GRADE_DATA && window.GRADE_DATA[g];
  if (!data) {
    console.error("Khong tim thay du lieu cho khoi lop", g);
    return false;
  }
  window.UNITS = data.UNITS;
  window.REVIEWS = data.REVIEWS;
  window.GROUP_NAMES = data.GROUP_NAMES;
  buildLanguageSets();
  const exBtn = document.getElementById("nav-exercises");
  if (exBtn) {
    const hasPractice = window.PRACTICE_DATA && window.PRACTICE_DATA[g] && window.PRACTICE_DATA[g].length > 0;
    exBtn.style.display = hasPractice ? "flex" : "none";
  }
  const sub = document.getElementById("app-sub");
  if (sub) sub.textContent = "Tiếng Anh " + (GRADE_LABELS[g] || g).toLowerCase() + " · Global Success";
  const badge = document.getElementById("grade-badge");
  if (badge) badge.textContent = GRADE_LABELS[g] || ("Lớp " + g);
  document.title = "Hộ chiếu Hành trình Tiếng Anh - " + (GRADE_LABELS[g] || g);
  return true;
}

// ---------- Storage helpers ----------
// Du phong bo nho tam trong RAM neu trinh duyet chan localStorage
// (che do rieng tu, cai dat chan cookie/luu tru...)
let memoryFallback = { profile: null, progressByKey: {} };
let storageBlocked = false;

function loadProfile() {
  try { return JSON.parse(localStorage.getItem(STORAGE_PROFILE)); }
  catch (e) { storageBlocked = true; return memoryFallback.profile; }
}
function saveProfile(p) {
  memoryFallback.profile = p;
  try { localStorage.setItem(STORAGE_PROFILE, JSON.stringify(p)); }
  catch (e) { storageBlocked = true; }
}
function loadProgressForKey(key) {
  try { return JSON.parse(localStorage.getItem(STORAGE_PROGRESS_PREFIX + key)) || {}; }
  catch (e) { storageBlocked = true; return memoryFallback.progressByKey[key] || {}; }
}
function saveProgress() {
  if (!state.profile || !state.profile.key) return;
  memoryFallback.progressByKey[state.profile.key] = state.progress;
  try { localStorage.setItem(STORAGE_PROGRESS_PREFIX + state.profile.key, JSON.stringify(state.progress)); }
  catch (e) { storageBlocked = true; }
}

function getUnitProgress(id) {
  if (!state.progress[id]) state.progress[id] = { stars: 0, coreDone: false, extDone: false };
  return state.progress[id];
}

// ---------- TTS ----------
// Danh sach giong doc, nap bat dong bo tren nhieu trinh duyet di dong
let cachedVoices = [];
let voicesReady = false;

function loadVoices() {
  if (!("speechSynthesis" in window)) return;
  const v = window.speechSynthesis.getVoices();
  if (v && v.length) {
    cachedVoices = v;
    voicesReady = true;
  }
}
if ("speechSynthesis" in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

function pickEnglishVoice() {
  if (!cachedVoices.length) return null;
  const enVoices = cachedVoices.filter(v => v.lang && v.lang.toLowerCase().startsWith("en"));
  if (!enVoices.length) return null;
  // Uu tien giong chat luong cao (Enhanced/Premium/Neural) neu may co san
  const qualityKeywords = ["enhanced", "premium", "neural", "natural", "wavenet"];
  const highQuality = enVoices.find(v =>
    qualityKeywords.some(k => (v.name || "").toLowerCase().includes(k))
  );
  if (highQuality) return highQuality;
  // Sau do uu tien giong US chuan
  return (
    enVoices.find(v => v.lang === "en-US") ||
    enVoices.find(v => v.lang.toLowerCase().startsWith("en-us")) ||
    enVoices[0]
  );
}

function pickVietnameseVoice() {
  if (!cachedVoices.length) return null;
  return cachedVoices.find(v => v.lang && v.lang.toLowerCase().startsWith("vi")) || null;
}

// Xay tap tu vung tieng Anh / tieng Viet tu chinh du lieu bai hoc,
// de nhan biet 1 dap an la tieng Anh hay tieng Viet truoc khi doc.
const ENGLISH_TEXT_SET = new Set();
const VIETNAMESE_TEXT_SET = new Set();
function buildLanguageSets() {
  ENGLISH_TEXT_SET.clear();
  VIETNAMESE_TEXT_SET.clear();
  UNITS.forEach(u => {
    [...u.core, ...u.ext].forEach(w => {
      if (w.en) ENGLISH_TEXT_SET.add(w.en.trim().toLowerCase());
      if (w.vi) VIETNAMESE_TEXT_SET.add(w.vi.trim().toLowerCase());
    });
    u.patterns.forEach(p => {
      if (p.en) ENGLISH_TEXT_SET.add(p.en.trim().toLowerCase());
      if (p.vi) VIETNAMESE_TEXT_SET.add(p.vi.trim().toLowerCase());
    });
  });
}

function hasVietnameseDiacritics(s) {
  return /[\u00C0-\u1EF9]/.test(s);
}

// Tra ve "en-US" hoac "vi-VN" tuy vao noi dung dap an
function detectAnswerLang(text) {
  const t = text.trim().toLowerCase();
  if (ENGLISH_TEXT_SET.has(t)) return "en-US";
  if (VIETNAMESE_TEXT_SET.has(t)) return "vi-VN";
  return hasVietnameseDiacritics(t) ? "vi-VN" : "en-US";
}

// Mo rong vai tu viet tat de TTS doc dung, khong doc nham thanh chu cai roi rac
function normalizeForSpeech(text) {
  return text
    .replace(/\bMr\b\.?/g, "Mister")
    .replace(/\bMs\b\.?/g, "Miss");
}

function speakNow(text, rate, lang) {
  window.speechSynthesis.cancel();
  const targetLang = lang || "en-US";
  const isVietnamese = targetLang.toLowerCase().startsWith("vi");
  const voice = isVietnamese ? pickVietnameseVoice() : pickEnglishVoice();
  if (isVietnamese && !voice) {
    // May khong co giong tieng Viet -> khong doc, tranh doc tieng Viet bang giong tieng Anh (sai hoan toan)
    return;
  }
  const cleanText = isVietnamese ? text : normalizeForSpeech(text);
  const u = new SpeechSynthesisUtterance(cleanText);
  u.lang = targetLang;
  u.rate = rate || 0.8;
  if (voice) u.voice = voice;
  window.speechSynthesis.speak(u);
}

function speak(text, rate, lang) {
  if (!("speechSynthesis" in window)) return;
  if (voicesReady) {
    speakNow(text, rate, lang);
  } else {
    // Tren mot so trinh duyet di dong, danh sach giong chua nap kip
    // -> thu nap lai va doi toi da ~600ms truoc khi doc
    loadVoices();
    if (voicesReady) { speakNow(text, rate, lang); return; }
    let waited = 0;
    const timer = setInterval(() => {
      loadVoices();
      waited += 100;
      if (voicesReady || waited >= 600) {
        clearInterval(timer);
        speakNow(text, rate, lang);
      }
    }, 100);
  }
}

// ---------- Am thanh hieu ung dung/sai ----------
let audioCtx = null;
function getAudioCtx() {
  if (audioCtx) return audioCtx;
  try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
  catch (e) { audioCtx = null; }
  return audioCtx;
}
function playTone(freq, duration, type, startTime, gainPeak) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.value = freq;
  const t0 = ctx.currentTime + (startTime || 0);
  gain.gain.setValueAtTime(0.0001, t0);
  gain.gain.linearRampToValueAtTime(gainPeak || 0.2, t0 + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t0);
  osc.stop(t0 + duration + 0.03);
}
function playCorrectSound() {
  playTone(880, 0.15, "sine", 0, 0.22);
  playTone(1175, 0.22, "sine", 0.11, 0.22);
}
function playWrongSound() {
  playTone(220, 0.28, "sawtooth", 0, 0.13);
}

// ---------- Screen navigation ----------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  const topbar = document.getElementById("topbar-map");
  const nav = document.querySelector(".bottom-nav");
  const hideChrome = id === "screen-login";
  topbar.style.display = hideChrome ? "none" : "flex";
  nav.style.display = hideChrome ? "none" : "flex";
}

function goHome() {
  renderMap();
  showScreen("screen-map");
  setBottomNav("home");
}

function goProgress() {
  renderProgress();
  showScreen("screen-progress");
  setBottomNav("progress");
}

function setBottomNav(which) {
  document.querySelectorAll(".bottom-nav .nav-btn").forEach(b => b.classList.remove("active"));
  const el = document.getElementById("nav-" + which);
  if (el) el.classList.add("active");
}

// ---------- Init ----------
function init() {
  const p = loadProfile();
  if (p && p.key && p.grade && loadGradeData(p.grade)) {
    state.profile = p;
    state.progress = loadProgressForKey(p.key);
    goHome();
    updateStampCount();
  } else {
    showScreen("screen-login");
  }
  document.getElementById("login-form").addEventListener("submit", onLogin);
  document.getElementById("nav-home").addEventListener("click", goHome);
  document.getElementById("nav-progress").addEventListener("click", goProgress);
  document.getElementById("nav-exercises").addEventListener("click", goExercises);
  document.getElementById("logout-btn").addEventListener("click", onLogout);
}

function onLogin(e) {
  e.preventDefault();
  try {
    const name = document.getElementById("input-name").value.trim();
    const cls = document.getElementById("input-class").value.trim();
    const grade = document.getElementById("input-grade").value;
    if (!name || !grade) return;
    if (!loadGradeData(grade)) {
      alert("Khối lớp này chưa có dữ liệu, vui lòng chọn khối khác.");
      return;
    }
    const key = makeAccountKey(name, cls, grade);
    state.profile = { name, cls, grade, key };
    state.progress = loadProgressForKey(key);
    saveProfile(state.profile);
    goHome();
    updateStampCount();
    if (storageBlocked) {
      alert("Tr\u00ecnh duy\u1ec7t \u0111ang ch\u1eb7n l\u01b0u tr\u1eef d\u1eef li\u1ec7u (v\u00ed d\u1ee5 ch\u1ebf \u0111\u1ed9 duy\u1ec7t ri\u00eang t\u01b0). Em v\u1eabn h\u1ecdc \u0111\u01b0\u1ee3c b\u00ecnh th\u01b0\u1eddng, nh\u01b0ng ti\u1ebfn \u0111\u1ed9 s\u1ebd m\u1ea5t khi t\u1eaft trang. H\u00e3y d\u00f9ng ch\u1ebf \u0111\u1ed9 duy\u1ec7t web th\u01b0\u1eddng \u0111\u1ec3 l\u01b0u \u0111\u01b0\u1ee3c ti\u1ebfn \u0111\u1ed9.");
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("C\u00f3 l\u1ed7i x\u1ea3y ra. Vui l\u00f2ng th\u1eed l\u1ea1i ho\u1eb7c \u0111\u1ed5i tr\u00ecnh duy\u1ec7t kh\u00e1c.");
  }
}

function onLogout() {
  if (!confirm("\u0110\u1ed5i sang h\u1ecdc sinh kh\u00e1c? Ti\u1ebfn \u0111\u1ed9 c\u1ee7a b\u1ea1n \u0111\u00e3 \u0111\u01b0\u1ee3c l\u01b0u v\u00e0 s\u1EBD hi\u1ec7n l\u1ea1i n\u1ebfu \u0111\u0103ng nh\u1eadp l\u1ea1i \u0111\u00fang t\u00ean.")) return;
  localStorage.removeItem(STORAGE_PROFILE);
  memoryFallback.profile = null;
  state.profile = null;
  state.progress = {};
  showScreen("screen-login");
}

function updateStampCount() {
  if (typeof UNITS === "undefined" || !UNITS) return;
  const total = UNITS.length;
  let stamped = 0;
  UNITS.forEach(u => { if (getUnitProgress(u.id).stars > 0) stamped++; });
  const el = document.getElementById("stamp-count");
  if (el) el.textContent = stamped + " / " + total;
}

// ---------- Map render ----------
function renderMap() {
  document.getElementById("greeting-name").textContent = state.profile ? state.profile.name : "";
  const container = document.getElementById("map-container");
  container.innerHTML = "";

  for (let g = 1; g <= 4; g++) {
    const groupUnits = UNITS.filter(u => u.group === g);
    const island = document.createElement("div");
    island.className = "island";

    const title = document.createElement("div");
    title.className = "island-title";
    title.innerHTML = `<span class="badge">\u0110\u1EA3o ${g}</span><h2>${GROUP_NAMES[g]}</h2>`;
    island.appendChild(title);

    const path = document.createElement("div");
    path.className = "path";

    groupUnits.forEach(u => {
      path.appendChild(renderNode(u));
    });

    // review node
    const review = REVIEWS.find(r => r.afterGroup === g);
    if (review) path.appendChild(renderReviewNode(review));

    island.appendChild(path);
    container.appendChild(island);
  }
}

function renderNode(unit) {
  const prog = getUnitProgress(unit.id);
  const row = document.createElement("div");
  row.className = "node-row";
  const stars = "\u2B50".repeat(prog.stars) + "\u2606".repeat(3 - prog.stars);
  row.innerHTML = `
    <button class="node-btn" data-unit="${unit.id}">
      <div class="node ${prog.stars > 0 ? "done" : ""}">${unit.icon}</div>
      <div class="node-info">
        <div class="titles">
          <div class="en">${unit.titleEn}</div>
          <div class="vi">${unit.titleVi}</div>
        </div>
        <div class="stars-mini">${stars}</div>
      </div>
    </button>
  `;
  row.querySelector(".node-btn").addEventListener("click", () => openUnit(unit.id));
  return row;
}

function renderReviewNode(review) {
  const row = document.createElement("div");
  row.className = "node-row";
  // average stars across units in review
  let totalStars = 0;
  review.units.forEach(id => totalStars += getUnitProgress(id).stars);
  const avg = Math.round(totalStars / review.units.length);
  const stars = "\u2B50".repeat(avg) + "\u2606".repeat(3 - avg);
  row.innerHTML = `
    <button class="node-btn" data-review="${review.id}">
      <div class="node review">\uD83C\uDFC6</div>
      <div class="node-info">
        <div class="titles">
          <div class="en">${review.titleVi}</div>
          <div class="vi">T\u1ed5ng h\u1ee3p ${review.units.length} unit</div>
        </div>
        <div class="stars-mini">${stars}</div>
      </div>
    </button>
  `;
  row.querySelector(".node-btn").addEventListener("click", () => openReview(review.id));
  return row;
}

// ---------- Unit detail ----------
function openUnit(id) {
  state.currentUnitId = id;
  const unit = UNITS.find(u => u.id === id);
  document.getElementById("unit-icon").textContent = unit.icon;
  document.getElementById("unit-title-en").textContent = unit.titleEn;
  document.getElementById("unit-title-vi").textContent = unit.titleVi;
  switchTab("vocab");
  renderUnitContent(unit);
  showScreen("screen-unit");
}

function switchTab(tab) {
  state.currentTab = tab;
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("tabbtn-" + tab).classList.add("active");
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.getElementById("panel-" + tab).classList.add("active");
}

function renderUnitContent(unit) {
  // VOCAB tab
  const vocabGrid = document.getElementById("vocab-grid");
  vocabGrid.innerHTML = "";
  unit.core.forEach(w => vocabGrid.appendChild(makeFlashcard(w)));

  const patternsBox = document.getElementById("patterns-box");
  patternsBox.innerHTML = "";
  unit.patterns.forEach(p => {
    const div = document.createElement("div");
    div.className = "pattern-card";
    div.innerHTML = `<div class="en">${p.en}</div><div class="vi">${p.vi}</div><button class="say-btn">\uD83D\uDD0A Nghe</button>`;
    div.querySelector(".say-btn").addEventListener("click", () => speak(p.en));
    patternsBox.appendChild(div);
  });

  // PRACTICE core tab
  document.getElementById("practice-core-info").textContent =
    `${unit.quizCore.length} c\u00e2u tr\u1eafc nghi\u1ec7m t\u1eeb v\u1ef1ng & m\u1eabu c\u00e2u c\u01a1 b\u1ea3n.`;

  // EXTENSION tab
  const extGrid = document.getElementById("ext-vocab-grid");
  extGrid.innerHTML = "";
  unit.ext.forEach(w => extGrid.appendChild(makeFlashcard(w)));

  const grammarBox = document.getElementById("grammar-box");
  grammarBox.innerHTML = "";
  unit.grammar.forEach(g => {
    const div = document.createElement("div");
    div.className = "grammar-box";
    div.innerHTML = `
      <h3>\uD83D\uDCD8 ${g.title}</h3>
      <div class="explain">${g.explain}</div>
      <div class="example">${g.example}</div>
    `;
    grammarBox.appendChild(div);
  });

  const readingBox = document.getElementById("reading-box");
  readingBox.innerHTML = "";
  unit.reading.forEach(r => {
    const div = document.createElement("div");
    div.className = "reading-box";
    div.innerHTML = `
      <h3>\uD83D\uDCD6 ${r.title}</h3>
      <p>${r.text}</p>
      <button class="say-btn">\uD83D\uDD0A Nghe b\u00e0i \u0111\u1ecdc</button>
    `;
    div.querySelector(".say-btn").addEventListener("click", () => speak(r.text, 0.85));
    readingBox.appendChild(div);
  });

  const totalReadingQ = unit.reading.reduce((sum, r) => sum + r.questions.length, 0);
  document.getElementById("practice-ext-info").textContent =
    `${unit.quizExt.length} c\u00e2u n\u00e2ng cao + ${totalReadingQ} c\u00e2u \u0111\u1ecdc hi\u1ec3u.`;
}

function makeFlashcard(word) {
  const div = document.createElement("div");
  div.className = "flash";
  const ipaHtml = word.ipa ? `<div class="ipa">/${word.ipa}/</div>` : "";
  div.innerHTML = `
    <span class="speak-hint">\uD83D\uDD0A</span>
    <div class="icon">${word.icon || "\uD83D\uDCDD"}</div>
    <div class="en">${word.en}</div>
    ${ipaHtml}
    <div class="vi">${word.vi}</div>
  `;
  div.addEventListener("click", () => {
    div.classList.toggle("flipped");
    speak(word.en, 0.72);
  });
  return div;
}

// ---------- Quiz ----------
function startQuiz(mode) {
  const unit = UNITS.find(u => u.id === state.currentUnitId);
  let list = mode === "core" ? [...unit.quizCore] : [...unit.quizExt];
  if (mode === "ext") {
    // append reading comprehension questions tu tat ca cac bai doc
    unit.reading.forEach(r => r.questions.forEach(q => list.push(q)));
  }
  list = list.map(shuffleQuestionOptions);
  state.quiz = { list, index: 0, correct: 0, mode, unitId: unit.id };
  showScreen("screen-quiz");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const { list, index } = state.quiz;
  if (index >= list.length) { finishQuiz(); return; }
  const q = list[index];
  document.getElementById("quiz-progress").textContent = `C\u00e2u ${index + 1} / ${list.length}`;
  document.getElementById("quiz-question").textContent = q.q;
  const optsBox = document.getElementById("quiz-options");
  optsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerQuiz(i, btn));
    optsBox.appendChild(btn);
  });
}

function answerQuiz(i, btn) {
  const { list, index } = state.quiz;
  const q = list[index];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => b.disabled = true);
  let nextDelay = 900;
  if (i === q.answer) {
    btn.classList.add("correct");
    state.quiz.correct++;
    playCorrectSound();
    const answerText = q.options[q.answer];
    setTimeout(() => speak(answerText, 0.78, detectAnswerLang(answerText)), 1000);
    nextDelay = 2300;
  } else {
    btn.classList.add("wrong");
    allBtns[q.answer].classList.add("correct");
    playWrongSound();
  }
  setTimeout(() => {
    state.quiz.index++;
    renderQuizQuestion();
  }, nextDelay);
}

function finishQuiz() {
  const { list, correct, mode, unitId } = state.quiz;
  const pct = list.length ? correct / list.length : 0;
  let starsEarned = pct >= 0.99 ? 3 : pct >= 0.7 ? 2 : pct >= 0.4 ? 1 : 0;

  const prog = getUnitProgress(unitId);
  if (mode === "core") prog.coreDone = true;
  if (mode === "ext") prog.extDone = true;
  prog.stars = Math.max(prog.stars, starsEarned);
  saveProgress();
  updateStampCount();

  document.getElementById("result-stars").textContent = "\u2B50".repeat(starsEarned) + "\u2606".repeat(3 - starsEarned);
  document.getElementById("result-score").textContent = `\u0110\u00fang ${correct} / ${list.length} c\u00e2u`;
  document.getElementById("result-msg").textContent =
    pct >= 0.99 ? "Xu\u1ea5t s\u1eafc! Em \u0111\u00e3 nh\u1eadn \u0111\u1ee7 3 sao \u2B50" :
    pct >= 0.7 ? "R\u1ea5t t\u1ed1t! C\u1ed1 th\u00eam ch\u00fat n\u1eefa \u0111\u1ec3 \u0111\u1ea1t 3 sao nh\u00e9." :
    pct >= 0.4 ? "Kh\u00e1 \u1ed5n! H\u00e3y \u00f4n l\u1ea1i t\u1eeb v\u1ef1ng r\u1ed3i th\u1eed l\u1ea1i." :
    "\u0110\u1eebng n\u1ea3n! H\u00e3y xem l\u1ea1i t\u1eeb v\u1ef1ng r\u1ed3i luy\u1ec7n t\u1eadp th\u00eam nh\u00e9.";
  showScreen("screen-result");
}

function retryQuiz() {
  startQuiz(state.quiz.mode);
}

function backToUnitFromResult() {
  openUnit(state.currentUnitId);
}

// ---------- Review mode (mixed quiz across 5 units) ----------
function openReview(reviewId) {
  const review = REVIEWS.find(r => r.id === reviewId);
  let pool = [];
  review.units.forEach(uid => {
    const u = UNITS.find(x => x.id === uid);
    pool = pool.concat(u.quizCore.map(q => ({ ...q, unit: u.titleEn })));
  });
  // shuffle and take up to 12
  pool = shuffle(pool).slice(0, 20).map(shuffleQuestionOptions);
  state.quiz = { list: pool, index: 0, correct: 0, mode: "review", reviewId };
  showScreen("screen-quiz");
  renderQuizQuestionReview();
}

function renderQuizQuestionReview() {
  const { list, index } = state.quiz;
  if (index >= list.length) { finishReview(); return; }
  const q = list[index];
  document.getElementById("quiz-progress").textContent = `C\u00e2u ${index + 1} / ${list.length}`;
  document.getElementById("quiz-question").textContent = q.q;
  const optsBox = document.getElementById("quiz-options");
  optsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt";
    btn.textContent = opt;
    btn.addEventListener("click", () => answerReview(i, btn));
    optsBox.appendChild(btn);
  });
}

function answerReview(i, btn) {
  const { list, index } = state.quiz;
  const q = list[index];
  const allBtns = document.querySelectorAll(".quiz-opt");
  allBtns.forEach(b => b.disabled = true);
  let nextDelay = 900;
  if (i === q.answer) {
    btn.classList.add("correct");
    state.quiz.correct++;
    playCorrectSound();
    const answerText = q.options[q.answer];
    setTimeout(() => speak(answerText, 0.78, detectAnswerLang(answerText)), 1000);
    nextDelay = 2300;
  } else {
    btn.classList.add("wrong");
    allBtns[q.answer].classList.add("correct");
    playWrongSound();
  }
  setTimeout(() => { state.quiz.index++; renderQuizQuestionReview(); }, nextDelay);
}

function finishReview() {
  const { list, correct, reviewId } = state.quiz;
  const pct = list.length ? correct / list.length : 0;
  const starsEarned = pct >= 0.9 ? 3 : pct >= 0.6 ? 2 : pct >= 0.3 ? 1 : 0;
  const review = REVIEWS.find(r => r.id === reviewId);
  review.units.forEach(uid => {
    const prog = getUnitProgress(uid);
    prog.stars = Math.max(prog.stars, starsEarned);
  });
  saveProgress();
  updateStampCount();
  document.getElementById("result-stars").textContent = "\u2B50".repeat(starsEarned) + "\u2606".repeat(3 - starsEarned);
  document.getElementById("result-score").textContent = `\u0110\u00fang ${correct} / ${list.length} c\u00e2u`;
  document.getElementById("result-msg").textContent = "\u00d4n t\u1eadp t\u1ed5ng h\u1ee3p ho\u00e0n th\u00e0nh!";
  state.quiz.mode = "review-done";
  showScreen("screen-result");
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Xao tron vi tri cac dap an trong 1 cau hoi, giu dung dap an dung
function shuffleQuestionOptions(q) {
  const idx = q.options.map((_, i) => i);
  const shuffledIdx = shuffle(idx);
  const newOptions = shuffledIdx.map(i => q.options[i]);
  const newAnswer = shuffledIdx.indexOf(q.answer);
  return { ...q, options: newOptions, answer: newAnswer };
}

// ---------- Progress screen ----------
function renderProgress() {
  const container = document.getElementById("progress-list");
  container.innerHTML = "";
  let totalStars = 0;
  UNITS.forEach(u => {
    const prog = getUnitProgress(u.id);
    totalStars += prog.stars;
    const div = document.createElement("div");
    div.className = "node-info";
    div.style.marginBottom = "10px";
    div.innerHTML = `
      <div class="titles">
        <div class="en">${u.icon} ${u.titleEn}</div>
        <div class="vi">${u.titleVi}</div>
      </div>
      <div class="stars-mini">${"\u2B50".repeat(prog.stars)}${"\u2606".repeat(3 - prog.stars)}</div>
    `;
    container.appendChild(div);
  });
  document.getElementById("progress-summary").textContent =
    `T\u1ed5ng: ${totalStars} / ${UNITS.length * 3} sao`;
}

// ============================================================
// BAI TAP (Workbook) - khu vuc rieng, tach biet voi ban do dao
// ============================================================
let currentExerciseGrade = null;

function goExercises() {
  const grade = state.profile ? Number(state.profile.grade) : null;
  currentExerciseGrade = grade;
  renderExercisesList();
  showScreen("screen-exercises");
  setBottomNav("exercises");
}

function renderExercisesList() {
  const container = document.getElementById("exercises-list");
  container.innerHTML = "";
  const data = window.PRACTICE_DATA && window.PRACTICE_DATA[currentExerciseGrade];
  if (!data || data.length === 0) {
    container.innerHTML = '<div class="empty-note">Ch\u01b0a c\u00f3 b\u00e0i t\u1eadp cho kh\u1ed1i l\u1edbp n\u00e0y.</div>';
    return;
  }
  data.forEach(u => {
    const totalItems = u.exercises.reduce((sum, e) => sum + e.items.length, 0);
    const card = document.createElement("div");
    card.className = "exercise-unit-card";
    card.innerHTML = `
      <div>
        <div class="eu-title">${u.titleVi}</div>
        <div class="eu-meta">${u.exercises.length} d\u1ea1ng b\u00e0i \u00b7 ${totalItems} c\u00e2u</div>
      </div>
      <div class="eu-arrow">\u2192</div>
    `;
    card.addEventListener("click", () => openExerciseUnit(u.id));
    container.appendChild(card);
  });
}

function normalizeAnswer(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/[.,!?;:'"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function openExerciseUnit(unitId) {
  const data = window.PRACTICE_DATA[currentExerciseGrade];
  const unit = data.find(u => u.id === unitId);
  if (!unit) return;
  document.getElementById("exercise-unit-title").textContent = unit.titleVi;
  const body = document.getElementById("exercise-body");
  body.innerHTML = "";
  showScreen("screen-exercise-unit");

  unit.exercises.forEach((ex, exIdx) => {
    const block = document.createElement("div");
    block.className = "ex-block";
    let html = `<div class="ex-instruction">${ex.instruction}</div>`;

    if (ex.bank) {
      html += `<div class="ex-bank">${ex.bank.map(w => `<span>${w}</span>`).join("")}</div>`;
    }
    if (ex.passage) {
      html += `<div class="ex-passage">${ex.passage}</div>`;
    }

    if (ex.type === "fill_blank") {
      html += ex.items.map((it, i) => `
        <div class="ex-item" data-answer="${escapeAttr(it.answer)}">
          <div class="ex-prompt">${i + 1}. ${it.prompt}</div>
          <div class="ex-input-row">
            <input type="text" class="ex-input" placeholder="Nh\u1eadp c\u00e2u tr\u1ea3 l\u1eddi..." />
            <span class="ex-check-icon"></span>
          </div>
        </div>
      `).join("");
    } else if (ex.type === "reorder") {
      html += ex.items.map((it, i) => {
        const shuffled = [...it.words].sort(() => Math.random() - 0.5);
        return `
        <div class="ex-item" data-answer="${escapeAttr(it.answer)}">
          <div class="ex-prompt">${i + 1}. Ch\u1ea1m v\u00e0o c\u00e1c t\u1eeb theo \u0111\u00fang th\u1ee9 t\u1ef1:</div>
          <div class="ex-reorder-answer" data-built=""></div>
          <div class="ex-reorder-words">
            ${shuffled.map(w => `<span class="ex-word-chip">${w}</span>`).join("")}
          </div>
          <span class="ex-check-icon"></span>
        </div>
      `;
      }).join("");
    } else if (ex.type === "true_false") {
      html += ex.items.map((it, i) => `
        <div class="ex-item" data-answer="${it.answer}">
          <div class="ex-prompt">${i + 1}. ${it.statement}</div>
          <div class="ex-tf-row">
            <button class="ex-tf-btn" data-val="true">\u0110\u00fang</button>
            <button class="ex-tf-btn" data-val="false">Sai</button>
          </div>
        </div>
      `).join("");
    }

    html += `<button class="btn-primary ex-check-all-btn">Ki\u1ec3m tra</button>`;
    block.innerHTML = html;
    body.appendChild(block);

    // Wire reorder chip clicks
    if (ex.type === "reorder") {
      block.querySelectorAll(".ex-item").forEach(itemEl => {
        const answerBox = itemEl.querySelector(".ex-reorder-answer");
        itemEl.querySelectorAll(".ex-word-chip").forEach(chip => {
          chip.addEventListener("click", () => {
            if (chip.classList.contains("used")) return;
            chip.classList.add("used");
            const built = (answerBox.dataset.built ? answerBox.dataset.built + " " : "") + chip.textContent;
            answerBox.dataset.built = built;
            answerBox.textContent = built;
          });
        });
        answerBox.addEventListener("click", () => {
          answerBox.dataset.built = "";
          answerBox.textContent = "";
          itemEl.querySelectorAll(".ex-word-chip").forEach(c => c.classList.remove("used"));
        });
      });
    }

    // Wire true/false buttons
    if (ex.type === "true_false") {
      block.querySelectorAll(".ex-item").forEach(itemEl => {
        itemEl.querySelectorAll(".ex-tf-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            itemEl.querySelectorAll(".ex-tf-btn").forEach(b => {
              b.classList.remove("selected-true", "selected-false", "correct", "wrong");
            });
            btn.classList.add(btn.dataset.val === "true" ? "selected-true" : "selected-false");
            itemEl.dataset.chosen = btn.dataset.val;
          });
        });
      });
    }

    // Wire check-all button
    const checkBtn = block.querySelector(".ex-check-all-btn");
    checkBtn.addEventListener("click", () => checkExerciseBlock(block, ex.type));
  });
}

function escapeAttr(s) {
  return String(s).replace(/"/g, "&quot;");
}

function checkExerciseBlock(block, type) {
  let correctCount = 0;
  const items = block.querySelectorAll(".ex-item");
  items.forEach(itemEl => {
    if (type === "fill_blank") {
      const input = itemEl.querySelector(".ex-input");
      const icon = itemEl.querySelector(".ex-check-icon");
      const answer = itemEl.dataset.answer;
      const ok = normalizeAnswer(input.value) === normalizeAnswer(answer);
      input.classList.remove("correct", "wrong");
      input.classList.add(ok ? "correct" : "wrong");
      icon.textContent = ok ? "\u2705" : "\u274c";
      if (!ok) input.title = "\u0110\u00e1p \u00e1n: " + answer;
      if (ok) correctCount++;
    } else if (type === "reorder") {
      const answerBox = itemEl.querySelector(".ex-reorder-answer");
      const icon = itemEl.querySelector(".ex-check-icon");
      const answer = itemEl.dataset.answer;
      const ok = normalizeAnswer(answerBox.textContent) === normalizeAnswer(answer);
      answerBox.style.borderColor = ok ? "#4CAF50" : "#E85D45";
      icon.textContent = ok ? "\u2705" : "\u274c \u0110\u00e1p \u00e1n: " + answer;
      if (ok) correctCount++;
    } else if (type === "true_false") {
      const chosen = itemEl.dataset.chosen;
      const answer = itemEl.dataset.answer === "true";
      const btns = itemEl.querySelectorAll(".ex-tf-btn");
      const ok = chosen !== undefined && (chosen === "true") === answer;
      btns.forEach(b => {
        b.classList.remove("correct", "wrong");
        const isAnswerBtn = (b.dataset.val === "true") === answer;
        if (chosen !== undefined) {
          if (b.dataset.val === chosen) b.classList.add(ok ? "correct" : "wrong");
          if (!ok && isAnswerBtn) b.classList.add("correct");
        }
      });
      if (ok) correctCount++;
    }
  });

  let banner = block.querySelector(".ex-score-banner");
  if (!banner) {
    banner = document.createElement("div");
    banner.className = "ex-score-banner";
    block.insertBefore(banner, block.firstChild);
  }
  banner.textContent = `\u0110\u00fang ${correctCount} / ${items.length} c\u00e2u`;
  if (correctCount === items.length) playCorrectSound();
}

document.addEventListener("DOMContentLoaded", init);
