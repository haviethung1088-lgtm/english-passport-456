// ============================================================
// DU LIEU LOP 5 - Tieng Anh Global Success
// ============================================================

const UNITS_5 = [
  {
    id: "starter", group: 1, icon: "👋",
    titleEn: "Starter: Back to school", titleVi: "Khởi động: Trở lại trường học",
    core: [
      { en: "back to school", vi: "trở lại trường học", icon: "🏫", ipa: "bæk tɪ skul" },
      { en: "classmate", vi: "bạn cùng lớp", icon: "👫", ipa: "ˈklæsˌmeɪt" },
      { en: "last summer", vi: "mùa hè vừa qua", icon: "☀️", ipa: "læst ˈsəmər" },
      { en: "guessing game", vi: "trò chơi đoán", icon: "❓", ipa: "ˈgɛsɪŋ geɪm" },
      { en: "Were you in ... ?", vi: "Bạn đã ở ... phải không?", icon: "🗺️", ipa: "wər ju ɪn  " },
      { en: "Yes, I was.", vi: "Vâng, đúng vậy.", icon: "✅", ipa: "jɛs, aɪ wɑz." },
      { en: "No, I wasn't.", vi: "Không, không phải.", icon: "❌", ipa: "noʊ, aɪ ˈwəzənt." },
      { en: "Let's play.", vi: "Cùng chơi nào.", icon: "🎮", ipa: "lɛts pleɪ." }
    ],
    patterns: [
      { en: "Were you in Ha Long Bay last summer?", vi: "Mùa hè trước bạn đã ở Vịnh Hạ Long à?" },
      { en: "Yes, I was. I was in Sa Pa.", vi: "Vâng, đúng vậy. Tớ đã ở Sa Pa." },
      { en: "What was the weather like there?", vi: "Thời tiết ở đó như thế nào?" },
      { en: "Do you want to play a game?", vi: "Bạn có muốn chơi trò chơi không?" }
    ],
    ext: [
      { en: "welcome back", vi: "chào mừng trở lại", icon: "🎉", ipa: "ˈwɛlkəm bæk" },
      { en: "holiday", vi: "kỳ nghỉ", icon: "🏖️", ipa: "ˈhɑlɪˌdeɪ" },
      { en: "instruction", vi: "chỉ dẫn", icon: "📋", ipa: "ˌɪnˈstrəkʃən" },
      { en: "chant", vi: "đồng dao, hát vè", icon: "🎶", ipa: "ʧænt" },
      { en: "guess", vi: "đoán", icon: "🤔", ipa: "gɛs" },
      { en: "together", vi: "cùng nhau", icon: "🤝", ipa: "təˈgɛðər" }
    ],
    grammar: [
      { title: "Was/were để hỏi nơi chốn trong quá khứ", explain: "'Were you in...?' dùng was/were vì đang nói về quá khứ.", example: "Were you in Sa Pa? - Yes, I was." },
      { title: "Let's + động từ nguyên thể", explain: "'Let's' dùng để rủ ai đó cùng làm gì, theo sau là động từ nguyên thể.", example: "Let's play a game! Let's sing a song!" }
    ],
    reading: [
      { title: "Back to school", text: "Hi friends! We are back to school. I missed you all during the summer holiday.", questions: [
        { q: "What season just ended?", options: ["Summer holiday", "Winter holiday", "Spring"], answer: 0 },
        { q: "How does the writer feel?", options: ["Happy to see friends", "Sad", "Tired"], answer: 0 }
      ] },
      { title: "My last summer", text: "Last summer, I was in Ha Long Bay with my family. The weather was sunny and warm.", questions: [
        { q: "Where was the writer last summer?", options: ["Ha Long Bay", "Sa Pa", "Hue"], answer: 0 },
        { q: "What was the weather like?", options: ["Sunny and warm", "Rainy and cold", "Windy"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'last summer' nghĩa là gì?", options: ["mùa hè vừa qua", "mùa đông", "kỳ nghỉ Tết"], answer: 0 },
      { q: "Câu trả lời đúng cho 'Were you...?' khi đúng là:", options: ["Yes, I was.", "Yes, I am.", "Yes, I do."], answer: 0 },
      { q: "'classmate' nghĩa là gì?", options: ["bạn cùng lớp", "Cùng chơi nào.", "Bạn đã ở ... phải không?"], answer: 0 },
      { q: "'trò chơi đoán' tiếng Anh là gì?", options: ["guessing game", "back to school", "last summer"], answer: 0 },
      { q: "'No, I wasn't.' nghĩa là gì?", options: ["Không, không phải.", "trở lại trường học", "Vâng, đúng vậy."], answer: 0 },
      { q: "'Cùng chơi nào.' tiếng Anh là gì?", options: ["Let's play.", "last summer", "back to school"], answer: 0 },
      { q: "'Bạn đã ở ... phải không?' tiếng Anh là gì?", options: ["Were you in ... ?", "No, I wasn't.", "Let's play."], answer: 0 },
      { q: "'back to school' nghĩa là gì?", options: ["trở lại trường học", "Bạn đã ở ... phải không?", "Cùng chơi nào."], answer: 0 }
    ],
    quizExt: [
      { q: "'welcome back' nghĩa là gì?", options: ["chào mừng trở lại", "tạm biệt", "xin lỗi"], answer: 0 },
      { q: "'chant' nghĩa là gì?", options: ["đồng dao, hát vè", "đoán", "kỳ nghỉ"], answer: 0 },
      { q: "'chỉ dẫn' tiếng Anh là gì?", options: ["instruction", "chant", "guess"], answer: 0 },
      { q: "'đoán' tiếng Anh là gì?", options: ["guess", "chant", "holiday"], answer: 0 },
      { q: "'holiday' nghĩa là gì?", options: ["kỳ nghỉ", "chỉ dẫn", "chào mừng trở lại"], answer: 0 },
      { q: "'cùng nhau' tiếng Anh là gì?", options: ["together", "holiday", "instruction"], answer: 0 }
    ],
  },
  {
    id: "u1", group: 1, icon: "🙋",
    titleEn: "Unit 1: All about me!", titleVi: "Tất cả về tôi!",
    core: [
      { en: "city", vi: "thành phố", icon: "🏙️", ipa: "ˈsɪti" },
      { en: "class", vi: "lớp học", icon: "🏫", ipa: "klæs" },
      { en: "countryside", vi: "vùng quê", icon: "🌾", ipa: "ˈkəntriˌsaɪd" },
      { en: "dolphin", vi: "cá heo", icon: "🐬", ipa: "ˈdɑlfən" },
      { en: "pink", vi: "màu hồng", icon: "💗", ipa: "pɪŋk" },
      { en: "sandwich", vi: "bánh sandwich", icon: "🥪", ipa: "ˈsænwɪʧ" },
      { en: "table tennis", vi: "bóng bàn", icon: "🏓", ipa: "ˈteɪbəl ˈtɛnɪs" }
    ],
    patterns: [
      { en: "Can you tell me about yourself?", vi: "Bạn kể cho tớ nghe về bản thân được không?" },
      { en: "I'm in Class 5B. I live in the city.", vi: "Tớ học lớp 5B. Tớ sống ở thành phố." },
      { en: "What's your favourite animal?", vi: "Con vật yêu thích của bạn là gì?" },
      { en: "It's the dolphin.", vi: "Đó là cá heo." }
    ],
    ext: [
      { en: "hobby", vi: "sở thích", icon: "🎯", ipa: "ˈhɑbi" },
      { en: "favourite colour", vi: "màu yêu thích", icon: "🎨", ipa: "ˈfeɪvərɪt ˈkələr" },
      { en: "favourite food", vi: "món ăn yêu thích", icon: "🍽️", ipa: "ˈfeɪvərɪt fud" },
      { en: "introduce", vi: "giới thiệu", icon: "🙋", ipa: "ˌɪntrəˈdus" },
      { en: "classmate", vi: "bạn cùng lớp", icon: "👫", ipa: "ˈklæsˌmeɪt" },
      { en: "myself", vi: "bản thân tôi", icon: "🪞", ipa: "ˌmaɪˈsɛlf" }
    ],
    grammar: [
      { title: "'live in the + nơi chốn'", explain: "Dùng 'in the city/countryside' để nói nơi mình sống.", example: "I live in the countryside." },
      { title: "Tính từ sở hữu 'my/your'", explain: "'My' đi với 'I', 'your' đi với 'you' khi nói về sở thích, tên...", example: "My favourite colour is pink." }
    ],
    reading: [
      { title: "Introducing Lan", text: "Hi, I'm Lan. I'm in Class 5A. I live in the city. My favourite animal is the dolphin.", questions: [
        { q: "What class is Lan in?", options: ["5A", "5B", "5C"], answer: 0 },
        { q: "What is Lan's favourite animal?", options: ["The dolphin", "The cat", "The fox"], answer: 0 }
      ] },
      { title: "Ben's favourites", text: "Ben likes table tennis. His favourite colour is pink and his favourite food is sandwiches.", questions: [
        { q: "What sport does Ben like?", options: ["Table tennis", "Football", "Swimming"], answer: 0 },
        { q: "What is Ben's favourite food?", options: ["Sandwiches", "Pizza", "Rice"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'countryside' nghĩa là gì?", options: ["vùng quê", "thành phố", "lớp học"], answer: 0 },
      { q: "'dolphin' nghĩa là gì?", options: ["cá heo", "cá mập", "cá voi"], answer: 0 },
      { q: "'city' nghĩa là gì?", options: ["thành phố", "màu hồng", "bánh sandwich"], answer: 0 },
      { q: "'vùng quê' tiếng Anh là gì?", options: ["countryside", "dolphin", "table tennis"], answer: 0 },
      { q: "'lớp học' tiếng Anh là gì?", options: ["class", "table tennis", "pink"], answer: 0 },
      { q: "'sandwich' nghĩa là gì?", options: ["bánh sandwich", "vùng quê", "lớp học"], answer: 0 },
      { q: "'màu hồng' tiếng Anh là gì?", options: ["pink", "class", "countryside"], answer: 0 }
    ],
    quizExt: [
      { q: "'introduce' nghĩa là gì?", options: ["giới thiệu", "sở thích", "bản thân"], answer: 0 },
      { q: "'favourite colour' nghĩa là gì?", options: ["màu yêu thích", "giới thiệu", "bạn cùng lớp"], answer: 0 },
      { q: "'món ăn yêu thích' tiếng Anh là gì?", options: ["favourite food", "introduce", "myself"], answer: 0 },
      { q: "'hobby' nghĩa là gì?", options: ["sở thích", "bản thân tôi", "bạn cùng lớp"], answer: 0 },
      { q: "'bạn cùng lớp' tiếng Anh là gì?", options: ["classmate", "hobby", "myself"], answer: 0 },
      { q: "'myself' nghĩa là gì?", options: ["bản thân tôi", "màu yêu thích", "sở thích"], answer: 0 },
      { q: "'giới thiệu' tiếng Anh là gì?", options: ["introduce", "favourite food", "myself"], answer: 0 }
    ],
  },
  {
    id: "u2", group: 1, icon: "🏠",
    titleEn: "Unit 2: Our homes", titleVi: "Ngôi nhà của chúng em",
    core: [
      { en: "building", vi: "toà nhà", icon: "🏢", ipa: "ˈbɪldɪŋ" },
      { en: "flat", vi: "căn hộ", icon: "🏬", ipa: "flæt" },
      { en: "house", vi: "ngôi nhà", icon: "🏠", ipa: "haʊs" },
      { en: "tower", vi: "toà tháp", icon: "🗼", ipa: "taʊər" },
      { en: "twenty-five", vi: "hai mươi lăm", icon: "2️⃣5️⃣", ipa: "tˈwɛntiˌfaɪv" },
      { en: "fifty-eight", vi: "năm mươi tám", icon: "5️⃣8️⃣", ipa: "ˌfɪfti ˈeɪt" },
      { en: "ninety-five", vi: "chín mươi lăm", icon: "9️⃣5️⃣", ipa: "ˌnaɪnti ˈfaɪv" },
      { en: "one hundred and sixteen", vi: "một trăm mười sáu", icon: "1️⃣1️⃣6️⃣", ipa: "wən ˈhənərd ənd ˈsɪkˈstin" }
    ],
    patterns: [
      { en: "Do you live in this building?", vi: "Bạn có sống ở toà nhà này không?" },
      { en: "Yes, I do. / No, I don't.", vi: "Vâng, có. / Không, không phải." },
      { en: "What's your address?", vi: "Địa chỉ của bạn là gì?" },
      { en: "It's 58 Tran Phu Street.", vi: "Địa chỉ là 58 phố Trần Phú." }
    ],
    ext: [
      { en: "villa", vi: "biệt thự", icon: "🏡", ipa: "ˈvɪlə" },
      { en: "floor number", vi: "số tầng", icon: "🔢", ipa: "flɔr ˈnəmbər" },
      { en: "lift", vi: "thang máy", icon: "🛗", ipa: "lɪft" },
      { en: "balcony", vi: "ban công", icon: "🌇", ipa: "ˈbælkəni" },
      { en: "neighbour", vi: "hàng xóm", icon: "🧑‍🤝‍🧑", ipa: "ˈneɪbər" },
      { en: "move house", vi: "chuyển nhà", icon: "📦", ipa: "muv haʊs" }
    ],
    grammar: [
      { title: "Hỏi địa chỉ với 'What's your address?'", explain: "Trả lời bằng số nhà + tên phố.", example: "What's your address? - It's 25 Le Loi Street." },
      { title: "Số đếm từ 20-100+", explain: "Ghép chục + đơn vị bằng dấu gạch nối.", example: "twenty-five, fifty-eight, ninety-five." }
    ],
    reading: [
      { title: "My address", text: "I live at 95 Hai Ba Trung Street. My house is near a tall tower.", questions: [
        { q: "What is the writer's address?", options: ["95 Hai Ba Trung Street", "58 Hai Ba Trung Street", "25 Hai Ba Trung Street"], answer: 0 },
        { q: "What is near the house?", options: ["A tall tower", "A river", "A park"], answer: 0 }
      ] },
      { title: "Living in a flat", text: "Nam lives in a flat on the tenth floor. He likes his flat because it has a nice view.", questions: [
        { q: "Where does Nam live?", options: ["In a flat", "In a house", "In a villa"], answer: 0 },
        { q: "Why does he like his flat?", options: ["It has a nice view", "It's big", "It's cheap"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'flat' nghĩa là gì?", options: ["căn hộ", "ngôi nhà", "toà tháp"], answer: 0 },
      { q: "'ninety-five' nghĩa là gì?", options: ["chín mươi lăm", "năm mươi chín", "chín mươi"], answer: 0 },
      { q: "'one hundred and sixteen' nghĩa là gì?", options: ["một trăm mười sáu", "toà nhà", "toà tháp"], answer: 0 },
      { q: "'hai mươi lăm' tiếng Anh là gì?", options: ["twenty-five", "flat", "house"], answer: 0 },
      { q: "'building' nghĩa là gì?", options: ["toà nhà", "hai mươi lăm", "căn hộ"], answer: 0 },
      { q: "'căn hộ' tiếng Anh là gì?", options: ["flat", "ninety-five", "house"], answer: 0 },
      { q: "'fifty-eight' nghĩa là gì?", options: ["năm mươi tám", "ngôi nhà", "chín mươi lăm"], answer: 0 },
      { q: "'ngôi nhà' tiếng Anh là gì?", options: ["house", "building", "twenty-five"], answer: 0 }
    ],
    quizExt: [
      { q: "'balcony' nghĩa là gì?", options: ["ban công", "thang máy", "hàng xóm"], answer: 0 },
      { q: "'lift' nghĩa là gì?", options: ["thang máy", "số tầng", "hàng xóm"], answer: 0 },
      { q: "'hàng xóm' tiếng Anh là gì?", options: ["neighbour", "balcony", "move house"], answer: 0 },
      { q: "'villa' nghĩa là gì?", options: ["biệt thự", "số tầng", "thang máy"], answer: 0 },
      { q: "'chuyển nhà' tiếng Anh là gì?", options: ["move house", "floor number", "neighbour"], answer: 0 },
      { q: "'số tầng' tiếng Anh là gì?", options: ["floor number", "lift", "neighbour"], answer: 0 }
    ],
  },
  {
    id: "u3", group: 1, icon: "🌏",
    titleEn: "Unit 3: My foreign friends", titleVi: "Những người bạn nước ngoài của tôi",
    core: [
      { en: "American", vi: "người Mỹ", icon: "🇺🇸", ipa: "əˈmɛrɪkən" },
      { en: "Australian", vi: "người Úc", icon: "🇦🇺", ipa: "ɔˈstreɪljən" },
      { en: "Japanese", vi: "người Nhật", icon: "🇯🇵", ipa: "ˌʤæpəˈniz" },
      { en: "Malaysian", vi: "người Malaysia", icon: "🇲🇾", ipa: "məˈleɪʒən" },
      { en: "active", vi: "năng động", icon: "⚡", ipa: "ˈæktɪv" },
      { en: "clever", vi: "thông minh", icon: "🧠", ipa: "ˈklɛvər" },
      { en: "friendly", vi: "thân thiện", icon: "😊", ipa: "ˈfrɛndli" },
      { en: "helpful", vi: "hay giúp đỡ", icon: "🤝", ipa: "ˈhɛlpfəl" }
    ],
    patterns: [
      { en: "What nationality is he?", vi: "Cậu ấy quốc tịch gì?" },
      { en: "He's Japanese.", vi: "Cậu ấy là người Nhật." },
      { en: "What's she like?", vi: "Cô ấy là người như thế nào?" },
      { en: "She's clever and friendly.", vi: "Cô ấy thông minh và thân thiện." }
    ],
    ext: [
      { en: "British", vi: "người Anh", icon: "🇬🇧", ipa: "ˈbrɪtɪʃ" },
      { en: "Vietnamese (person)", vi: "người Việt Nam", icon: "🇻🇳", ipa: "viˌɛtnɑˈmis (ˈpərsən)" },
      { en: "kind", vi: "tốt bụng", icon: "💛", ipa: "kaɪnd" },
      { en: "shy", vi: "nhút nhát", icon: "🙈", ipa: "ʃaɪ" },
      { en: "confident", vi: "tự tin", icon: "💪", ipa: "ˈkɑnfədənt" },
      { en: "polite", vi: "lịch sự", icon: "🙏", ipa: "pəˈlaɪt" }
    ],
    grammar: [
      { title: "Tính từ chỉ quốc tịch viết hoa", explain: "Tính từ quốc tịch (American, Japanese...) luôn viết hoa chữ đầu.", example: "He's Malaysian. She's American." },
      { title: "'What...like?' hỏi về tính cách", explain: "'What's he/she like?' hỏi về đặc điểm tính cách, không phải ngoại hình.", example: "What's she like? - She's helpful." }
    ],
    reading: [
      { title: "My pen pal", text: "My pen pal is Japanese. He's clever and active. He likes playing football.", questions: [
        { q: "What nationality is the pen pal?", options: ["Japanese", "American", "Australian"], answer: 0 },
        { q: "What is he like?", options: ["Clever and active", "Shy and quiet", "Old and slow"], answer: 0 }
      ] },
      { title: "A helpful friend", text: "Mia is Australian. She's very helpful and friendly. She always helps her classmates.", questions: [
        { q: "What nationality is Mia?", options: ["Australian", "American", "Malaysian"], answer: 0 },
        { q: "What is Mia like?", options: ["Helpful and friendly", "Shy and lazy", "Rude"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'friendly' nghĩa là gì?", options: ["thân thiện", "nhút nhát", "lười biếng"], answer: 0 },
      { q: "'clever' nghĩa là gì?", options: ["thông minh", "tốt bụng", "tự tin"], answer: 0 },
      { q: "'Japanese' nghĩa là gì?", options: ["người Nhật", "hay giúp đỡ", "người Mỹ"], answer: 0 },
      { q: "'thông minh' tiếng Anh là gì?", options: ["clever", "helpful", "active"], answer: 0 },
      { q: "'American' nghĩa là gì?", options: ["người Mỹ", "người Nhật", "người Úc"], answer: 0 },
      { q: "'thân thiện' tiếng Anh là gì?", options: ["friendly", "American", "active"], answer: 0 },
      { q: "'active' nghĩa là gì?", options: ["năng động", "hay giúp đỡ", "người Malaysia"], answer: 0 },
      { q: "'người Úc' tiếng Anh là gì?", options: ["Australian", "helpful", "Japanese"], answer: 0 }
    ],
    quizExt: [
      { q: "'confident' nghĩa là gì?", options: ["tự tin", "lịch sự", "nhút nhát"], answer: 0 },
      { q: "'polite' nghĩa là gì?", options: ["lịch sự", "tốt bụng", "người Anh"], answer: 0 },
      { q: "'người Anh' tiếng Anh là gì?", options: ["British", "polite", "shy"], answer: 0 },
      { q: "'shy' nghĩa là gì?", options: ["nhút nhát", "tự tin", "người Việt Nam"], answer: 0 },
      { q: "'tốt bụng' tiếng Anh là gì?", options: ["kind", "shy", "confident"], answer: 0 },
      { q: "'người Việt Nam' tiếng Anh là gì?", options: ["Vietnamese (person)", "British", "shy"], answer: 0 }
    ],
  },
  {
    id: "u4", group: 1, icon: "🎻",
    titleEn: "Unit 4: Our free-time activities", titleVi: "Hoạt động thời gian rảnh của chúng em",
    core: [
      { en: "go for a walk", vi: "đi dạo", icon: "🚶", ipa: "goʊ fɔr ə wɔk" },
      { en: "play the violin", vi: "chơi đàn violin", icon: "🎻", ipa: "pleɪ ðə ˌvaɪəˈlɪn" },
      { en: "surf the Internet", vi: "lướt Internet", icon: "💻", ipa: "sɜrf ði ˈɪntərnɛt" },
      { en: "water the flowers", vi: "tưới hoa", icon: "🌸", ipa: "ˈwɔtər ðə ˈflaʊərz" },
      { en: "always", vi: "luôn luôn", icon: "🔁", ipa: "ˈɔlˌweɪz" },
      { en: "often", vi: "thường xuyên", icon: "⏱️", ipa: "ˈɔfən" },
      { en: "sometimes", vi: "thỉnh thoảng", icon: "🔀", ipa: "ˈsəmˌtaɪmz" },
      { en: "usually", vi: "thường thì", icon: "📆", ipa: "ˈjuʒəwəli" }
    ],
    patterns: [
      { en: "What do you like doing in your free time?", vi: "Bạn thích làm gì lúc rảnh?" },
      { en: "I like playing the violin.", vi: "Tớ thích chơi đàn violin." },
      { en: "What do you do at the weekend?", vi: "Bạn làm gì vào cuối tuần?" },
      { en: "I usually go for a walk.", vi: "Tớ thường đi dạo." }
    ],
    ext: [
      { en: "read comics", vi: "đọc truyện tranh", icon: "📚", ipa: "rɛd ˈkɑmɪks" },
      { en: "play board games", vi: "chơi cờ/board game", icon: "🎲", ipa: "pleɪ bɔrd geɪmz" },
      { en: "garden", vi: "làm vườn", icon: "🌱", ipa: "ˈgɑrdən" },
      { en: "paint", vi: "vẽ tranh màu", icon: "🎨", ipa: "peɪnt" },
      { en: "never", vi: "không bao giờ", icon: "🚫", ipa: "ˈnɛvər" },
      { en: "rarely", vi: "hiếm khi", icon: "🕰️", ipa: "ˈrɛrli" }
    ],
    grammar: [
      { title: "Trạng từ tần suất", explain: "'always, often, usually, sometimes, never' đứng trước động từ thường.", example: "I always water the flowers." },
      { title: "'like + V-ing'", explain: "Sau 'like' khi nói về sở thích, động từ thêm '-ing'.", example: "I like playing the violin." }
    ],
    reading: [
      { title: "My free time", text: "In my free time, I usually surf the Internet. I sometimes go for a walk with my dog.", questions: [
        { q: "What does the writer usually do?", options: ["Surf the Internet", "Play the violin", "Water the flowers"], answer: 0 },
        { q: "What does the writer sometimes do?", options: ["Go for a walk", "Play games", "Read books"], answer: 0 }
      ] },
      { title: "Weekend activities", text: "At the weekend, Nga often plays the violin. She always waters the flowers in the garden first.", questions: [
        { q: "What does Nga often do?", options: ["Play the violin", "Surf the Internet", "Go for a walk"], answer: 0 },
        { q: "What does she always do first?", options: ["Water the flowers", "Play the violin", "Read a book"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'often' nghĩa là gì?", options: ["thường xuyên", "không bao giờ", "luôn luôn"], answer: 0 },
      { q: "'surf the Internet' nghĩa là gì?", options: ["lướt Internet", "chơi đàn violin", "đi dạo"], answer: 0 },
      { q: "'usually' nghĩa là gì?", options: ["thường thì", "tưới hoa", "thỉnh thoảng"], answer: 0 },
      { q: "'luôn luôn' tiếng Anh là gì?", options: ["always", "surf the Internet", "water the flowers"], answer: 0 },
      { q: "'go for a walk' nghĩa là gì?", options: ["đi dạo", "chơi đàn violin", "lướt Internet"], answer: 0 },
      { q: "'tưới hoa' tiếng Anh là gì?", options: ["water the flowers", "usually", "go for a walk"], answer: 0 },
      { q: "'sometimes' nghĩa là gì?", options: ["thỉnh thoảng", "lướt Internet", "đi dạo"], answer: 0 },
      { q: "'lướt Internet' tiếng Anh là gì?", options: ["surf the Internet", "play the violin", "sometimes"], answer: 0 }
    ],
    quizExt: [
      { q: "'rarely' nghĩa là gì?", options: ["hiếm khi", "luôn luôn", "thường thì"], answer: 0 },
      { q: "'không bao giờ' tiếng Anh là gì?", options: ["never", "garden", "read comics"], answer: 0 },
      { q: "'read comics' nghĩa là gì?", options: ["đọc truyện tranh", "làm vườn", "vẽ tranh màu"], answer: 0 },
      { q: "'chơi cờ/board game' tiếng Anh là gì?", options: ["play board games", "garden", "rarely"], answer: 0 },
      { q: "'paint' nghĩa là gì?", options: ["vẽ tranh màu", "chơi cờ/board game", "hiếm khi"], answer: 0 },
      { q: "'làm vườn' tiếng Anh là gì?", options: ["garden", "never", "read comics"], answer: 0 }
    ],
  },
  {
    id: "u5", group: 1, icon: "🚒",
    titleEn: "Unit 5: My future job", titleVi: "Nghề nghiệp tương lai của tôi",
    core: [
      { en: "firefighter", vi: "lính cứu hoả", icon: "🚒", ipa: "ˈfaɪrˌfaɪtər" },
      { en: "gardener", vi: "người làm vườn", icon: "🧑‍🌾", ipa: "ˈgɑrdənər" },
      { en: "reporter", vi: "phóng viên", icon: "🎙️", ipa: "rɪˈpɔrtər" },
      { en: "writer", vi: "nhà văn", icon: "✍️", ipa: "ˈraɪtər" },
      { en: "grow flowers", vi: "trồng hoa", icon: "🌷", ipa: "groʊ ˈflaʊərz" },
      { en: "report the news", vi: "đưa tin", icon: "📰", ipa: "rɪˈpɔrt ðə nuz" },
      { en: "teach children", vi: "dạy trẻ em", icon: "🧑‍🏫", ipa: "titʃ ˈtʃɪldrən" },
      { en: "write stories", vi: "viết truyện", icon: "📖", ipa: "raɪt ˈstɔriz" }
    ],
    patterns: [
      { en: "What would you like to be in the future?", vi: "Sau này bạn muốn trở thành gì?" },
      { en: "I'd like to be a writer.", vi: "Tớ muốn trở thành nhà văn." },
      { en: "Why would you like to be a writer?", vi: "Tại sao bạn muốn trở thành nhà văn?" },
      { en: "Because I'd like to write stories.", vi: "Vì tớ muốn viết truyện." }
    ],
    ext: [
      { en: "dream", vi: "ước mơ", icon: "💭", ipa: "drim" },
      { en: "pilot", vi: "phi công", icon: "✈️", ipa: "ˈpaɪlət" },
      { en: "singer", vi: "ca sĩ", icon: "🎤", ipa: "ˈsɪŋər" },
      { en: "scientist", vi: "nhà khoa học", icon: "🧑‍🔬", ipa: "ˈsaɪəntɪst" },
      { en: "vet", vi: "bác sĩ thú y", icon: "🐾", ipa: "vɛt" },
      { en: "astronaut", vi: "phi hành gia", icon: "🧑‍🚀", ipa: "ˈæstrəˌnɑt" }
    ],
    grammar: [
      { title: "'would like to be' diễn tả ước mơ", explain: "Cấu trúc lịch sự hơn 'want to be' khi nói về ước mơ nghề nghiệp.", example: "I'd like to be a firefighter." },
      { title: "Hỏi lý do với 'Why would you...?'", explain: "Trả lời bằng 'Because I'd like to...'.", example: "Why would you like to be a reporter? Because I'd like to report the news." }
    ],
    reading: [
      { title: "Future dreams", text: "Minh would like to be a firefighter. He wants to help people. Lan would like to be a writer.", questions: [
        { q: "What job does Minh want?", options: ["Firefighter", "Writer", "Gardener"], answer: 0 },
        { q: "What job does Lan want?", options: ["Writer", "Reporter", "Gardener"], answer: 0 }
      ] },
      { title: "A future reporter", text: "I would like to be a reporter because I want to report the news around the world.", questions: [
        { q: "What job does the writer want?", options: ["Reporter", "Firefighter", "Writer"], answer: 0 },
        { q: "Why does the writer want this job?", options: ["To report the news", "To grow flowers", "To teach children"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'firefighter' nghĩa là gì?", options: ["lính cứu hoả", "phóng viên", "nhà văn"], answer: 0 },
      { q: "'write stories' nghĩa là gì?", options: ["viết truyện", "đưa tin", "dạy trẻ em"], answer: 0 },
      { q: "'phóng viên' tiếng Anh là gì?", options: ["reporter", "report the news", "grow flowers"], answer: 0 },
      { q: "'gardener' nghĩa là gì?", options: ["người làm vườn", "đưa tin", "dạy trẻ em"], answer: 0 },
      { q: "'viết truyện' tiếng Anh là gì?", options: ["write stories", "writer", "reporter"], answer: 0 },
      { q: "'grow flowers' nghĩa là gì?", options: ["trồng hoa", "phóng viên", "người làm vườn"], answer: 0 },
      { q: "'đưa tin' tiếng Anh là gì?", options: ["report the news", "gardener", "firefighter"], answer: 0 },
      { q: "'teach children' nghĩa là gì?", options: ["dạy trẻ em", "phóng viên", "người làm vườn"], answer: 0 }
    ],
    quizExt: [
      { q: "'astronaut' nghĩa là gì?", options: ["phi hành gia", "phi công", "bác sĩ thú y"], answer: 0 },
      { q: "'singer' nghĩa là gì?", options: ["ca sĩ", "nhà khoa học", "ước mơ"], answer: 0 },
      { q: "'nhà khoa học' tiếng Anh là gì?", options: ["scientist", "vet", "singer"], answer: 0 },
      { q: "'dream' nghĩa là gì?", options: ["ước mơ", "ca sĩ", "phi công"], answer: 0 },
      { q: "'bác sĩ thú y' tiếng Anh là gì?", options: ["vet", "astronaut", "singer"], answer: 0 },
      { q: "'phi công' tiếng Anh là gì?", options: ["pilot", "singer", "astronaut"], answer: 0 }
    ],
  },
  {
    id: "u6", group: 2, icon: "🏫",
    titleEn: "Unit 6: Our school rooms", titleVi: "Các phòng trong trường em",
    core: [
      { en: "first floor", vi: "tầng một", icon: "1️⃣", ipa: "fɜrst flɔr" },
      { en: "ground floor", vi: "tầng trệt", icon: "🏢", ipa: "graʊnd flɔr" },
      { en: "second floor", vi: "tầng hai", icon: "2️⃣", ipa: "ˈsɛkənd flɔr" },
      { en: "third floor", vi: "tầng ba", icon: "3️⃣", ipa: "θɜrd flɔr" },
      { en: "go along", vi: "đi dọc theo", icon: "➡️", ipa: "goʊ əˈlɔŋ" },
      { en: "go downstairs", vi: "đi xuống cầu thang", icon: "⬇️", ipa: "goʊ ˌdaʊnˈstɛrz" },
      { en: "go past", vi: "đi qua", icon: "↗️", ipa: "goʊ pæst" },
      { en: "go upstairs", vi: "đi lên cầu thang", icon: "⬆️", ipa: "goʊ ˌʌpˈstɛrz" }
    ],
    patterns: [
      { en: "Where's the computer room?", vi: "Phòng máy tính ở đâu?" },
      { en: "It's on the second floor.", vi: "Nó ở tầng hai." },
      { en: "Could you tell me the way to the computer room, please?", vi: "Bạn chỉ đường tới phòng máy tính giúp tớ được không?" }
    ],
    ext: [
      { en: "staff room", vi: "phòng giáo viên", icon: "🧑‍🏫", ipa: "stæf rum" },
      { en: "music room", vi: "phòng âm nhạc", icon: "🎵", ipa: "mˈjuzɪk rum" },
      { en: "art room", vi: "phòng mỹ thuật", icon: "🎨", ipa: "ɑrt rum" },
      { en: "staircase", vi: "cầu thang", icon: "🪜", ipa: "ˈstɛrˌkeɪs" },
      { en: "corridor", vi: "hành lang", icon: "🚶", ipa: "ˈkɔrɪdər" },
      { en: "headteacher's office", vi: "phòng hiệu trưởng", icon: "🚪", ipa: "ˌhɛdˈtitʃərz ˈɔfɪs" }
    ],
    grammar: [
      { title: "Giới từ 'on' + tầng", explain: "Dùng 'on the + tầng' để nói vị trí phòng theo tầng.", example: "The library is on the first floor." },
      { title: "Chỉ đường lịch sự với 'Could you...?'", explain: "'Could you tell me the way to...?' là cách hỏi đường lịch sự.", example: "Could you tell me the way to the music room, please?" }
    ],
    reading: [
      { title: "Finding the library", text: "The library is on the third floor. Go upstairs and go along the corridor.", questions: [
        { q: "Where is the library?", options: ["Third floor", "First floor", "Ground floor"], answer: 0 },
        { q: "What do you do first?", options: ["Go upstairs", "Go downstairs", "Go past"], answer: 0 }
      ] },
      { title: "The computer room", text: "The computer room is on the ground floor. Go past the staff room to find it.", questions: [
        { q: "Where is the computer room?", options: ["Ground floor", "Second floor", "Third floor"], answer: 0 },
        { q: "What should you go past?", options: ["The staff room", "The library", "The art room"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'ground floor' nghĩa là gì?", options: ["tầng trệt", "tầng một", "tầng hai"], answer: 0 },
      { q: "'go upstairs' nghĩa là gì?", options: ["đi lên cầu thang", "đi xuống cầu thang", "đi qua"], answer: 0 },
      { q: "'third floor' nghĩa là gì?", options: ["tầng ba", "đi lên cầu thang", "đi xuống cầu thang"], answer: 0 },
      { q: "'đi qua' tiếng Anh là gì?", options: ["go past", "second floor", "third floor"], answer: 0 },
      { q: "'second floor' nghĩa là gì?", options: ["tầng hai", "tầng một", "tầng trệt"], answer: 0 },
      { q: "'đi xuống cầu thang' tiếng Anh là gì?", options: ["go downstairs", "go along", "go upstairs"], answer: 0 },
      { q: "'tầng một' tiếng Anh là gì?", options: ["first floor", "go past", "third floor"], answer: 0 },
      { q: "'đi dọc theo' tiếng Anh là gì?", options: ["go along", "third floor", "go past"], answer: 0 }
    ],
    quizExt: [
      { q: "'corridor' nghĩa là gì?", options: ["hành lang", "cầu thang", "phòng học"], answer: 0 },
      { q: "'cầu thang' tiếng Anh là gì?", options: ["staircase", "staff room", "headteacher's office"], answer: 0 },
      { q: "'music room' nghĩa là gì?", options: ["phòng âm nhạc", "phòng mỹ thuật", "cầu thang"], answer: 0 },
      { q: "'phòng giáo viên' tiếng Anh là gì?", options: ["staff room", "music room", "headteacher's office"], answer: 0 },
      { q: "'headteacher's office' nghĩa là gì?", options: ["phòng hiệu trưởng", "phòng mỹ thuật", "phòng âm nhạc"], answer: 0 },
      { q: "'phòng mỹ thuật' tiếng Anh là gì?", options: ["art room", "staff room", "staircase"], answer: 0 }
    ],
  },
  {
    id: "u7", group: 2, icon: "🎯",
    titleEn: "Unit 7: Our favourite school activities", titleVi: "Hoạt động yêu thích ở trường",
    core: [
      { en: "do projects", vi: "làm dự án", icon: "📊", ipa: "du ˈprɑdʒɛkts" },
      { en: "play games", vi: "chơi trò chơi", icon: "🎮", ipa: "pleɪ geɪmz" },
      { en: "read books", vi: "đọc sách", icon: "📚", ipa: "rɛd bʊks" },
      { en: "solve maths problems", vi: "giải toán", icon: "➗", ipa: "sɑlv mæθs ˈprɑbləmz" },
      { en: "difficult", vi: "khó", icon: "😖", ipa: "ˈdɪfəkəlt" },
      { en: "easy", vi: "dễ", icon: "😌", ipa: "ˈizi" },
      { en: "fun", vi: "vui", icon: "😄", ipa: "fən" },
      { en: "good for group work", vi: "tốt cho làm việc nhóm", icon: "👥", ipa: "gʊd fɔr grup wɜrk" },
      { en: "useful", vi: "hữu ích", icon: "💡", ipa: "ˈjusfəl" },
      { en: "interesting", vi: "thú vị", icon: "🤩", ipa: "ˈɪntəˌrɛstɪŋ" }
    ],
    patterns: [
      { en: "What school activity does he like?", vi: "Cậu ấy thích hoạt động nào ở trường?" },
      { en: "He likes doing projects.", vi: "Cậu ấy thích làm dự án." },
      { en: "Why does she like it?", vi: "Tại sao cô ấy thích nó?" },
      { en: "Because she thinks it's fun.", vi: "Vì cô ấy nghĩ nó vui." }
    ],
    ext: [
      { en: "group discussion", vi: "thảo luận nhóm", icon: "🗣️", ipa: "grup dɪˈskəʃən" },
      { en: "presentation", vi: "thuyết trình", icon: "📽️", ipa: "ˌprɛzənˈteɪʃən" },
      { en: "experiment", vi: "thí nghiệm", icon: "🧪", ipa: "ɪkˈspɛrəmənt" },
      { en: "quiz", vi: "bài trắc nghiệm", icon: "❓", ipa: "kwɪz" },
      { en: "challenging", vi: "thử thách", icon: "🧗", ipa: "ˈʧælənʤɪŋ" },
      { en: "boring", vi: "chán", icon: "😴", ipa: "ˈbɔrɪŋ" }
    ],
    grammar: [
      { title: "'like + V-ing' cho hoạt động yêu thích", explain: "Sau 'like' dùng động từ thêm '-ing'.", example: "He likes solving maths problems." },
      { title: "'think + (that) + tính từ'", explain: "'Because he/she thinks it's...' dùng để giải thích ý kiến.", example: "Because she thinks it's useful." }
    ],
    reading: [
      { title: "Project time", text: "Nam likes doing projects. He thinks it's fun and good for group work.", questions: [
        { q: "What does Nam like?", options: ["Doing projects", "Reading books", "Playing games"], answer: 0 },
        { q: "Why does he like it?", options: ["Fun and good for group work", "Easy", "Boring"], answer: 0 }
      ] },
      { title: "Maths problems", text: "Mai likes solving maths problems because she thinks it's interesting, even though it's difficult.", questions: [
        { q: "What does Mai like?", options: ["Solving maths problems", "Reading books", "Doing projects"], answer: 0 },
        { q: "What does Mai think about it?", options: ["Interesting", "Boring", "Useless"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'difficult' nghĩa là gì?", options: ["khó", "dễ", "vui"], answer: 0 },
      { q: "'useful' nghĩa là gì?", options: ["hữu ích", "chán", "khó"], answer: 0 },
      { q: "'tốt cho làm việc nhóm' tiếng Anh là gì?", options: ["good for group work", "interesting", "play games"], answer: 0 },
      { q: "'solve maths problems' nghĩa là gì?", options: ["giải toán", "chơi trò chơi", "làm dự án"], answer: 0 },
      { q: "'đọc sách' tiếng Anh là gì?", options: ["read books", "useful", "interesting"], answer: 0 },
      { q: "'interesting' nghĩa là gì?", options: ["thú vị", "tốt cho làm việc nhóm", "giải toán"], answer: 0 },
      { q: "'hữu ích' tiếng Anh là gì?", options: ["useful", "good for group work", "play games"], answer: 0 },
      { q: "'do projects' nghĩa là gì?", options: ["làm dự án", "dễ", "vui"], answer: 0 },
      { q: "'dễ' tiếng Anh là gì?", options: ["easy", "difficult", "read books"], answer: 0 },
      { q: "'fun' nghĩa là gì?", options: ["vui", "đọc sách", "khó"], answer: 0 }
    ],
    quizExt: [
      { q: "'presentation' nghĩa là gì?", options: ["thuyết trình", "thí nghiệm", "thảo luận nhóm"], answer: 0 },
      { q: "'challenging' nghĩa là gì?", options: ["thử thách", "thuyết trình", "thí nghiệm"], answer: 0 },
      { q: "'thuyết trình' tiếng Anh là gì?", options: ["presentation", "challenging", "boring"], answer: 0 },
      { q: "'quiz' nghĩa là gì?", options: ["bài trắc nghiệm", "thuyết trình", "thử thách"], answer: 0 },
      { q: "'thí nghiệm' tiếng Anh là gì?", options: ["experiment", "quiz", "group discussion"], answer: 0 },
      { q: "'boring' nghĩa là gì?", options: ["chán", "bài trắc nghiệm", "thử thách"], answer: 0 },
      { q: "'thảo luận nhóm' tiếng Anh là gì?", options: ["group discussion", "quiz", "challenging"], answer: 0 }
    ],
  },
  {
    id: "u8", group: 2, icon: "📐",
    titleEn: "Unit 8: In our classroom", titleVi: "Trong lớp học của chúng em",
    core: [
      { en: "above", vi: "phía trên", icon: "⬆️", ipa: "əˈbəv" },
      { en: "beside", vi: "bên cạnh", icon: "↔️", ipa: "ˌbiˈsaɪd" },
      { en: "in front of", vi: "phía trước", icon: "⏩", ipa: "ɪn frʌnt ʌv" },
      { en: "under", vi: "phía dưới", icon: "⬇️", ipa: "ˈəndər" },
      { en: "crayon", vi: "bút sáp màu", icon: "🖍️", ipa: "kreɪɑn" },
      { en: "glue stick", vi: "keo dán", icon: "🧴", ipa: "glu stɪk" },
      { en: "pencil sharpener", vi: "gọt bút chì", icon: "✏️", ipa: "ˈpɛnsəl ˈʃɑrpənər" },
      { en: "set square", vi: "thước ê-ke", icon: "📐", ipa: "sɛt skwɛr" }
    ],
    patterns: [
      { en: "Where are the crayons?", vi: "Bút sáp màu ở đâu?" },
      { en: "They're under the table.", vi: "Chúng ở dưới bàn." },
      { en: "Whose pencil sharpener is this?", vi: "Cái gọt bút chì này là của ai?" },
      { en: "It's mine.", vi: "Của tớ." }
    ],
    ext: [
      { en: "ruler", vi: "thước kẻ", icon: "📏", ipa: "ˈrulər" },
      { en: "eraser", vi: "cục tẩy", icon: "🧽", ipa: "ɪˈreɪsər" },
      { en: "stapler", vi: "cái bấm ghim", icon: "📎", ipa: "ˈsteɪpələr" },
      { en: "scissors", vi: "cái kéo", icon: "✂️", ipa: "ˈsɪzərz" },
      { en: "notebook", vi: "vở ghi", icon: "📓", ipa: "ˈnoʊtˌbʊk" },
      { en: "pencil case", vi: "hộp bút", icon: "🖊️", ipa: "ˈpɛnsəl keɪs" }
    ],
    grammar: [
      { title: "Giới từ chỉ vị trí trong phòng", explain: "'above, beside, in front of, under' đứng trước danh từ chỉ vị trí.", example: "The bag is beside the chair." },
      { title: "Đại từ sở hữu 'mine, yours'", explain: "Dùng để trả lời 'Whose... is this?' mà không lặp lại danh từ.", example: "Whose book is this? - It's mine." }
    ],
    reading: [
      { title: "Classroom things", text: "The glue stick is beside the crayons. The pencil sharpener is under the book.", questions: [
        { q: "Where is the glue stick?", options: ["Beside the crayons", "Under the book", "Above the table"], answer: 0 },
        { q: "Where is the pencil sharpener?", options: ["Under the book", "Beside the crayons", "In front of the door"], answer: 0 }
      ] },
      { title: "Whose is it?", text: "Lan finds a set square under her chair. 'Whose set square is this?' she asks. 'It's mine,' says Tom.", questions: [
        { q: "What does Lan find?", options: ["A set square", "A crayon", "A glue stick"], answer: 0 },
        { q: "Whose is it?", options: ["Tom's", "Lan's", "The teacher's"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'under' nghĩa là gì?", options: ["phía dưới", "phía trên", "bên cạnh"], answer: 0 },
      { q: "'crayon' nghĩa là gì?", options: ["bút sáp màu", "cục tẩy", "thước kẻ"], answer: 0 },
      { q: "'beside' nghĩa là gì?", options: ["bên cạnh", "phía trước", "phía dưới"], answer: 0 },
      { q: "'gọt bút chì' tiếng Anh là gì?", options: ["pencil sharpener", "in front of", "set square"], answer: 0 },
      { q: "'above' nghĩa là gì?", options: ["phía trên", "bút sáp màu", "gọt bút chì"], answer: 0 },
      { q: "'phía dưới' tiếng Anh là gì?", options: ["under", "beside", "glue stick"], answer: 0 },
      { q: "'in front of' nghĩa là gì?", options: ["phía trước", "phía dưới", "phía trên"], answer: 0 },
      { q: "'thước ê-ke' tiếng Anh là gì?", options: ["set square", "in front of", "crayon"], answer: 0 }
    ],
    quizExt: [
      { q: "'scissors' nghĩa là gì?", options: ["cái kéo", "cái bấm ghim", "hộp bút"], answer: 0 },
      { q: "'cái bấm ghim' tiếng Anh là gì?", options: ["stapler", "scissors", "ruler"], answer: 0 },
      { q: "'eraser' nghĩa là gì?", options: ["cục tẩy", "thước kẻ", "hộp bút"], answer: 0 },
      { q: "'hộp bút' tiếng Anh là gì?", options: ["pencil case", "stapler", "notebook"], answer: 0 },
      { q: "'ruler' nghĩa là gì?", options: ["thước kẻ", "hộp bút", "cái kéo"], answer: 0 },
      { q: "'vở ghi' tiếng Anh là gì?", options: ["notebook", "ruler", "stapler"], answer: 0 }
    ],
  },
  {
    id: "u9", group: 2, icon: "🏕️",
    titleEn: "Unit 9: Our outdoor activities", titleVi: "Hoạt động ngoài trời của chúng em",
    core: [
      { en: "aquarium", vi: "thuỷ cung", icon: "🐠", ipa: "əkˈwɛriəm" },
      { en: "campsite", vi: "khu cắm trại", icon: "⛺", ipa: "ˈkæmpˌsaɪt" },
      { en: "funfair", vi: "hội chợ vui chơi", icon: "🎡", ipa: "ˈfʌnfɛr" },
      { en: "theatre", vi: "nhà hát", icon: "🎭", ipa: "ˈθiətər" },
      { en: "dance around the campfire", vi: "nhảy múa quanh lửa trại", icon: "🔥", ipa: "dæns əˈraʊnd ðə ˈkæmpfaɪər" },
      { en: "listen to music", vi: "nghe nhạc", icon: "🎧", ipa: "ˈlɪsən tɪ mˈjuzɪk" },
      { en: "play chess", vi: "chơi cờ vua", icon: "♟️", ipa: "pleɪ tʃɛs" },
      { en: "watch the fish", vi: "ngắm cá", icon: "🐟", ipa: "wɑtʃ ðə fɪʃ" }
    ],
    patterns: [
      { en: "Were you at the aquarium yesterday?", vi: "Hôm qua bạn có ở thuỷ cung không?" },
      { en: "Yes, we were. / No, we weren't.", vi: "Vâng, đúng. / Không, không phải." },
      { en: "What did you do yesterday?", vi: "Hôm qua bạn đã làm gì?" },
      { en: "We watched the fish.", vi: "Chúng tớ đã ngắm cá." }
    ],
    ext: [
      { en: "water park", vi: "công viên nước", icon: "🌊", ipa: "ˈwɔtər pɑrk" },
      { en: "botanical garden", vi: "vườn bách thảo", icon: "🌳", ipa: "bəˈtænɪkəl ˈgɑrdən" },
      { en: "go boating", vi: "đi thuyền", icon: "🚣", ipa: "goʊ ˈboʊtɪŋ" },
      { en: "fly a kite", vi: "thả diều", icon: "🪁", ipa: "flaɪ ə kaɪt" },
      { en: "have a picnic", vi: "đi dã ngoại", icon: "🧺", ipa: "hæv ə ˈpɪkˌnɪk" },
      { en: "take photos", vi: "chụp ảnh", icon: "📸", ipa: "teɪk ˈfoʊˌtoʊz" }
    ],
    grammar: [
      { title: "'were/weren't' trong câu hỏi quá khứ", explain: "Dùng với chủ ngữ we/you/they khi hỏi về quá khứ.", example: "Were you at the campsite? - Yes, we were." },
      { title: "Động từ quá khứ có quy tắc thêm '-ed'", explain: "'watch → watched, dance → danced' khi kể lại việc đã làm.", example: "We watched the fish and danced around the campfire." }
    ],
    reading: [
      { title: "A day at the aquarium", text: "Yesterday, we were at the aquarium. We watched the fish and took many photos.", questions: [
        { q: "Where were they yesterday?", options: ["The aquarium", "The funfair", "The theatre"], answer: 0 },
        { q: "What did they do there?", options: ["Watched the fish", "Played chess", "Danced around the campfire"], answer: 0 }
      ] },
      { title: "Camping fun", text: "At the campsite, we danced around the campfire and listened to music. It was a fun night.", questions: [
        { q: "Where were they?", options: ["The campsite", "The aquarium", "The theatre"], answer: 0 },
        { q: "What did they do at night?", options: ["Danced around the campfire", "Watched the fish", "Played chess"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'aquarium' nghĩa là gì?", options: ["thuỷ cung", "hội chợ", "nhà hát"], answer: 0 },
      { q: "'play chess' nghĩa là gì?", options: ["chơi cờ vua", "nghe nhạc", "ngắm cá"], answer: 0 },
      { q: "'listen to music' nghĩa là gì?", options: ["nghe nhạc", "khu cắm trại", "chơi cờ vua"], answer: 0 },
      { q: "'ngắm cá' tiếng Anh là gì?", options: ["watch the fish", "aquarium", "campsite"], answer: 0 },
      { q: "'theatre' nghĩa là gì?", options: ["nhà hát", "ngắm cá", "khu cắm trại"], answer: 0 },
      { q: "'hội chợ vui chơi' tiếng Anh là gì?", options: ["funfair", "theatre", "play chess"], answer: 0 },
      { q: "'nhảy múa quanh lửa trại' tiếng Anh là gì?", options: ["dance around the campfire", "theatre", "watch the fish"], answer: 0 },
      { q: "'campsite' nghĩa là gì?", options: ["khu cắm trại", "thuỷ cung", "nghe nhạc"], answer: 0 }
    ],
    quizExt: [
      { q: "'fly a kite' nghĩa là gì?", options: ["thả diều", "đi thuyền", "chụp ảnh"], answer: 0 },
      { q: "'take photos' nghĩa là gì?", options: ["chụp ảnh", "đi thuyền", "công viên nước"], answer: 0 },
      { q: "'đi thuyền' tiếng Anh là gì?", options: ["go boating", "have a picnic", "fly a kite"], answer: 0 },
      { q: "'đi dã ngoại' tiếng Anh là gì?", options: ["have a picnic", "botanical garden", "fly a kite"], answer: 0 },
      { q: "'water park' nghĩa là gì?", options: ["công viên nước", "đi dã ngoại", "vườn bách thảo"], answer: 0 },
      { q: "'vườn bách thảo' tiếng Anh là gì?", options: ["botanical garden", "have a picnic", "take photos"], answer: 0 }
    ],
  },
  {
    id: "u10", group: 2, icon: "🚌",
    titleEn: "Unit 10: Our school trip", titleVi: "Chuyến đi thực tế của trường em",
    core: [
      { en: "Ba Na Hills", vi: "Bà Nà Hills", icon: "⛰️", ipa: "ˌbiˈeɪ nɑ hɪlz" },
      { en: "Bai Dinh Pagoda", vi: "chùa Bái Đính", icon: "🛕", ipa: "baɪ dɪn pəˈgoʊdə" },
      { en: "Hoan Kiem Lake", vi: "Hồ Hoàn Kiếm", icon: "🌉", ipa: "hwɑn kiəm leɪk" },
      { en: "Suoi Tien Theme Park", vi: "công viên Suối Tiên", icon: "🎢", ipa: "swi tiən θim pɑrk" },
      { en: "plant trees", vi: "trồng cây", icon: "🌳", ipa: "plænt triz" },
      { en: "play games", vi: "chơi trò chơi", icon: "🎮", ipa: "pleɪ geɪmz" },
      { en: "visit the old buildings", vi: "tham quan các toà nhà cổ", icon: "🏛️", ipa: "ˈvɪzɪt ði oʊld ˈbɪldɪŋz" },
      { en: "walk around the lake", vi: "đi dạo quanh hồ", icon: "🚶", ipa: "wɔk əˈraʊnd ðə leɪk" }
    ],
    patterns: [
      { en: "Did they go to Ba Na Hills?", vi: "Họ có đi Bà Nà Hills không?" },
      { en: "Yes, they did. / No, they didn't.", vi: "Vâng, có. / Không, không phải." },
      { en: "What did they do there?", vi: "Họ đã làm gì ở đó?" },
      { en: "They planted trees.", vi: "Họ đã trồng cây." }
    ],
    ext: [
      { en: "souvenir shop", vi: "cửa hàng lưu niệm", icon: "🎁", ipa: "ˌsuvəˈnɪr ʃɑp" },
      { en: "tour guide", vi: "hướng dẫn viên", icon: "🧑‍✈️", ipa: "tʊr gaɪd" },
      { en: "field trip", vi: "chuyến đi thực tế", icon: "🚌", ipa: "fild trɪp" },
      { en: "historical site", vi: "di tích lịch sử", icon: "🏯", ipa: "hɪˈstɔrɪkəl saɪt" },
      { en: "take a break", vi: "nghỉ ngơi", icon: "☕", ipa: "teɪk ə breɪk" },
      { en: "group photo", vi: "ảnh tập thể", icon: "📷", ipa: "grup ˈfoʊˌtoʊ" }
    ],
    grammar: [
      { title: "Câu hỏi quá khứ với 'Did'", explain: "'Did + chủ ngữ + động từ nguyên thể' để hỏi về quá khứ.", example: "Did they go to Hoan Kiem Lake? - Yes, they did." },
      { title: "Động từ bất quy tắc ở quá khứ", explain: "Một số động từ có dạng quá khứ đặc biệt, không thêm '-ed'.", example: "go → went (nhưng ở dạng 'did they go' dùng nguyên thể)." }
    ],
    reading: [
      { title: "A trip to Ba Na Hills", text: "Last week, our class went to Ba Na Hills. We visited the old buildings and took a group photo.", questions: [
        { q: "Where did the class go?", options: ["Ba Na Hills", "Bai Dinh Pagoda", "Hoan Kiem Lake"], answer: 0 },
        { q: "What did they do there?", options: ["Visited the old buildings", "Planted trees", "Played chess"], answer: 0 }
      ] },
      { title: "Planting trees", text: "At Suoi Tien Theme Park, the students planted trees and played games together.", questions: [
        { q: "Where were the students?", options: ["Suoi Tien Theme Park", "Ba Na Hills", "Hoan Kiem Lake"], answer: 0 },
        { q: "What did they plant?", options: ["Trees", "Flowers", "Vegetables"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'plant trees' nghĩa là gì?", options: ["trồng cây", "chơi trò chơi", "đi dạo"], answer: 0 },
      { q: "'Hoan Kiem Lake' nghĩa là gì?", options: ["Hồ Hoàn Kiếm", "chùa Bái Đính", "Bà Nà Hills"], answer: 0 },
      { q: "'chơi trò chơi' tiếng Anh là gì?", options: ["play games", "plant trees", "Suoi Tien Theme Park"], answer: 0 },
      { q: "'Bai Dinh Pagoda' nghĩa là gì?", options: ["chùa Bái Đính", "trồng cây", "công viên Suối Tiên"], answer: 0 },
      { q: "'đi dạo quanh hồ' tiếng Anh là gì?", options: ["walk around the lake", "plant trees", "Suoi Tien Theme Park"], answer: 0 },
      { q: "'Ba Na Hills' nghĩa là gì?", options: ["Bà Nà Hills", "chơi trò chơi", "công viên Suối Tiên"], answer: 0 },
      { q: "'công viên Suối Tiên' tiếng Anh là gì?", options: ["Suoi Tien Theme Park", "Hoan Kiem Lake", "Ba Na Hills"], answer: 0 },
      { q: "'visit the old buildings' nghĩa là gì?", options: ["tham quan các toà nhà cổ", "chơi trò chơi", "công viên Suối Tiên"], answer: 0 }
    ],
    quizExt: [
      { q: "'tour guide' nghĩa là gì?", options: ["hướng dẫn viên", "cửa hàng lưu niệm", "di tích lịch sử"], answer: 0 },
      { q: "'souvenir shop' nghĩa là gì?", options: ["cửa hàng lưu niệm", "di tích lịch sử", "chuyến đi thực tế"], answer: 0 },
      { q: "'nghỉ ngơi' tiếng Anh là gì?", options: ["take a break", "historical site", "souvenir shop"], answer: 0 },
      { q: "'group photo' nghĩa là gì?", options: ["ảnh tập thể", "chuyến đi thực tế", "di tích lịch sử"], answer: 0 },
      { q: "'di tích lịch sử' tiếng Anh là gì?", options: ["historical site", "group photo", "souvenir shop"], answer: 0 },
      { q: "'field trip' nghĩa là gì?", options: ["chuyến đi thực tế", "di tích lịch sử", "ảnh tập thể"], answer: 0 },
      { q: "'hướng dẫn viên' tiếng Anh là gì?", options: ["tour guide", "group photo", "historical site"], answer: 0 }
    ],
  },
  {
    id: "u11", group: 3, icon: "👨‍👩‍👧",
    titleEn: "Unit 11: Family time", titleVi: "Thời gian bên gia đình",
    core: [
      { en: "buy souvenirs", vi: "mua quà lưu niệm", icon: "🎁", ipa: "baɪ ˌsuvəˈnɪrz" },
      { en: "collect seashells", vi: "nhặt vỏ sò", icon: "🐚", ipa: "kəˈlɛkt ˈsiʃɛlz" },
      { en: "eat seafood", vi: "ăn hải sản", icon: "🦐", ipa: "it ˈsifud" },
      { en: "see some interesting places", vi: "tham quan những nơi thú vị", icon: "🏞️", ipa: "si sʌm ˈɪntrəstɪŋ ˈpleɪsɪz" },
      { en: "take a boat trip around the bay", vi: "đi thuyền quanh vịnh", icon: "⛵", ipa: "teɪk ə boʊt trɪp əˈraʊnd ðə beɪ" },
      { en: "walk on the beach", vi: "đi dạo trên bãi biển", icon: "🏖️", ipa: "wɔk ɑn ðə bitʃ" }
    ],
    patterns: [
      { en: "Did you go to Ha Long Bay?", vi: "Bạn đã đi Vịnh Hạ Long chưa?" },
      { en: "Yes, I did. / No, I didn't.", vi: "Vâng, rồi. / Không, chưa." },
      { en: "What did your family do in Da Nang?", vi: "Gia đình bạn đã làm gì ở Đà Nẵng?" },
      { en: "We ate seafood.", vi: "Chúng tớ đã ăn hải sản." }
    ],
    ext: [
      { en: "go sightseeing", vi: "đi tham quan", icon: "🗺️", ipa: "goʊ ˈsaɪtˈsiɪŋ" },
      { en: "relax on the beach", vi: "thư giãn trên bãi biển", icon: "🏝️", ipa: "rɪˈlæks ɔn ðə biʧ" },
      { en: "family trip", vi: "chuyến đi của gia đình", icon: "🚗", ipa: "ˈfæməli trɪp" },
      { en: "memory", vi: "kỷ niệm", icon: "📸", ipa: "ˈmɛməri" },
      { en: "delicious", vi: "ngon", icon: "😋", ipa: "dɪˈlɪʃəs" },
      { en: "crowded beach", vi: "bãi biển đông người", icon: "🏖️", ipa: "ˈkraʊdɪd biʧ" }
    ],
    grammar: [
      { title: "Câu hỏi quá khứ với 'Did you...?'", explain: "Trả lời bằng 'Yes, I did.' hoặc 'No, I didn't.'", example: "Did you eat seafood? - Yes, I did." },
      { title: "Động từ quá khứ 'ate, took, walked'", explain: "'Eat→ate' bất quy tắc, 'walk→walked' có quy tắc.", example: "We ate seafood and walked on the beach." }
    ],
    reading: [
      { title: "A trip to the bay", text: "Last summer, my family took a boat trip around Ha Long Bay. We saw some interesting places.", questions: [
        { q: "What did the family do?", options: ["Took a boat trip", "Walked on the beach", "Bought souvenirs"], answer: 0 },
        { q: "Where was the trip?", options: ["Ha Long Bay", "Da Nang", "Nha Trang"], answer: 0 }
      ] },
      { title: "Seaside fun", text: "We collected seashells and walked on the beach. In the evening, we ate delicious seafood.", questions: [
        { q: "What did they collect?", options: ["Seashells", "Souvenirs", "Flowers"], answer: 0 },
        { q: "What did they eat in the evening?", options: ["Seafood", "Sandwiches", "Fruit"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'eat seafood' nghĩa là gì?", options: ["ăn hải sản", "mua quà lưu niệm", "đi dạo trên biển"], answer: 0 },
      { q: "'collect seashells' nghĩa là gì?", options: ["nhặt vỏ sò", "đi thuyền", "tham quan"], answer: 0 },
      { q: "'see some interesting places' nghĩa là gì?", options: ["tham quan những nơi thú vị", "nhặt vỏ sò", "ăn hải sản"], answer: 0 },
      { q: "'mua quà lưu niệm' tiếng Anh là gì?", options: ["buy souvenirs", "walk on the beach", "eat seafood"], answer: 0 },
      { q: "'walk on the beach' nghĩa là gì?", options: ["đi dạo trên bãi biển", "ăn hải sản", "mua quà lưu niệm"], answer: 0 },
      { q: "'đi thuyền quanh vịnh' tiếng Anh là gì?", options: ["take a boat trip around the bay", "buy souvenirs", "collect seashells"], answer: 0 }
    ],
    quizExt: [
      { q: "'go sightseeing' nghĩa là gì?", options: ["đi tham quan", "thư giãn", "ăn ngon"], answer: 0 },
      { q: "'delicious' nghĩa là gì?", options: ["ngon", "bãi biển đông người", "kỷ niệm"], answer: 0 },
      { q: "'bãi biển đông người' tiếng Anh là gì?", options: ["crowded beach", "go sightseeing", "relax on the beach"], answer: 0 },
      { q: "'chuyến đi của gia đình' tiếng Anh là gì?", options: ["family trip", "delicious", "go sightseeing"], answer: 0 },
      { q: "'memory' nghĩa là gì?", options: ["kỷ niệm", "chuyến đi của gia đình", "ngon"], answer: 0 },
      { q: "'thư giãn trên bãi biển' tiếng Anh là gì?", options: ["relax on the beach", "delicious", "family trip"], answer: 0 }
    ],
  },
  {
    id: "u12", group: 3, icon: "🧧",
    titleEn: "Unit 12: Our Tet holiday", titleVi: "Ngày Tết của chúng em",
    core: [
      { en: "buy roses", vi: "mua hoa hồng", icon: "🌹", ipa: "baɪ ˈroʊzɪz" },
      { en: "buy a branch of peach blossoms", vi: "mua cành đào", icon: "🌸", ipa: "baɪ ə bræntʃ ʌv pitʃ ˈblɑsəmz" },
      { en: "decorate the house", vi: "trang trí nhà cửa", icon: "🏠", ipa: "ˈdɛkəreɪt ðə haʊs" },
      { en: "do the shopping", vi: "đi mua sắm", icon: "🛒", ipa: "du ðə ˈʃɑpɪŋ" },
      { en: "make banh chung", vi: "gói bánh chưng", icon: "🎍", ipa: "meɪk baɪn tʃʊŋ" },
      { en: "make spring rolls", vi: "làm nem cuốn", icon: "🥢", ipa: "meɪk sprɪŋ roʊlz" }
    ],
    patterns: [
      { en: "Will you decorate the house for Tet?", vi: "Bạn sẽ trang trí nhà cửa cho Tết chứ?" },
      { en: "Yes, I will. / No, I won't.", vi: "Vâng, sẽ. / Không, sẽ không." },
      { en: "Where will you go at Tet?", vi: "Bạn sẽ đi đâu vào dịp Tết?" },
      { en: "I'll go to my grandparents' house.", vi: "Tớ sẽ đến nhà ông bà." }
    ],
    ext: [
      { en: "lucky money", vi: "tiền lì xì", icon: "🧧", ipa: "ˈləki ˈməni" },
      { en: "New Year wish", vi: "lời chúc năm mới", icon: "💬", ipa: "nu jɪr wɪʃ" },
      { en: "fireworks", vi: "pháo hoa", icon: "🎆", ipa: "ˈfaɪrˌwərks" },
      { en: "visit relatives", vi: "thăm họ hàng", icon: "👨‍👩‍👧‍👦", ipa: "ˈvɪzɪt ˈrɛlətɪvz" },
      { en: "clean the house", vi: "dọn dẹp nhà cửa", icon: "🧹", ipa: "klin ðə haʊs" },
      { en: "Lunar New Year", vi: "Tết Nguyên Đán", icon: "🎋", ipa: "ˈlunər nu jɪr" }
    ],
    grammar: [
      { title: "Thì tương lai đơn 'will'", explain: "'will + động từ nguyên thể' diễn tả dự định trong tương lai.", example: "I'll make banh chung with my family." },
      { title: "Viết tắt 'I'll, won't'", explain: "'I'll' = I will, 'won't' = will not.", example: "I'll buy peach blossoms. I won't go shopping." }
    ],
    reading: [
      { title: "Getting ready for Tet", text: "My family will decorate the house and buy a branch of peach blossoms. We will also make banh chung.", questions: [
        { q: "What will the family buy?", options: ["A branch of peach blossoms", "Roses", "Spring rolls"], answer: 0 },
        { q: "What will they make?", options: ["Banh chung", "Sandwiches", "Cakes"], answer: 0 }
      ] },
      { title: "Tet shopping", text: "Mai will do the shopping with her mother before Tet. They will buy roses for the house.", questions: [
        { q: "Who will Mai go shopping with?", options: ["Her mother", "Her father", "Her friend"], answer: 0 },
        { q: "What will they buy?", options: ["Roses", "Spring rolls", "Banh chung"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'make banh chung' nghĩa là gì?", options: ["gói bánh chưng", "làm nem cuốn", "mua hoa hồng"], answer: 0 },
      { q: "'decorate the house' nghĩa là gì?", options: ["trang trí nhà cửa", "dọn dẹp nhà cửa", "đi mua sắm"], answer: 0 },
      { q: "'làm nem cuốn' tiếng Anh là gì?", options: ["make spring rolls", "buy a branch of peach blossoms", "do the shopping"], answer: 0 },
      { q: "'buy a branch of peach blossoms' nghĩa là gì?", options: ["mua cành đào", "gói bánh chưng", "mua hoa hồng"], answer: 0 },
      { q: "'mua hoa hồng' tiếng Anh là gì?", options: ["buy roses", "decorate the house", "do the shopping"], answer: 0 },
      { q: "'đi mua sắm' tiếng Anh là gì?", options: ["do the shopping", "make spring rolls", "buy a branch of peach blossoms"], answer: 0 }
    ],
    quizExt: [
      { q: "'lucky money' nghĩa là gì?", options: ["tiền lì xì", "pháo hoa", "lời chúc năm mới"], answer: 0 },
      { q: "'Lunar New Year' nghĩa là gì?", options: ["Tết Nguyên Đán", "pháo hoa", "lời chúc năm mới"], answer: 0 },
      { q: "'tiền lì xì' tiếng Anh là gì?", options: ["lucky money", "Lunar New Year", "fireworks"], answer: 0 },
      { q: "'visit relatives' nghĩa là gì?", options: ["thăm họ hàng", "dọn dẹp nhà cửa", "lời chúc năm mới"], answer: 0 },
      { q: "'lời chúc năm mới' tiếng Anh là gì?", options: ["New Year wish", "fireworks", "visit relatives"], answer: 0 },
      { q: "'fireworks' nghĩa là gì?", options: ["pháo hoa", "thăm họ hàng", "tiền lì xì"], answer: 0 },
      { q: "'dọn dẹp nhà cửa' tiếng Anh là gì?", options: ["clean the house", "Lunar New Year", "lucky money"], answer: 0 }
    ],
  },
  {
    id: "u13", group: 3, icon: "🎉",
    titleEn: "Unit 13: Our special days", titleVi: "Những ngày đặc biệt của chúng em",
    core: [
      { en: "Mid-Autumn Festival", vi: "Tết Trung thu", icon: "🏮", ipa: "mɪd ˈɔtəm ˈfɛstəvəl" },
      { en: "Children's Day", vi: "ngày Quốc tế Thiếu nhi", icon: "🧒", ipa: "ˈtʃɪldrənz deɪ" },
      { en: "Sports Day", vi: "ngày hội thể thao", icon: "🏅", ipa: "spɔrts deɪ" },
      { en: "Teachers' Day", vi: "ngày Nhà giáo", icon: "🍎", ipa: "ˈtitʃərz deɪ" },
      { en: "apple juice", vi: "nước ép táo", icon: "🧃", ipa: "ˈæpəl dʒus" },
      { en: "burgers", vi: "bánh mì kẹp", icon: "🍔", ipa: "ˈbərgərz" },
      { en: "milk tea", vi: "trà sữa", icon: "🧋", ipa: "mɪlk ti" },
      { en: "pizza", vi: "bánh pizza", icon: "🍕", ipa: "ˈpitsə" }
    ],
    patterns: [
      { en: "What will you do at Mid-Autumn Festival?", vi: "Bạn sẽ làm gì vào Tết Trung thu?" },
      { en: "We'll make lanterns.", vi: "Chúng tớ sẽ làm đèn lồng." },
      { en: "What food will you have at the party?", vi: "Bạn sẽ ăn gì ở bữa tiệc?" },
      { en: "We'll have pizza and burgers.", vi: "Chúng tớ sẽ ăn pizza và bánh mì kẹp." }
    ],
    ext: [
      { en: "lantern", vi: "đèn lồng", icon: "🏮", ipa: "ˈlæntərn" },
      { en: "mooncake", vi: "bánh trung thu", icon: "🥮", ipa: "ˈmunkeɪk" },
      { en: "gift exchange", vi: "trao đổi quà", icon: "🎁", ipa: "gɪft ɪksˈʧeɪnʤ" },
      { en: "balloon", vi: "bóng bay", icon: "🎈", ipa: "bəˈlun" },
      { en: "card game", vi: "trò chơi bài", icon: "🃏", ipa: "kɑrd geɪm" },
      { en: "celebration", vi: "lễ kỷ niệm", icon: "🎊", ipa: "ˌsɛləˈbreɪʃən" }
    ],
    grammar: [
      { title: "Giới từ 'at/on' với ngày lễ", explain: "Dùng 'at' với 'Mid-Autumn Festival' nhưng 'on' với các ngày cụ thể như Children's Day.", example: "at Mid-Autumn Festival, on Children's Day." },
      { title: "'We'll have' khi nói về đồ ăn sẽ dùng", explain: "'have' ở đây nghĩa là 'ăn/uống' trong thì tương lai.", example: "We'll have apple juice and pizza." }
    ],
    reading: [
      { title: "Mid-Autumn Festival", text: "At Mid-Autumn Festival, we will make lanterns and eat mooncakes with our family.", questions: [
        { q: "What will they make?", options: ["Lanterns", "Banh chung", "Spring rolls"], answer: 0 },
        { q: "What will they eat?", options: ["Mooncakes", "Pizza", "Burgers"], answer: 0 }
      ] },
      { title: "A class party", text: "On Children's Day, our class will have a party. We will have pizza, burgers and milk tea.", questions: [
        { q: "When is the party?", options: ["Children's Day", "Teachers' Day", "Sports Day"], answer: 0 },
        { q: "What food will they have?", options: ["Pizza, burgers and milk tea", "Banh chung", "Seafood"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'Mid-Autumn Festival' nghĩa là gì?", options: ["Tết Trung thu", "ngày Nhà giáo", "ngày hội thể thao"], answer: 0 },
      { q: "'burgers' nghĩa là gì?", options: ["bánh mì kẹp", "bánh pizza", "trà sữa"], answer: 0 },
      { q: "'bánh pizza' tiếng Anh là gì?", options: ["pizza", "apple juice", "Sports Day"], answer: 0 },
      { q: "'Children's Day' nghĩa là gì?", options: ["ngày Quốc tế Thiếu nhi", "trà sữa", "ngày Nhà giáo"], answer: 0 },
      { q: "'bánh mì kẹp' tiếng Anh là gì?", options: ["burgers", "milk tea", "Teachers' Day"], answer: 0 },
      { q: "'Teachers' Day' nghĩa là gì?", options: ["ngày Nhà giáo", "ngày hội thể thao", "ngày Quốc tế Thiếu nhi"], answer: 0 },
      { q: "'trà sữa' tiếng Anh là gì?", options: ["milk tea", "Mid-Autumn Festival", "pizza"], answer: 0 },
      { q: "'apple juice' nghĩa là gì?", options: ["nước ép táo", "bánh mì kẹp", "bánh pizza"], answer: 0 }
    ],
    quizExt: [
      { q: "'lantern' nghĩa là gì?", options: ["đèn lồng", "bánh trung thu", "bóng bay"], answer: 0 },
      { q: "'gift exchange' nghĩa là gì?", options: ["trao đổi quà", "trò chơi bài", "bóng bay"], answer: 0 },
      { q: "'đèn lồng' tiếng Anh là gì?", options: ["lantern", "mooncake", "gift exchange"], answer: 0 },
      { q: "'celebration' nghĩa là gì?", options: ["lễ kỷ niệm", "bóng bay", "bánh trung thu"], answer: 0 },
      { q: "'bóng bay' tiếng Anh là gì?", options: ["balloon", "lantern", "mooncake"], answer: 0 },
      { q: "'mooncake' nghĩa là gì?", options: ["bánh trung thu", "lễ kỷ niệm", "trò chơi bài"], answer: 0 },
      { q: "'trò chơi bài' tiếng Anh là gì?", options: ["card game", "gift exchange", "celebration"], answer: 0 }
    ],
  },
  {
    id: "u14", group: 3, icon: "💪",
    titleEn: "Unit 14: Staying healthy", titleVi: "Giữ gìn sức khoẻ",
    core: [
      { en: "do morning exercise", vi: "tập thể dục buổi sáng", icon: "🏃", ipa: "du ˈmɔrnɪŋ ˈɛksərsaɪz" },
      { en: "do yoga", vi: "tập yoga", icon: "🧘", ipa: "du ˈjoʊgə" },
      { en: "drink fresh juice", vi: "uống nước ép tươi", icon: "🥤", ipa: "drɪŋk frɛʃ dʒus" },
      { en: "eat healthy food", vi: "ăn thực phẩm lành mạnh", icon: "🥗", ipa: "it ˈhɛlθi fud" },
      { en: "eat vegetables", vi: "ăn rau", icon: "🥦", ipa: "it ˈvɛdʒtəbəlz" },
      { en: "play sports every day", vi: "chơi thể thao mỗi ngày", icon: "⚽", ipa: "pleɪ spɔrts ˈɛvri deɪ" },
      { en: "once a week", vi: "một lần một tuần", icon: "1️⃣", ipa: "wʌns ə wik" },
      { en: "twice a week", vi: "hai lần một tuần", icon: "2️⃣", ipa: "twaɪs ə wik" },
      { en: "three times a week", vi: "ba lần một tuần", icon: "3️⃣", ipa: "θri taɪmz ə wik" }
    ],
    patterns: [
      { en: "How does he stay healthy?", vi: "Cậu ấy giữ sức khoẻ bằng cách nào?" },
      { en: "He does morning exercise.", vi: "Cậu ấy tập thể dục buổi sáng." },
      { en: "How often does she play sports?", vi: "Cô ấy chơi thể thao bao lâu một lần?" },
      { en: "She plays sports twice a week.", vi: "Cô ấy chơi thể thao hai lần một tuần." }
    ],
    ext: [
      { en: "strong", vi: "khoẻ mạnh", icon: "💪", ipa: "strɔŋ" },
      { en: "fit", vi: "cân đối, khoẻ", icon: "🏋️", ipa: "fɪt" },
      { en: "get enough sleep", vi: "ngủ đủ giấc", icon: "😴", ipa: "gɪt ɪˈnəf slip" },
      { en: "junk food", vi: "đồ ăn vặt không lành mạnh", icon: "🍟", ipa: "ʤəŋk fud" },
      { en: "balanced diet", vi: "chế độ ăn cân bằng", icon: "⚖️", ipa: "ˈbælənst daɪət" },
      { en: "go jogging", vi: "chạy bộ", icon: "🏃", ipa: "goʊ ˈʤɔgɪŋ" }
    ],
    grammar: [
      { title: "Hỏi tần suất với 'How often'", explain: "Trả lời bằng cụm từ chỉ tần suất: once/twice/three times a week.", example: "How often do you play sports? - Twice a week." },
      { title: "Động từ thường thêm 's/es' ngôi 3 số ít", explain: "'He/She does, plays, eats...' khi nói thói quen.", example: "She eats vegetables every day." }
    ],
    reading: [
      { title: "A healthy family", text: "My father does morning exercise every day. My mother does yoga three times a week.", questions: [
        { q: "What does the father do every day?", options: ["Morning exercise", "Yoga", "Play sports"], answer: 0 },
        { q: "How often does the mother do yoga?", options: ["Three times a week", "Once a week", "Every day"], answer: 0 }
      ] },
      { title: "Staying fit", text: "To stay healthy, I eat vegetables and drink fresh juice every day. I also play sports twice a week.", questions: [
        { q: "What does the writer eat every day?", options: ["Vegetables", "Junk food", "Burgers"], answer: 0 },
        { q: "How often does the writer play sports?", options: ["Twice a week", "Once a week", "Three times a week"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'eat vegetables' nghĩa là gì?", options: ["ăn rau", "ăn đồ ăn vặt", "uống nước ép"], answer: 0 },
      { q: "'twice a week' nghĩa là gì?", options: ["hai lần một tuần", "một lần một tuần", "ba lần một tuần"], answer: 0 },
      { q: "'ba lần một tuần' tiếng Anh là gì?", options: ["three times a week", "eat healthy food", "play sports every day"], answer: 0 },
      { q: "'play sports every day' nghĩa là gì?", options: ["chơi thể thao mỗi ngày", "ba lần một tuần", "một lần một tuần"], answer: 0 },
      { q: "'ăn thực phẩm lành mạnh' tiếng Anh là gì?", options: ["eat healthy food", "play sports every day", "twice a week"], answer: 0 },
      { q: "'do morning exercise' nghĩa là gì?", options: ["tập thể dục buổi sáng", "ba lần một tuần", "một lần một tuần"], answer: 0 },
      { q: "'tập yoga' tiếng Anh là gì?", options: ["do yoga", "twice a week", "eat healthy food"], answer: 0 },
      { q: "'once a week' nghĩa là gì?", options: ["một lần một tuần", "ăn rau", "chơi thể thao mỗi ngày"], answer: 0 },
      { q: "'uống nước ép tươi' tiếng Anh là gì?", options: ["drink fresh juice", "twice a week", "play sports every day"], answer: 0 }
    ],
    quizExt: [
      { q: "'balanced diet' nghĩa là gì?", options: ["chế độ ăn cân bằng", "đồ ăn vặt", "ngủ đủ giấc"], answer: 0 },
      { q: "'get enough sleep' nghĩa là gì?", options: ["ngủ đủ giấc", "cân đối, khoẻ", "đồ ăn vặt không lành mạnh"], answer: 0 },
      { q: "'chạy bộ' tiếng Anh là gì?", options: ["go jogging", "junk food", "get enough sleep"], answer: 0 },
      { q: "'junk food' nghĩa là gì?", options: ["đồ ăn vặt không lành mạnh", "chạy bộ", "cân đối, khoẻ"], answer: 0 },
      { q: "'chế độ ăn cân bằng' tiếng Anh là gì?", options: ["balanced diet", "go jogging", "get enough sleep"], answer: 0 },
      { q: "'fit' nghĩa là gì?", options: ["cân đối, khoẻ", "khoẻ mạnh", "ngủ đủ giấc"], answer: 0 },
      { q: "'khoẻ mạnh' tiếng Anh là gì?", options: ["strong", "go jogging", "fit"], answer: 0 }
    ],
  },
  {
    id: "u15", group: 3, icon: "🤒",
    titleEn: "Unit 15: Our health", titleVi: "Sức khoẻ của chúng em",
    core: [
      { en: "headache", vi: "đau đầu", icon: "🤕", ipa: "ˈhɛˌdeɪk" },
      { en: "sore throat", vi: "đau họng", icon: "😷", ipa: "sɔr θroʊt" },
      { en: "stomach ache", vi: "đau bụng", icon: "🤢", ipa: "ˈstʌmək eɪk" },
      { en: "toothache", vi: "đau răng", icon: "🦷", ipa: "ˈtuθeɪk" },
      { en: "drink warm water", vi: "uống nước ấm", icon: "☕", ipa: "drɪŋk wɔrm ˈwɔtər" },
      { en: "go to the dentist", vi: "đi khám nha sĩ", icon: "🦷", ipa: "goʊ tu ðə ˈdɛntɪst" },
      { en: "have a rest", vi: "nghỉ ngơi", icon: "🛌", ipa: "hæv ə rɛst" },
      { en: "take some medicine", vi: "uống thuốc", icon: "💊", ipa: "teɪk sʌm ˈmɛdəsən" }
    ],
    patterns: [
      { en: "What's the matter?", vi: "Bạn bị làm sao vậy?" },
      { en: "I have a headache.", vi: "Tớ bị đau đầu." },
      { en: "You should have a rest.", vi: "Bạn nên nghỉ ngơi." },
      { en: "What should I do?", vi: "Tớ nên làm gì?" }
    ],
    ext: [
      { en: "fever", vi: "sốt", icon: "🌡️", ipa: "ˈfivər" },
      { en: "cough", vi: "ho", icon: "🤧", ipa: "kɔf" },
      { en: "runny nose", vi: "sổ mũi", icon: "🤧", ipa: "ˈrəni noʊz" },
      { en: "see a doctor", vi: "đi khám bác sĩ", icon: "👨‍⚕️", ipa: "si ə ˈdɔktər" },
      { en: "feel better", vi: "cảm thấy khoẻ hơn", icon: "😌", ipa: "fil ˈbɛtər" },
      { en: "get well soon", vi: "mau khoẻ nhé", icon: "💐", ipa: "gɪt wɛl sun" }
    ],
    grammar: [
      { title: "'have + a/an + bệnh'", explain: "Dùng 'have' để nói về triệu chứng bệnh.", example: "I have a stomach ache." },
      { title: "Lời khuyên với 'should'", explain: "'You should + động từ nguyên thể' để đưa ra lời khuyên.", example: "You should drink warm water." }
    ],
    reading: [
      { title: "At the doctor's", text: "Tom has a sore throat. The doctor says he should drink warm water and have a rest.", questions: [
        { q: "What's wrong with Tom?", options: ["Sore throat", "Headache", "Toothache"], answer: 0 },
        { q: "What should Tom do?", options: ["Drink warm water and rest", "Go to school", "Play sports"], answer: 0 }
      ] },
      { title: "A toothache", text: "Lan has a toothache. Her mother says she should go to the dentist soon.", questions: [
        { q: "What's wrong with Lan?", options: ["Toothache", "Headache", "Sore throat"], answer: 0 },
        { q: "What does her mother say?", options: ["Go to the dentist", "Take medicine", "Have a rest"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'headache' nghĩa là gì?", options: ["đau đầu", "đau răng", "đau bụng"], answer: 0 },
      { q: "'have a rest' nghĩa là gì?", options: ["nghỉ ngơi", "uống thuốc", "đi khám"], answer: 0 },
      { q: "'drink warm water' nghĩa là gì?", options: ["uống nước ấm", "đau bụng", "nghỉ ngơi"], answer: 0 },
      { q: "'đau đầu' tiếng Anh là gì?", options: ["headache", "go to the dentist", "toothache"], answer: 0 },
      { q: "'stomach ache' nghĩa là gì?", options: ["đau bụng", "đau răng", "nghỉ ngơi"], answer: 0 },
      { q: "'đau họng' tiếng Anh là gì?", options: ["sore throat", "go to the dentist", "have a rest"], answer: 0 },
      { q: "'go to the dentist' nghĩa là gì?", options: ["đi khám nha sĩ", "đau họng", "nghỉ ngơi"], answer: 0 },
      { q: "'uống thuốc' tiếng Anh là gì?", options: ["take some medicine", "drink warm water", "have a rest"], answer: 0 }
    ],
    quizExt: [
      { q: "'fever' nghĩa là gì?", options: ["sốt", "ho", "sổ mũi"], answer: 0 },
      { q: "'get well soon' nghĩa là gì?", options: ["mau khoẻ nhé", "sổ mũi", "cảm thấy khoẻ hơn"], answer: 0 },
      { q: "'ho' tiếng Anh là gì?", options: ["cough", "see a doctor", "fever"], answer: 0 },
      { q: "'sổ mũi' tiếng Anh là gì?", options: ["runny nose", "get well soon", "see a doctor"], answer: 0 },
      { q: "'see a doctor' nghĩa là gì?", options: ["đi khám bác sĩ", "sốt", "sổ mũi"], answer: 0 },
      { q: "'cảm thấy khoẻ hơn' tiếng Anh là gì?", options: ["feel better", "get well soon", "runny nose"], answer: 0 }
    ],
  },
  {
    id: "u16", group: 4, icon: "🍂",
    titleEn: "Unit 16: Seasons and the weather", titleVi: "Các mùa và thời tiết",
    core: [
      { en: "autumn", vi: "mùa thu", icon: "🍂", ipa: "ˈɔtəm" },
      { en: "spring", vi: "mùa xuân", icon: "🌸", ipa: "spərɪŋ" },
      { en: "summer", vi: "mùa hè", icon: "☀️", ipa: "ˈsəmər" },
      { en: "winter", vi: "mùa đông", icon: "❄️", ipa: "ˈwɪntər" },
      { en: "cold", vi: "lạnh", icon: "🥶", ipa: "koʊld" },
      { en: "cool", vi: "mát mẻ", icon: "🍃", ipa: "kul" },
      { en: "hot", vi: "nóng", icon: "🥵", ipa: "hɑt" },
      { en: "warm", vi: "ấm áp", icon: "🌤️", ipa: "wɔrm" },
      { en: "blouse", vi: "áo cánh", icon: "👚", ipa: "blaʊs" },
      { en: "jeans", vi: "quần bò", icon: "👖", ipa: "ʤinz" },
      { en: "jumper", vi: "áo len", icon: "🧶", ipa: "ˈʤəmpər" },
      { en: "trousers", vi: "quần dài", icon: "👖", ipa: "ˈtraʊzərz" }
    ],
    patterns: [
      { en: "How's the weather in Ha Noi in winter?", vi: "Thời tiết ở Hà Nội vào mùa đông thế nào?" },
      { en: "It's cold.", vi: "Trời lạnh." },
      { en: "What do you usually wear in summer?", vi: "Bạn thường mặc gì vào mùa hè?" },
      { en: "I wear a blouse.", vi: "Tớ mặc áo cánh." }
    ],
    ext: [
      { en: "raincoat", vi: "áo mưa", icon: "🧥", ipa: "ˈreɪnˌkoʊt" },
      { en: "scarf", vi: "khăn quàng cổ", icon: "🧣", ipa: "skɑrf" },
      { en: "sandals", vi: "dép quai hậu", icon: "👡", ipa: "ˈsændəlz" },
      { en: "umbrella", vi: "cái ô", icon: "☂️", ipa: "ˈəmˌbrɛlə" },
      { en: "sunglasses", vi: "kính râm", icon: "🕶️", ipa: "ˈsənˌglæsɪz" },
      { en: "season", vi: "mùa", icon: "🍁", ipa: "ˈsizən" }
    ],
    grammar: [
      { title: "Giới từ 'in' với mùa", explain: "Dùng 'in' trước tên mùa để nói thời điểm.", example: "It's hot in summer." },
      { title: "'wear' + trang phục", explain: "Dùng động từ 'wear' để nói về việc mặc quần áo.", example: "I wear a jumper in winter." }
    ],
    reading: [
      { title: "Four seasons", text: "In Ha Noi, it's cold in winter and hot in summer. People wear jumpers in winter and blouses in summer.", questions: [
        { q: "What's the weather like in winter?", options: ["Cold", "Hot", "Warm"], answer: 0 },
        { q: "What do people wear in summer?", options: ["Blouses", "Jumpers", "Raincoats"], answer: 0 }
      ] },
      { title: "Autumn in Ha Noi", text: "Autumn in Ha Noi is cool. People often wear light jumpers and enjoy walking outside.", questions: [
        { q: "What's autumn like in Ha Noi?", options: ["Cool", "Hot", "Cold"], answer: 0 },
        { q: "What do people wear?", options: ["Light jumpers", "Raincoats", "Sandals"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'autumn' nghĩa là gì?", options: ["mùa thu", "mùa xuân", "mùa đông"], answer: 0 },
      { q: "'trousers' nghĩa là gì?", options: ["quần dài", "áo len", "áo cánh"], answer: 0 },
      { q: "'hot' nghĩa là gì?", options: ["nóng", "lạnh", "quần dài"], answer: 0 },
      { q: "'quần dài' tiếng Anh là gì?", options: ["trousers", "jeans", "winter"], answer: 0 },
      { q: "'mùa xuân' tiếng Anh là gì?", options: ["spring", "winter", "autumn"], answer: 0 },
      { q: "'blouse' nghĩa là gì?", options: ["áo cánh", "ấm áp", "mùa xuân"], answer: 0 },
      { q: "'mùa hè' tiếng Anh là gì?", options: ["summer", "winter", "hot"], answer: 0 },
      { q: "'jeans' nghĩa là gì?", options: ["quần bò", "mùa xuân", "nóng"], answer: 0 },
      { q: "'ấm áp' tiếng Anh là gì?", options: ["warm", "winter", "hot"], answer: 0 },
      { q: "'jumper' nghĩa là gì?", options: ["áo len", "ấm áp", "nóng"], answer: 0 }
    ],
    quizExt: [
      { q: "'umbrella' nghĩa là gì?", options: ["cái ô", "khăn quàng cổ", "kính râm"], answer: 0 },
      { q: "'season' nghĩa là gì?", options: ["mùa", "áo mưa", "kính râm"], answer: 0 },
      { q: "'áo mưa' tiếng Anh là gì?", options: ["raincoat", "sunglasses", "season"], answer: 0 },
      { q: "'sunglasses' nghĩa là gì?", options: ["kính râm", "cái ô", "áo mưa"], answer: 0 },
      { q: "'khăn quàng cổ' tiếng Anh là gì?", options: ["scarf", "umbrella", "raincoat"], answer: 0 },
      { q: "'dép quai hậu' tiếng Anh là gì?", options: ["sandals", "umbrella", "raincoat"], answer: 0 }
    ],
  },
  {
    id: "u17", group: 4, icon: "📖",
    titleEn: "Unit 17: Stories for children", titleVi: "Những câu chuyện cho thiếu nhi",
    core: [
      { en: "ant", vi: "con kiến", icon: "🐜", ipa: "ænt" },
      { en: "crow", vi: "con quạ", icon: "🐦‍⬛", ipa: "kroʊ" },
      { en: "dwarfs", vi: "người lùn", icon: "🧙", ipa: "dwɔrfs" },
      { en: "fox", vi: "con cáo", icon: "🦊", ipa: "fɑks" },
      { en: "grasshopper", vi: "châu chấu", icon: "🦗", ipa: "ˈgræsˌhɑpər" },
      { en: "hare", vi: "con thỏ rừng", icon: "🐇", ipa: "hɛr" },
      { en: "Snow White", vi: "Bạch Tuyết", icon: "👸", ipa: "snoʊ waɪt" },
      { en: "tortoise", vi: "con rùa", icon: "🐢", ipa: "ˈtɔrtəs" },
      { en: "cook well", vi: "nấu ăn giỏi", icon: "🍳", ipa: "kʊk wɛl" },
      { en: "run fast", vi: "chạy nhanh", icon: "🏃", ipa: "rʌn fæst" },
      { en: "sing beautifully", vi: "hát hay", icon: "🎶", ipa: "sɪŋ ˈbjutəfəli" },
      { en: "work hard", vi: "làm việc chăm chỉ", icon: "💪", ipa: "wɜrk hɑrd" }
    ],
    patterns: [
      { en: "Who are the main characters in the story?", vi: "Nhân vật chính trong truyện là ai?" },
      { en: "They're the ant and the grasshopper.", vi: "Đó là con kiến và con châu chấu." },
      { en: "How did he work?", vi: "Cậu ấy đã làm việc như thế nào?" },
      { en: "He worked hard.", vi: "Cậu ấy đã làm việc chăm chỉ." }
    ],
    ext: [
      { en: "fairy tale", vi: "truyện cổ tích", icon: "🏰", ipa: "ˈfɛri teɪl" },
      { en: "moral lesson", vi: "bài học đạo đức", icon: "📜", ipa: "ˈmɔrəl ˈlɛsən" },
      { en: "prince", vi: "hoàng tử", icon: "🤴", ipa: "prɪns" },
      { en: "witch", vi: "phù thuỷ", icon: "🧙‍♀️", ipa: "wɪʧ" },
      { en: "magic", vi: "phép thuật", icon: "✨", ipa: "ˈmæʤɪk" },
      { en: "brave", vi: "dũng cảm", icon: "🦁", ipa: "breɪv" }
    ],
    grammar: [
      { title: "Trạng từ mô tả cách làm việc", explain: "'well, fast, hard, beautifully' bổ nghĩa cho động từ.", example: "The tortoise walked slowly but worked hard." },
      { title: "Động từ quá khứ khi kể chuyện", explain: "Dùng thì quá khứ đơn để kể lại một câu chuyện.", example: "The ant worked hard. The grasshopper sang all day." }
    ],
    reading: [
      { title: "The Ant and the Grasshopper", text: "The ant worked hard all summer. The grasshopper sang beautifully but didn't work.", questions: [
        { q: "What did the ant do?", options: ["Worked hard", "Sang songs", "Ran fast"], answer: 0 },
        { q: "What did the grasshopper do?", options: ["Sang beautifully", "Worked hard", "Cooked well"], answer: 0 }
      ] },
      { title: "The Tortoise and the Hare", text: "The hare could run fast, but the tortoise walked slowly and won the race because it never stopped.", questions: [
        { q: "Who could run fast?", options: ["The hare", "The tortoise", "The fox"], answer: 0 },
        { q: "Who won the race?", options: ["The tortoise", "The hare", "The ant"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'tortoise' nghĩa là gì?", options: ["con rùa", "con thỏ rừng", "con cáo"], answer: 0 },
      { q: "'work hard' nghĩa là gì?", options: ["làm việc chăm chỉ", "hát hay", "chạy nhanh"], answer: 0 },
      { q: "'người lùn' tiếng Anh là gì?", options: ["dwarfs", "fox", "Snow White"], answer: 0 },
      { q: "'ant' nghĩa là gì?", options: ["con kiến", "con cáo", "làm việc chăm chỉ"], answer: 0 },
      { q: "'Bạch Tuyết' tiếng Anh là gì?", options: ["Snow White", "hare", "run fast"], answer: 0 },
      { q: "'fox' nghĩa là gì?", options: ["con cáo", "con kiến", "Bạch Tuyết"], answer: 0 },
      { q: "'con quạ' tiếng Anh là gì?", options: ["crow", "tortoise", "ant"], answer: 0 },
      { q: "'run fast' nghĩa là gì?", options: ["chạy nhanh", "hát hay", "con thỏ rừng"], answer: 0 },
      { q: "'làm việc chăm chỉ' tiếng Anh là gì?", options: ["work hard", "crow", "hare"], answer: 0 },
      { q: "'cook well' nghĩa là gì?", options: ["nấu ăn giỏi", "con kiến", "con rùa"], answer: 0 }
    ],
    quizExt: [
      { q: "'fairy tale' nghĩa là gì?", options: ["truyện cổ tích", "phép thuật", "hoàng tử"], answer: 0 },
      { q: "'prince' nghĩa là gì?", options: ["hoàng tử", "phép thuật", "phù thuỷ"], answer: 0 },
      { q: "'truyện cổ tích' tiếng Anh là gì?", options: ["fairy tale", "magic", "moral lesson"], answer: 0 },
      { q: "'magic' nghĩa là gì?", options: ["phép thuật", "truyện cổ tích", "phù thuỷ"], answer: 0 },
      { q: "'dũng cảm' tiếng Anh là gì?", options: ["brave", "moral lesson", "fairy tale"], answer: 0 },
      { q: "'witch' nghĩa là gì?", options: ["phù thuỷ", "phép thuật", "hoàng tử"], answer: 0 },
      { q: "'bài học đạo đức' tiếng Anh là gì?", options: ["moral lesson", "witch", "magic"], answer: 0 }
    ],
  },
  {
    id: "u18", group: 4, icon: "🚌",
    titleEn: "Unit 18: Means of transport", titleVi: "Phương tiện giao thông",
    core: [
      { en: "Dragon Bridge", vi: "cầu Rồng", icon: "🐉", ipa: "ˈdrægən brɪdʒ" },
      { en: "Ha Noi Opera House", vi: "Nhà hát Lớn Hà Nội", icon: "🎭", ipa: "hə nɔɪ ˈɑpərə haʊs" },
      { en: "Ho Chi Minh City Museum", vi: "Bảo tàng Thành phố Hồ Chí Minh", icon: "🏛️", ipa: "hoʊ tʃi mɪn ˈsɪti mjuˈziəm" },
      { en: "Ngo Mon Square", vi: "Ngọ Môn", icon: "🏯", ipa: "ŋoʊ mɔn skwɛr" },
      { en: "by bicycle", vi: "bằng xe đạp", icon: "🚲", ipa: "baɪ ˈbaɪsɪkəl" },
      { en: "by bus", vi: "bằng xe buýt", icon: "🚌", ipa: "baɪ bʌs" },
      { en: "by taxi", vi: "bằng taxi", icon: "🚕", ipa: "baɪ ˈtæksi" },
      { en: "on foot", vi: "đi bộ", icon: "🚶", ipa: "ɑn fʊt" }
    ],
    patterns: [
      { en: "Where do you want to visit?", vi: "Bạn muốn tham quan nơi nào?" },
      { en: "I want to visit the Dragon Bridge.", vi: "Tớ muốn tham quan cầu Rồng." },
      { en: "How can I get there?", vi: "Làm sao để tớ đến đó được?" },
      { en: "You can go by bus.", vi: "Bạn có thể đi bằng xe buýt." }
    ],
    ext: [
      { en: "train", vi: "tàu hoả", icon: "🚆", ipa: "treɪn" },
      { en: "boat", vi: "thuyền", icon: "⛵", ipa: "boʊt" },
      { en: "motorbike", vi: "xe máy", icon: "🏍️", ipa: "ˈmoʊtərˌbaɪk" },
      { en: "airplane", vi: "máy bay", icon: "✈️", ipa: "ˈɛrˌpleɪn" },
      { en: "traffic", vi: "giao thông", icon: "🚦", ipa: "ˈtræfɪk" },
      { en: "ticket", vi: "vé", icon: "🎫", ipa: "ˈtɪkɪt" }
    ],
    grammar: [
      { title: "Giới từ 'by' + phương tiện", explain: "Dùng 'by' trước phương tiện di chuyển, trừ 'on foot'.", example: "by bus, by taxi, but on foot." },
      { title: "'want to visit' + địa danh", explain: "Cấu trúc nói về nơi muốn đến tham quan.", example: "I want to visit Ngo Mon Square." }
    ],
    reading: [
      { title: "A trip to Da Nang", text: "Nam wants to visit the Dragon Bridge. He can get there by taxi from the hotel.", questions: [
        { q: "Where does Nam want to visit?", options: ["The Dragon Bridge", "Ngo Mon Square", "Ha Noi Opera House"], answer: 0 },
        { q: "How can he get there?", options: ["By taxi", "By bicycle", "On foot"], answer: 0 }
      ] },
      { title: "Getting around Hue", text: "Lan visits Ngo Mon Square by bicycle. It's a short trip and good exercise too.", questions: [
        { q: "Where does Lan visit?", options: ["Ngo Mon Square", "Dragon Bridge", "City Museum"], answer: 0 },
        { q: "How does she travel?", options: ["By bicycle", "By bus", "By taxi"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'by bus' nghĩa là gì?", options: ["bằng xe buýt", "bằng xe đạp", "đi bộ"], answer: 0 },
      { q: "'on foot' nghĩa là gì?", options: ["đi bộ", "bằng taxi", "bằng xe máy"], answer: 0 },
      { q: "'bằng xe đạp' tiếng Anh là gì?", options: ["by bicycle", "on foot", "Dragon Bridge"], answer: 0 },
      { q: "'Ha Noi Opera House' nghĩa là gì?", options: ["Nhà hát Lớn Hà Nội", "Ngọ Môn", "bằng xe đạp"], answer: 0 },
      { q: "'cầu Rồng' tiếng Anh là gì?", options: ["Dragon Bridge", "Ho Chi Minh City Museum", "Ngo Mon Square"], answer: 0 },
      { q: "'Bảo tàng Thành phố Hồ Chí Minh' tiếng Anh là gì?", options: ["Ho Chi Minh City Museum", "on foot", "by taxi"], answer: 0 },
      { q: "'Ngo Mon Square' nghĩa là gì?", options: ["Ngọ Môn", "bằng xe đạp", "Nhà hát Lớn Hà Nội"], answer: 0 },
      { q: "'bằng taxi' tiếng Anh là gì?", options: ["by taxi", "Ho Chi Minh City Museum", "on foot"], answer: 0 }
    ],
    quizExt: [
      { q: "'motorbike' nghĩa là gì?", options: ["xe máy", "tàu hoả", "máy bay"], answer: 0 },
      { q: "'airplane' nghĩa là gì?", options: ["máy bay", "giao thông", "thuyền"], answer: 0 },
      { q: "'tàu hoả' tiếng Anh là gì?", options: ["train", "boat", "airplane"], answer: 0 },
      { q: "'boat' nghĩa là gì?", options: ["thuyền", "máy bay", "tàu hoả"], answer: 0 },
      { q: "'xe máy' tiếng Anh là gì?", options: ["motorbike", "boat", "train"], answer: 0 },
      { q: "'traffic' nghĩa là gì?", options: ["giao thông", "thuyền", "xe máy"], answer: 0 },
      { q: "'vé' tiếng Anh là gì?", options: ["ticket", "motorbike", "boat"], answer: 0 }
    ],
  },
  {
    id: "u19", group: 4, icon: "🏞️",
    titleEn: "Unit 19: Places of interest", titleVi: "Những địa điểm thú vị",
    core: [
      { en: "beautiful", vi: "xinh đẹp", icon: "🌸", ipa: "ˈbjutəfəl" },
      { en: "exciting", vi: "thú vị, hào hứng", icon: "🎢", ipa: "ɪkˈsaɪtɪŋ" },
      { en: "fantastic", vi: "tuyệt vời", icon: "🌟", ipa: "fænˈtæstɪk" },
      { en: "peaceful", vi: "yên bình", icon: "🕊️", ipa: "ˈpisfəl" },
      { en: "twenty-nine", vi: "hai mươi chín", icon: "2️⃣9️⃣", ipa: "ˌtwɛnti ˈnaɪn" },
      { en: "forty", vi: "bốn mươi", icon: "4️⃣0️⃣", ipa: "ˈfɔrti" },
      { en: "one hundred", vi: "một trăm", icon: "1️⃣0️⃣0️⃣", ipa: "wən ˈhənərd" },
      { en: "one hundred and twenty-nine", vi: "một trăm hai mươi chín", icon: "1️⃣2️⃣9️⃣", ipa: "wʌn ˈhʌndrəd ənd ˌtwɛnti ˈnaɪn" }
    ],
    patterns: [
      { en: "What do you think of Ba Na Hills?", vi: "Bạn nghĩ gì về Bà Nà Hills?" },
      { en: "I think it's fantastic.", vi: "Tớ nghĩ nó tuyệt vời." },
      { en: "How far is it from Long An to Can Tho?", vi: "Từ Long An đến Cần Thơ bao xa?" },
      { en: "It's about 100 kilometres.", vi: "Khoảng 100 ki-lô-mét." }
    ],
    ext: [
      { en: "stunning", vi: "tuyệt đẹp", icon: "😍", ipa: "ˈstənɪŋ" },
      { en: "famous", vi: "nổi tiếng", icon: "🌟", ipa: "ˈfeɪməs" },
      { en: "distance", vi: "khoảng cách", icon: "📏", ipa: "ˈdɪstəns" },
      { en: "kilometre", vi: "ki-lô-mét", icon: "📐", ipa: "ˌkɪˈlɔˌmətər" },
      { en: "view", vi: "tầm nhìn, cảnh quan", icon: "🖼️", ipa: "vju" },
      { en: "worth visiting", vi: "đáng để tham quan", icon: "👍", ipa: "wərθ ˈvɪzɪtɪŋ" }
    ],
    grammar: [
      { title: "'What do you think of...?'", explain: "Hỏi ý kiến, trả lời bằng 'I think it's/they're + tính từ'.", example: "What do you think of the lake? I think it's peaceful." },
      { title: "Hỏi khoảng cách với 'How far'", explain: "'How far is it from A to B?' trả lời bằng 'It's about... kilometres.'", example: "How far is it from Hue to Da Nang? It's about 100 kilometres." }
    ],
    reading: [
      { title: "Ba Na Hills", text: "Ba Na Hills is fantastic. It has a beautiful golden bridge and a cool climate all year round.", questions: [
        { q: "What does the writer think of Ba Na Hills?", options: ["Fantastic", "Boring", "Peaceful"], answer: 0 },
        { q: "What is special about the bridge?", options: ["It's golden", "It's very long", "It's old"], answer: 0 }
      ] },
      { title: "A peaceful lake", text: "Hoan Kiem Lake is peaceful and beautiful. It's about 2 kilometres from the Old Quarter.", questions: [
        { q: "What is Hoan Kiem Lake like?", options: ["Peaceful and beautiful", "Exciting and loud", "Small and boring"], answer: 0 },
        { q: "How far is it from the Old Quarter?", options: ["About 2 kilometres", "About 100 kilometres", "About 40 kilometres"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'peaceful' nghĩa là gì?", options: ["yên bình", "hào hứng", "tuyệt vời"], answer: 0 },
      { q: "'fantastic' nghĩa là gì?", options: ["tuyệt vời", "xinh đẹp", "xa xôi"], answer: 0 },
      { q: "'beautiful' nghĩa là gì?", options: ["xinh đẹp", "bốn mươi", "yên bình"], answer: 0 },
      { q: "'tuyệt vời' tiếng Anh là gì?", options: ["fantastic", "forty", "beautiful"], answer: 0 },
      { q: "'twenty-nine' nghĩa là gì?", options: ["hai mươi chín", "xinh đẹp", "yên bình"], answer: 0 },
      { q: "'một trăm hai mươi chín' tiếng Anh là gì?", options: ["one hundred and twenty-nine", "forty", "peaceful"], answer: 0 },
      { q: "'forty' nghĩa là gì?", options: ["bốn mươi", "hai mươi chín", "xinh đẹp"], answer: 0 },
      { q: "'thú vị, hào hứng' tiếng Anh là gì?", options: ["exciting", "one hundred", "one hundred and twenty-nine"], answer: 0 }
    ],
    quizExt: [
      { q: "'famous' nghĩa là gì?", options: ["nổi tiếng", "tuyệt đẹp", "đáng tham quan"], answer: 0 },
      { q: "'worth visiting' nghĩa là gì?", options: ["đáng để tham quan", "tuyệt đẹp", "nổi tiếng"], answer: 0 },
      { q: "'tuyệt đẹp' tiếng Anh là gì?", options: ["stunning", "kilometre", "worth visiting"], answer: 0 },
      { q: "'view' nghĩa là gì?", options: ["tầm nhìn, cảnh quan", "tuyệt đẹp", "đáng để tham quan"], answer: 0 },
      { q: "'khoảng cách' tiếng Anh là gì?", options: ["distance", "famous", "stunning"], answer: 0 },
      { q: "'kilometre' nghĩa là gì?", options: ["ki-lô-mét", "tầm nhìn, cảnh quan", "đáng để tham quan"], answer: 0 },
      { q: "'nổi tiếng' tiếng Anh là gì?", options: ["famous", "stunning", "distance"], answer: 0 }
    ],
  },
  {
    id: "u20", group: 4, icon: "🏝️",
    titleEn: "Unit 20: Our summer holidays", titleVi: "Kỳ nghỉ hè của chúng em",
    core: [
      { en: "Dam Sen Aquarium", vi: "Thuỷ cung Đầm Sen", icon: "🐠", ipa: "dam sɛn əˈkwɛriəm" },
      { en: "Huong River", vi: "sông Hương", icon: "🌊", ipa: "hɜrəŋ ˈrɪvər" },
      { en: "Phong Nha Cave", vi: "động Phong Nha", icon: "🕳️", ipa: "fɔŋ ɲa keɪv" },
      { en: "Phu Quoc Island", vi: "đảo Phú Quốc", icon: "🏝️", ipa: "fu kwɔk ˈaɪlənd" },
      { en: "go camping", vi: "đi cắm trại", icon: "⛺", ipa: "goʊ ˈkæmpɪŋ" },
      { en: "join a music club", vi: "tham gia câu lạc bộ âm nhạc", icon: "🎵", ipa: "dʒɔɪn ə ˈmjuzɪk klʌb" },
      { en: "practise swimming", vi: "luyện tập bơi", icon: "🏊", ipa: "ˈpræktɪs ˈswɪmɪŋ" },
      { en: "visit an eco-farm", vi: "tham quan nông trại sinh thái", icon: "🌾", ipa: "ˈvɪzɪt ən ˈikoʊ fɑrm" }
    ],
    patterns: [
      { en: "Where are you going to visit this summer?", vi: "Mùa hè này bạn định đi tham quan đâu?" },
      { en: "I'm going to visit Phu Quoc Island.", vi: "Tớ định đi tham quan đảo Phú Quốc." },
      { en: "What are you going to do this summer?", vi: "Mùa hè này bạn định làm gì?" },
      { en: "I'm going to go camping.", vi: "Tớ định đi cắm trại." }
    ],
    ext: [
      { en: "island", vi: "hòn đảo", icon: "🏝️", ipa: "ˈaɪlənd" },
      { en: "cave", vi: "hang động", icon: "🕳️", ipa: "keɪv" },
      { en: "waterfall", vi: "thác nước", icon: "💦", ipa: "ˈwɔtərˌfɔl" },
      { en: "national park", vi: "vườn quốc gia", icon: "🌲", ipa: "ˈnæʃənəl pɑrk" },
      { en: "plan", vi: "kế hoạch", icon: "📝", ipa: "plæn" },
      { en: "adventure", vi: "cuộc phiêu lưu", icon: "🧭", ipa: "ədˈvɛnʧər" }
    ],
    grammar: [
      { title: "'be going to' diễn tả dự định", explain: "'am/is/are going to + động từ' nói về kế hoạch đã định trước.", example: "I'm going to visit Phong Nha Cave." },
      { title: "Phân biệt 'will' và 'be going to'", explain: "'will' cho quyết định tức thời, 'be going to' cho kế hoạch đã định.", example: "I'm going to join a music club this summer." }
    ],
    reading: [
      { title: "Summer plans", text: "This summer, I'm going to visit Phu Quoc Island with my family. I'm going to practise swimming every day.", questions: [
        { q: "Where is the writer going to visit?", options: ["Phu Quoc Island", "Phong Nha Cave", "Dam Sen Aquarium"], answer: 0 },
        { q: "What is the writer going to practise?", options: ["Swimming", "Singing", "Cooking"], answer: 0 }
      ] },
      { title: "An eco-farm trip", text: "Nam is going to visit an eco-farm this summer. He is also going to go camping with his friends.", questions: [
        { q: "What is Nam going to visit?", options: ["An eco-farm", "Phu Quoc Island", "Huong River"], answer: 0 },
        { q: "What else is he going to do?", options: ["Go camping", "Join a music club", "Practise swimming"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'go camping' nghĩa là gì?", options: ["đi cắm trại", "đi bơi", "đi tham quan"], answer: 0 },
      { q: "'Phu Quoc Island' nghĩa là gì?", options: ["đảo Phú Quốc", "sông Hương", "động Phong Nha"], answer: 0 },
      { q: "'practise swimming' nghĩa là gì?", options: ["luyện tập bơi", "tham gia câu lạc bộ âm nhạc", "sông Hương"], answer: 0 },
      { q: "'tham gia câu lạc bộ âm nhạc' tiếng Anh là gì?", options: ["join a music club", "practise swimming", "Dam Sen Aquarium"], answer: 0 },
      { q: "'Dam Sen Aquarium' nghĩa là gì?", options: ["Thuỷ cung Đầm Sen", "đảo Phú Quốc", "tham gia câu lạc bộ âm nhạc"], answer: 0 },
      { q: "'tham quan nông trại sinh thái' tiếng Anh là gì?", options: ["visit an eco-farm", "Phu Quoc Island", "Dam Sen Aquarium"], answer: 0 },
      { q: "'sông Hương' tiếng Anh là gì?", options: ["Huong River", "Phu Quoc Island", "join a music club"], answer: 0 },
      { q: "'động Phong Nha' tiếng Anh là gì?", options: ["Phong Nha Cave", "go camping", "Dam Sen Aquarium"], answer: 0 }
    ],
    quizExt: [
      { q: "'waterfall' nghĩa là gì?", options: ["thác nước", "hòn đảo", "hang động"], answer: 0 },
      { q: "'adventure' nghĩa là gì?", options: ["cuộc phiêu lưu", "vườn quốc gia", "hòn đảo"], answer: 0 },
      { q: "'hòn đảo' tiếng Anh là gì?", options: ["island", "national park", "adventure"], answer: 0 },
      { q: "'national park' nghĩa là gì?", options: ["vườn quốc gia", "cuộc phiêu lưu", "kế hoạch"], answer: 0 },
      { q: "'thác nước' tiếng Anh là gì?", options: ["waterfall", "cave", "adventure"], answer: 0 },
      { q: "'plan' nghĩa là gì?", options: ["kế hoạch", "hang động", "thác nước"], answer: 0 },
      { q: "'hang động' tiếng Anh là gì?", options: ["cave", "island", "national park"], answer: 0 }
    ],
  }
];

const REVIEWS_5 = [
  { id: "r1", afterGroup: 1, titleVi: "Ôn tập 1", units: ["starter", "u1", "u2", "u3", "u4", "u5"] },
  { id: "r2", afterGroup: 2, titleVi: "Ôn tập 2", units: ["u6", "u7", "u8", "u9", "u10"] },
  { id: "r3", afterGroup: 3, titleVi: "Ôn tập 3", units: ["u11", "u12", "u13", "u14", "u15"] },
  { id: "r4", afterGroup: 4, titleVi: "Ôn tập 4", units: ["u16", "u17", "u18", "u19", "u20"] }
];

const GROUP_NAMES_5 = {
  1: "Đảo Bạn bè",
  2: "Đảo Trường học",
  3: "Đảo Gia đình",
  4: "Đảo Khám phá thế giới"
};

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA[5] = { UNITS: UNITS_5, REVIEWS: REVIEWS_5, GROUP_NAMES: GROUP_NAMES_5 };
