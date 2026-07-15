// ============================================================
// DU LIEU LOP 6 - Tieng Anh Global Success
// Cau truc: 12 Unit (4 nhom x 3 Unit), 4 bai On tap - khong co Starter
// ============================================================

const UNITS_6 = [
  {
    id: "u1", group: 1, icon: "🏫",
    titleEn: "Unit 1: My new school", titleVi: "Ngôi trường mới của em",
    core: [
      { en: "school lunch", vi: "bữa trưa ở trường", icon: "🍱", ipa: "skul lənʧ" },
      { en: "exercise", vi: "bài tập, luyện tập", icon: "🏃", ipa: "ˈɛksərˌsaɪz" },
      { en: "English", vi: "tiếng Anh", icon: "🇬🇧", ipa: "ˈɪŋlɪʃ" },
      { en: "science", vi: "khoa học", icon: "🔬", ipa: "saɪəns" },
      { en: "history", vi: "lịch sử", icon: "📜", ipa: "ˈhɪstəri" },
      { en: "football", vi: "bóng đá", icon: "⚽", ipa: "ˈfʊtˌbɔl" },
      { en: "homework", vi: "bài tập về nhà", icon: "📝", ipa: "ˈhoʊmˌwərk" },
      { en: "lessons", vi: "tiết học", icon: "📖", ipa: "ˈlɛsənz" },
      { en: "music", vi: "âm nhạc", icon: "🎵", ipa: "mˈjuzɪk" }
    ],
    patterns: [
      { en: "We usually go to school by bus.", vi: "Chúng tớ thường đi học bằng xe buýt." },
      { en: "I don't like school lunch very much.", vi: "Tớ không thích bữa trưa ở trường lắm." },
      { en: "Duy cycles to school every day.", vi: "Duy đạp xe đi học mỗi ngày." }
    ],
    ext: [
      { en: "uniform", vi: "đồng phục", icon: "👕", ipa: "ˈjunəˌfɔrm" },
      { en: "assembly", vi: "lễ chào cờ", icon: "🚩", ipa: "əˈsɛmbli" },
      { en: "classmate", vi: "bạn cùng lớp", icon: "👫", ipa: "ˈklæsˌmeɪt" },
      { en: "timetable", vi: "thời khoá biểu", icon: "🗓️", ipa: "ˈtaɪmˌteɪbəl" },
      { en: "subject", vi: "môn học", icon: "📚", ipa: "ˈsəbʤɪkt" },
      { en: "break time", vi: "giờ ra chơi", icon: "🔔", ipa: "breɪk taɪm" }
    ],
    grammar: [
      { title: "Thì hiện tại đơn", explain: "Dùng để nói về thói quen, sự việc lặp lại hoặc cố định. Động từ thêm 's/es' với he/she/it.", example: "Duy cycles to school every day." },
      { title: "Trạng từ tần suất", explain: "'always, usually, often, sometimes, rarely, never' đứng trước động từ thường, đứng sau 'to be'.", example: "Tom usually takes the bus to school. He is never late." }
    ],
    reading: [
      { title: "A new school", text: "Duy has a new school bag. He has new books and new subjects to study. He always looks smart in his uniform.", questions: [
        { q: "What does Duy have?", options: ["New books and subjects", "Old books", "A new bike"], answer: 0 },
        { q: "How does Duy look in his uniform?", options: ["Smart", "Tired", "Untidy"], answer: 0 }
      ] },
      { title: "School activities", text: "Vy and I often do our homework after school. Nick plays football for the school team every week.", questions: [
        { q: "When do Vy and the writer do homework?", options: ["After school", "Before school", "At lunch"], answer: 0 },
        { q: "What does Nick play?", options: ["Football", "Music", "Chess"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'homework' nghĩa là gì?", options: ["bài tập về nhà", "bữa trưa ở trường", "giờ ra chơi"], answer: 0 },
      { q: "'lessons' nghĩa là gì?", options: ["tiết học", "môn học", "đồng phục"], answer: 0 },
      { q: "'school lunch' nghĩa là gì?", options: ["bữa trưa ở trường", "tiết học", "âm nhạc"], answer: 0 },
      { q: "'bài tập, luyện tập' tiếng Anh là gì?", options: ["exercise", "lessons", "homework"], answer: 0 },
      { q: "'English' nghĩa là gì?", options: ["tiếng Anh", "bóng đá", "bài tập, luyện tập"], answer: 0 },
      { q: "'âm nhạc' tiếng Anh là gì?", options: ["music", "science", "history"], answer: 0 },
      { q: "'science' nghĩa là gì?", options: ["khoa học", "bữa trưa ở trường", "tiếng Anh"], answer: 0 },
      { q: "'bóng đá' tiếng Anh là gì?", options: ["football", "exercise", "lessons"], answer: 0 },
      { q: "'history' nghĩa là gì?", options: ["lịch sử", "tiếng Anh", "bữa trưa ở trường"], answer: 0 }
    ],
    quizExt: [
      { q: "'uniform' nghĩa là gì?", options: ["đồng phục", "thời khoá biểu", "lễ chào cờ"], answer: 0 },
      { q: "'timetable' nghĩa là gì?", options: ["thời khoá biểu", "đồng phục", "bạn cùng lớp"], answer: 0 },
      { q: "'giờ ra chơi' tiếng Anh là gì?", options: ["break time", "timetable", "assembly"], answer: 0 },
      { q: "'subject' nghĩa là gì?", options: ["môn học", "lễ chào cờ", "giờ ra chơi"], answer: 0 },
      { q: "'lễ chào cờ' tiếng Anh là gì?", options: ["assembly", "classmate", "break time"], answer: 0 },
      { q: "'bạn cùng lớp' tiếng Anh là gì?", options: ["classmate", "uniform", "timetable"], answer: 0 }
    ],
  },
  {
    id: "u2", group: 1, icon: "🏠",
    titleEn: "Unit 2: My house", titleVi: "Ngôi nhà của em",
    core: [
      { en: "hall", vi: "tiền sảnh", icon: "🚪", ipa: "hɔl" },
      { en: "kitchen", vi: "nhà bếp", icon: "🍳", ipa: "ˈkɪʧən" },
      { en: "bedroom", vi: "phòng ngủ", icon: "🛏️", ipa: "ˈbɛˌdrum" },
      { en: "bathroom", vi: "phòng tắm", icon: "🛁", ipa: "ˈbæθˌrum" },
      { en: "living room", vi: "phòng khách", icon: "🛋️", ipa: "ˈlɪvɪŋ rum" },
      { en: "lamp", vi: "đèn bàn", icon: "💡", ipa: "læmp" },
      { en: "cupboard", vi: "tủ chén", icon: "🗄️", ipa: "ˈkəbərd" },
      { en: "dishwasher", vi: "máy rửa bát", icon: "🍽️", ipa: "ˈdɪʃˌwɑʃər" },
      { en: "fridge", vi: "tủ lạnh", icon: "🧊", ipa: "frɪʤ" },
      { en: "sink", vi: "bồn rửa", icon: "🚰", ipa: "sɪŋk" },
      { en: "shower", vi: "vòi hoa sen", icon: "🚿", ipa: "ʃaʊər" },
      { en: "chest of drawers", vi: "tủ ngăn kéo", icon: "🗃️", ipa: "tʃɛst ʌv drɔrz" }
    ],
    patterns: [
      { en: "My teacher has a house next to our school.", vi: "Cô giáo tớ có nhà ngay cạnh trường." },
      { en: "The lamp is on the table.", vi: "Cái đèn ở trên bàn." },
      { en: "Where did you buy them?", vi: "Bạn mua chúng ở đâu?" }
    ],
    ext: [
      { en: "flat", vi: "căn hộ", icon: "🏢", ipa: "flæt" },
      { en: "town house", vi: "nhà phố", icon: "🏘️", ipa: "taʊn haʊs" },
      { en: "country house", vi: "nhà ở nông thôn", icon: "🏡", ipa: "ˈkəntri haʊs" },
      { en: "toilet", vi: "nhà vệ sinh", icon: "🚽", ipa: "ˈtɔɪlət" },
      { en: "picture", vi: "bức tranh", icon: "🖼️", ipa: "ˈpɪkʧər" },
      { en: "department store", vi: "cửa hàng bách hoá", icon: "🏬", ipa: "dɪˈpɑrtmənt stɔr" }
    ],
    grammar: [
      { title: "Sở hữu cách ('s)", explain: "Thêm ' 's' vào danh từ chỉ người/vật sở hữu để nói của ai.", example: "My teacher's house is big. The cat's bed is small." },
      { title: "Giới từ chỉ vị trí", explain: "'in, on, next to, near, behind, in front of' để mô tả vị trí đồ vật.", example: "The lamp is next to the bed." }
    ],
    reading: [
      { title: "A new home", text: "We just moved to a new flat. There is a nice kitchen and two bedrooms. My room has a big cupboard.", questions: [
        { q: "What did the family do?", options: ["Moved to a new flat", "Bought a fridge", "Built a house"], answer: 0 },
        { q: "What does the writer's room have?", options: ["A big cupboard", "A shower", "A sink"], answer: 0 }
      ] },
      { title: "Shopping for the house", text: "Mum bought a lamp and a picture at the department store. We need them for the living room.", questions: [
        { q: "What did Mum buy?", options: ["A lamp and a picture", "A fridge and a sink", "A cupboard"], answer: 0 },
        { q: "What room are they for?", options: ["The living room", "The kitchen", "The bathroom"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'kitchen' nghĩa là gì?", options: ["nhà bếp", "phòng khách", "phòng ngủ"], answer: 0 },
      { q: "'fridge' nghĩa là gì?", options: ["tủ lạnh", "tủ chén", "bồn rửa"], answer: 0 },
      { q: "'dishwasher' nghĩa là gì?", options: ["máy rửa bát", "tủ ngăn kéo", "đèn bàn"], answer: 0 },
      { q: "'bồn rửa' tiếng Anh là gì?", options: ["sink", "lamp", "cupboard"], answer: 0 },
      { q: "'cupboard' nghĩa là gì?", options: ["tủ chén", "tủ ngăn kéo", "phòng tắm"], answer: 0 },
      { q: "'tủ lạnh' tiếng Anh là gì?", options: ["fridge", "lamp", "bathroom"], answer: 0 },
      { q: "'lamp' nghĩa là gì?", options: ["đèn bàn", "phòng khách", "tủ chén"], answer: 0 },
      { q: "'phòng khách' tiếng Anh là gì?", options: ["living room", "cupboard", "dishwasher"], answer: 0 },
      { q: "'shower' nghĩa là gì?", options: ["vòi hoa sen", "phòng ngủ", "máy rửa bát"], answer: 0 },
      { q: "'phòng tắm' tiếng Anh là gì?", options: ["bathroom", "kitchen", "fridge"], answer: 0 }
    ],
    quizExt: [
      { q: "'department store' nghĩa là gì?", options: ["cửa hàng bách hoá", "nhà phố", "căn hộ"], answer: 0 },
      { q: "'căn hộ' tiếng Anh là gì?", options: ["flat", "country house", "toilet"], answer: 0 },
      { q: "'country house' nghĩa là gì?", options: ["nhà ở nông thôn", "nhà phố", "bức tranh"], answer: 0 },
      { q: "'bức tranh' tiếng Anh là gì?", options: ["picture", "country house", "toilet"], answer: 0 },
      { q: "'toilet' nghĩa là gì?", options: ["nhà vệ sinh", "căn hộ", "nhà ở nông thôn"], answer: 0 },
      { q: "'nhà phố' tiếng Anh là gì?", options: ["town house", "toilet", "country house"], answer: 0 }
    ],
  },
  {
    id: "u3", group: 1, icon: "🙂",
    titleEn: "Unit 3: My friends", titleVi: "Bạn bè của em",
    core: [
      { en: "shy", vi: "nhút nhát", icon: "🙈", ipa: "ʃaɪ" },
      { en: "creative", vi: "sáng tạo", icon: "🎨", ipa: "kriˈeɪtɪv" },
      { en: "clever", vi: "thông minh", icon: "🧠", ipa: "ˈklɛvər" },
      { en: "kind", vi: "tốt bụng", icon: "💛", ipa: "kaɪnd" },
      { en: "friendly", vi: "thân thiện", icon: "😊", ipa: "ˈfrɛndli" },
      { en: "confident", vi: "tự tin", icon: "💪", ipa: "ˈkɑnfədənt" },
      { en: "funny", vi: "hài hước", icon: "😂", ipa: "ˈfəni" },
      { en: "caring", vi: "quan tâm, chu đáo", icon: "🤗", ipa: "ˈkɛrɪŋ" },
      { en: "active", vi: "năng động", icon: "⚡", ipa: "ˈæktɪv" }
    ],
    patterns: [
      { en: "What does your best friend look like?", vi: "Bạn thân của bạn trông như thế nào?" },
      { en: "She's short with long black hair.", vi: "Bạn ấy thấp với mái tóc đen dài." },
      { en: "What's she like?", vi: "Bạn ấy là người như thế nào?" },
      { en: "She's very kind and creative.", vi: "Bạn ấy rất tốt bụng và sáng tạo." }
    ],
    ext: [
      { en: "hard-working", vi: "chăm chỉ", icon: "💼", ipa: "hɑrd ˈwɜrkɪŋ" },
      { en: "curly hair", vi: "tóc xoăn", icon: "🦱", ipa: "ˈkərli hɛr" },
      { en: "blonde hair", vi: "tóc vàng hoe", icon: "👱", ipa: "blɑnd hɛr" },
      { en: "round face", vi: "khuôn mặt tròn", icon: "😊", ipa: "raʊnd feɪs" },
      { en: "small nose", vi: "mũi nhỏ", icon: "👃", ipa: "smɔl noʊz" },
      { en: "bright eyes", vi: "đôi mắt sáng", icon: "👀", ipa: "braɪt aɪz" }
    ],
    grammar: [
      { title: "Thì hiện tại tiếp diễn", explain: "'am/is/are + V-ing' diễn tả hành động đang diễn ra tại thời điểm nói.", example: "Jimmy's taking photos of me. Phong's reading a comic book." },
      { title: "Phân biệt thì hiện tại đơn và tiếp diễn", explain: "Hiện tại đơn cho thói quen, hiện tại tiếp diễn cho việc đang xảy ra ngay lúc này.", example: "She usually walks to school, but she's cycling today." }
    ],
    reading: [
      { title: "My best friend", text: "My best friend Mi is creative and friendly. She likes drawing pictures and always has lots of new ideas.", questions: [
        { q: "What is Mi like?", options: ["Creative and friendly", "Shy and quiet", "Funny and lazy"], answer: 0 },
        { q: "What does Mi like doing?", options: ["Drawing pictures", "Playing football", "Reading comics"], answer: 0 }
      ] },
      { title: "New friends at camp", text: "Jimmy has blonde hair and blue eyes. He's clever and creative. Phong is tall and sporty.", questions: [
        { q: "What does Jimmy look like?", options: ["Blonde hair and blue eyes", "Black hair and brown eyes", "Curly hair"], answer: 0 },
        { q: "What is Phong like?", options: ["Tall and sporty", "Short and shy", "Small and quiet"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'confident' nghĩa là gì?", options: ["tự tin", "nhút nhát", "hài hước"], answer: 0 },
      { q: "'caring' nghĩa là gì?", options: ["quan tâm, chu đáo", "năng động", "thông minh"], answer: 0 },
      { q: "'shy' nghĩa là gì?", options: ["nhút nhát", "thân thiện", "hài hước"], answer: 0 },
      { q: "'hài hước' tiếng Anh là gì?", options: ["funny", "friendly", "confident"], answer: 0 },
      { q: "'active' nghĩa là gì?", options: ["năng động", "sáng tạo", "hài hước"], answer: 0 },
      { q: "'tự tin' tiếng Anh là gì?", options: ["confident", "shy", "clever"], answer: 0 },
      { q: "'creative' nghĩa là gì?", options: ["sáng tạo", "tự tin", "quan tâm, chu đáo"], answer: 0 },
      { q: "'thân thiện' tiếng Anh là gì?", options: ["friendly", "funny", "shy"], answer: 0 },
      { q: "'clever' nghĩa là gì?", options: ["thông minh", "năng động", "tốt bụng"], answer: 0 }
    ],
    quizExt: [
      { q: "'hard-working' nghĩa là gì?", options: ["chăm chỉ", "tóc xoăn", "mũi nhỏ"], answer: 0 },
      { q: "'small nose' nghĩa là gì?", options: ["mũi nhỏ", "chăm chỉ", "tóc xoăn"], answer: 0 },
      { q: "'đôi mắt sáng' tiếng Anh là gì?", options: ["bright eyes", "blonde hair", "hard-working"], answer: 0 },
      { q: "'tóc xoăn' tiếng Anh là gì?", options: ["curly hair", "small nose", "blonde hair"], answer: 0 },
      { q: "'blonde hair' nghĩa là gì?", options: ["tóc vàng hoe", "mũi nhỏ", "chăm chỉ"], answer: 0 },
      { q: "'khuôn mặt tròn' tiếng Anh là gì?", options: ["round face", "small nose", "bright eyes"], answer: 0 }
    ],
  },
  {
    id: "u4", group: 2, icon: "🏘️",
    titleEn: "Unit 4: My neighbourhood", titleVi: "Khu phố của em",
    core: [
      { en: "noisy", vi: "ồn ào", icon: "🔊", ipa: "ˈnɔɪzi" },
      { en: "crowded", vi: "đông đúc", icon: "👥", ipa: "ˈkraʊdɪd" },
      { en: "peaceful", vi: "yên bình", icon: "🕊️", ipa: "ˈpisfəl" },
      { en: "quiet", vi: "yên tĩnh", icon: "🤫", ipa: "kwaɪət" },
      { en: "modern", vi: "hiện đại", icon: "🏙️", ipa: "ˈmɑdərn" },
      { en: "busy", vi: "nhộn nhịp", icon: "🚗", ipa: "ˈbɪzi" },
      { en: "boring", vi: "tẻ nhạt", icon: "😴", ipa: "ˈbɔrɪŋ" },
      { en: "exciting", vi: "thú vị, hào hứng", icon: "🤩", ipa: "ɪkˈsaɪtɪŋ" },
      { en: "expensive", vi: "đắt đỏ", icon: "💰", ipa: "ɪkˈspɛnsɪv" },
      { en: "convenient", vi: "tiện lợi", icon: "👍", ipa: "kənˈvinjənt" },
      { en: "cheap", vi: "rẻ", icon: "🪙", ipa: "ʧip" }
    ],
    patterns: [
      { en: "Is there a square in your neighbourhood?", vi: "Khu phố bạn có quảng trường không?" },
      { en: "Is your neighbourhood quiet?", vi: "Khu phố bạn có yên tĩnh không?" },
      { en: "Could you tell me the way to the cinema, please?", vi: "Bạn chỉ đường tới rạp chiếu phim giúp tớ được không?" },
      { en: "Go along this street. It's on your left.", vi: "Đi dọc theo con phố này. Nó ở bên trái bạn." }
    ],
    ext: [
      { en: "square", vi: "quảng trường", icon: "🏛️", ipa: "skwɛr" },
      { en: "post office", vi: "bưu điện", icon: "📮", ipa: "poʊst ˈɔfəs" },
      { en: "museum", vi: "bảo tàng", icon: "🏛️", ipa: "mˈjuziəm" },
      { en: "station", vi: "nhà ga", icon: "🚉", ipa: "ˈsteɪʃən" },
      { en: "pharmacy", vi: "hiệu thuốc", icon: "💊", ipa: "ˈfɑrməsi" },
      { en: "supermarket", vi: "siêu thị", icon: "🛒", ipa: "ˈsupərˌmɑrkɪt" }
    ],
    grammar: [
      { title: "Tính từ so sánh hơn", explain: "Tính từ ngắn thêm '-er', tính từ dài thêm 'more' trước tính từ.", example: "This building is taller than that building. Living in the countryside is more peaceful." },
      { title: "Chỉ đường", explain: "'Go along, take the first/second turning, it's on your left/right' dùng để chỉ đường.", example: "Go along this street. Take the first turning on the right." }
    ],
    reading: [
      { title: "Binh Minh neighbourhood", text: "Binh Minh is a busy neighbourhood. It's noisier than Long Son, but it has a modern shopping centre.", questions: [
        { q: "What is Binh Minh like?", options: ["Busy and noisy", "Quiet and peaceful", "Boring"], answer: 0 },
        { q: "What does it have?", options: ["A modern shopping centre", "A big lake", "A museum"], answer: 0 }
      ] },
      { title: "Asking for directions", text: "Excuse me, could you tell me the way to the post office? Go along this street, and it's on your left.", questions: [
        { q: "What is the person looking for?", options: ["The post office", "The cinema", "The station"], answer: 0 },
        { q: "Where is it?", options: ["On the left", "On the right", "Straight ahead"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'peaceful' nghĩa là gì?", options: ["yên bình", "ồn ào", "đông đúc"], answer: 0 },
      { q: "'convenient' nghĩa là gì?", options: ["tiện lợi", "đắt đỏ", "tẻ nhạt"], answer: 0 },
      { q: "'cheap' nghĩa là gì?", options: ["rẻ", "yên bình", "tẻ nhạt"], answer: 0 },
      { q: "'đông đúc' tiếng Anh là gì?", options: ["crowded", "peaceful", "cheap"], answer: 0 },
      { q: "'busy' nghĩa là gì?", options: ["nhộn nhịp", "thú vị, hào hứng", "yên tĩnh"], answer: 0 },
      { q: "'ồn ào' tiếng Anh là gì?", options: ["noisy", "crowded", "quiet"], answer: 0 },
      { q: "'yên tĩnh' tiếng Anh là gì?", options: ["quiet", "busy", "cheap"], answer: 0 },
      { q: "'modern' nghĩa là gì?", options: ["hiện đại", "ồn ào", "yên tĩnh"], answer: 0 },
      { q: "'yên bình' tiếng Anh là gì?", options: ["peaceful", "cheap", "crowded"], answer: 0 },
      { q: "'boring' nghĩa là gì?", options: ["tẻ nhạt", "đông đúc", "yên bình"], answer: 0 }
    ],
    quizExt: [
      { q: "'pharmacy' nghĩa là gì?", options: ["hiệu thuốc", "bưu điện", "bảo tàng"], answer: 0 },
      { q: "'square' nghĩa là gì?", options: ["quảng trường", "nhà ga", "bưu điện"], answer: 0 },
      { q: "'bưu điện' tiếng Anh là gì?", options: ["post office", "square", "pharmacy"], answer: 0 },
      { q: "'siêu thị' tiếng Anh là gì?", options: ["supermarket", "museum", "square"], answer: 0 },
      { q: "'station' nghĩa là gì?", options: ["nhà ga", "quảng trường", "bưu điện"], answer: 0 },
      { q: "'bảo tàng' tiếng Anh là gì?", options: ["museum", "square", "pharmacy"], answer: 0 }
    ],
  },
  {
    id: "u5", group: 2, icon: "🏞️",
    titleEn: "Unit 5: Natural wonders of Viet Nam", titleVi: "Kỳ quan thiên nhiên Việt Nam",
    core: [
      { en: "mountain", vi: "ngọn núi", icon: "⛰️", ipa: "ˈmaʊntən" },
      { en: "waterfall", vi: "thác nước", icon: "💦", ipa: "ˈwɔtərˌfɔl" },
      { en: "desert", vi: "sa mạc", icon: "🏜️", ipa: "ˈdɛzərt" },
      { en: "island", vi: "hòn đảo", icon: "🏝️", ipa: "ˈaɪlənd" },
      { en: "jungle", vi: "rừng rậm", icon: "🌴", ipa: "ˈʤəŋgəl" },
      { en: "wonder", vi: "kỳ quan", icon: "🌟", ipa: "ˈwəndər" },
      { en: "plaster", vi: "băng dán vết thương", icon: "🩹", ipa: "ˈplæstər" },
      { en: "sleeping bag", vi: "túi ngủ", icon: "🛌", ipa: "ˈslipɪŋ bæg" },
      { en: "backpack", vi: "ba lô", icon: "🎒", ipa: "ˈbækˌpæk" },
      { en: "compass", vi: "la bàn", icon: "🧭", ipa: "ˈkəmpəs" },
      { en: "suncream", vi: "kem chống nắng", icon: "🧴", ipa: "ˈsʌnkrim" },
      { en: "scissors", vi: "kéo", icon: "✂️", ipa: "ˈsɪzərz" }
    ],
    patterns: [
      { en: "A house in a city is more expensive than a house in the countryside.", vi: "Nhà ở thành phố đắt hơn nhà ở nông thôn." },
      { en: "You must bring a compass when you go camping.", vi: "Bạn phải mang la bàn khi đi cắm trại." },
      { en: "You mustn't touch the rocks.", vi: "Bạn không được chạm vào những tảng đá." }
    ],
    ext: [
      { en: "rock", vi: "tảng đá", icon: "🪨", ipa: "rɑk" },
      { en: "cave", vi: "hang động", icon: "🕳️", ipa: "keɪv" },
      { en: "valley", vi: "thung lũng", icon: "🏞️", ipa: "ˈvæli" },
      { en: "cliff", vi: "vách đá", icon: "🧗", ipa: "klɪf" },
      { en: "coral reef", vi: "rạn san hô", icon: "🪸", ipa: "ˈkɔrəl rif" },
      { en: "national park", vi: "vườn quốc gia", icon: "🌲", ipa: "ˈnæʃənəl pɑrk" }
    ],
    grammar: [
      { title: "Danh từ đếm được / không đếm được", explain: "Đếm được có số ít/nhiều (a rock, rocks); không đếm được không có số nhiều (water, cream).", example: "The water is deep. I need a compass and some cream." },
      { title: "Động từ khiếm khuyết 'must/mustn't'", explain: "'must' diễn tả điều bắt buộc, 'mustn't' diễn tả điều cấm.", example: "You must bring suncream. You mustn't swim alone." }
    ],
    reading: [
      { title: "Packing for a trip", text: "Before going to the mountains, remember to bring a compass, a sleeping bag and suncream.", questions: [
        { q: "Where is the trip to?", options: ["The mountains", "The desert", "An island"], answer: 0 },
        { q: "What should you bring?", options: ["A compass, sleeping bag and suncream", "Only a backpack", "A boat"], answer: 0 }
      ] },
      { title: "Ha Long Bay", text: "Ha Long Bay has thousands of islands. Visitors must not litter and must protect the natural wonder.", questions: [
        { q: "What does Ha Long Bay have?", options: ["Thousands of islands", "A big desert", "Tall mountains"], answer: 0 },
        { q: "What mustn't visitors do?", options: ["Litter", "Take photos", "Swim"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'waterfall' nghĩa là gì?", options: ["thác nước", "sa mạc", "hòn đảo"], answer: 0 },
      { q: "'compass' nghĩa là gì?", options: ["la bàn", "ba lô", "kéo"], answer: 0 },
      { q: "'plaster' nghĩa là gì?", options: ["băng dán vết thương", "kéo", "hòn đảo"], answer: 0 },
      { q: "'kéo' tiếng Anh là gì?", options: ["scissors", "mountain", "compass"], answer: 0 },
      { q: "'sleeping bag' nghĩa là gì?", options: ["túi ngủ", "kỳ quan", "kéo"], answer: 0 },
      { q: "'sa mạc' tiếng Anh là gì?", options: ["desert", "plaster", "wonder"], answer: 0 },
      { q: "'mountain' nghĩa là gì?", options: ["ngọn núi", "kéo", "kem chống nắng"], answer: 0 },
      { q: "'ba lô' tiếng Anh là gì?", options: ["backpack", "compass", "mountain"], answer: 0 },
      { q: "'wonder' nghĩa là gì?", options: ["kỳ quan", "hòn đảo", "kéo"], answer: 0 },
      { q: "'hòn đảo' tiếng Anh là gì?", options: ["island", "wonder", "desert"], answer: 0 }
    ],
    quizExt: [
      { q: "'coral reef' nghĩa là gì?", options: ["rạn san hô", "vách đá", "thung lũng"], answer: 0 },
      { q: "'rock' nghĩa là gì?", options: ["tảng đá", "vườn quốc gia", "thung lũng"], answer: 0 },
      { q: "'thung lũng' tiếng Anh là gì?", options: ["valley", "cliff", "rock"], answer: 0 },
      { q: "'hang động' tiếng Anh là gì?", options: ["cave", "cliff", "coral reef"], answer: 0 },
      { q: "'cliff' nghĩa là gì?", options: ["vách đá", "rạn san hô", "hang động"], answer: 0 },
      { q: "'vườn quốc gia' tiếng Anh là gì?", options: ["national park", "coral reef", "cliff"], answer: 0 }
    ],
  },
  {
    id: "u6", group: 2, icon: "🧧",
    titleEn: "Unit 6: Our Tet holiday", titleVi: "Ngày Tết của chúng em",
    core: [
      { en: "wish", vi: "lời chúc", icon: "🙏", ipa: "wɪʃ" },
      { en: "fireworks", vi: "pháo hoa", icon: "🎆", ipa: "ˈfaɪrˌwərks" },
      { en: "fun", vi: "niềm vui", icon: "🎉", ipa: "fən" },
      { en: "special food", vi: "món ăn đặc biệt", icon: "🍲", ipa: "ˈspɛʃəl fud" },
      { en: "lucky money", vi: "tiền lì xì", icon: "🧧", ipa: "ˈlʌki ˈmʌni" },
      { en: "peach flowers", vi: "hoa đào", icon: "🌸", ipa: "pitʃ ˈflaʊərz" },
      { en: "banh chung", vi: "bánh chưng", icon: "🎍", ipa: "baɪn tʃʊŋ" },
      { en: "banh tet", vi: "bánh tét", icon: "🌾", ipa: "baɪn tɛt" },
      { en: "family gathering", vi: "sum họp gia đình", icon: "👨‍👩‍👧‍👦", ipa: "ˈfæməli ˈgæðərɪŋ" },
      { en: "shopping", vi: "mua sắm", icon: "🛍️", ipa: "ˈʃɑpɪŋ" },
      { en: "celebrate", vi: "ăn mừng, đón mừng", icon: "🥳", ipa: "ˈsɛləˌbreɪt" }
    ],
    patterns: [
      { en: "We should say 'Happy New Year' when we meet people.", vi: "Chúng ta nên nói 'Chúc mừng năm mới' khi gặp mọi người." },
      { en: "We shouldn't break anything.", vi: "Chúng ta không nên làm vỡ bất cứ thứ gì." },
      { en: "Do you have any sugar?", vi: "Bạn có đường không?" },
      { en: "I need some colour paper.", vi: "Tớ cần một ít giấy màu." }
    ],
    ext: [
      { en: "New Year wish", vi: "lời chúc năm mới", icon: "💬", ipa: "nu jɪr wɪʃ" },
      { en: "decorate", vi: "trang trí", icon: "🎊", ipa: "ˈdɛkərˌeɪt" },
      { en: "clean the house", vi: "dọn dẹp nhà cửa", icon: "🧹", ipa: "klin ðə haʊs" },
      { en: "visit relatives", vi: "thăm họ hàng", icon: "👵", ipa: "ˈvɪzɪt ˈrɛlətɪvz" },
      { en: "lion dance", vi: "múa lân", icon: "🦁", ipa: "laɪən dæns" },
      { en: "red envelope", vi: "phong bao lì xì", icon: "🧧", ipa: "rɛd ˈɛnvəˌloʊp" }
    ],
    grammar: [
      { title: "'should/shouldn't' đưa ra lời khuyên", explain: "'should' khuyên nên làm, 'shouldn't' khuyên không nên làm.", example: "You should visit your grandparents at Tet. You shouldn't say unlucky words." },
      { title: "'some/any' chỉ số lượng", explain: "'some' dùng trong câu khẳng định, 'any' dùng trong câu phủ định và câu hỏi.", example: "I need some flowers. Do you have any lucky money envelopes?" }
    ],
    reading: [
      { title: "Getting ready for Tet", text: "Before Tet, we clean the house and decorate it with peach flowers. We also make banh chung together.", questions: [
        { q: "What do they decorate the house with?", options: ["Peach flowers", "Fireworks", "Lucky money"], answer: 0 },
        { q: "What do they make together?", options: ["Banh chung", "Spring rolls", "Cakes"], answer: 0 }
      ] },
      { title: "Tet wishes", text: "At Tet, children get lucky money from their grandparents. Everyone says 'Happy New Year' and wishes each other good luck.", questions: [
        { q: "Who gives lucky money?", options: ["Grandparents", "Teachers", "Neighbours"], answer: 0 },
        { q: "What do people say?", options: ["Happy New Year", "Goodbye", "Thank you"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'lucky money' nghĩa là gì?", options: ["tiền lì xì", "pháo hoa", "hoa đào"], answer: 0 },
      { q: "'family gathering' nghĩa là gì?", options: ["sum họp gia đình", "mua sắm", "ăn mừng"], answer: 0 },
      { q: "'bánh tét' tiếng Anh là gì?", options: ["banh tet", "wish", "fireworks"], answer: 0 },
      { q: "'celebrate' nghĩa là gì?", options: ["ăn mừng, đón mừng", "lời chúc", "bánh tét"], answer: 0 },
      { q: "'món ăn đặc biệt' tiếng Anh là gì?", options: ["special food", "peach flowers", "family gathering"], answer: 0 },
      { q: "'banh chung' nghĩa là gì?", options: ["bánh chưng", "sum họp gia đình", "niềm vui"], answer: 0 },
      { q: "'hoa đào' tiếng Anh là gì?", options: ["peach flowers", "banh tet", "lucky money"], answer: 0 },
      { q: "'wish' nghĩa là gì?", options: ["lời chúc", "bánh chưng", "tiền lì xì"], answer: 0 },
      { q: "'niềm vui' tiếng Anh là gì?", options: ["fun", "family gathering", "peach flowers"], answer: 0 },
      { q: "'shopping' nghĩa là gì?", options: ["mua sắm", "niềm vui", "sum họp gia đình"], answer: 0 }
    ],
    quizExt: [
      { q: "'lion dance' nghĩa là gì?", options: ["múa lân", "dọn dẹp nhà cửa", "thăm họ hàng"], answer: 0 },
      { q: "'decorate' nghĩa là gì?", options: ["trang trí", "múa lân", "lời chúc năm mới"], answer: 0 },
      { q: "'thăm họ hàng' tiếng Anh là gì?", options: ["visit relatives", "decorate", "clean the house"], answer: 0 },
      { q: "'clean the house' nghĩa là gì?", options: ["dọn dẹp nhà cửa", "múa lân", "thăm họ hàng"], answer: 0 },
      { q: "'phong bao lì xì' tiếng Anh là gì?", options: ["red envelope", "New Year wish", "lion dance"], answer: 0 },
      { q: "'lời chúc năm mới' tiếng Anh là gì?", options: ["New Year wish", "lion dance", "clean the house"], answer: 0 }
    ],
  },
  {
    id: "u7", group: 3, icon: "📺",
    titleEn: "Unit 7: Television", titleVi: "Truyền hình",
    core: [
      { en: "talent show", vi: "chương trình tìm kiếm tài năng", icon: "🎤", ipa: "ˈtælənt ʃoʊ" },
      { en: "viewer", vi: "khán giả truyền hình", icon: "📺", ipa: "vjuər" },
      { en: "comedy", vi: "phim hài", icon: "😂", ipa: "ˈkɑmədi" },
      { en: "character", vi: "nhân vật", icon: "🎭", ipa: "ˈkɛrɪktər" },
      { en: "educational programme", vi: "chương trình giáo dục", icon: "📚", ipa: "ˌɛdʒəˈkeɪʃənəl ˈproʊgræm" },
      { en: "popular", vi: "phổ biến, được yêu thích", icon: "⭐", ipa: "ˈpɑpjələr" },
      { en: "cute", vi: "dễ thương", icon: "🥰", ipa: "kjut" },
      { en: "live", vi: "phát trực tiếp", icon: "🔴", ipa: "lɪv" },
      { en: "boring", vi: "chán", icon: "😴", ipa: "ˈbɔrɪŋ" },
      { en: "funny", vi: "hài hước", icon: "😄", ipa: "ˈfəni" }
    ],
    patterns: [
      { en: "What are you watching?", vi: "Bạn đang xem gì vậy?" },
      { en: "What programme do you often watch?", vi: "Bạn thường xem chương trình gì?" },
      { en: "I like animated films, but he prefers cartoons.", vi: "Tớ thích phim hoạt hình chiếu rạp, còn cậu ấy thích phim hoạt hình truyền hình hơn." }
    ],
    ext: [
      { en: "channel", vi: "kênh truyền hình", icon: "📡", ipa: "ˈʧænəl" },
      { en: "news", vi: "tin tức", icon: "📰", ipa: "nuz" },
      { en: "documentary", vi: "phim tài liệu", icon: "🎥", ipa: "ˌdɑkjəˈmɛnəri" },
      { en: "game show", vi: "chương trình trò chơi", icon: "🎮", ipa: "geɪm ʃoʊ" },
      { en: "weather forecast", vi: "dự báo thời tiết", icon: "🌦️", ipa: "ˈwɛðər ˈfɔrˌkæst" },
      { en: "remote control", vi: "điều khiển từ xa", icon: "🎛️", ipa: "rɪˈmoʊt kənˈtroʊl" }
    ],
    grammar: [
      { title: "Câu hỏi Wh-", explain: "'What, Who, Where, When, Why' dùng để hỏi thông tin cụ thể.", example: "What programme do you often watch? Why do you like it?" },
      { title: "Liên từ nối câu ghép: and, but, so", explain: "'and' nối ý bổ sung, 'but' nối ý trái ngược, 'so' nối kết quả.", example: "I like films, but he prefers cartoons. It's raining, so we stay home." }
    ],
    reading: [
      { title: "Favourite shows", text: "Hung watches The Voice Kids. Phong likes animated films, but his little brother prefers cartoons like Tom and Jerry.", questions: [
        { q: "What does Hung watch?", options: ["The Voice Kids", "The news", "A documentary"], answer: 0 },
        { q: "What does Phong's brother prefer?", options: ["Cartoons", "Animated films", "The news"], answer: 0 }
      ] },
      { title: "An educational channel", text: "VTV7 has many educational programmes for children. Phong watches English in a Minute on this channel.", questions: [
        { q: "What kind of programmes does VTV7 have?", options: ["Educational programmes", "Sports programmes", "Cooking shows"], answer: 0 },
        { q: "What does Phong watch on VTV7?", options: ["English in a Minute", "The Voice Kids", "Tom and Jerry"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'talent show' nghĩa là gì?", options: ["chương trình tìm kiếm tài năng", "phim tài liệu", "tin tức"], answer: 0 },
      { q: "'viewer' nghĩa là gì?", options: ["khán giả truyền hình", "nhân vật", "kênh truyền hình"], answer: 0 },
      { q: "'popular' nghĩa là gì?", options: ["phổ biến, được yêu thích", "phát trực tiếp", "dễ thương"], answer: 0 },
      { q: "'chương trình giáo dục' tiếng Anh là gì?", options: ["educational programme", "cute", "talent show"], answer: 0 },
      { q: "'comedy' nghĩa là gì?", options: ["phim hài", "chương trình giáo dục", "dễ thương"], answer: 0 },
      { q: "'chương trình tìm kiếm tài năng' tiếng Anh là gì?", options: ["talent show", "viewer", "cute"], answer: 0 },
      { q: "'boring' nghĩa là gì?", options: ["chán", "phổ biến, được yêu thích", "khán giả truyền hình"], answer: 0 },
      { q: "'phát trực tiếp' tiếng Anh là gì?", options: ["live", "talent show", "comedy"], answer: 0 },
      { q: "'cute' nghĩa là gì?", options: ["dễ thương", "hài hước", "chán"], answer: 0 },
      { q: "'nhân vật' tiếng Anh là gì?", options: ["character", "talent show", "viewer"], answer: 0 }
    ],
    quizExt: [
      { q: "'documentary' nghĩa là gì?", options: ["phim tài liệu", "chương trình trò chơi", "dự báo thời tiết"], answer: 0 },
      { q: "'game show' nghĩa là gì?", options: ["chương trình trò chơi", "dự báo thời tiết", "tin tức"], answer: 0 },
      { q: "'dự báo thời tiết' tiếng Anh là gì?", options: ["weather forecast", "documentary", "remote control"], answer: 0 },
      { q: "'kênh truyền hình' tiếng Anh là gì?", options: ["channel", "game show", "weather forecast"], answer: 0 },
      { q: "'news' nghĩa là gì?", options: ["tin tức", "kênh truyền hình", "điều khiển từ xa"], answer: 0 },
      { q: "'điều khiển từ xa' tiếng Anh là gì?", options: ["remote control", "news", "game show"], answer: 0 }
    ],
  },
  {
    id: "u8", group: 3, icon: "🏆",
    titleEn: "Unit 8: Sports and games", titleVi: "Thể thao và trò chơi",
    core: [
      { en: "boat", vi: "thuyền", icon: "🚣", ipa: "boʊt" },
      { en: "racket", vi: "vợt", icon: "🏸", ipa: "ˈrækɪt" },
      { en: "goggles", vi: "kính bơi", icon: "🥽", ipa: "ˈgɑgəlz" },
      { en: "champion", vi: "nhà vô địch", icon: "🏆", ipa: "ˈʧæmpiən" },
      { en: "competition", vi: "cuộc thi", icon: "🥇", ipa: "ˌkɑmpəˈtɪʃən" },
      { en: "sporty", vi: "giỏi thể thao", icon: "🏅", ipa: "ˈspɔrti" },
      { en: "marathon", vi: "cuộc thi marathon", icon: "🏃", ipa: "ˈmɛrəˌθɑn" },
      { en: "congratulations", vi: "lời chúc mừng", icon: "🎊", ipa: "kənˌgræʧəˈleɪʃənz" }
    ],
    patterns: [
      { en: "She won an international sports competition.", vi: "Cô ấy đã thắng một cuộc thi thể thao quốc tế." },
      { en: "He became the world tennis champion.", vi: "Cậu ấy đã trở thành nhà vô địch quần vợt thế giới." },
      { en: "My friend David is very sporty.", vi: "Bạn David của tớ rất giỏi thể thao." }
    ],
    ext: [
      { en: "gold medal", vi: "huy chương vàng", icon: "🥇", ipa: "goʊld ˈmɛdəl" },
      { en: "referee", vi: "trọng tài", icon: "👨‍⚖️", ipa: "ˌrɛfərˈi" },
      { en: "training", vi: "tập luyện", icon: "🏋️", ipa: "ˈtreɪnɪŋ" },
      { en: "stadium", vi: "sân vận động", icon: "🏟️", ipa: "ˈsteɪdiəm" },
      { en: "team", vi: "đội", icon: "🤝", ipa: "tim" },
      { en: "win the match", vi: "thắng trận đấu", icon: "🏆", ipa: "wɪn ðə mæʧ" }
    ],
    grammar: [
      { title: "Thì quá khứ đơn", explain: "Diễn tả hành động đã hoàn thành trong quá khứ. Động từ có quy tắc thêm '-ed'.", example: "She won the competition. He played tennis yesterday." },
      { title: "Câu mệnh lệnh (Imperatives)", explain: "Dùng động từ nguyên thể đứng đầu câu để ra lệnh, hướng dẫn.", example: "Wear your goggles! Don't run near the pool." }
    ],
    reading: [
      { title: "A young champion", text: "Last year, Mai became the youngest swimming champion in her city. She trained every morning before school.", questions: [
        { q: "What did Mai become?", options: ["Swimming champion", "Football champion", "Tennis champion"], answer: 0 },
        { q: "When did she train?", options: ["Every morning", "Every evening", "Only on weekends"], answer: 0 }
      ] },
      { title: "The school marathon", text: "Congratulations to all the runners in the school marathon! Everyone tried their best and finished the race.", questions: [
        { q: "What event happened?", options: ["A marathon", "A swimming race", "A football match"], answer: 0 },
        { q: "How did the runners do?", options: ["Everyone finished", "Nobody finished", "Only one finished"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'champion' nghĩa là gì?", options: ["nhà vô địch", "trọng tài", "đội"], answer: 0 },
      { q: "'competition' nghĩa là gì?", options: ["cuộc thi", "huy chương", "sân vận động"], answer: 0 },
      { q: "'boat' nghĩa là gì?", options: ["thuyền", "nhà vô địch", "cuộc thi"], answer: 0 },
      { q: "'lời chúc mừng' tiếng Anh là gì?", options: ["congratulations", "goggles", "racket"], answer: 0 },
      { q: "'racket' nghĩa là gì?", options: ["vợt", "kính bơi", "cuộc thi"], answer: 0 },
      { q: "'kính bơi' tiếng Anh là gì?", options: ["goggles", "sporty", "racket"], answer: 0 },
      { q: "'sporty' nghĩa là gì?", options: ["giỏi thể thao", "nhà vô địch", "lời chúc mừng"], answer: 0 },
      { q: "'nhà vô địch' tiếng Anh là gì?", options: ["champion", "competition", "marathon"], answer: 0 }
    ],
    quizExt: [
      { q: "'gold medal' nghĩa là gì?", options: ["huy chương vàng", "trọng tài", "tập luyện"], answer: 0 },
      { q: "'referee' nghĩa là gì?", options: ["trọng tài", "đội", "thắng trận đấu"], answer: 0 },
      { q: "'huy chương vàng' tiếng Anh là gì?", options: ["gold medal", "team", "stadium"], answer: 0 },
      { q: "'win the match' nghĩa là gì?", options: ["thắng trận đấu", "sân vận động", "đội"], answer: 0 },
      { q: "'sân vận động' tiếng Anh là gì?", options: ["stadium", "training", "win the match"], answer: 0 },
      { q: "'training' nghĩa là gì?", options: ["tập luyện", "thắng trận đấu", "huy chương vàng"], answer: 0 },
      { q: "'đội' tiếng Anh là gì?", options: ["team", "win the match", "stadium"], answer: 0 }
    ],
  },
  {
    id: "u9", group: 3, icon: "🌆",
    titleEn: "Unit 9: Cities of the world", titleVi: "Các thành phố trên thế giới",
    core: [
      { en: "rainy", vi: "mưa nhiều", icon: "🌧️", ipa: "ˈreɪni" },
      { en: "friendly", vi: "thân thiện", icon: "😊", ipa: "ˈfrɛndli" },
      { en: "tasty", vi: "ngon", icon: "😋", ipa: "ˈteɪsti" },
      { en: "old", vi: "cổ kính", icon: "🏛️", ipa: "oʊld" },
      { en: "exciting", vi: "thú vị, hào hứng", icon: "🎢", ipa: "ɪkˈsaɪtɪŋ" },
      { en: "helpful", vi: "hay giúp đỡ", icon: "🤝", ipa: "ˈhɛlpfəl" },
      { en: "delicious", vi: "ngon miệng", icon: "🍽️", ipa: "dɪˈlɪʃəs" },
      { en: "sunny", vi: "nắng", icon: "☀️", ipa: "ˈsəni" }
    ],
    patterns: [
      { en: "What's the weather like in Sydney in summer?", vi: "Thời tiết ở Sydney vào mùa hè thế nào?" },
      { en: "It's sunny and dry.", vi: "Trời nắng và khô ráo." },
      { en: "I love the old buildings in Edinburgh.", vi: "Tớ rất thích những toà nhà cổ ở Edinburgh." }
    ],
    ext: [
      { en: "landmark", vi: "địa danh nổi tiếng", icon: "🗽", ipa: "ˈlændˌmɑrk" },
      { en: "skyscraper", vi: "toà nhà chọc trời", icon: "🏙️", ipa: "ˈskaɪˌskreɪpər" },
      { en: "historic", vi: "mang tính lịch sử", icon: "🏰", ipa: "hɪˈstɔrɪk" },
      { en: "capital city", vi: "thủ đô", icon: "🏛️", ipa: "ˈkæpɪtəl ˈsɪti" },
      { en: "postcard", vi: "bưu thiếp", icon: "💌", ipa: "ˈpoʊˌskɑrd" },
      { en: "souvenir", vi: "quà lưu niệm", icon: "🎁", ipa: "ˌsuvəˈnɪr" }
    ],
    grammar: [
      { title: "Tính từ sở hữu và đại từ sở hữu", explain: "'my/your/his/her' đứng trước danh từ; 'mine/yours/his/hers' đứng một mình.", example: "This is my postcard. Is this one yours?" },
      { title: "Mô tả thành phố bằng tính từ", explain: "Dùng tính từ để mô tả đặc điểm một thành phố.", example: "Sydney is sunny and exciting. Edinburgh is old and historic." }
    ],
    reading: [
      { title: "A postcard from Sydney", text: "Dear Nick, Sydney is sunny and exciting. The food here is so tasty. See you soon, Vy.", questions: [
        { q: "What's the weather like in Sydney?", options: ["Sunny", "Rainy", "Cold"], answer: 0 },
        { q: "What does Vy think of the food?", options: ["Tasty", "Boring", "Expensive"], answer: 0 }
      ] },
      { title: "Edinburgh", text: "Edinburgh has many old, historic buildings. People say the city is friendly and helpful to visitors.", questions: [
        { q: "What kind of buildings does Edinburgh have?", options: ["Old, historic buildings", "Modern skyscrapers", "New houses"], answer: 0 },
        { q: "What are people in Edinburgh like?", options: ["Friendly and helpful", "Rude", "Quiet"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'delicious' nghĩa là gì?", options: ["ngon miệng", "cổ kính", "thú vị"], answer: 0 },
      { q: "'sunny' nghĩa là gì?", options: ["nắng", "mưa nhiều", "thân thiện"], answer: 0 },
      { q: "'thân thiện' tiếng Anh là gì?", options: ["friendly", "helpful", "exciting"], answer: 0 },
      { q: "'tasty' nghĩa là gì?", options: ["ngon", "ngon miệng", "hay giúp đỡ"], answer: 0 },
      { q: "'hay giúp đỡ' tiếng Anh là gì?", options: ["helpful", "tasty", "friendly"], answer: 0 },
      { q: "'old' nghĩa là gì?", options: ["cổ kính", "hay giúp đỡ", "mưa nhiều"], answer: 0 },
      { q: "'thú vị, hào hứng' tiếng Anh là gì?", options: ["exciting", "friendly", "delicious"], answer: 0 },
      { q: "'mưa nhiều' tiếng Anh là gì?", options: ["rainy", "tasty", "helpful"], answer: 0 }
    ],
    quizExt: [
      { q: "'landmark' nghĩa là gì?", options: ["địa danh nổi tiếng", "bưu thiếp", "quà lưu niệm"], answer: 0 },
      { q: "'capital city' nghĩa là gì?", options: ["thủ đô", "địa danh nổi tiếng", "toà nhà chọc trời"], answer: 0 },
      { q: "'bưu thiếp' tiếng Anh là gì?", options: ["postcard", "skyscraper", "landmark"], answer: 0 },
      { q: "'skyscraper' nghĩa là gì?", options: ["toà nhà chọc trời", "mang tính lịch sử", "thủ đô"], answer: 0 },
      { q: "'mang tính lịch sử' tiếng Anh là gì?", options: ["historic", "postcard", "landmark"], answer: 0 },
      { q: "'souvenir' nghĩa là gì?", options: ["quà lưu niệm", "địa danh nổi tiếng", "thủ đô"], answer: 0 },
      { q: "'địa danh nổi tiếng' tiếng Anh là gì?", options: ["landmark", "postcard", "capital city"], answer: 0 }
    ],
  },
  {
    id: "u10", group: 4, icon: "🏡",
    titleEn: "Unit 10: Our houses in the future", titleVi: "Ngôi nhà tương lai của chúng em",
    core: [
      { en: "electric cooker", vi: "nồi cơm điện", icon: "🍚", ipa: "ɪˈlɛktrɪk ˈkʊkər" },
      { en: "dishwasher", vi: "máy rửa bát", icon: "🍽️", ipa: "ˈdɪʃˌwɑʃər" },
      { en: "washing machine", vi: "máy giặt", icon: "🧺", ipa: "ˈwɑʃɪŋ məˈʃin" },
      { en: "wireless TV", vi: "tivi không dây", icon: "📺", ipa: "ˈwaɪrlɪs ˌtɛləˈvɪʒən" },
      { en: "fridge", vi: "tủ lạnh", icon: "🧊", ipa: "frɪʤ" },
      { en: "electric fan", vi: "quạt điện", icon: "🌀", ipa: "ɪˈlɛktrɪk fæn" },
      { en: "computer", vi: "máy tính", icon: "💻", ipa: "kəmˈpjutər" },
      { en: "smart clock", vi: "đồng hồ thông minh", icon: "⏰", ipa: "smɑrt klɑk" }
    ],
    patterns: [
      { en: "What can an electric cooker help us to do?", vi: "Nồi cơm điện giúp chúng ta làm gì?" },
      { en: "It can help us to cook rice.", vi: "Nó giúp chúng ta nấu cơm." },
      { en: "In the future, houses will have robots.", vi: "Trong tương lai, nhà cửa sẽ có robot." },
      { en: "It might be very smart.", vi: "Nó có thể sẽ rất thông minh." }
    ],
    ext: [
      { en: "robot", vi: "robot", icon: "🤖", ipa: "ˈroʊˌbət" },
      { en: "solar panel", vi: "tấm pin mặt trời", icon: "☀️", ipa: "ˈsoʊlər ˈpænəl" },
      { en: "smart home", vi: "nhà thông minh", icon: "🏠", ipa: "smɑrt hoʊm" },
      { en: "air conditioner", vi: "điều hoà", icon: "❄️", ipa: "ɛr kənˈdɪʃənər" },
      { en: "microwave", vi: "lò vi sóng", icon: "📡", ipa: "ˈmaɪkrəˌweɪv" },
      { en: "automatic door", vi: "cửa tự động", icon: "🚪", ipa: "ˌɔtəˈmætɪk dɔr" }
    ],
    grammar: [
      { title: "Thì tương lai đơn 'will'", explain: "'will + động từ nguyên thể' dự đoán về tương lai.", example: "Houses will have smart clocks in the future." },
      { title: "'might' diễn tả khả năng", explain: "'might' dùng khi không chắc chắn, khả năng có thể xảy ra.", example: "Robots might do the housework for us." }
    ],
    reading: [
      { title: "The house of the future", text: "In the future, our houses will have smart clocks and wireless TVs. Robots might help us cook and clean.", questions: [
        { q: "What will future houses have?", options: ["Smart clocks and wireless TVs", "Only fridges", "Old furniture"], answer: 0 },
        { q: "What might robots do?", options: ["Help cook and clean", "Watch TV", "Sleep"], answer: 0 }
      ] },
      { title: "A smart kitchen", text: "The electric cooker can help us cook rice. The dishwasher can help us wash the dishes quickly.", questions: [
        { q: "What does the electric cooker help with?", options: ["Cooking rice", "Washing dishes", "Cleaning floors"], answer: 0 },
        { q: "What does the dishwasher do?", options: ["Washes the dishes", "Cooks rice", "Washes clothes"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'washing machine' nghĩa là gì?", options: ["máy giặt", "máy rửa bát", "tủ lạnh"], answer: 0 },
      { q: "'smart clock' nghĩa là gì?", options: ["đồng hồ thông minh", "quạt điện", "nồi cơm điện"], answer: 0 },
      { q: "'nồi cơm điện' tiếng Anh là gì?", options: ["electric cooker", "washing machine", "fridge"], answer: 0 },
      { q: "'dishwasher' nghĩa là gì?", options: ["máy rửa bát", "máy giặt", "tivi không dây"], answer: 0 },
      { q: "'máy giặt' tiếng Anh là gì?", options: ["washing machine", "dishwasher", "fridge"], answer: 0 },
      { q: "'computer' nghĩa là gì?", options: ["máy tính", "máy rửa bát", "tivi không dây"], answer: 0 },
      { q: "'tivi không dây' tiếng Anh là gì?", options: ["wireless TV", "electric fan", "dishwasher"], answer: 0 },
      { q: "'electric fan' nghĩa là gì?", options: ["quạt điện", "máy rửa bát", "máy giặt"], answer: 0 }
    ],
    quizExt: [
      { q: "'solar panel' nghĩa là gì?", options: ["tấm pin mặt trời", "nhà thông minh", "cửa tự động"], answer: 0 },
      { q: "'lò vi sóng' tiếng Anh là gì?", options: ["microwave", "robot", "automatic door"], answer: 0 },
      { q: "'robot' nghĩa là gì?", options: ["robot", "tấm pin mặt trời", "cửa tự động"], answer: 0 },
      { q: "'cửa tự động' tiếng Anh là gì?", options: ["automatic door", "solar panel", "microwave"], answer: 0 },
      { q: "'smart home' nghĩa là gì?", options: ["nhà thông minh", "điều hoà", "tấm pin mặt trời"], answer: 0 },
      { q: "'điều hoà' tiếng Anh là gì?", options: ["air conditioner", "microwave", "robot"], answer: 0 }
    ],
  },
  {
    id: "u11", group: 4, icon: "🌱",
    titleEn: "Unit 11: Our greener world", titleVi: "Thế giới xanh hơn của chúng em",
    core: [
      { en: "reduce", vi: "giảm thiểu", icon: "⬇️", ipa: "rɪˈdus" },
      { en: "reuse", vi: "tái sử dụng", icon: "🔁", ipa: "riˈjuz" },
      { en: "recycle", vi: "tái chế", icon: "♻️", ipa: "riˈsaɪkəl" },
      { en: "reusable bag", vi: "túi dùng nhiều lần", icon: "🛍️", ipa: "riˈjuzəbəl bæg" },
      { en: "plant trees", vi: "trồng cây", icon: "🌳", ipa: "plænt triz" },
      { en: "pick up rubbish", vi: "nhặt rác", icon: "🗑️", ipa: "pɪk ʌp ˈrʌbɪʃ" },
      { en: "cycling", vi: "đi xe đạp", icon: "🚴", ipa: "ˈsaɪkəlɪŋ" },
      { en: "plastic bag", vi: "túi ni lông", icon: "🛍️", ipa: "ˈplæstɪk bæg" }
    ],
    patterns: [
      { en: "If we all use this kind of bag, we will help the environment.", vi: "Nếu tất cả chúng ta dùng loại túi này, chúng ta sẽ giúp ích cho môi trường." },
      { en: "If more people cycle, the air will be cleaner.", vi: "Nếu nhiều người đạp xe hơn, không khí sẽ trong lành hơn." },
      { en: "Do you plant trees?", vi: "Bạn có trồng cây không?" }
    ],
    ext: [
      { en: "environment", vi: "môi trường", icon: "🌍", ipa: "ɪnˈvaɪrənmənt" },
      { en: "pollution", vi: "ô nhiễm", icon: "🏭", ipa: "pəˈluʃən" },
      { en: "green club", vi: "câu lạc bộ xanh", icon: "🍃", ipa: "grin kləb" },
      { en: "save energy", vi: "tiết kiệm năng lượng", icon: "💡", ipa: "seɪv ˈɛnərʤi" },
      { en: "litter", vi: "xả rác", icon: "🚯", ipa: "ˈlɪtər" },
      { en: "eco-friendly", vi: "thân thiện với môi trường", icon: "🌿", ipa: "ˌikoʊ ˈfrɛndli" }
    ],
    grammar: [
      { title: "Mạo từ (Articles) 'a/an/the'", explain: "'a/an' dùng cho danh từ chưa xác định, 'the' dùng cho danh từ đã xác định.", example: "I bought a reusable bag. The bag is very useful." },
      { title: "Câu điều kiện loại 1", explain: "'If + hiện tại đơn, ... will + động từ nguyên thể' diễn tả điều kiện có thể xảy ra ở tương lai.", example: "If we recycle more, we will reduce pollution." }
    ],
    reading: [
      { title: "Going green", text: "Nick always uses a reusable shopping bag. If more people use it, we will help the environment.", questions: [
        { q: "What does Nick always use?", options: ["A reusable shopping bag", "A plastic bag", "A backpack"], answer: 0 },
        { q: "What will happen if more people use it?", options: ["We will help the environment", "Nothing will change", "It will cost more"], answer: 0 }
      ] },
      { title: "Our green club", text: "Our green club plants trees and picks up rubbish every weekend. We want a cleaner, greener neighbourhood.", questions: [
        { q: "What does the green club do?", options: ["Plants trees and picks up rubbish", "Watches TV", "Plays football"], answer: 0 },
        { q: "When do they do it?", options: ["Every weekend", "Every day", "Once a year"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'recycle' nghĩa là gì?", options: ["tái chế", "giảm thiểu", "tái sử dụng"], answer: 0 },
      { q: "'pick up rubbish' nghĩa là gì?", options: ["nhặt rác", "trồng cây", "đạp xe"], answer: 0 },
      { q: "'reuse' nghĩa là gì?", options: ["tái sử dụng", "túi ni lông", "giảm thiểu"], answer: 0 },
      { q: "'túi ni lông' tiếng Anh là gì?", options: ["plastic bag", "cycling", "reuse"], answer: 0 },
      { q: "'plant trees' nghĩa là gì?", options: ["trồng cây", "túi ni lông", "tái sử dụng"], answer: 0 },
      { q: "'túi dùng nhiều lần' tiếng Anh là gì?", options: ["reusable bag", "pick up rubbish", "cycling"], answer: 0 },
      { q: "'đi xe đạp' tiếng Anh là gì?", options: ["cycling", "reuse", "pick up rubbish"], answer: 0 },
      { q: "'reduce' nghĩa là gì?", options: ["giảm thiểu", "đi xe đạp", "nhặt rác"], answer: 0 }
    ],
    quizExt: [
      { q: "'pollution' nghĩa là gì?", options: ["ô nhiễm", "môi trường", "năng lượng"], answer: 0 },
      { q: "'green club' nghĩa là gì?", options: ["câu lạc bộ xanh", "môi trường", "xả rác"], answer: 0 },
      { q: "'xả rác' tiếng Anh là gì?", options: ["litter", "pollution", "save energy"], answer: 0 },
      { q: "'eco-friendly' nghĩa là gì?", options: ["thân thiện với môi trường", "ô nhiễm", "xả rác"], answer: 0 },
      { q: "'môi trường' tiếng Anh là gì?", options: ["environment", "eco-friendly", "green club"], answer: 0 },
      { q: "'tiết kiệm năng lượng' tiếng Anh là gì?", options: ["save energy", "litter", "pollution"], answer: 0 }
    ],
  },
  {
    id: "u12", group: 4, icon: "🤖",
    titleEn: "Unit 12: Robots", titleVi: "Người máy",
    core: [
      { en: "understand our feelings", vi: "hiểu cảm xúc của chúng ta", icon: "💭", ipa: "ˌəndərˈstænd ɑr ˈfilɪŋz" },
      { en: "pick fruit", vi: "hái quả", icon: "🍎", ipa: "pɪk frut" },
      { en: "do the washing", vi: "giặt đồ", icon: "🧺", ipa: "du ðə ˈwɑʃɪŋ" },
      { en: "water plants", vi: "tưới cây", icon: "🪴", ipa: "ˈwɔtər plænts" },
      { en: "work as a guard", vi: "làm bảo vệ", icon: "🛡️", ipa: "wərk ɛz ə gɑrd" },
      { en: "robot", vi: "người máy", icon: "🤖", ipa: "ˈroʊˌbət" },
      { en: "strong", vi: "khoẻ, mạnh mẽ", icon: "💪", ipa: "strɔŋ" },
      { en: "home robot", vi: "robot gia đình", icon: "🏠", ipa: "hoʊm ˈroʊˌbət" }
    ],
    patterns: [
      { en: "I can pick fruit, but I can't understand your feelings.", vi: "Tớ có thể hái quả, nhưng tớ không thể hiểu cảm xúc của bạn." },
      { en: "WB2 is the strongest of all the robots.", vi: "WB2 là robot khoẻ nhất trong tất cả các robot." },
      { en: "Shifa can do many things like humans.", vi: "Shifa có thể làm nhiều việc như con người." }
    ],
    ext: [
      { en: "artificial intelligence", vi: "trí tuệ nhân tạo", icon: "🧠", ipa: "ˌɑrtəˈfɪʃəl ˌɪnˈtɛləʤəns" },
      { en: "battery", vi: "pin", icon: "🔋", ipa: "ˈbætəri" },
      { en: "sensor", vi: "cảm biến", icon: "📡", ipa: "ˈsɛnsər" },
      { en: "factory robot", vi: "robot nhà máy", icon: "🏭", ipa: "ˈfæktəri ˈroʊˌbət" },
      { en: "space robot", vi: "robot vũ trụ", icon: "🚀", ipa: "speɪs ˈroʊˌbət" },
      { en: "guard", vi: "bảo vệ", icon: "🛡️", ipa: "gɑrd" }
    ],
    grammar: [
      { title: "Tính từ so sánh nhất (tính từ ngắn)", explain: "Tính từ ngắn thêm '-est', trước đó có 'the'.", example: "WB2 is the strongest robot. This is the smallest robot." },
      { title: "'can/can't' diễn tả khả năng", explain: "'can' cho biết khả năng làm được, 'can't' là không làm được.", example: "Robots can water plants, but they can't understand our feelings." }
    ],
    reading: [
      { title: "H8 the home robot", text: "H8 is a home robot. It can water plants and do the washing, but it can't understand our feelings.", questions: [
        { q: "What is H8?", options: ["A home robot", "A factory robot", "A space robot"], answer: 0 },
        { q: "What can't H8 do?", options: ["Understand our feelings", "Water plants", "Do the washing"], answer: 0 }
      ] },
      { title: "The strongest robot", text: "WB2 is the strongest of all the robots. It can pick fruit and work as a guard at the farm.", questions: [
        { q: "What is special about WB2?", options: ["It's the strongest", "It's the smallest", "It's the smartest"], answer: 0 },
        { q: "What can WB2 do?", options: ["Pick fruit and work as a guard", "Do the washing", "Understand feelings"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'robot' nghĩa là gì?", options: ["người máy", "con người", "máy tính"], answer: 0 },
      { q: "'water plants' nghĩa là gì?", options: ["tưới cây", "hái quả", "giặt đồ"], answer: 0 },
      { q: "'understand our feelings' nghĩa là gì?", options: ["hiểu cảm xúc của chúng ta", "tưới cây", "làm bảo vệ"], answer: 0 },
      { q: "'làm bảo vệ' tiếng Anh là gì?", options: ["work as a guard", "strong", "pick fruit"], answer: 0 },
      { q: "'home robot' nghĩa là gì?", options: ["robot gia đình", "làm bảo vệ", "khoẻ, mạnh mẽ"], answer: 0 },
      { q: "'hái quả' tiếng Anh là gì?", options: ["pick fruit", "water plants", "work as a guard"], answer: 0 },
      { q: "'strong' nghĩa là gì?", options: ["khoẻ, mạnh mẽ", "hiểu cảm xúc của chúng ta", "người máy"], answer: 0 },
      { q: "'tưới cây' tiếng Anh là gì?", options: ["water plants", "pick fruit", "work as a guard"], answer: 0 }
    ],
    quizExt: [
      { q: "'artificial intelligence' nghĩa là gì?", options: ["trí tuệ nhân tạo", "cảm biến", "pin"], answer: 0 },
      { q: "'factory robot' nghĩa là gì?", options: ["robot nhà máy", "robot vũ trụ", "bảo vệ"], answer: 0 },
      { q: "'pin' tiếng Anh là gì?", options: ["battery", "guard", "space robot"], answer: 0 },
      { q: "'sensor' nghĩa là gì?", options: ["cảm biến", "robot vũ trụ", "robot nhà máy"], answer: 0 },
      { q: "'trí tuệ nhân tạo' tiếng Anh là gì?", options: ["artificial intelligence", "guard", "battery"], answer: 0 },
      { q: "'guard' nghĩa là gì?", options: ["bảo vệ", "cảm biến", "robot nhà máy"], answer: 0 },
      { q: "'robot vũ trụ' tiếng Anh là gì?", options: ["space robot", "artificial intelligence", "battery"], answer: 0 }
    ],
  }
];

const REVIEWS_6 = [
  { id: "r1", afterGroup: 1, titleVi: "Ôn tập 1", units: ["u1", "u2", "u3"] },
  { id: "r2", afterGroup: 2, titleVi: "Ôn tập 2", units: ["u4", "u5", "u6"] },
  { id: "r3", afterGroup: 3, titleVi: "Ôn tập 3", units: ["u7", "u8", "u9"] },
  { id: "r4", afterGroup: 4, titleVi: "Ôn tập 4", units: ["u10", "u11", "u12"] }
];

const GROUP_NAMES_6 = {
  1: "Đảo Khởi đầu",
  2: "Đảo Cộng đồng & Tết",
  3: "Đảo Giải trí & Khám phá",
  4: "Đảo Tương lai"
};

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA[6] = { UNITS: UNITS_6, REVIEWS: REVIEWS_6, GROUP_NAMES: GROUP_NAMES_6 };
