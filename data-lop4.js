// ============================================================
// DU LIEU LOP 4 - Tieng Anh Global Success
// ============================================================

const UNITS_4 = [
  {
    id: "starter", group: 1, icon: "👋",
    titleEn: "Starter: Hello again!", titleVi: "Khởi động: Xin chào lại nhé!",
    core: [
      { en: "hello", vi: "xin chào", icon: "👋", ipa: "hɛˈloʊ" },
      { en: "how are you", vi: "bạn khoẻ không", icon: "🙂", ipa: "haʊ ər ju" },
      { en: "fine, thank you", vi: "khoẻ, cảm ơn bạn", icon: "😊", ipa: "faɪn, θæŋk ju" },
      { en: "nice to see you", vi: "rất vui được gặp bạn", icon: "🤝", ipa: "nis tɪ si ju" },
      { en: "come in", vi: "mời vào", icon: "🚪", ipa: "kəm ɪn" },
      { en: "sit down", vi: "ngồi xuống", icon: "🪑", ipa: "sɪt daʊn" },
      { en: "open your book", vi: "mở sách ra", icon: "📖", ipa: "ˈoʊpən jʊr bʊk" },
      { en: "stand up", vi: "đứng lên", icon: "🧍", ipa: "stænd əp" },
      { en: "jump", vi: "nhảy", icon: "🤸", ipa: "ʤəmp" },
      { en: "kick", vi: "đá", icon: "🦵", ipa: "kɪk" },
      { en: "cycle", vi: "đạp xe", icon: "🚴", ipa: "ˈsaɪkəl" }
    ],
    patterns: [
      { en: "Hello! How are you?", vi: "Xin chào! Bạn khoẻ không?" },
      { en: "I'm fine, thank you.", vi: "Tớ khoẻ, cảm ơn bạn." },
      { en: "Nice to see you.", vi: "Rất vui được gặp bạn." },
      { en: "Sit down, please!", vi: "Mời ngồi xuống!" }
    ],
    ext: [
      { en: "welcome back", vi: "chào mừng trở lại", icon: "🎉", ipa: "ˈwɛlkəm bæk" },
      { en: "classmate", vi: "bạn cùng lớp", icon: "👫", ipa: "ˈklæsˌmeɪt" },
      { en: "teacher", vi: "giáo viên", icon: "🧑‍🏫", ipa: "ˈtiʧər" },
      { en: "greeting", vi: "lời chào", icon: "💬", ipa: "ˈgritɪŋ" },
      { en: "polite", vi: "lịch sự", icon: "🙏", ipa: "pəˈlaɪt" },
      { en: "smile", vi: "mỉm cười", icon: "😄", ipa: "smaɪl" }
    ],
    grammar: [
      { title: "Chào hỏi lịch sự", explain: "'Hello' và 'Hi' đều dùng để chào, 'Hello' trang trọng hơn 1 chút.", example: "Hello, Mai! Hi, Tom!" },
      { title: "Câu mệnh lệnh lịch sự với 'please'", explain: "Thêm 'please' vào cuối câu mệnh lệnh để lịch sự hơn.", example: "Sit down, please! Open your book, please!" }
    ],
    reading: [
      { title: "Back to school", text: "Hello! I'm Mai. Nice to see you again. Come in and sit down, please.", questions: [
        { q: "What does Mai say first?", options: ["Hello", "Goodbye", "Sit down"], answer: 0 },
        { q: "What does Mai ask her friend to do?", options: ["Come in and sit down", "Stand up and jump", "Open the window"], answer: 0 }
      ] },
      { title: "Outdoor fun", text: "Let's jump and kick the ball. Then we can cycle around the playground.", questions: [
        { q: "What do they do first?", options: ["Jump and kick the ball", "Cycle", "Sit down"], answer: 0 },
        { q: "Where do they cycle?", options: ["Around the playground", "In the classroom", "At home"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'hello' nghĩa là gì?", options: ["xin chào", "tạm biệt", "cảm ơn"], answer: 0 },
      { q: "'stand up' nghĩa là gì?", options: ["đứng lên", "ngồi xuống", "mở sách"], answer: 0 },
      { q: "'nhảy' tiếng Anh là gì?", options: ["jump", "kick", "open your book"], answer: 0 },
      { q: "'sit down' nghĩa là gì?", options: ["ngồi xuống", "khoẻ, cảm ơn bạn", "mở sách ra"], answer: 0 },
      { q: "'đứng lên' tiếng Anh là gì?", options: ["stand up", "cycle", "open your book"], answer: 0 },
      { q: "'open your book' nghĩa là gì?", options: ["mở sách ra", "ngồi xuống", "mời vào"], answer: 0 },
      { q: "'đạp xe' tiếng Anh là gì?", options: ["cycle", "come in", "open your book"], answer: 0 },
      { q: "'fine, thank you' nghĩa là gì?", options: ["khoẻ, cảm ơn bạn", "nhảy", "bạn khoẻ không"], answer: 0 },
      { q: "'rất vui được gặp bạn' tiếng Anh là gì?", options: ["nice to see you", "come in", "cycle"], answer: 0 },
      { q: "'kick' nghĩa là gì?", options: ["đá", "mời vào", "nhảy"], answer: 0 }
    ],
    quizExt: [
      { q: "'smile' nghĩa là gì?", options: ["mỉm cười", "chào mừng", "lịch sự"], answer: 0 },
      { q: "'greeting' nghĩa là gì?", options: ["lời chào", "chào mừng trở lại", "mỉm cười"], answer: 0 },
      { q: "'lịch sự' tiếng Anh là gì?", options: ["polite", "teacher", "greeting"], answer: 0 },
      { q: "'teacher' nghĩa là gì?", options: ["giáo viên", "bạn cùng lớp", "lịch sự"], answer: 0 },
      { q: "'mỉm cười' tiếng Anh là gì?", options: ["smile", "greeting", "welcome back"], answer: 0 },
      { q: "'welcome back' nghĩa là gì?", options: ["chào mừng trở lại", "mỉm cười", "bạn cùng lớp"], answer: 0 },
      { q: "'bạn cùng lớp' tiếng Anh là gì?", options: ["classmate", "polite", "greeting"], answer: 0 }
    ],
  },
  {
    id: "u1", group: 1, icon: "🌍",
    titleEn: "Unit 1: My friends", titleVi: "Bạn bè của tôi",
    core: [
      { en: "America", vi: "nước Mỹ", icon: "🇺🇸", ipa: "əˈmɛrɪkə" },
      { en: "Australia", vi: "nước Úc", icon: "🇦🇺", ipa: "ɔˈstreɪljə" },
      { en: "Britain", vi: "nước Anh", icon: "🇬🇧", ipa: "ˈbrɪtən" },
      { en: "Japan", vi: "Nhật Bản", icon: "🇯🇵", ipa: "ʤəˈpæn" },
      { en: "Malaysia", vi: "Malaysia", icon: "🇲🇾", ipa: "məˈleɪʒə" },
      { en: "Singapore", vi: "Singapore", icon: "🇸🇬", ipa: "ˈsɪŋəpɔr" },
      { en: "Thailand", vi: "Thái Lan", icon: "🇹🇭", ipa: "ˈtaɪlænd" },
      { en: "Viet Nam", vi: "Việt Nam", icon: "🇻🇳", ipa: "ˌvjɛtˈnɑm" }
    ],
    patterns: [
      { en: "Where are you from?", vi: "Bạn đến từ đâu?" },
      { en: "I'm from Viet Nam.", vi: "Tớ đến từ Việt Nam." },
      { en: "Where's he from?", vi: "Cậu ấy đến từ đâu?" },
      { en: "He's from America.", vi: "Cậu ấy đến từ nước Mỹ." },
      { en: "She's from Australia.", vi: "Cô ấy đến từ nước Úc." }
    ],
    ext: [
      { en: "Canada", vi: "Canada", icon: "🇨🇦", ipa: "ˈkænədə" },
      { en: "China", vi: "Trung Quốc", icon: "🇨🇳", ipa: "ˈʧaɪnə" },
      { en: "France", vi: "nước Pháp", icon: "🇫🇷", ipa: "fræns" },
      { en: "Korea", vi: "Hàn Quốc", icon: "🇰🇷", ipa: "ˌkɔˈriə" },
      { en: "nationality", vi: "quốc tịch", icon: "🪪", ipa: "ˌnæʃəˈnælɪti" },
      { en: "country", vi: "đất nước", icon: "🗺️", ipa: "ˈkəntri" }
    ],
    grammar: [
      { title: "I'm from ... / He's, She's from ...", explain: "Dùng 'I'm' khi nói về bản thân, 'He's/She's' khi nói về người khác.", example: "I'm from Viet Nam. She's from Japan." },
      { title: "Tên quốc gia luôn viết hoa", explain: "Trong tiếng Anh, tên nước là danh từ riêng nên luôn viết hoa chữ cái đầu.", example: "Australia, Viet Nam, Britain." }
    ],
    reading: [
      { title: "My new friend", text: "Hi, I'm Mary. I'm from America. My friend Ben is from Australia. We are in the same class.", questions: [
        { q: "Where is Mary from?", options: ["America", "Australia", "Japan"], answer: 0 },
        { q: "Where is Ben from?", options: ["Australia", "Britain", "Thailand"], answer: 0 }
      ] },
      { title: "Lucy and Minh", text: "Lucy is from Britain. Minh is from Viet Nam. They are good friends at school.", questions: [
        { q: "Who is from Viet Nam?", options: ["Minh", "Lucy", "Mary"], answer: 0 },
        { q: "Where is Lucy from?", options: ["Britain", "America", "Malaysia"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'Viet Nam' nghĩa là gì?", options: ["Việt Nam", "Nhật Bản", "Thái Lan"], answer: 0 },
      { q: "Chọn câu đúng khi hỏi quốc tịch:", options: ["Where are you from?", "What are you from?", "Who are you from?"], answer: 0 },
      { q: "'Thailand' nghĩa là gì?", options: ["Thái Lan", "Nhật Bản", "Malaysia"], answer: 0 },
      { q: "'Việt Nam' tiếng Anh là gì?", options: ["Viet Nam", "Australia", "Singapore"], answer: 0 },
      { q: "'Britain' nghĩa là gì?", options: ["nước Anh", "Singapore", "Thái Lan"], answer: 0 },
      { q: "'nước Úc' tiếng Anh là gì?", options: ["Australia", "America", "Japan"], answer: 0 },
      { q: "'Singapore' nghĩa là gì?", options: ["Singapore", "nước Úc", "Malaysia"], answer: 0 },
      { q: "'Nhật Bản' tiếng Anh là gì?", options: ["Japan", "America", "Singapore"], answer: 0 }
    ],
    quizExt: [
      { q: "'nationality' nghĩa là gì?", options: ["quốc tịch", "đất nước", "thủ đô"], answer: 0 },
      { q: "'Canada' nghĩa là gì?", options: ["Canada", "quốc tịch", "đất nước"], answer: 0 },
      { q: "'nước Pháp' tiếng Anh là gì?", options: ["France", "Canada", "Korea"], answer: 0 },
      { q: "'country' nghĩa là gì?", options: ["đất nước", "nước Pháp", "quốc tịch"], answer: 0 },
      { q: "'quốc tịch' tiếng Anh là gì?", options: ["nationality", "country", "China"], answer: 0 },
      { q: "'Korea' nghĩa là gì?", options: ["Hàn Quốc", "đất nước", "Canada"], answer: 0 },
      { q: "'Trung Quốc' tiếng Anh là gì?", options: ["China", "Canada", "Korea"], answer: 0 }
    ],
  },
  {
    id: "u2", group: 1, icon: "⏰",
    titleEn: "Unit 2: Time and daily routines", titleVi: "Giờ giấc và thói quen hằng ngày",
    core: [
      { en: "at", vi: "lúc", icon: "🕐", ipa: "æt" },
      { en: "fifteen", vi: "mười lăm (phút)", icon: "1️⃣5️⃣", ipa: "ˈfɪfˈtin" },
      { en: "forty-five", vi: "bốn mươi lăm (phút)", icon: "4️⃣5️⃣", ipa: "ˌfɔrti ˈfaɪv" },
      { en: "o'clock", vi: "giờ đúng", icon: "🕛", ipa: "əˈklɑk" },
      { en: "thirty", vi: "ba mươi (phút)", icon: "3️⃣0️⃣", ipa: "ˈθərˌdi" },
      { en: "get up", vi: "thức dậy", icon: "🛏️", ipa: "gɛt ʌp" },
      { en: "go to bed", vi: "đi ngủ", icon: "😴", ipa: "goʊ tu bɛd" },
      { en: "go to school", vi: "đi học", icon: "🏫", ipa: "goʊ tu skul" },
      { en: "have breakfast", vi: "ăn sáng", icon: "🍳", ipa: "hæv ˈbrɛkfəst" }
    ],
    patterns: [
      { en: "What time is it?", vi: "Bây giờ là mấy giờ?" },
      { en: "It's eight thirty.", vi: "Bây giờ là 8 giờ 30." },
      { en: "What time do you get up?", vi: "Bạn thức dậy lúc mấy giờ?" },
      { en: "I get up at six o'clock.", vi: "Tớ thức dậy lúc 6 giờ." }
    ],
    ext: [
      { en: "wake up", vi: "tỉnh giấc", icon: "👀", ipa: "weɪk əp" },
      { en: "brush teeth", vi: "đánh răng", icon: "🪥", ipa: "brəʃ tiθ" },
      { en: "take a shower", vi: "tắm", icon: "🚿", ipa: "teɪk ə ʃaʊər" },
      { en: "do homework", vi: "làm bài tập", icon: "📝", ipa: "du ˈhoʊmˌwərk" },
      { en: "early", vi: "sớm", icon: "🌅", ipa: "ˈərli" },
      { en: "late", vi: "muộn", icon: "🌙", ipa: "leɪt" }
    ],
    grammar: [
      { title: "Hỏi giờ với 'What time'", explain: "'What time is it?' dùng để hỏi giờ hiện tại. Trả lời bằng 'It's + giờ'.", example: "What time is it? - It's nine o'clock." },
      { title: "Động từ chỉ thói quen thêm 's/es'", explain: "Với chủ ngữ he/she, động từ thường thêm 's' hoặc 'es'.", example: "I get up at 6. → He gets up at 6." }
    ],
    reading: [
      { title: "Minh's morning", text: "Minh gets up at six o'clock. He has breakfast at six thirty. Then he goes to school at seven fifteen.", questions: [
        { q: "What time does Minh get up?", options: ["Six o'clock", "Six thirty", "Seven o'clock"], answer: 0 },
        { q: "What time does Minh go to school?", options: ["Seven fifteen", "Six thirty", "Eight o'clock"], answer: 0 }
      ] },
      { title: "Bedtime", text: "Lucy does her homework at seven. She goes to bed at nine thirty every night.", questions: [
        { q: "When does Lucy do her homework?", options: ["At seven", "At nine", "At six"], answer: 0 },
        { q: "What time does Lucy go to bed?", options: ["Nine thirty", "Eight thirty", "Seven thirty"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'get up' nghĩa là gì?", options: ["thức dậy", "đi ngủ", "ăn sáng"], answer: 0 },
      { q: "8:30 đọc là gì?", options: ["eight thirty", "eight fifteen", "eight forty-five"], answer: 0 },
      { q: "'have breakfast' nghĩa là gì?", options: ["ăn sáng", "lúc", "mười lăm (phút)"], answer: 0 },
      { q: "'đi ngủ' tiếng Anh là gì?", options: ["go to bed", "forty-five", "have breakfast"], answer: 0 },
      { q: "'giờ đúng' tiếng Anh là gì?", options: ["o'clock", "go to bed", "have breakfast"], answer: 0 },
      { q: "'go to school' nghĩa là gì?", options: ["đi học", "ăn sáng", "mười lăm (phút)"], answer: 0 },
      { q: "'bốn mươi lăm (phút)' tiếng Anh là gì?", options: ["forty-five", "have breakfast", "o'clock"], answer: 0 },
      { q: "'at' nghĩa là gì?", options: ["lúc", "bốn mươi lăm (phút)", "mười lăm (phút)"], answer: 0 },
      { q: "'ba mươi (phút)' tiếng Anh là gì?", options: ["thirty", "fifteen", "have breakfast"], answer: 0 }
    ],
    quizExt: [
      { q: "'brush teeth' nghĩa là gì?", options: ["đánh răng", "tắm", "thức dậy"], answer: 0 },
      { q: "'wake up' nghĩa là gì?", options: ["tỉnh giấc", "tắm", "đánh răng"], answer: 0 },
      { q: "'sớm' tiếng Anh là gì?", options: ["early", "late", "take a shower"], answer: 0 },
      { q: "'tắm' tiếng Anh là gì?", options: ["take a shower", "do homework", "early"], answer: 0 },
      { q: "'late' nghĩa là gì?", options: ["muộn", "tắm", "tỉnh giấc"], answer: 0 },
      { q: "'làm bài tập' tiếng Anh là gì?", options: ["do homework", "late", "early"], answer: 0 }
    ],
  },
  {
    id: "u3", group: 1, icon: "📅",
    titleEn: "Unit 3: My week", titleVi: "Tuần của tôi",
    core: [
      { en: "Friday", vi: "thứ Sáu", icon: "📆", ipa: "ˈfraɪˌdeɪ" },
      { en: "Monday", vi: "thứ Hai", icon: "📆", ipa: "ˈmənˌdeɪ" },
      { en: "Saturday", vi: "thứ Bảy", icon: "📆", ipa: "ˈsæˌtɪˌdeɪ" },
      { en: "Sunday", vi: "chủ Nhật", icon: "📆", ipa: "ˈsənˌdi" },
      { en: "Thursday", vi: "thứ Năm", icon: "📆", ipa: "ˈθərzˌdeɪ" },
      { en: "Tuesday", vi: "thứ Ba", icon: "📆", ipa: "ˈtuzˌdeɪ" },
      { en: "Wednesday", vi: "thứ Tư", icon: "📆", ipa: "ˈwɛnzˌdeɪ" },
      { en: "do housework", vi: "làm việc nhà", icon: "🧹", ipa: "du ˈhaʊswɜrk" },
      { en: "listen to music", vi: "nghe nhạc", icon: "🎵", ipa: "ˈlɪsən tu ˈmjuzɪk" },
      { en: "study at school", vi: "học ở trường", icon: "📚", ipa: "ˈstʌdi æt skul" }
    ],
    patterns: [
      { en: "What day is it today?", vi: "Hôm nay là thứ mấy?" },
      { en: "It's Monday.", vi: "Hôm nay là thứ Hai." },
      { en: "What do you do on Sundays?", vi: "Bạn làm gì vào Chủ Nhật?" },
      { en: "I do housework.", vi: "Tớ làm việc nhà." }
    ],
    ext: [
      { en: "weekday", vi: "ngày trong tuần", icon: "🗓️", ipa: "ˈwikˌdeɪ" },
      { en: "weekend", vi: "cuối tuần", icon: "🎉", ipa: "ˈwiˌkɪnd" },
      { en: "today", vi: "hôm nay", icon: "👉", ipa: "təˈdeɪ" },
      { en: "tomorrow", vi: "ngày mai", icon: "➡️", ipa: "təˈmɑˌroʊ" },
      { en: "every day", vi: "mỗi ngày", icon: "🔁", ipa: "ˈɛvəri deɪ" },
      { en: "week", vi: "tuần", icon: "📅", ipa: "wik" }
    ],
    grammar: [
      { title: "Giới từ 'on' với thứ trong tuần", explain: "Dùng 'on' trước tên thứ để chỉ thời điểm.", example: "I study at school on Monday." },
      { title: "Số nhiều 's' khi nói chung chung", explain: "Khi nói về hành động lặp lại vào 1 thứ nào đó, có thể thêm 's' vào tên thứ.", example: "I listen to music on Sundays." }
    ],
    reading: [
      { title: "Mai's week", text: "Mai studies at school from Monday to Friday. On Saturday, she does housework. On Sunday, she listens to music.", questions: [
        { q: "When does Mai do housework?", options: ["Saturday", "Sunday", "Monday"], answer: 0 },
        { q: "When does Mai listen to music?", options: ["Sunday", "Friday", "Tuesday"], answer: 0 }
      ] },
      { title: "Weekend fun", text: "On weekends, Ben does not go to school. He likes Saturdays because he can play games all day.", questions: [
        { q: "Does Ben go to school on weekends?", options: ["No, he doesn't", "Yes, he does", "Sometimes"], answer: 0 },
        { q: "Why does Ben like Saturdays?", options: ["He can play games", "He does homework", "He goes to school"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'thứ Tư' tiếng Anh là gì?", options: ["Wednesday", "Thursday", "Tuesday"], answer: 0 },
      { q: "'do housework' nghĩa là gì?", options: ["làm việc nhà", "nghe nhạc", "đi học"], answer: 0 },
      { q: "'Wednesday' nghĩa là gì?", options: ["thứ Tư", "thứ Năm", "thứ Bảy"], answer: 0 },
      { q: "'thứ Sáu' tiếng Anh là gì?", options: ["Friday", "study at school", "listen to music"], answer: 0 },
      { q: "'Saturday' nghĩa là gì?", options: ["thứ Bảy", "nghe nhạc", "thứ Hai"], answer: 0 },
      { q: "'thứ Ba' tiếng Anh là gì?", options: ["Tuesday", "do housework", "Wednesday"], answer: 0 },
      { q: "'thứ Hai' tiếng Anh là gì?", options: ["Monday", "Saturday", "do housework"], answer: 0 },
      { q: "'Sunday' nghĩa là gì?", options: ["chủ Nhật", "thứ Bảy", "thứ Năm"], answer: 0 },
      { q: "'nghe nhạc' tiếng Anh là gì?", options: ["listen to music", "Saturday", "do housework"], answer: 0 },
      { q: "'study at school' nghĩa là gì?", options: ["học ở trường", "nghe nhạc", "thứ Ba"], answer: 0 }
    ],
    quizExt: [
      { q: "'weekend' nghĩa là gì?", options: ["cuối tuần", "ngày mai", "mỗi ngày"], answer: 0 },
      { q: "'tomorrow' nghĩa là gì?", options: ["ngày mai", "tuần", "cuối tuần"], answer: 0 },
      { q: "'cuối tuần' tiếng Anh là gì?", options: ["weekend", "every day", "today"], answer: 0 },
      { q: "'weekday' nghĩa là gì?", options: ["ngày trong tuần", "ngày mai", "cuối tuần"], answer: 0 },
      { q: "'hôm nay' tiếng Anh là gì?", options: ["today", "tomorrow", "weekend"], answer: 0 },
      { q: "'every day' nghĩa là gì?", options: ["mỗi ngày", "hôm nay", "cuối tuần"], answer: 0 },
      { q: "'tuần' tiếng Anh là gì?", options: ["week", "weekday", "every day"], answer: 0 }
    ],
  },
  {
    id: "u4", group: 1, icon: "🎂",
    titleEn: "Unit 4: My birthday party", titleVi: "Bữa tiệc sinh nhật của tôi",
    core: [
      { en: "April", vi: "tháng Tư", icon: "🌸", ipa: "ˈeɪprəl" },
      { en: "February", vi: "tháng Hai", icon: "❄️", ipa: "ˈfɛbruˌɛri" },
      { en: "January", vi: "tháng Một", icon: "🎊", ipa: "ˈʤænjuˌɛri" },
      { en: "March", vi: "tháng Ba", icon: "🌱", ipa: "mɑrʧ" },
      { en: "May", vi: "tháng Năm", icon: "🌼", ipa: "meɪ" },
      { en: "birthday", vi: "sinh nhật", icon: "🎂", ipa: "ˈbərθˌdeɪ" },
      { en: "chips", vi: "khoai tây chiên", icon: "🍟", ipa: "ʧɪps" },
      { en: "grapes", vi: "nho", icon: "🍇", ipa: "greɪps" },
      { en: "jam", vi: "mứt", icon: "🍓", ipa: "ʤæm" },
      { en: "juice", vi: "nước ép", icon: "🧃", ipa: "ʤus" },
      { en: "lemonade", vi: "nước chanh", icon: "🍋", ipa: "ˈlɛməˈneɪd" },
      { en: "party", vi: "bữa tiệc", icon: "🎉", ipa: "ˈpɑrti" },
      { en: "water", vi: "nước lọc", icon: "💧", ipa: "ˈwɔtər" }
    ],
    patterns: [
      { en: "When's your birthday?", vi: "Sinh nhật bạn khi nào?" },
      { en: "It's in April.", vi: "Sinh nhật tớ vào tháng Tư." },
      { en: "What do you want to eat?", vi: "Bạn muốn ăn gì?" },
      { en: "I want some chips.", vi: "Tớ muốn một ít khoai tây chiên." }
    ],
    ext: [
      { en: "cake", vi: "bánh kem", icon: "🎂", ipa: "keɪk" },
      { en: "candle", vi: "nến", icon: "🕯️", ipa: "ˈkændəl" },
      { en: "present", vi: "món quà", icon: "🎁", ipa: "ˈprɛzənt" },
      { en: "balloon", vi: "bóng bay", icon: "🎈", ipa: "bəˈlun" },
      { en: "invite", vi: "mời", icon: "✉️", ipa: "ˌɪnˈvaɪt" },
      { en: "celebrate", vi: "tổ chức, ăn mừng", icon: "🥳", ipa: "ˈsɛləˌbreɪt" }
    ],
    grammar: [
      { title: "Giới từ 'in' với tháng", explain: "Dùng 'in' trước tên tháng để nói thời điểm diễn ra.", example: "My birthday is in May." },
      { title: "'want + to + V' hoặc 'want + danh từ'", explain: "'Want' có thể theo sau bởi danh từ hoặc 'to + động từ'.", example: "I want some juice. / I want to eat cake." }
    ],
    reading: [
      { title: "Ben's birthday", text: "Ben's birthday is in March. At his party, he wants juice and grapes. His friends bring presents.", questions: [
        { q: "When is Ben's birthday?", options: ["March", "April", "May"], answer: 0 },
        { q: "What does Ben want to drink?", options: ["Juice", "Water", "Lemonade"], answer: 0 }
      ] },
      { title: "A party in January", text: "Lan's birthday party is in January. There are balloons and a big cake. Her friends sing happy birthday.", questions: [
        { q: "When is Lan's party?", options: ["January", "February", "April"], answer: 0 },
        { q: "What do Lan's friends do?", options: ["Sing happy birthday", "Play football", "Do housework"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'grapes' nghĩa là gì?", options: ["nho", "mứt", "nước chanh"], answer: 0 },
      { q: "Tháng Hai tiếng Anh là gì?", options: ["February", "January", "March"], answer: 0 },
      { q: "'April' nghĩa là gì?", options: ["tháng Tư", "nước chanh", "tháng Hai"], answer: 0 },
      { q: "'sinh nhật' tiếng Anh là gì?", options: ["birthday", "jam", "January"], answer: 0 },
      { q: "'May' nghĩa là gì?", options: ["tháng Năm", "nước ép", "tháng Một"], answer: 0 },
      { q: "'tháng Một' tiếng Anh là gì?", options: ["January", "February", "lemonade"], answer: 0 },
      { q: "'party' nghĩa là gì?", options: ["bữa tiệc", "nước lọc", "tháng Hai"], answer: 0 },
      { q: "'tháng Ba' tiếng Anh là gì?", options: ["March", "chips", "water"], answer: 0 },
      { q: "'February' nghĩa là gì?", options: ["tháng Hai", "nước chanh", "tháng Một"], answer: 0 },
      { q: "'nước chanh' tiếng Anh là gì?", options: ["lemonade", "January", "April"], answer: 0 }
    ],
    quizExt: [
      { q: "'candle' nghĩa là gì?", options: ["nến", "bóng bay", "món quà"], answer: 0 },
      { q: "'cake' nghĩa là gì?", options: ["bánh kem", "tổ chức, ăn mừng", "nến"], answer: 0 },
      { q: "'bóng bay' tiếng Anh là gì?", options: ["balloon", "present", "candle"], answer: 0 },
      { q: "'món quà' tiếng Anh là gì?", options: ["present", "cake", "balloon"], answer: 0 },
      { q: "'celebrate' nghĩa là gì?", options: ["tổ chức, ăn mừng", "mời", "bánh kem"], answer: 0 },
      { q: "'mời' tiếng Anh là gì?", options: ["invite", "balloon", "candle"], answer: 0 }
    ],
  },
  {
    id: "u5", group: 1, icon: "🚴",
    titleEn: "Unit 5: Things we can do", titleVi: "Những điều chúng ta có thể làm",
    core: [
      { en: "can", vi: "có thể", icon: "✅", ipa: "kən" },
      { en: "cook", vi: "nấu ăn", icon: "🍳", ipa: "kʊk" },
      { en: "draw", vi: "vẽ", icon: "🎨", ipa: "drɔ" },
      { en: "play the guitar", vi: "chơi đàn ghi-ta", icon: "🎸", ipa: "pleɪ ðə gɪˈtɑr" },
      { en: "play the piano", vi: "chơi đàn piano", icon: "🎹", ipa: "pleɪ ðə piˈænoʊ" },
      { en: "ride a bike", vi: "đi xe đạp", icon: "🚲", ipa: "raɪd ə baɪk" },
      { en: "ride a horse", vi: "cưỡi ngựa", icon: "🐴", ipa: "raɪd ə hɔrs" },
      { en: "roller skate", vi: "trượt patin", icon: "⛸️", ipa: "ˈroʊlər skeɪt" },
      { en: "swim", vi: "bơi", icon: "🏊", ipa: "swɪm" },
      { en: "but", vi: "nhưng", icon: "➰", ipa: "bət" }
    ],
    patterns: [
      { en: "Can you swim?", vi: "Bạn có biết bơi không?" },
      { en: "Yes, I can.", vi: "Vâng, tớ biết." },
      { en: "No, I can't.", vi: "Không, tớ không biết." },
      { en: "Can he ride a bike?", vi: "Cậu ấy có biết đi xe đạp không?" },
      { en: "He can't swim, but he can ride a bike.", vi: "Cậu ấy không biết bơi, nhưng biết đi xe đạp." }
    ],
    ext: [
      { en: "dance", vi: "nhảy múa", icon: "💃", ipa: "dæns" },
      { en: "sing", vi: "hát", icon: "🎤", ipa: "sɪŋ" },
      { en: "skateboard", vi: "trượt ván", icon: "🛹", ipa: "ˈskeɪtˌbɔrd" },
      { en: "climb", vi: "leo trèo", icon: "🧗", ipa: "klaɪm" },
      { en: "jump rope", vi: "nhảy dây", icon: "🪢", ipa: "ʤəmp roʊp" },
      { en: "skip", vi: "nhảy lò cò", icon: "🤸", ipa: "skɪp" }
    ],
    grammar: [
      { title: "Động từ khiếm khuyết 'can'", explain: "'Can' đứng trước động từ nguyên thể, không thêm 's' dù chủ ngữ là he/she.", example: "He can swim. (không viết 'cans' hay 'swims')" },
      { title: "Câu phủ định với 'can't'", explain: "'Can't' là viết tắt của 'cannot', dùng để phủ định khả năng.", example: "I can't ride a horse." }
    ],
    reading: [
      { title: "Talented Tony", text: "Tony can play the guitar and swim very well. But he can't ride a horse.", questions: [
        { q: "What can Tony do?", options: ["Play the guitar and swim", "Cook and draw", "Dance and sing"], answer: 0 },
        { q: "What can't Tony do?", options: ["Ride a horse", "Swim", "Play the guitar"], answer: 0 }
      ] },
      { title: "My sister", text: "My sister can cook and draw. She can't play the piano, but she wants to learn.", questions: [
        { q: "What can my sister do?", options: ["Cook and draw", "Swim and dance", "Ride a bike"], answer: 0 },
        { q: "Can she play the piano?", options: ["No, she can't", "Yes, she can", "She can dance"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'ride a bike' nghĩa là gì?", options: ["đi xe đạp", "cưỡi ngựa", "trượt patin"], answer: 0 },
      { q: "Câu trả lời phủ định đúng là:", options: ["No, I can't.", "No, I amn't.", "No, I not can."], answer: 0 },
      { q: "'can' nghĩa là gì?", options: ["có thể", "đi xe đạp", "trượt patin"], answer: 0 },
      { q: "'nhưng' tiếng Anh là gì?", options: ["but", "play the piano", "play the guitar"], answer: 0 },
      { q: "'roller skate' nghĩa là gì?", options: ["trượt patin", "nhưng", "vẽ"], answer: 0 },
      { q: "'bơi' tiếng Anh là gì?", options: ["swim", "draw", "roller skate"], answer: 0 },
      { q: "'cook' nghĩa là gì?", options: ["nấu ăn", "đi xe đạp", "nhưng"], answer: 0 },
      { q: "'chơi đàn ghi-ta' tiếng Anh là gì?", options: ["play the guitar", "ride a horse", "roller skate"], answer: 0 },
      { q: "'vẽ' tiếng Anh là gì?", options: ["draw", "play the guitar", "swim"], answer: 0 },
      { q: "'ride a horse' nghĩa là gì?", options: ["cưỡi ngựa", "có thể", "đi xe đạp"], answer: 0 }
    ],
    quizExt: [
      { q: "'climb' nghĩa là gì?", options: ["leo trèo", "nhảy múa", "trượt ván"], answer: 0 },
      { q: "'skateboard' nghĩa là gì?", options: ["trượt ván", "nhảy dây", "hát"], answer: 0 },
      { q: "'hát' tiếng Anh là gì?", options: ["sing", "dance", "skip"], answer: 0 },
      { q: "'skip' nghĩa là gì?", options: ["nhảy lò cò", "hát", "trượt ván"], answer: 0 },
      { q: "'nhảy dây' tiếng Anh là gì?", options: ["jump rope", "sing", "skateboard"], answer: 0 },
      { q: "'dance' nghĩa là gì?", options: ["nhảy múa", "nhảy dây", "leo trèo"], answer: 0 },
      { q: "'leo trèo' tiếng Anh là gì?", options: ["climb", "jump rope", "sing"], answer: 0 }
    ],
  },
  {
    id: "u6", group: 2, icon: "🏫",
    titleEn: "Unit 6: Our school facilities", titleVi: "Cơ sở vật chất trường em",
    core: [
      { en: "city", vi: "thành phố", icon: "🏙️", ipa: "ˈsɪti" },
      { en: "mountains", vi: "núi", icon: "⛰️", ipa: "ˈmaʊntənz" },
      { en: "town", vi: "thị trấn", icon: "🏘️", ipa: "taʊn" },
      { en: "village", vi: "làng", icon: "🏡", ipa: "ˈvɪlɪʤ" },
      { en: "building", vi: "toà nhà", icon: "🏢", ipa: "ˈbɪldɪŋ" },
      { en: "computer room", vi: "phòng máy tính", icon: "🖥️", ipa: "kəmˈpjutər rum" },
      { en: "garden", vi: "vườn", icon: "🌷", ipa: "ˈgɑrdən" },
      { en: "playground", vi: "sân chơi", icon: "🛝", ipa: "ˈpleɪˌgraʊnd" }
    ],
    patterns: [
      { en: "Where's your school?", vi: "Trường bạn ở đâu?" },
      { en: "It's in the city.", vi: "Trường tớ ở trong thành phố." },
      { en: "How many buildings are there at your school?", vi: "Trường bạn có bao nhiêu toà nhà?" },
      { en: "There are three buildings.", vi: "Có ba toà nhà." }
    ],
    ext: [
      { en: "classroom", vi: "phòng học", icon: "🪑", ipa: "ˈklæsˌrum" },
      { en: "library", vi: "thư viện", icon: "📚", ipa: "ˈlaɪbrɛˌri" },
      { en: "canteen", vi: "căng tin", icon: "🍱", ipa: "kænˈtin" },
      { en: "gate", vi: "cổng trường", icon: "🚪", ipa: "geɪt" },
      { en: "hallway", vi: "hành lang", icon: "🚶", ipa: "ˈhɔlˌweɪ" },
      { en: "schoolyard", vi: "sân trường", icon: "🏫", ipa: "ˈskuˌljɑrd" }
    ],
    grammar: [
      { title: "There is / There are", explain: "'There is' + danh từ số ít, 'There are' + danh từ số nhiều.", example: "There is a garden. There are two playgrounds." },
      { title: "Hỏi số lượng với 'How many'", explain: "'How many + danh từ số nhiều + are there...?' dùng để hỏi số lượng.", example: "How many computer rooms are there?" }
    ],
    reading: [
      { title: "My school", text: "My school is in a village. There is a small garden and one playground. I like it very much.", questions: [
        { q: "Where is the school?", options: ["In a village", "In a city", "In a town"], answer: 0 },
        { q: "How many playgrounds are there?", options: ["One", "Two", "Three"], answer: 0 }
      ] },
      { title: "A big school", text: "Nam's school is in the city. There are five buildings and two computer rooms.", questions: [
        { q: "Where is Nam's school?", options: ["In the city", "In a village", "In a town"], answer: 0 },
        { q: "How many computer rooms are there?", options: ["Two", "One", "Five"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'playground' nghĩa là gì?", options: ["sân chơi", "phòng máy tính", "toà nhà"], answer: 0 },
      { q: "'mountains' nghĩa là gì?", options: ["núi", "làng", "thị trấn"], answer: 0 },
      { q: "'building' nghĩa là gì?", options: ["toà nhà", "thị trấn", "thành phố"], answer: 0 },
      { q: "'làng' tiếng Anh là gì?", options: ["village", "playground", "garden"], answer: 0 },
      { q: "'town' nghĩa là gì?", options: ["thị trấn", "làng", "thành phố"], answer: 0 },
      { q: "'vườn' tiếng Anh là gì?", options: ["garden", "mountains", "computer room"], answer: 0 },
      { q: "'city' nghĩa là gì?", options: ["thành phố", "toà nhà", "núi"], answer: 0 },
      { q: "'phòng máy tính' tiếng Anh là gì?", options: ["computer room", "playground", "mountains"], answer: 0 }
    ],
    quizExt: [
      { q: "'library' nghĩa là gì?", options: ["thư viện", "căng tin", "hành lang"], answer: 0 },
      { q: "'classroom' nghĩa là gì?", options: ["phòng học", "sân trường", "thư viện"], answer: 0 },
      { q: "'căng tin' tiếng Anh là gì?", options: ["canteen", "gate", "schoolyard"], answer: 0 },
      { q: "'schoolyard' nghĩa là gì?", options: ["sân trường", "hành lang", "cổng trường"], answer: 0 },
      { q: "'cổng trường' tiếng Anh là gì?", options: ["gate", "schoolyard", "canteen"], answer: 0 },
      { q: "'hành lang' tiếng Anh là gì?", options: ["hallway", "canteen", "schoolyard"], answer: 0 }
    ],
  },
  {
    id: "u7", group: 2, icon: "🗓️",
    titleEn: "Unit 7: Our timetables", titleVi: "Thời khoá biểu của chúng em",
    core: [
      { en: "art", vi: "mỹ thuật", icon: "🎨", ipa: "ɑrt" },
      { en: "English", vi: "tiếng Anh", icon: "🇬🇧", ipa: "ˈɪŋlɪʃ" },
      { en: "history and geography", vi: "lịch sử và địa lý", icon: "🗺️", ipa: "ˈhɪstəri ænd dʒiˈɑgrəfi" },
      { en: "maths", vi: "toán", icon: "➗", ipa: "mæθs" },
      { en: "music", vi: "âm nhạc", icon: "🎵", ipa: "mˈjuzɪk" },
      { en: "science", vi: "khoa học", icon: "🔬", ipa: "saɪəns" },
      { en: "Vietnamese", vi: "tiếng Việt", icon: "🇻🇳", ipa: "viˌɛtnɑˈmis" },
      { en: "days of the week", vi: "các thứ trong tuần", icon: "📅", ipa: "deɪz ʌv ðə wik" }
    ],
    patterns: [
      { en: "What subjects do you have today?", vi: "Hôm nay bạn có môn gì?" },
      { en: "I have Maths and Art.", vi: "Tớ có Toán và Mỹ thuật." },
      { en: "When do you have Music?", vi: "Bạn có môn Âm nhạc khi nào?" },
      { en: "I have it on Monday.", vi: "Tớ có vào thứ Hai." }
    ],
    ext: [
      { en: "timetable", vi: "thời khoá biểu", icon: "📋", ipa: "ˈtaɪmˌteɪbəl" },
      { en: "subject", vi: "môn học", icon: "📖", ipa: "ˈsəbʤɪkt" },
      { en: "PE", vi: "thể dục", icon: "⚽", ipa: "ˌpiˈi" },
      { en: "break time", vi: "giờ ra chơi", icon: "🔔", ipa: "breɪk taɪm" },
      { en: "lesson", vi: "tiết học", icon: "📝", ipa: "ˈlɛsən" },
      { en: "period", vi: "tiết (học)", icon: "⏱️", ipa: "ˈpɪriəd" }
    ],
    grammar: [
      { title: "'have' + môn học", explain: "Dùng 'have' để nói có môn học nào trong thời khoá biểu.", example: "I have Science on Tuesday." },
      { title: "Giới từ 'on' với thứ", explain: "Dùng 'on' trước thứ trong tuần khi nói thời điểm có tiết học.", example: "We have Music on Friday." }
    ],
    reading: [
      { title: "Monday timetable", text: "On Monday, Lan has Maths, Vietnamese and Art. She likes Art the most.", questions: [
        { q: "What subject does Lan like most?", options: ["Art", "Maths", "Vietnamese"], answer: 0 },
        { q: "Does Lan have Art on Monday?", options: ["Yes, she does", "No, she doesn't", "Only on Friday"], answer: 0 }
      ] },
      { title: "Busy Wednesday", text: "On Wednesday, Tam has Science, History and Geography, and Music. He has five lessons that day.", questions: [
        { q: "How many lessons does Tam have?", options: ["Five", "Three", "Four"], answer: 0 },
        { q: "When does Tam have Science?", options: ["Wednesday", "Monday", "Sunday"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'maths' nghĩa là gì?", options: ["toán", "khoa học", "mỹ thuật"], answer: 0 },
      { q: "'science' nghĩa là gì?", options: ["khoa học", "âm nhạc", "tiếng Anh"], answer: 0 },
      { q: "'history and geography' nghĩa là gì?", options: ["lịch sử và địa lý", "tiếng Anh", "âm nhạc"], answer: 0 },
      { q: "'âm nhạc' tiếng Anh là gì?", options: ["music", "history and geography", "science"], answer: 0 },
      { q: "'days of the week' nghĩa là gì?", options: ["các thứ trong tuần", "âm nhạc", "tiếng Anh"], answer: 0 },
      { q: "'toán' tiếng Anh là gì?", options: ["maths", "art", "days of the week"], answer: 0 },
      { q: "'English' nghĩa là gì?", options: ["tiếng Anh", "khoa học", "các thứ trong tuần"], answer: 0 },
      { q: "'mỹ thuật' tiếng Anh là gì?", options: ["art", "science", "days of the week"], answer: 0 }
    ],
    quizExt: [
      { q: "'timetable' nghĩa là gì?", options: ["thời khoá biểu", "môn học", "tiết học"], answer: 0 },
      { q: "'lesson' nghĩa là gì?", options: ["tiết học", "thời khoá biểu", "giờ ra chơi"], answer: 0 },
      { q: "'môn học' tiếng Anh là gì?", options: ["subject", "period", "timetable"], answer: 0 },
      { q: "'period' nghĩa là gì?", options: ["tiết (học)", "môn học", "tiết học"], answer: 0 },
      { q: "'thể dục' tiếng Anh là gì?", options: ["PE", "break time", "period"], answer: 0 },
      { q: "'giờ ra chơi' tiếng Anh là gì?", options: ["break time", "subject", "PE"], answer: 0 }
    ],
  },
  {
    id: "u8", group: 2, icon: "❤️",
    titleEn: "Unit 8: My favourite subjects", titleVi: "Môn học yêu thích của tôi",
    core: [
      { en: "IT", vi: "tin học", icon: "💻", ipa: "ɪt" },
      { en: "PE", vi: "thể dục", icon: "🏃", ipa: "ˌpiˈi" },
      { en: "English teacher", vi: "giáo viên tiếng Anh", icon: "🧑‍🏫", ipa: "ˈɪŋglɪʃ ˈtitʃər" },
      { en: "painter", vi: "hoạ sĩ", icon: "🎨", ipa: "ˈpeɪnər" },
      { en: "maths teacher", vi: "giáo viên Toán", icon: "🧑‍🏫", ipa: "mæθs ˈtitʃər" },
      { en: "because", vi: "bởi vì", icon: "💡", ipa: "bɪˈkəz" },
      { en: "why", vi: "tại sao", icon: "❓", ipa: "waɪ" }
    ],
    patterns: [
      { en: "What's your favourite subject?", vi: "Môn học yêu thích của bạn là gì?" },
      { en: "It's IT.", vi: "Đó là Tin học." },
      { en: "Why do you like it?", vi: "Tại sao bạn thích môn đó?" },
      { en: "Because I want to be a painter.", vi: "Vì tớ muốn trở thành hoạ sĩ." }
    ],
    ext: [
      { en: "favourite", vi: "yêu thích", icon: "⭐", ipa: "ˈfeɪvərɪt" },
      { en: "interesting", vi: "thú vị", icon: "😃", ipa: "ˈɪntəˌrɛstɪŋ" },
      { en: "difficult", vi: "khó", icon: "😖", ipa: "ˈdɪfəkəlt" },
      { en: "easy", vi: "dễ", icon: "😌", ipa: "ˈizi" },
      { en: "boring", vi: "chán", icon: "😴", ipa: "ˈbɔrɪŋ" },
      { en: "dream job", vi: "nghề mơ ước", icon: "🌟", ipa: "drim ʤɑb" }
    ],
    grammar: [
      { title: "Hỏi lý do với 'Why...? Because...'", explain: "'Why' dùng để hỏi lý do, trả lời bằng 'Because'.", example: "Why do you like Art? Because it's interesting." },
      { title: "'want to be' + nghề nghiệp", explain: "Dùng để nói về ước mơ nghề nghiệp trong tương lai.", example: "I want to be an English teacher." }
    ],
    reading: [
      { title: "Hoa's favourite subject", text: "Hoa's favourite subject is Art. She likes it because she wants to be a painter.", questions: [
        { q: "What is Hoa's favourite subject?", options: ["Art", "IT", "PE"], answer: 0 },
        { q: "Why does Hoa like Art?", options: ["She wants to be a painter", "It's easy", "It's boring"], answer: 0 }
      ] },
      { title: "Duc likes IT", text: "Duc likes IT because it's interesting. He wants to be a computer expert.", questions: [
        { q: "Why does Duc like IT?", options: ["It's interesting", "It's difficult", "It's boring"], answer: 0 },
        { q: "What does Duc want to be?", options: ["A computer expert", "A painter", "A teacher"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'painter' nghĩa là gì?", options: ["hoạ sĩ", "giáo viên", "học sinh"], answer: 0 },
      { q: "'because' nghĩa là gì?", options: ["bởi vì", "tại sao", "và"], answer: 0 },
      { q: "'why' nghĩa là gì?", options: ["tại sao", "tin học", "giáo viên Toán"], answer: 0 },
      { q: "'hoạ sĩ' tiếng Anh là gì?", options: ["painter", "IT", "because"], answer: 0 },
      { q: "'PE' nghĩa là gì?", options: ["thể dục", "tin học", "bởi vì"], answer: 0 },
      { q: "'giáo viên Toán' tiếng Anh là gì?", options: ["maths teacher", "PE", "painter"], answer: 0 },
      { q: "'tin học' tiếng Anh là gì?", options: ["IT", "painter", "PE"], answer: 0 }
    ],
    quizExt: [
      { q: "'boring' nghĩa là gì?", options: ["chán", "thú vị", "dễ"], answer: 0 },
      { q: "'favourite' nghĩa là gì?", options: ["yêu thích", "khó", "thú vị"], answer: 0 },
      { q: "'nghề mơ ước' tiếng Anh là gì?", options: ["dream job", "easy", "interesting"], answer: 0 },
      { q: "'difficult' nghĩa là gì?", options: ["khó", "chán", "dễ"], answer: 0 },
      { q: "'dễ' tiếng Anh là gì?", options: ["easy", "difficult", "dream job"], answer: 0 },
      { q: "'interesting' nghĩa là gì?", options: ["thú vị", "chán", "dễ"], answer: 0 },
      { q: "'chán' tiếng Anh là gì?", options: ["boring", "interesting", "easy"], answer: 0 }
    ],
  },
  {
    id: "u9", group: 2, icon: "🏅",
    titleEn: "Unit 9: Our sports day", titleVi: "Ngày hội thể thao của chúng em",
    core: [
      { en: "December", vi: "tháng Mười hai", icon: "🎄", ipa: "dɪˈsɛmbər" },
      { en: "June", vi: "tháng Sáu", icon: "☀️", ipa: "ʤun" },
      { en: "July", vi: "tháng Bảy", icon: "🏖️", ipa: "ˌʤuˈlaɪ" },
      { en: "November", vi: "tháng Mười một", icon: "🍂", ipa: "noʊˈvɛmbər" },
      { en: "October", vi: "tháng Mười", icon: "🎃", ipa: "ɑkˈtoʊbər" },
      { en: "September", vi: "tháng Chín", icon: "🍎", ipa: "sɛpˈtɛmbər" },
      { en: "sports day", vi: "ngày hội thể thao", icon: "🏅", ipa: "spɔrts deɪ" }
    ],
    patterns: [
      { en: "Is your sports day in October?", vi: "Ngày hội thể thao của bạn vào tháng Mười à?" },
      { en: "Yes, it is.", vi: "Vâng, đúng vậy." },
      { en: "No, it isn't.", vi: "Không, không phải." },
      { en: "When's your sports day?", vi: "Ngày hội thể thao của bạn khi nào?" },
      { en: "It's in September.", vi: "Vào tháng Chín." }
    ],
    ext: [
      { en: "race", vi: "cuộc đua", icon: "🏃", ipa: "reɪs" },
      { en: "competition", vi: "cuộc thi", icon: "🏆", ipa: "ˌkɑmpəˈtɪʃən" },
      { en: "team", vi: "đội", icon: "🤝", ipa: "tim" },
      { en: "winner", vi: "người chiến thắng", icon: "🥇", ipa: "ˈwɪnər" },
      { en: "medal", vi: "huy chương", icon: "🎖️", ipa: "ˈmɛdəl" },
      { en: "cheer", vi: "cổ vũ", icon: "📣", ipa: "ʧɪr" }
    ],
    grammar: [
      { title: "Câu hỏi Yes/No với 'Is'", explain: "Đảo 'is' lên trước chủ ngữ để tạo câu hỏi Yes/No.", example: "Is your sports day in June? - Yes, it is." },
      { title: "Giới từ 'in' với tháng", explain: "Dùng 'in' trước tên tháng khi nói về thời điểm sự kiện.", example: "Our sports day is in November." }
    ],
    reading: [
      { title: "Sports day at school", text: "Our sports day is in September. There are many races. My team wins two medals.", questions: [
        { q: "When is the sports day?", options: ["September", "October", "December"], answer: 0 },
        { q: "How many medals does the team win?", options: ["Two", "One", "Three"], answer: 0 }
      ] },
      { title: "A rainy sports day", text: "Last year, our sports day was in July. It rained, so we moved it to August.", questions: [
        { q: "When was the sports day last year?", options: ["July", "June", "September"], answer: 0 },
        { q: "Why did they move it?", options: ["It rained", "It was too hot", "It was a holiday"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'sports day' nghĩa là gì?", options: ["ngày hội thể thao", "ngày sinh nhật", "ngày khai giảng"], answer: 0 },
      { q: "Tháng Mười hai tiếng Anh là gì?", options: ["December", "November", "October"], answer: 0 },
      { q: "'October' nghĩa là gì?", options: ["tháng Mười", "ngày hội thể thao", "tháng Sáu"], answer: 0 },
      { q: "'tháng Chín' tiếng Anh là gì?", options: ["September", "December", "November"], answer: 0 },
      { q: "'June' nghĩa là gì?", options: ["tháng Sáu", "ngày hội thể thao", "tháng Bảy"], answer: 0 },
      { q: "'ngày hội thể thao' tiếng Anh là gì?", options: ["sports day", "October", "July"], answer: 0 },
      { q: "'July' nghĩa là gì?", options: ["tháng Bảy", "tháng Mười hai", "ngày hội thể thao"], answer: 0 }
    ],
    quizExt: [
      { q: "'medal' nghĩa là gì?", options: ["huy chương", "đội", "cuộc đua"], answer: 0 },
      { q: "'cuộc đua' tiếng Anh là gì?", options: ["race", "medal", "cheer"], answer: 0 },
      { q: "'competition' nghĩa là gì?", options: ["cuộc thi", "người chiến thắng", "cuộc đua"], answer: 0 },
      { q: "'đội' tiếng Anh là gì?", options: ["team", "race", "medal"], answer: 0 },
      { q: "'winner' nghĩa là gì?", options: ["người chiến thắng", "cuộc đua", "cổ vũ"], answer: 0 },
      { q: "'cổ vũ' tiếng Anh là gì?", options: ["cheer", "medal", "competition"], answer: 0 }
    ],
  },
  {
    id: "u10", group: 2, icon: "🏖️",
    titleEn: "Unit 10: Our summer holidays", titleVi: "Kỳ nghỉ hè của chúng em",
    core: [
      { en: "beach", vi: "bãi biển", icon: "🏖️", ipa: "biʧ" },
      { en: "campsite", vi: "khu cắm trại", icon: "⛺", ipa: "ˈkæmpˌsaɪt" },
      { en: "countryside", vi: "vùng quê", icon: "🌾", ipa: "ˈkəntriˌsaɪd" },
      { en: "Bangkok", vi: "Băng Cốc", icon: "🏯", ipa: "ˈbæŋkɑk" },
      { en: "London", vi: "Luân Đôn", icon: "🏰", ipa: "ˈləndən" },
      { en: "Sydney", vi: "Sydney", icon: "🌉", ipa: "ˈsɪdni" },
      { en: "Tokyo", vi: "Tokyo", icon: "🗼", ipa: "ˈtoʊkiˌoʊ" },
      { en: "last", vi: "vừa qua", icon: "⏮️", ipa: "læst" },
      { en: "yesterday", vi: "hôm qua", icon: "📆", ipa: "ˈjɛstərˌdeɪ" }
    ],
    patterns: [
      { en: "Were you at the beach last weekend?", vi: "Bạn đã ở bãi biển vào cuối tuần trước à?" },
      { en: "Yes, I was.", vi: "Vâng, đúng vậy." },
      { en: "No, I wasn't.", vi: "Không, không phải." },
      { en: "Where were you last summer?", vi: "Mùa hè trước bạn đã ở đâu?" },
      { en: "I was in London.", vi: "Tớ đã ở Luân Đôn." }
    ],
    ext: [
      { en: "holiday", vi: "kỳ nghỉ", icon: "🧳", ipa: "ˈhɑlɪˌdeɪ" },
      { en: "travel", vi: "đi du lịch", icon: "✈️", ipa: "ˈtrævəl" },
      { en: "souvenir", vi: "quà lưu niệm", icon: "🎁", ipa: "ˌsuvəˈnɪr" },
      { en: "sandcastle", vi: "lâu đài cát", icon: "🏰", ipa: "ˈsændˌkæsəl" },
      { en: "suntan", vi: "rám nắng", icon: "🌞", ipa: "ˈsənˌtæn" },
      { en: "relax", vi: "thư giãn", icon: "🧘", ipa: "rɪˈlæks" }
    ],
    grammar: [
      { title: "Động từ 'to be' ở thì quá khứ: was/were", explain: "'I/He/She + was', 'You/We/They + were' khi nói về quá khứ.", example: "I was at the beach. They were in London." },
      { title: "Câu hỏi quá khứ với 'Where were you...?'", explain: "Dùng để hỏi về địa điểm trong quá khứ.", example: "Where were you yesterday? - I was at the campsite." }
    ],
    reading: [
      { title: "Summer in Sydney", text: "Last summer, Mary was in Sydney. She was at the beach every day. She had a great holiday.", questions: [
        { q: "Where was Mary last summer?", options: ["Sydney", "Tokyo", "London"], answer: 0 },
        { q: "Where was she every day?", options: ["At the beach", "At the campsite", "In the countryside"], answer: 0 }
      ] },
      { title: "A trip to the countryside", text: "Last weekend, Nam was in the countryside with his family. They stayed at a small campsite.", questions: [
        { q: "Where was Nam last weekend?", options: ["In the countryside", "At the beach", "In Tokyo"], answer: 0 },
        { q: "Where did they stay?", options: ["At a campsite", "At a hotel", "At a beach house"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'beach' nghĩa là gì?", options: ["bãi biển", "vùng quê", "khu cắm trại"], answer: 0 },
      { q: "Quá khứ của 'is/am' là gì?", options: ["was", "were", "be"], answer: 0 },
      { q: "'yesterday' nghĩa là gì?", options: ["hôm qua", "vùng quê", "Sydney"], answer: 0 },
      { q: "'vừa qua' tiếng Anh là gì?", options: ["last", "beach", "Bangkok"], answer: 0 },
      { q: "'campsite' nghĩa là gì?", options: ["khu cắm trại", "Luân Đôn", "Sydney"], answer: 0 },
      { q: "'bãi biển' tiếng Anh là gì?", options: ["beach", "campsite", "Bangkok"], answer: 0 },
      { q: "'Sydney' nghĩa là gì?", options: ["Sydney", "bãi biển", "Tokyo"], answer: 0 },
      { q: "'vùng quê' tiếng Anh là gì?", options: ["countryside", "last", "Bangkok"], answer: 0 },
      { q: "'Tokyo' nghĩa là gì?", options: ["Tokyo", "Luân Đôn", "khu cắm trại"], answer: 0 }
    ],
    quizExt: [
      { q: "'travel' nghĩa là gì?", options: ["đi du lịch", "thư giãn", "quà lưu niệm"], answer: 0 },
      { q: "'suntan' nghĩa là gì?", options: ["rám nắng", "thư giãn", "đi du lịch"], answer: 0 },
      { q: "'đi du lịch' tiếng Anh là gì?", options: ["travel", "sandcastle", "relax"], answer: 0 },
      { q: "'souvenir' nghĩa là gì?", options: ["quà lưu niệm", "thư giãn", "đi du lịch"], answer: 0 },
      { q: "'thư giãn' tiếng Anh là gì?", options: ["relax", "suntan", "sandcastle"], answer: 0 },
      { q: "'sandcastle' nghĩa là gì?", options: ["lâu đài cát", "thư giãn", "kỳ nghỉ"], answer: 0 },
      { q: "'kỳ nghỉ' tiếng Anh là gì?", options: ["holiday", "sandcastle", "travel"], answer: 0 }
    ],
  },
  {
    id: "u11", group: 3, icon: "🏠",
    titleEn: "Unit 11: My home", titleVi: "Ngôi nhà của tôi",
    core: [
      { en: "road", vi: "con đường (lớn)", icon: "🛣️", ipa: "roʊd" },
      { en: "street", vi: "phố", icon: "🏘️", ipa: "strit" },
      { en: "big", vi: "to, lớn", icon: "📏", ipa: "bɪg" },
      { en: "busy", vi: "đông đúc, tấp nập", icon: "🚗", ipa: "ˈbɪzi" },
      { en: "live", vi: "sống, sinh sống", icon: "🏡", ipa: "lɪv" },
      { en: "noisy", vi: "ồn ào", icon: "🔊", ipa: "ˈnɔɪzi" },
      { en: "quiet", vi: "yên tĩnh", icon: "🤫", ipa: "kwaɪət" }
    ],
    patterns: [
      { en: "Where do you live?", vi: "Bạn sống ở đâu?" },
      { en: "I live at 81 Tran Hung Dao Street.", vi: "Tớ sống ở số 81 phố Trần Hưng Đạo." },
      { en: "What's the street like?", vi: "Con phố đó như thế nào?" },
      { en: "It's busy and noisy.", vi: "Nó đông đúc và ồn ào." }
    ],
    ext: [
      { en: "apartment", vi: "căn hộ", icon: "🏢", ipa: "əˈpɑrtmənt" },
      { en: "neighbourhood", vi: "khu phố", icon: "🏘️", ipa: "ˈneɪbərˌhʊd" },
      { en: "address", vi: "địa chỉ", icon: "📍", ipa: "ˈæˌdrɛs" },
      { en: "peaceful", vi: "thanh bình", icon: "🕊️", ipa: "ˈpisfəl" },
      { en: "crowded", vi: "đông đúc", icon: "👥", ipa: "ˈkraʊdɪd" },
      { en: "countryside home", vi: "nhà ở quê", icon: "🌾", ipa: "ˈkəntriˌsaɪd hoʊm" }
    ],
    grammar: [
      { title: "Giới từ 'at' + số nhà + tên phố", explain: "Dùng 'at' trước địa chỉ cụ thể (số nhà + tên phố).", example: "I live at 12 Le Loi Street." },
      { title: "Tính từ mô tả nơi chốn", explain: "Tính từ đứng sau 'It's' để mô tả đặc điểm của con phố/ngôi nhà.", example: "It's quiet and big." }
    ],
    reading: [
      { title: "An's street", text: "An lives at 5 Hoa Street. It's a quiet street with many trees. An likes it very much.", questions: [
        { q: "Where does An live?", options: ["5 Hoa Street", "5 Hoa Road", "15 Hoa Street"], answer: 0 },
        { q: "What's the street like?", options: ["Quiet", "Busy", "Noisy"], answer: 0 }
      ] },
      { title: "A busy road", text: "Ha lives on a big, busy road in the city. There are many cars and shops near her home.", questions: [
        { q: "What is Ha's road like?", options: ["Big and busy", "Small and quiet", "Long and empty"], answer: 0 },
        { q: "What is near Ha's home?", options: ["Cars and shops", "A river", "A farm"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'quiet' nghĩa là gì?", options: ["yên tĩnh", "ồn ào", "đông đúc"], answer: 0 },
      { q: "'live' nghĩa là gì?", options: ["sống, sinh sống", "đi lại", "làm việc"], answer: 0 },
      { q: "'big' nghĩa là gì?", options: ["to, lớn", "yên tĩnh", "con đường (lớn)"], answer: 0 },
      { q: "'sống, sinh sống' tiếng Anh là gì?", options: ["live", "quiet", "big"], answer: 0 },
      { q: "'busy' nghĩa là gì?", options: ["đông đúc, tấp nập", "ồn ào", "con đường (lớn)"], answer: 0 },
      { q: "'ồn ào' tiếng Anh là gì?", options: ["noisy", "street", "road"], answer: 0 },
      { q: "'street' nghĩa là gì?", options: ["phố", "sống, sinh sống", "ồn ào"], answer: 0 }
    ],
    quizExt: [
      { q: "'address' nghĩa là gì?", options: ["địa chỉ", "khu phố", "căn hộ"], answer: 0 },
      { q: "'peaceful' nghĩa là gì?", options: ["thanh bình", "đông đúc", "địa chỉ"], answer: 0 },
      { q: "'căn hộ' tiếng Anh là gì?", options: ["apartment", "peaceful", "countryside home"], answer: 0 },
      { q: "'neighbourhood' nghĩa là gì?", options: ["khu phố", "thanh bình", "đông đúc"], answer: 0 },
      { q: "'đông đúc' tiếng Anh là gì?", options: ["crowded", "neighbourhood", "apartment"], answer: 0 },
      { q: "'countryside home' nghĩa là gì?", options: ["nhà ở quê", "thanh bình", "căn hộ"], answer: 0 },
      { q: "'địa chỉ' tiếng Anh là gì?", options: ["address", "neighbourhood", "countryside home"], answer: 0 }
    ],
  },
  {
    id: "u12", group: 3, icon: "👩‍⚕️",
    titleEn: "Unit 12: Jobs", titleVi: "Nghề nghiệp",
    core: [
      { en: "actor", vi: "diễn viên", icon: "🎭", ipa: "ˈæktər" },
      { en: "farmer", vi: "nông dân", icon: "🧑‍🌾", ipa: "ˈfɑrmər" },
      { en: "nurse", vi: "y tá", icon: "👩‍⚕️", ipa: "nərs" },
      { en: "office worker", vi: "nhân viên văn phòng", icon: "💼", ipa: "ˈɔfɪs ˈwɜrkər" },
      { en: "policeman", vi: "cảnh sát", icon: "👮", ipa: "pəˈlismən" },
      { en: "factory", vi: "nhà máy", icon: "🏭", ipa: "ˈfæktəri" },
      { en: "farm", vi: "nông trại", icon: "🚜", ipa: "fɑrm" },
      { en: "hospital", vi: "bệnh viện", icon: "🏥", ipa: "ˈhɑˌspɪtəl" },
      { en: "nursing home", vi: "viện dưỡng lão", icon: "🏥", ipa: "ˈnɜrsɪŋ hoʊm" }
    ],
    patterns: [
      { en: "What does he do?", vi: "Anh ấy làm nghề gì?" },
      { en: "He's a nurse.", vi: "Anh ấy là y tá." },
      { en: "Where does she work?", vi: "Cô ấy làm việc ở đâu?" },
      { en: "She works in a hospital.", vi: "Cô ấy làm việc ở bệnh viện." }
    ],
    ext: [
      { en: "doctor", vi: "bác sĩ", icon: "👨‍⚕️", ipa: "ˈdɔktər" },
      { en: "engineer", vi: "kỹ sư", icon: "👷", ipa: "ˈɛnʤəˈnɪr" },
      { en: "driver", vi: "tài xế", icon: "🚗", ipa: "ˈdraɪvər" },
      { en: "chef", vi: "đầu bếp", icon: "👨‍🍳", ipa: "ʃɛf" },
      { en: "firefighter", vi: "lính cứu hoả", icon: "🚒", ipa: "ˈfaɪrˌfaɪtər" },
      { en: "scientist", vi: "nhà khoa học", icon: "🧑‍🔬", ipa: "ˈsaɪəntɪst" }
    ],
    grammar: [
      { title: "'He/She works in/at + nơi làm việc'", explain: "Dùng 'in' với nơi rộng (hospital, factory) hoặc 'at' với địa điểm cụ thể.", example: "She works in a hospital. He works at a farm." },
      { title: "Mạo từ 'a/an' trước nghề nghiệp", explain: "Luôn dùng 'a' hoặc 'an' trước tên nghề nghiệp số ít.", example: "He's a farmer. She's an office worker." }
    ],
    reading: [
      { title: "My father's job", text: "My father is a policeman. He works very hard every day to keep our city safe.", questions: [
        { q: "What does my father do?", options: ["He's a policeman", "He's a farmer", "He's a nurse"], answer: 0 },
        { q: "What does he do every day?", options: ["Works hard", "Stays home", "Goes to school"], answer: 0 }
      ] },
      { title: "Working on a farm", text: "Mr Ba is a farmer. He works on a farm outside the city. He grows rice and vegetables.", questions: [
        { q: "Where does Mr Ba work?", options: ["On a farm", "In a factory", "In a hospital"], answer: 0 },
        { q: "What does he grow?", options: ["Rice and vegetables", "Fruit trees", "Flowers"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'nurse' nghĩa là gì?", options: ["y tá", "bác sĩ", "cảnh sát"], answer: 0 },
      { q: "'factory' nghĩa là gì?", options: ["nhà máy", "nông trại", "bệnh viện"], answer: 0 },
      { q: "'nhà máy' tiếng Anh là gì?", options: ["factory", "hospital", "nursing home"], answer: 0 },
      { q: "'actor' nghĩa là gì?", options: ["diễn viên", "viện dưỡng lão", "nhà máy"], answer: 0 },
      { q: "'nông trại' tiếng Anh là gì?", options: ["farm", "policeman", "nursing home"], answer: 0 },
      { q: "'office worker' nghĩa là gì?", options: ["nhân viên văn phòng", "nông trại", "diễn viên"], answer: 0 },
      { q: "'cảnh sát' tiếng Anh là gì?", options: ["policeman", "farm", "hospital"], answer: 0 },
      { q: "'nursing home' nghĩa là gì?", options: ["viện dưỡng lão", "nhân viên văn phòng", "nông dân"], answer: 0 },
      { q: "'bệnh viện' tiếng Anh là gì?", options: ["hospital", "farmer", "policeman"], answer: 0 }
    ],
    quizExt: [
      { q: "'firefighter' nghĩa là gì?", options: ["lính cứu hoả", "kỹ sư", "tài xế"], answer: 0 },
      { q: "'chef' nghĩa là gì?", options: ["đầu bếp", "lính cứu hoả", "nhà khoa học"], answer: 0 },
      { q: "'bác sĩ' tiếng Anh là gì?", options: ["doctor", "chef", "driver"], answer: 0 },
      { q: "'driver' nghĩa là gì?", options: ["tài xế", "bác sĩ", "lính cứu hoả"], answer: 0 },
      { q: "'lính cứu hoả' tiếng Anh là gì?", options: ["firefighter", "scientist", "chef"], answer: 0 },
      { q: "'engineer' nghĩa là gì?", options: ["kỹ sư", "bác sĩ", "lính cứu hoả"], answer: 0 },
      { q: "'nhà khoa học' tiếng Anh là gì?", options: ["scientist", "doctor", "driver"], answer: 0 }
    ],
  },
  {
    id: "u13", group: 3, icon: "🧑",
    titleEn: "Unit 13: Appearance", titleVi: "Ngoại hình",
    core: [
      { en: "big", vi: "to", icon: "📏", ipa: "bɪg" },
      { en: "short", vi: "thấp, ngắn", icon: "📉", ipa: "ʃɔrt" },
      { en: "slim", vi: "mảnh khảnh", icon: "🧍", ipa: "slɪm" },
      { en: "tall", vi: "cao", icon: "📈", ipa: "tɔl" },
      { en: "eyes", vi: "đôi mắt", icon: "👀", ipa: "aɪz" },
      { en: "face", vi: "khuôn mặt", icon: "😊", ipa: "feɪs" },
      { en: "hair", vi: "tóc", icon: "💇", ipa: "hɛr" },
      { en: "long", vi: "dài", icon: "➖", ipa: "lɔŋ" },
      { en: "round", vi: "tròn", icon: "⭕", ipa: "raʊnd" }
    ],
    patterns: [
      { en: "What does he look like?", vi: "Cậu ấy trông như thế nào?" },
      { en: "He's tall and slim.", vi: "Cậu ấy cao và mảnh khảnh." },
      { en: "He has long hair.", vi: "Cậu ấy có mái tóc dài." },
      { en: "She has a round face.", vi: "Cô ấy có khuôn mặt tròn." }
    ],
    ext: [
      { en: "curly hair", vi: "tóc xoăn", icon: "🦱", ipa: "ˈkərli hɛr" },
      { en: "straight hair", vi: "tóc thẳng", icon: "💁", ipa: "streɪt hɛr" },
      { en: "short hair", vi: "tóc ngắn", icon: "✂️", ipa: "ʃɔrt hɛr" },
      { en: "young", vi: "trẻ", icon: "👶", ipa: "jəŋ" },
      { en: "old", vi: "già", icon: "👴", ipa: "oʊld" },
      { en: "beautiful", vi: "xinh đẹp", icon: "🌸", ipa: "ˈbjutəfəl" }
    ],
    grammar: [
      { title: "'be' + tính từ vs 'have' + danh từ", explain: "Dùng 'be' với tính từ (tall, short) và 'have' với bộ phận (hair, eyes).", example: "She is tall. She has long hair." },
      { title: "Thứ tự tính từ trước danh từ", explain: "Tính từ đứng trước danh từ khi mô tả, không cần 'is/are' ở giữa.", example: "a round face, long hair." }
    ],
    reading: [
      { title: "My best friend", text: "My best friend is tall and slim. She has long hair and a round face.", questions: [
        { q: "What does my friend look like?", options: ["Tall and slim", "Short and big", "Old and tall"], answer: 0 },
        { q: "What kind of hair does she have?", options: ["Long hair", "Short hair", "Curly hair"], answer: 0 }
      ] },
      { title: "Grandpa", text: "My grandpa is short. He has grey hair and kind eyes. Everyone loves him.", questions: [
        { q: "What does grandpa look like?", options: ["Short", "Tall", "Slim"], answer: 0 },
        { q: "What colour is his hair?", options: ["Grey", "Black", "Brown"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'tall' nghĩa là gì?", options: ["cao", "thấp", "tròn"], answer: 0 },
      { q: "'round face' nghĩa là gì?", options: ["khuôn mặt tròn", "mái tóc dài", "đôi mắt to"], answer: 0 },
      { q: "'dài' tiếng Anh là gì?", options: ["long", "face", "short"], answer: 0 },
      { q: "'face' nghĩa là gì?", options: ["khuôn mặt", "cao", "dài"], answer: 0 },
      { q: "'tròn' tiếng Anh là gì?", options: ["round", "hair", "tall"], answer: 0 },
      { q: "'eyes' nghĩa là gì?", options: ["đôi mắt", "khuôn mặt", "dài"], answer: 0 },
      { q: "'to' tiếng Anh là gì?", options: ["big", "slim", "eyes"], answer: 0 },
      { q: "'hair' nghĩa là gì?", options: ["tóc", "dài", "thấp, ngắn"], answer: 0 },
      { q: "'mảnh khảnh' tiếng Anh là gì?", options: ["slim", "round", "big"], answer: 0 }
    ],
    quizExt: [
      { q: "'curly hair' nghĩa là gì?", options: ["tóc xoăn", "tóc thẳng", "tóc ngắn"], answer: 0 },
      { q: "'young' nghĩa là gì?", options: ["trẻ", "tóc xoăn", "xinh đẹp"], answer: 0 },
      { q: "'xinh đẹp' tiếng Anh là gì?", options: ["beautiful", "young", "old"], answer: 0 },
      { q: "'short hair' nghĩa là gì?", options: ["tóc ngắn", "xinh đẹp", "tóc xoăn"], answer: 0 },
      { q: "'tóc thẳng' tiếng Anh là gì?", options: ["straight hair", "beautiful", "young"], answer: 0 },
      { q: "'old' nghĩa là gì?", options: ["già", "tóc xoăn", "trẻ"], answer: 0 },
      { q: "'tóc xoăn' tiếng Anh là gì?", options: ["curly hair", "old", "young"], answer: 0 }
    ],
  },
  {
    id: "u14", group: 3, icon: "🧹",
    titleEn: "Unit 14: Daily activities", titleVi: "Hoạt động hằng ngày",
    core: [
      { en: "at noon", vi: "vào buổi trưa", icon: "🌤️", ipa: "æt nun" },
      { en: "in the afternoon", vi: "vào buổi chiều", icon: "🌇", ipa: "ɪn ði ˌæftərˈnun" },
      { en: "in the evening", vi: "vào buổi tối", icon: "🌆", ipa: "ɪn ði ˈivnɪŋ" },
      { en: "in the morning", vi: "vào buổi sáng", icon: "🌅", ipa: "ɪn ðə ˈmɔrnɪŋ" },
      { en: "clean the floor", vi: "lau nhà", icon: "🧹", ipa: "klin ðə flɔr" },
      { en: "help with the cooking", vi: "phụ nấu ăn", icon: "🍲", ipa: "hɛlp wɪð ðə ˈkʊkɪŋ" },
      { en: "wash the clothes", vi: "giặt quần áo", icon: "👕", ipa: "wɑʃ ðə kloʊðz" },
      { en: "wash the dishes", vi: "rửa bát", icon: "🍽️", ipa: "wɑʃ ðə ˈdɪʃɪz" },
      { en: "watch", vi: "xem", icon: "📺", ipa: "wɔʧ" }
    ],
    patterns: [
      { en: "When do you watch TV?", vi: "Bạn xem tivi khi nào?" },
      { en: "I watch TV in the evening.", vi: "Tớ xem tivi vào buổi tối." },
      { en: "What do you do in the morning?", vi: "Bạn làm gì vào buổi sáng?" },
      { en: "I clean the floor.", vi: "Tớ lau nhà." }
    ],
    ext: [
      { en: "feed the pet", vi: "cho thú cưng ăn", icon: "🐶", ipa: "fid ðə pɛt" },
      { en: "water the plants", vi: "tưới cây", icon: "🪴", ipa: "ˈwɔtər ðə plænts" },
      { en: "make the bed", vi: "dọn giường", icon: "🛏️", ipa: "meɪk ðə bɛd" },
      { en: "tidy the room", vi: "dọn phòng", icon: "🧺", ipa: "ˈtaɪdi ðə rum" },
      { en: "iron clothes", vi: "ủi quần áo", icon: "🔥", ipa: "aɪərn kloʊðz" },
      { en: "take out the rubbish", vi: "đổ rác", icon: "🗑️", ipa: "teɪk aʊt ðə ˈrəbɪʃ" }
    ],
    grammar: [
      { title: "Giới từ chỉ thời gian trong ngày", explain: "'in the morning/afternoon/evening' nhưng 'at noon/at night'.", example: "I help with the cooking in the evening." },
      { title: "Thì hiện tại đơn cho thói quen", explain: "Diễn tả việc lặp lại hằng ngày, chia động từ theo chủ ngữ.", example: "She washes the dishes every day." }
    ],
    reading: [
      { title: "Helping at home", text: "Every morning, Lan cleans the floor. In the evening, she helps with the cooking with her mother.", questions: [
        { q: "What does Lan do in the morning?", options: ["Cleans the floor", "Washes the dishes", "Watches TV"], answer: 0 },
        { q: "What does she do in the evening?", options: ["Helps with the cooking", "Washes the clothes", "Studies"], answer: 0 }
      ] },
      { title: "A helpful boy", text: "Duc washes the dishes at noon. He watches TV in the evening after finishing homework.", questions: [
        { q: "When does Duc wash the dishes?", options: ["At noon", "In the morning", "In the evening"], answer: 0 },
        { q: "When does he watch TV?", options: ["In the evening", "At noon", "In the morning"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'wash the dishes' nghĩa là gì?", options: ["rửa bát", "giặt quần áo", "lau nhà"], answer: 0 },
      { q: "'in the evening' nghĩa là gì?", options: ["vào buổi tối", "vào buổi sáng", "vào buổi trưa"], answer: 0 },
      { q: "'wash the clothes' nghĩa là gì?", options: ["giặt quần áo", "lau nhà", "phụ nấu ăn"], answer: 0 },
      { q: "'vào buổi trưa' tiếng Anh là gì?", options: ["at noon", "in the evening", "in the afternoon"], answer: 0 },
      { q: "'in the morning' nghĩa là gì?", options: ["vào buổi sáng", "vào buổi chiều", "rửa bát"], answer: 0 },
      { q: "'phụ nấu ăn' tiếng Anh là gì?", options: ["help with the cooking", "wash the dishes", "at noon"], answer: 0 },
      { q: "'clean the floor' nghĩa là gì?", options: ["lau nhà", "vào buổi tối", "rửa bát"], answer: 0 },
      { q: "'xem' tiếng Anh là gì?", options: ["watch", "help with the cooking", "wash the dishes"], answer: 0 },
      { q: "'vào buổi chiều' tiếng Anh là gì?", options: ["in the afternoon", "wash the clothes", "clean the floor"], answer: 0 }
    ],
    quizExt: [
      { q: "'make the bed' nghĩa là gì?", options: ["dọn giường", "dọn phòng", "tưới cây"], answer: 0 },
      { q: "'ủi quần áo' tiếng Anh là gì?", options: ["iron clothes", "take out the rubbish", "feed the pet"], answer: 0 },
      { q: "'water the plants' nghĩa là gì?", options: ["tưới cây", "ủi quần áo", "dọn giường"], answer: 0 },
      { q: "'đổ rác' tiếng Anh là gì?", options: ["take out the rubbish", "tidy the room", "water the plants"], answer: 0 },
      { q: "'tidy the room' nghĩa là gì?", options: ["dọn phòng", "đổ rác", "tưới cây"], answer: 0 },
      { q: "'cho thú cưng ăn' tiếng Anh là gì?", options: ["feed the pet", "make the bed", "water the plants"], answer: 0 }
    ],
  },
  {
    id: "u15", group: 3, icon: "🎬",
    titleEn: "Unit 15: My family's weekends", titleVi: "Cuối tuần của gia đình tôi",
    core: [
      { en: "cinema", vi: "rạp chiếu phim", icon: "🎬", ipa: "ˈsɪnəmə" },
      { en: "shopping centre", vi: "trung tâm thương mại", icon: "🛍️", ipa: "ˈʃɑpɪŋ ˈsɛntər" },
      { en: "sports centre", vi: "trung tâm thể thao", icon: "🏟️", ipa: "spɔrts ˈsɛntər" },
      { en: "swimming pool", vi: "bể bơi", icon: "🏊", ipa: "ˈswɪmɪŋ pul" },
      { en: "television", vi: "tivi", icon: "📺", ipa: "ˈtɛləˌvɪʒən" },
      { en: "cook meals", vi: "nấu ăn", icon: "🍳", ipa: "kʊk milz" },
      { en: "do yoga", vi: "tập yoga", icon: "🧘", ipa: "du ˈjoʊgə" },
      { en: "play tennis", vi: "chơi tennis", icon: "🎾", ipa: "pleɪ ˈtɛnɪs" },
      { en: "watch films", vi: "xem phim", icon: "🎞️", ipa: "wɑtʃ fɪlmz" }
    ],
    patterns: [
      { en: "Where does he go on Saturdays?", vi: "Cậu ấy đi đâu vào thứ Bảy?" },
      { en: "He goes to the cinema.", vi: "Cậu ấy đi rạp chiếu phim." },
      { en: "What does she do on Sundays?", vi: "Cô ấy làm gì vào Chủ Nhật?" },
      { en: "She plays tennis.", vi: "Cô ấy chơi tennis." }
    ],
    ext: [
      { en: "go shopping", vi: "đi mua sắm", icon: "🛒", ipa: "goʊ ˈʃɑpɪŋ" },
      { en: "visit grandparents", vi: "thăm ông bà", icon: "👵", ipa: "ˈvɪzɪt ˈgrændˌpɛrənts" },
      { en: "have a picnic", vi: "đi dã ngoại", icon: "🧺", ipa: "hæv ə ˈpɪkˌnɪk" },
      { en: "ride bikes together", vi: "đạp xe cùng nhau", icon: "🚴", ipa: "raɪd baɪks təˈgɛðər" },
      { en: "go fishing", vi: "đi câu cá", icon: "🎣", ipa: "goʊ ˈfɪʃɪŋ" },
      { en: "stay home", vi: "ở nhà", icon: "🏠", ipa: "steɪ hoʊm" }
    ],
    grammar: [
      { title: "'go to' + nơi chốn", explain: "Dùng 'go to' + danh từ chỉ nơi chốn để nói đi đâu đó.", example: "They go to the shopping centre." },
      { title: "Động từ thường + s/es ở ngôi thứ 3", explain: "Với he/she, thêm 's' hoặc 'es' vào động từ thường.", example: "He plays tennis. She watches films." }
    ],
    reading: [
      { title: "Weekend at the pool", text: "On Saturdays, my family goes to the swimming pool. My dad cooks meals for us in the evening.", questions: [
        { q: "Where does the family go on Saturdays?", options: ["Swimming pool", "Cinema", "Sports centre"], answer: 0 },
        { q: "Who cooks meals in the evening?", options: ["Dad", "Mum", "Grandma"], answer: 0 }
      ] },
      { title: "Sunday fun", text: "On Sundays, my sister does yoga in the morning. Then we watch films together at home.", questions: [
        { q: "What does my sister do on Sunday morning?", options: ["Yoga", "Tennis", "Shopping"], answer: 0 },
        { q: "What do they do together?", options: ["Watch films", "Play tennis", "Cook meals"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'swimming pool' nghĩa là gì?", options: ["bể bơi", "rạp chiếu phim", "trung tâm thể thao"], answer: 0 },
      { q: "'cook meals' nghĩa là gì?", options: ["nấu ăn", "xem phim", "tập yoga"], answer: 0 },
      { q: "'shopping centre' nghĩa là gì?", options: ["trung tâm thương mại", "nấu ăn", "rạp chiếu phim"], answer: 0 },
      { q: "'tập yoga' tiếng Anh là gì?", options: ["do yoga", "television", "play tennis"], answer: 0 },
      { q: "'television' nghĩa là gì?", options: ["tivi", "xem phim", "bể bơi"], answer: 0 },
      { q: "'rạp chiếu phim' tiếng Anh là gì?", options: ["cinema", "television", "cook meals"], answer: 0 },
      { q: "'watch films' nghĩa là gì?", options: ["xem phim", "nấu ăn", "tivi"], answer: 0 },
      { q: "'bể bơi' tiếng Anh là gì?", options: ["swimming pool", "cinema", "do yoga"], answer: 0 },
      { q: "'chơi tennis' tiếng Anh là gì?", options: ["play tennis", "cinema", "watch films"], answer: 0 }
    ],
    quizExt: [
      { q: "'go fishing' nghĩa là gì?", options: ["đi câu cá", "đi dã ngoại", "đi mua sắm"], answer: 0 },
      { q: "'have a picnic' nghĩa là gì?", options: ["đi dã ngoại", "đạp xe cùng nhau", "ở nhà"], answer: 0 },
      { q: "'thăm ông bà' tiếng Anh là gì?", options: ["visit grandparents", "ride bikes together", "go fishing"], answer: 0 },
      { q: "'ride bikes together' nghĩa là gì?", options: ["đạp xe cùng nhau", "thăm ông bà", "đi mua sắm"], answer: 0 },
      { q: "'đi câu cá' tiếng Anh là gì?", options: ["go fishing", "go shopping", "stay home"], answer: 0 },
      { q: "'go shopping' nghĩa là gì?", options: ["đi mua sắm", "ở nhà", "đi dã ngoại"], answer: 0 },
      { q: "'ở nhà' tiếng Anh là gì?", options: ["stay home", "go shopping", "visit grandparents"], answer: 0 }
    ],
  },
  {
    id: "u16", group: 4, icon: "⛅",
    titleEn: "Unit 16: Weather", titleVi: "Thời tiết",
    core: [
      { en: "cloudy", vi: "nhiều mây", icon: "☁️", ipa: "ˈklaʊdi" },
      { en: "rainy", vi: "mưa", icon: "🌧️", ipa: "ˈreɪni" },
      { en: "sunny", vi: "nắng", icon: "☀️", ipa: "ˈsəni" },
      { en: "weather", vi: "thời tiết", icon: "🌤️", ipa: "ˈwɛðər" },
      { en: "windy", vi: "nhiều gió", icon: "💨", ipa: "ˈwɪndi" }
    ],
    patterns: [
      { en: "What was the weather like last weekend?", vi: "Thời tiết cuối tuần trước như thế nào?" },
      { en: "It was sunny.", vi: "Trời nắng." },
      { en: "It was rainy and windy.", vi: "Trời mưa và nhiều gió." }
    ],
    ext: [
      { en: "stormy", vi: "có bão", icon: "⛈️", ipa: "ˈstɔrmi" },
      { en: "foggy", vi: "nhiều sương mù", icon: "🌫️", ipa: "ˈfɑgi" },
      { en: "hot", vi: "nóng", icon: "🥵", ipa: "hɑt" },
      { en: "cold", vi: "lạnh", icon: "🥶", ipa: "koʊld" },
      { en: "snowy", vi: "có tuyết", icon: "❄️", ipa: "snoʊi" },
      { en: "temperature", vi: "nhiệt độ", icon: "🌡️", ipa: "ˈtɛmpərəʧər" }
    ],
    grammar: [
      { title: "'was/were' để hỏi thời tiết trong quá khứ", explain: "Dùng 'was' vì 'weather' là danh từ không đếm được, luôn đi với 'it was'.", example: "It was cloudy yesterday." },
      { title: "Tính từ đuôi '-y' chỉ thời tiết", explain: "Nhiều tính từ thời tiết có đuôi '-y': sunny, rainy, windy, cloudy.", example: "Today is windy and cloudy." }
    ],
    reading: [
      { title: "Yesterday's weather", text: "Yesterday was sunny in the morning. In the afternoon, it became cloudy and windy.", questions: [
        { q: "What was the weather like in the morning?", options: ["Sunny", "Rainy", "Snowy"], answer: 0 },
        { q: "What was it like in the afternoon?", options: ["Cloudy and windy", "Sunny and hot", "Rainy and cold"], answer: 0 }
      ] },
      { title: "A rainy trip", text: "Last weekend, the weather was rainy. We could not go to the park, so we stayed home.", questions: [
        { q: "What was the weather like last weekend?", options: ["Rainy", "Sunny", "Windy"], answer: 0 },
        { q: "What did they do?", options: ["Stayed home", "Went to the park", "Went swimming"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'sunny' nghĩa là gì?", options: ["nắng", "mưa", "nhiều mây"], answer: 0 },
      { q: "'windy' nghĩa là gì?", options: ["nhiều gió", "nhiều sương mù", "lạnh"], answer: 0 },
      { q: "'nhiều gió' tiếng Anh là gì?", options: ["windy", "cloudy", "sunny"], answer: 0 },
      { q: "'weather' nghĩa là gì?", options: ["thời tiết", "nhiều mây", "nắng"], answer: 0 },
      { q: "'mưa' tiếng Anh là gì?", options: ["rainy", "windy", "sunny"], answer: 0 },
      { q: "'cloudy' nghĩa là gì?", options: ["nhiều mây", "thời tiết", "nhiều gió"], answer: 0 }
    ],
    quizExt: [
      { q: "'stormy' nghĩa là gì?", options: ["có bão", "có tuyết", "nóng"], answer: 0 },
      { q: "'hot' nghĩa là gì?", options: ["nóng", "có bão", "lạnh"], answer: 0 },
      { q: "'nhiều sương mù' tiếng Anh là gì?", options: ["foggy", "snowy", "cold"], answer: 0 },
      { q: "'có tuyết' tiếng Anh là gì?", options: ["snowy", "temperature", "cold"], answer: 0 },
      { q: "'temperature' nghĩa là gì?", options: ["nhiệt độ", "lạnh", "có tuyết"], answer: 0 },
      { q: "'lạnh' tiếng Anh là gì?", options: ["cold", "stormy", "foggy"], answer: 0 }
    ],
  },
  {
    id: "u17", group: 4, icon: "🏙️",
    titleEn: "Unit 17: In the city", titleVi: "Trong thành phố",
    core: [
      { en: "bakery", vi: "tiệm bánh", icon: "🥖", ipa: "ˈbeɪkəri" },
      { en: "bookshop", vi: "hiệu sách", icon: "📚", ipa: "ˈbʊkˌʃɑp" },
      { en: "food stall", vi: "quầy đồ ăn", icon: "🍢", ipa: "fud stɔl" },
      { en: "water park", vi: "công viên nước", icon: "🌊", ipa: "ˈwɔtər pɑrk" },
      { en: "go straight", vi: "đi thẳng", icon: "⬆️", ipa: "goʊ streɪt" },
      { en: "left", vi: "bên trái", icon: "⬅️", ipa: "lɛft" },
      { en: "right", vi: "bên phải", icon: "➡️", ipa: "raɪt" },
      { en: "stop", vi: "dừng lại", icon: "🛑", ipa: "stɑp" },
      { en: "turn", vi: "rẽ", icon: "↩️", ipa: "tərn" },
      { en: "turn left", vi: "rẽ trái", icon: "⬅️", ipa: "tɜrn lɛft" },
      { en: "turn right", vi: "rẽ phải", icon: "➡️", ipa: "tɜrn raɪt" },
      { en: "turn round", vi: "quay đầu lại", icon: "🔄", ipa: "tɜrn raʊnd" },
      { en: "behind", vi: "phía sau", icon: "⬅️", ipa: "bɪˈhaɪnd" },
      { en: "between", vi: "ở giữa", icon: "↔️", ipa: "bɪtˈwin" },
      { en: "near", vi: "gần", icon: "📍", ipa: "nɪr" },
      { en: "opposite", vi: "đối diện", icon: "🔀", ipa: "ˈɑpəzɪt" }
    ],
    patterns: [
      { en: "Do you want to go to the water park?", vi: "Bạn có muốn đi công viên nước không?" },
      { en: "Great! Let's go.", vi: "Tuyệt! Đi thôi." },
      { en: "Sorry, I can't.", vi: "Xin lỗi, tớ không thể." },
      { en: "How can I get to the bookshop?", vi: "Làm sao để đến hiệu sách?" },
      { en: "Where's the bakery?", vi: "Tiệm bánh ở đâu?" },
      { en: "It's near the bookshop.", vi: "Nó gần hiệu sách." }
    ],
    ext: [
      { en: "crossroads", vi: "ngã tư", icon: "🚦", ipa: "ˈkrɔsˌroʊdz" },
      { en: "traffic light", vi: "đèn giao thông", icon: "🚥", ipa: "ˈtræfɪk laɪt" },
      { en: "map", vi: "bản đồ", icon: "🗺️", ipa: "mæp" },
      { en: "corner", vi: "góc phố", icon: "📐", ipa: "ˈkɔrnər" },
      { en: "straight ahead", vi: "phía trước", icon: "⬆️", ipa: "streɪt əˈhɛd" },
      { en: "across from", vi: "đối diện với", icon: "↔️", ipa: "əˈkrɔs frəm" }
    ],
    grammar: [
      { title: "Câu mệnh lệnh chỉ đường", explain: "Dùng động từ nguyên thể đứng đầu câu để chỉ đường.", example: "Go straight. Turn left." },
      { title: "Giới từ chỉ vị trí", explain: "'behind, between, near, opposite' đứng trước danh từ để chỉ vị trí.", example: "The bakery is near the water park." }
    ],
    reading: [
      { title: "Finding the bookshop", text: "Go straight, then turn left. The bookshop is between the bakery and the food stall.", questions: [
        { q: "What do you do first?", options: ["Go straight", "Turn right", "Stop"], answer: 0 },
        { q: "Where is the bookshop?", options: ["Between the bakery and the food stall", "Opposite the water park", "Behind the bakery"], answer: 0 }
      ] },
      { title: "A trip to the water park", text: "Lan wants to go to the water park. Her friend says it's near the bookshop, opposite the bakery.", questions: [
        { q: "Where does Lan want to go?", options: ["The water park", "The bookshop", "The bakery"], answer: 0 },
        { q: "Where is the water park?", options: ["Opposite the bakery", "Behind the food stall", "Near the school"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'turn left' nghĩa là gì?", options: ["rẽ trái", "rẽ phải", "đi thẳng"], answer: 0 },
      { q: "'opposite' nghĩa là gì?", options: ["đối diện", "ở giữa", "gần"], answer: 0 },
      { q: "'food stall' nghĩa là gì?", options: ["quầy đồ ăn", "đối diện", "rẽ phải"], answer: 0 },
      { q: "'đi thẳng' tiếng Anh là gì?", options: ["go straight", "bookshop", "near"], answer: 0 },
      { q: "'behind' nghĩa là gì?", options: ["phía sau", "rẽ trái", "đối diện"], answer: 0 },
      { q: "'quay đầu lại' tiếng Anh là gì?", options: ["turn round", "turn left", "behind"], answer: 0 },
      { q: "'left' nghĩa là gì?", options: ["bên trái", "gần", "công viên nước"], answer: 0 },
      { q: "'rẽ trái' tiếng Anh là gì?", options: ["turn left", "water park", "turn round"], answer: 0 },
      { q: "'near' nghĩa là gì?", options: ["gần", "ở giữa", "rẽ trái"], answer: 0 },
      { q: "'bên phải' tiếng Anh là gì?", options: ["right", "behind", "turn left"], answer: 0 }
    ],
    quizExt: [
      { q: "'traffic light' nghĩa là gì?", options: ["đèn giao thông", "ngã tư", "bản đồ"], answer: 0 },
      { q: "'corner' nghĩa là gì?", options: ["góc phố", "ngã tư", "bản đồ"], answer: 0 },
      { q: "'đèn giao thông' tiếng Anh là gì?", options: ["traffic light", "crossroads", "corner"], answer: 0 },
      { q: "'crossroads' nghĩa là gì?", options: ["ngã tư", "đèn giao thông", "góc phố"], answer: 0 },
      { q: "'bản đồ' tiếng Anh là gì?", options: ["map", "across from", "traffic light"], answer: 0 },
      { q: "'across from' nghĩa là gì?", options: ["đối diện với", "phía trước", "góc phố"], answer: 0 },
      { q: "'phía trước' tiếng Anh là gì?", options: ["straight ahead", "traffic light", "crossroads"], answer: 0 }
    ],
  },
  {
    id: "u18", group: 4, icon: "🛍️",
    titleEn: "Unit 18: At the shopping centre", titleVi: "Ở trung tâm thương mại",
    core: [
      { en: "gift shop", vi: "cửa hàng quà tặng", icon: "🎁", ipa: "gɪft ʃɑp" },
      { en: "skirt", vi: "chân váy", icon: "👗", ipa: "skərt" },
      { en: "T-shirt", vi: "áo phông", icon: "👕", ipa: "ˈtiʃɜrt" },
      { en: "dong", vi: "đồng (tiền Việt)", icon: "💵", ipa: "dɔŋg" },
      { en: "thousand", vi: "nghìn", icon: "🔢", ipa: "ˈθaʊzənd" }
    ],
    patterns: [
      { en: "How much is the T-shirt?", vi: "Chiếc áo phông này giá bao nhiêu?" },
      { en: "It's fifty thousand dong.", vi: "Nó giá năm mươi nghìn đồng." },
      { en: "How much is the skirt?", vi: "Chiếc chân váy này giá bao nhiêu?" }
    ],
    ext: [
      { en: "price", vi: "giá cả", icon: "🏷️", ipa: "praɪs" },
      { en: "expensive", vi: "đắt", icon: "💰", ipa: "ɪkˈspɛnsɪv" },
      { en: "cheap", vi: "rẻ", icon: "🪙", ipa: "ʧip" },
      { en: "try on", vi: "thử (quần áo)", icon: "👗", ipa: "traɪ ɔn" },
      { en: "shop assistant", vi: "nhân viên bán hàng", icon: "🧑‍💼", ipa: "ʃɑp əˈsɪstənt" },
      { en: "pay", vi: "trả tiền", icon: "💳", ipa: "peɪ" }
    ],
    grammar: [
      { title: "Hỏi giá với 'How much'", explain: "'How much is/are + danh từ?' dùng để hỏi giá tiền.", example: "How much is the skirt? - It's 80,000 dong." },
      { title: "Số đếm hàng nghìn", explain: "Ghép số + 'thousand' + đơn vị tiền tệ 'dong'.", example: "fifty thousand dong = 50,000 đồng." }
    ],
    reading: [
      { title: "Buying a T-shirt", text: "Nam wants to buy a T-shirt at the shopping centre. It costs thirty thousand dong. He pays and says thank you.", questions: [
        { q: "What does Nam want to buy?", options: ["A T-shirt", "A skirt", "A gift"], answer: 0 },
        { q: "How much is it?", options: ["Thirty thousand dong", "Fifty thousand dong", "Twenty thousand dong"], answer: 0 }
      ] },
      { title: "At the gift shop", text: "Mai buys a small gift for her mum. The gift shop has many nice things at good prices.", questions: [
        { q: "Where does Mai buy the gift?", options: ["The gift shop", "The bookshop", "The bakery"], answer: 0 },
        { q: "Who is the gift for?", options: ["Her mum", "Her friend", "Her teacher"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'T-shirt' nghĩa là gì?", options: ["áo phông", "chân váy", "quà tặng"], answer: 0 },
      { q: "'thousand' nghĩa là gì?", options: ["nghìn", "trăm", "triệu"], answer: 0 },
      { q: "'dong' nghĩa là gì?", options: ["đồng (tiền Việt)", "chân váy", "nghìn"], answer: 0 },
      { q: "'nghìn' tiếng Anh là gì?", options: ["thousand", "dong", "skirt"], answer: 0 },
      { q: "'cửa hàng quà tặng' tiếng Anh là gì?", options: ["gift shop", "T-shirt", "thousand"], answer: 0 },
      { q: "'skirt' nghĩa là gì?", options: ["chân váy", "nghìn", "cửa hàng quà tặng"], answer: 0 }
    ],
    quizExt: [
      { q: "'expensive' nghĩa là gì?", options: ["đắt", "rẻ", "miễn phí"], answer: 0 },
      { q: "'try on' nghĩa là gì?", options: ["thử (quần áo)", "rẻ", "giá cả"], answer: 0 },
      { q: "'rẻ' tiếng Anh là gì?", options: ["cheap", "pay", "expensive"], answer: 0 },
      { q: "'nhân viên bán hàng' tiếng Anh là gì?", options: ["shop assistant", "price", "cheap"], answer: 0 },
      { q: "'pay' nghĩa là gì?", options: ["trả tiền", "nhân viên bán hàng", "đắt"], answer: 0 },
      { q: "'giá cả' tiếng Anh là gì?", options: ["price", "shop assistant", "pay"], answer: 0 }
    ],
  },
  {
    id: "u19", group: 4, icon: "🦁",
    titleEn: "Unit 19: The animal world", titleVi: "Thế giới động vật",
    core: [
      { en: "crocodiles", vi: "cá sấu", icon: "🐊", ipa: "ˈkrɑkəˌdaɪlz" },
      { en: "giraffes", vi: "hươu cao cổ", icon: "🦒", ipa: "ʤəræfs" },
      { en: "hippos", vi: "hà mã", icon: "🦛", ipa: "ˈhɪpoʊz" },
      { en: "lions", vi: "sư tử", icon: "🦁", ipa: "laɪənz" },
      { en: "dance beautifully", vi: "nhảy múa duyên dáng", icon: "💃", ipa: "dæns ˈbjutəfəli" },
      { en: "roar loudly", vi: "gầm to", icon: "🔊", ipa: "rɔr ˈlaʊdli" },
      { en: "run quickly", vi: "chạy nhanh", icon: "🏃", ipa: "rʌn ˈkwɪkli" },
      { en: "sing merrily", vi: "hót vui vẻ", icon: "🎶", ipa: "sɪŋ ˈmɛrəli" }
    ],
    patterns: [
      { en: "What are these animals?", vi: "Đây là những con vật gì?" },
      { en: "They're lions.", vi: "Chúng là sư tử." },
      { en: "Why do you like them?", vi: "Tại sao bạn thích chúng?" },
      { en: "Because they run quickly.", vi: "Vì chúng chạy rất nhanh." }
    ],
    ext: [
      { en: "elephant", vi: "con voi", icon: "🐘", ipa: "ˈɛləfənt" },
      { en: "zebra", vi: "ngựa vằn", icon: "🦓", ipa: "ˈzibrə" },
      { en: "monkey", vi: "con khỉ", icon: "🐒", ipa: "ˈməŋki" },
      { en: "tiger", vi: "con hổ", icon: "🐯", ipa: "ˈtaɪgər" },
      { en: "wild animal", vi: "động vật hoang dã", icon: "🌳", ipa: "waɪld ˈænəməl" },
      { en: "zoo", vi: "sở thú", icon: "🏞️", ipa: "zu" }
    ],
    grammar: [
      { title: "Danh từ số nhiều không quy tắc và có quy tắc", explain: "Thêm 's' với hầu hết danh từ, riêng một số từ có dạng đặc biệt.", example: "lion → lions, giraffe → giraffes." },
      { title: "Trạng từ chỉ cách thức đuôi '-ly'", explain: "Tính từ + '-ly' tạo thành trạng từ mô tả hành động.", example: "quick → quickly, loud → loudly." }
    ],
    reading: [
      { title: "At the zoo", text: "At the zoo, we saw lions and giraffes. The lions roar loudly and the giraffes eat leaves quietly.", questions: [
        { q: "What animals did they see?", options: ["Lions and giraffes", "Hippos and crocodiles", "Tigers and zebras"], answer: 0 },
        { q: "What do the lions do?", options: ["Roar loudly", "Dance beautifully", "Run quickly"], answer: 0 }
      ] },
      { title: "Fast animals", text: "Cheetahs run quickly. My favourite animal is the crocodile because it swims well in the river.", questions: [
        { q: "What animal runs quickly?", options: ["Cheetahs", "Hippos", "Giraffes"], answer: 0 },
        { q: "What is the writer's favourite animal?", options: ["The crocodile", "The lion", "The hippo"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'giraffes' nghĩa là gì?", options: ["hươu cao cổ", "hà mã", "cá sấu"], answer: 0 },
      { q: "'roar loudly' nghĩa là gì?", options: ["gầm to", "chạy nhanh", "hót vui vẻ"], answer: 0 },
      { q: "'hippos' nghĩa là gì?", options: ["hà mã", "chạy nhanh", "hươu cao cổ"], answer: 0 },
      { q: "'gầm to' tiếng Anh là gì?", options: ["roar loudly", "dance beautifully", "run quickly"], answer: 0 },
      { q: "'cá sấu' tiếng Anh là gì?", options: ["crocodiles", "run quickly", "roar loudly"], answer: 0 },
      { q: "'run quickly' nghĩa là gì?", options: ["chạy nhanh", "hà mã", "hót vui vẻ"], answer: 0 },
      { q: "'hót vui vẻ' tiếng Anh là gì?", options: ["sing merrily", "giraffes", "crocodiles"], answer: 0 },
      { q: "'dance beautifully' nghĩa là gì?", options: ["nhảy múa duyên dáng", "hươu cao cổ", "cá sấu"], answer: 0 }
    ],
    quizExt: [
      { q: "'zoo' nghĩa là gì?", options: ["sở thú", "nông trại", "rừng"], answer: 0 },
      { q: "'monkey' nghĩa là gì?", options: ["con khỉ", "động vật hoang dã", "con hổ"], answer: 0 },
      { q: "'sở thú' tiếng Anh là gì?", options: ["zoo", "wild animal", "zebra"], answer: 0 },
      { q: "'wild animal' nghĩa là gì?", options: ["động vật hoang dã", "con hổ", "con voi"], answer: 0 },
      { q: "'con voi' tiếng Anh là gì?", options: ["elephant", "wild animal", "zebra"], answer: 0 },
      { q: "'tiger' nghĩa là gì?", options: ["con hổ", "động vật hoang dã", "ngựa vằn"], answer: 0 },
      { q: "'ngựa vằn' tiếng Anh là gì?", options: ["zebra", "monkey", "wild animal"], answer: 0 }
    ],
  },
  {
    id: "u20", group: 4, icon: "🏕️",
    titleEn: "Unit 20: At summer camp", titleVi: "Ở trại hè",
    core: [
      { en: "building a campfire", vi: "dựng đống lửa trại", icon: "🔥", ipa: "ˈbɪldɪŋ ə ˈkæmpfaɪər" },
      { en: "dancing around the campfire", vi: "nhảy múa quanh đống lửa", icon: "💃", ipa: "ˈdænsɪŋ əˈraʊnd ðə ˈkæmpfaɪər" },
      { en: "playing card games", vi: "chơi bài", icon: "🃏", ipa: "ˈpleɪɪŋ kɑrd geɪmz" },
      { en: "playing tug of war", vi: "chơi kéo co", icon: "🤼", ipa: "ˈpleɪɪŋ tʌg ʌv wɔr" },
      { en: "putting up a tent", vi: "dựng lều", icon: "⛺", ipa: "ˈpʊtɪŋ ʌp ə tɛnt" },
      { en: "singing songs", vi: "hát", icon: "🎤", ipa: "ˈsɪŋɪŋ sɔŋz" },
      { en: "taking a photo", vi: "chụp ảnh", icon: "📷", ipa: "ˈteɪkɪŋ ə ˈfoʊtoʊ" },
      { en: "telling a story", vi: "kể chuyện", icon: "📖", ipa: "ˈtɛlɪŋ ə ˈstɔri" }
    ],
    patterns: [
      { en: "What's he doing?", vi: "Cậu ấy đang làm gì?" },
      { en: "He's putting up a tent.", vi: "Cậu ấy đang dựng lều." },
      { en: "What are they doing?", vi: "Họ đang làm gì?" },
      { en: "They're singing songs.", vi: "Họ đang hát." }
    ],
    ext: [
      { en: "sleeping bag", vi: "túi ngủ", icon: "🛌", ipa: "sˈlipɪŋ bæg" },
      { en: "flashlight", vi: "đèn pin", icon: "🔦", ipa: "ˈflæʃˌlaɪt" },
      { en: "backpack", vi: "ba lô", icon: "🎒", ipa: "ˈbækˌpæk" },
      { en: "marshmallow", vi: "kẹo dẻo", icon: "🍡", ipa: "ˈmɑrʃˌmɛloʊ" },
      { en: "hiking", vi: "đi bộ đường dài", icon: "🥾", ipa: "ˈhaɪkɪŋ" },
      { en: "stargazing", vi: "ngắm sao", icon: "✨", ipa: "ˈstɑrˌgeɪzɪŋ" }
    ],
    grammar: [
      { title: "Thì hiện tại tiếp diễn", explain: "'am/is/are + V-ing' diễn tả hành động đang xảy ra.", example: "They are playing tug of war now." },
      { title: "Động từ + '-ing' khi làm danh từ/cụm hoạt động", explain: "Nhiều hoạt động trại hè được diễn đạt bằng V-ing.", example: "singing songs, telling a story." }
    ],
    reading: [
      { title: "Fun at camp", text: "At summer camp, the children are building a campfire. Later, they will be singing songs and telling stories.", questions: [
        { q: "What are the children doing now?", options: ["Building a campfire", "Singing songs", "Playing cards"], answer: 0 },
        { q: "What will they do later?", options: ["Sing songs and tell stories", "Go home", "Sleep all day"], answer: 0 }
      ] },
      { title: "A tug of war", text: "Two teams are playing tug of war. Everyone is taking photos and cheering loudly.", questions: [
        { q: "What game are they playing?", options: ["Tug of war", "Card games", "Football"], answer: 0 },
        { q: "What is everyone doing?", options: ["Taking photos and cheering", "Sleeping", "Cooking"], answer: 0 }
      ] }
    ],
    quizCore: [
      { q: "'putting up a tent' nghĩa là gì?", options: ["dựng lều", "dựng đống lửa", "chơi bài"], answer: 0 },
      { q: "'telling a story' nghĩa là gì?", options: ["kể chuyện", "hát", "chụp ảnh"], answer: 0 },
      { q: "'taking a photo' nghĩa là gì?", options: ["chụp ảnh", "dựng đống lửa trại", "hát"], answer: 0 },
      { q: "'chơi kéo co' tiếng Anh là gì?", options: ["playing tug of war", "building a campfire", "telling a story"], answer: 0 },
      { q: "'singing songs' nghĩa là gì?", options: ["hát", "kể chuyện", "chơi bài"], answer: 0 },
      { q: "'chơi bài' tiếng Anh là gì?", options: ["playing card games", "putting up a tent", "playing tug of war"], answer: 0 },
      { q: "'dancing around the campfire' nghĩa là gì?", options: ["nhảy múa quanh đống lửa", "chụp ảnh", "dựng lều"], answer: 0 },
      { q: "'kể chuyện' tiếng Anh là gì?", options: ["telling a story", "singing songs", "dancing around the campfire"], answer: 0 }
    ],
    quizExt: [
      { q: "'sleeping bag' nghĩa là gì?", options: ["túi ngủ", "ba lô", "đèn pin"], answer: 0 },
      { q: "'hiking' nghĩa là gì?", options: ["đi bộ đường dài", "ba lô", "túi ngủ"], answer: 0 },
      { q: "'kẹo dẻo' tiếng Anh là gì?", options: ["marshmallow", "backpack", "hiking"], answer: 0 },
      { q: "'flashlight' nghĩa là gì?", options: ["đèn pin", "kẹo dẻo", "túi ngủ"], answer: 0 },
      { q: "'ba lô' tiếng Anh là gì?", options: ["backpack", "marshmallow", "sleeping bag"], answer: 0 },
      { q: "'stargazing' nghĩa là gì?", options: ["ngắm sao", "kẹo dẻo", "đi bộ đường dài"], answer: 0 },
      { q: "'túi ngủ' tiếng Anh là gì?", options: ["sleeping bag", "backpack", "stargazing"], answer: 0 }
    ],
  }
];

const REVIEWS_4 = [
  { id: "r1", afterGroup: 1, titleVi: "Ôn tập 1", units: ["starter", "u1", "u2", "u3", "u4", "u5"] },
  { id: "r2", afterGroup: 2, titleVi: "Ôn tập 2", units: ["u6", "u7", "u8", "u9", "u10"] },
  { id: "r3", afterGroup: 3, titleVi: "Ôn tập 3", units: ["u11", "u12", "u13", "u14", "u15"] },
  { id: "r4", afterGroup: 4, titleVi: "Ôn tập 4", units: ["u16", "u17", "u18", "u19", "u20"] }
];

const GROUP_NAMES_4 = {
  1: "Đảo Bạn bè",
  2: "Đảo Trường học",
  3: "Đảo Gia đình",
  4: "Đảo Khám phá thế giới"
};

window.GRADE_DATA = window.GRADE_DATA || {};
window.GRADE_DATA[4] = { UNITS: UNITS_4, REVIEWS: REVIEWS_4, GROUP_NAMES: GROUP_NAMES_4 };
