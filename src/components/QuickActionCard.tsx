// "use client";
// import React, { useState, useEffect, createContext, useContext, useCallback } from "react";
// import {
//   Home,
//   Book,
//   Trophy,
//   Users,
//   Settings,
//   Play,
//   Pause,
//   Volume2,
//   VolumeX,
//   Flame,
//   Crown,
//   ChevronRight,
//   CheckCircle2,
//   Lock,
//   Calendar,
//   Clock,
//   Target,
//   Award,
//   BookOpen,
//   Headphones,
//   PenTool,
//   MessageCircle,
//   Share2,
//   RotateCcw,
//   Menu,
//   X,
//   Bell,
//   Search,
//   Filter,
//   TrendingUp,
//   Globe,
//   Medal,
//   Zap,
//   Shield,
//   Compass,
//   Sun,
//   Moon,
//   MicIcon,
//   Check,
//   SkipForward,
//   ArrowRight,
//   ChevronDown,
//   Plus,
//   Minus,
//   RefreshCw,
//   MousePointer,
//   Eye,
//   EyeOff,
//   Mic,
//   Phone,
//   FileText,
//   PlayCircle,
//   StopCircle,
//   Volume,
// } from "lucide-react";

// // ========================== CONTEXTS ==========================
// const AppContext = createContext();
// const LessonContext = createContext();
// const UserContext = createContext();

// // ========================== HOOKS ==========================
// const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) throw new Error("useAppContext must be used within AppProvider");
//   return context;
// };

// const useLessonContext = () => {
//   const context = useContext(LessonContext);
//   if (!context) throw new Error("useLessonContext must be used within LessonProvider");
//   return context;
// };

// // ========================== DATA MODELS ==========================
// class User {
//   constructor() {
//     this.id = 1;
//     this.name = "Ахмед Салим";
//     this.email = "ahmed@example.com";
//     this.level = 18;
//     this.xp = 3420;
//     this.streak = 28;
//     this.hearts = 5;
//     this.gems = 1847;
//     this.totalLessons = 189;
//     this.completedLessons = 147;
//     this.joinDate = "2024-01-15";
//     this.timeSpent = 156;
//     this.achievements = new Set([1, 2, 3, 7, 8, 12, 15, 18]);
//     this.currentStreak = 28;
//     this.bestStreak = 45;
//     this.weeklyXP = 420;
//     this.monthlyXP = 1680;
//   }

//   addXP(amount) {
//     this.xp += amount;
//     this.weeklyXP += amount;
//     // Level calculation
//     const newLevel = Math.floor(this.xp / 200) + 1;
//     if (newLevel > this.level) {
//       this.level = newLevel;
//       return true; // Level up occurred
//     }
//     return false;
//   }

//   loseHeart() {
//     if (this.hearts > 0) {
//       this.hearts -= 1;
//       return true;
//     }
//     return false;
//   }

//   addHeart() {
//     if (this.hearts < 5) {
//       this.hearts += 1;
//       return true;
//     }
//     return false;
//   }
// }

// class Course {
//   constructor(id, title, subtitle, description, icon, color, difficulty, units) {
//     this.id = id;
//     this.title = title;
//     this.subtitle = subtitle;
//     this.description = description;
//     this.icon = icon;
//     this.color = color;
//     this.difficulty = difficulty;
//     this.units = units;
//     this.totalLessons = units.reduce((sum, unit) => sum + unit.lessons, 0);
//     this.completedLessons = units.reduce((sum, unit) => sum + unit.completed, 0);
//     this.progress = Math.round((this.completedLessons / this.totalLessons) * 100);
//   }
// }

// class Unit {
//   constructor(id, title, description, lessons, completed = 0, locked = false) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.lessons = lessons;
//     this.completed = completed;
//     this.locked = locked;
//     this.progress = Math.round((completed / lessons) * 100);
//   }
// }

// // ========================== LESSON DATA ==========================
// const LessonDataService = {
//   // Арабский язык
//   getArabicLesson: (unitId, lessonId) => {
//     const arabicLessons = {
//       1: {
//         // Арабский алфавит
//         1: {
//           title: "Буквы Алиф и Ба",
//           questions: [
//             {
//               type: "recognition",
//               question: "Выберите букву Алиф",
//               options: ["ا", "ب", "ت", "ث"],
//               correct: 0,
//               explanation: "Алиф (ا) - первая буква арабского алфавита",
//             },
//             {
//               type: "pronunciation",
//               question: "Как произносится буква ب?",
//               arabicText: "ب",
//               options: ["Алиф", "Ба", "Та", "Са"],
//               correct: 1,
//               explanation: 'Буква ب произносится как "Ба"',
//             },
//             {
//               type: "writing",
//               question: "Какая форма буквы ب в начале слова?",
//               options: ["ب", "بـ", "ـبـ", "ـب"],
//               correct: 1,
//               explanation: "В начале слова ب пишется как بـ",
//             },
//           ],
//         },
//         2: {
//           title: "Буквы Та и Са",
//           questions: [
//             {
//               type: "recognition",
//               question: "Найдите букву Та (ت)",
//               options: ["ب", "ت", "ث", "ج"],
//               correct: 1,
//               explanation: "Та (ت) имеет две точки сверху",
//             },
//             {
//               type: "pronunciation",
//               question: "Произношение буквы ث",
//               arabicText: "ث",
//               options: ["Та", "Са", "Джим", "Ха"],
//               correct: 1,
//               explanation: 'Буква ث произносится как "Са"',
//             },
//           ],
//         },
//       },
//       2: {
//         // Огласовки
//         1: {
//           title: "Фатха и Кясра",
//           questions: [
//             {
//               type: "reading",
//               question: "Как читается это слово?",
//               arabicText: "بَبَ",
//               options: ["Баба", "Биби", "Бубу", "Беби"],
//               correct: 0,
//               explanation: 'Фатха (َ) дает звук "А", поэтому بَبَ читается "Баба"',
//             },
//             {
//               type: "reading",
//               question: "Прочитайте слово с кясра",
//               arabicText: "بِبِ",
//               options: ["Баба", "Биби", "Бубу", "Беби"],
//               correct: 1,
//               explanation: 'Кясра (ِ) дает звук "И", поэтому بِبِ читается "Биби"',
//             },
//           ],
//         },
//       },
//     };
//     return arabicLessons[unitId]?.[lessonId] || null;
//   },

//   // Коран
//   getQuranLesson: (unitId, lessonId) => {
//     const quranLessons = {
//       1: {
//         // Джуз Амма
//         1: {
//           title: "Сура Аль-Фатиха",
//           questions: [
//             {
//               type: "memorization",
//               question: "Первый аят суры Аль-Фатиха",
//               arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
//               options: [
//                 "Бисмилляхи рахмани рахим",
//                 "Альхамду лилляхи раббиль алямин",
//                 "Ар-рахмани рахим",
//                 "Малики яумиддин",
//               ],
//               correct: 0,
//               explanation: 'Бисмилляхи рахмани рахим - "Во имя Аллаха, Милостивого, Милосердного"',
//             },
//             {
//               type: "translation",
//               question: "Перевод: الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
//               arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
//               options: [
//                 "Хвала Аллаху, Господу миров",
//                 "Милостивый, Милосердный",
//                 "Тебе мы поклоняемся",
//                 "Веди нас прямым путем",
//               ],
//               correct: 0,
//               explanation: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ - "Хвала Аллаху, Господу миров"',
//             },
//           ],
//         },
//         2: {
//           title: "Сура Аль-Ихляс",
//           questions: [
//             {
//               type: "memorization",
//               question: "Полный текст суры Аль-Ихляс",
//               arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ",
//               options: ["Куль хуа Ллаху ахад", "Аллаху ссамад", "Лям ялид ва лям юлад", "Ва лям якулляху куфуван ахад"],
//               correct: 0,
//               explanation: 'Первый аят: قُلْ هُوَ اللَّهُ أَحَدٌ - "Скажи: Он - Аллах Единый"',
//             },
//           ],
//         },
//       },
//     };
//     return quranLessons[unitId]?.[lessonId] || null;
//   },

//   // Хадисы
//   getHadithLesson: (unitId, lessonId) => {
//     const hadithLessons = {
//       1: {
//         // Хадисы о вере
//         1: {
//           title: "Хадис о намерении",
//           questions: [
//             {
//               type: "hadith-text",
//               question: "Завершите знаменитый хадис: إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ...",
//               arabicText: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
//               options: [
//                 "وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
//                 "وَاللَّهُ أَعْلَمُ بِالصَّوَابِ",
//                 "فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ",
//                 "وَلَا تَعْمَلُوا إِلَّا بِالإِخْلَاصِ",
//               ],
//               correct: 0,
//               explanation:
//                 "Поистине, дела оцениваются по намерениям, и каждому человеку достанется то, что он намеревался получить",
//             },
//             {
//               type: "translation",
//               question: "Перевод хадиса о намерении",
//               options: [
//                 "Дела оцениваются по намерениям",
//                 "Знания обязательны для мусульман",
//                 "Лучший из людей полезнее для людей",
//                 "Верующий не тот, кто ест досыта",
//               ],
//               correct: 0,
//               explanation: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ - "Поистине, дела оцениваются по намерениям"',
//             },
//             {
//               type: "narrator",
//               question: "Кто передал этот хадис?",
//               options: ["Умар ибн Хаттаб", "Абу Хурайра", "Айша", "Али ибн Абу Талиб"],
//               correct: 0,
//               explanation: "Этот хадис передал Умар ибн аль-Хаттаб (да будет доволен им Аллах)",
//             },
//           ],
//         },
//         2: {
//           title: "Хадис о пяти столпах ислама",
//           questions: [
//             {
//               type: "hadith-text",
//               question: "Сколько столпов ислама упомянуто в хадисе?",
//               options: ["3", "4", "5", "6"],
//               correct: 2,
//               explanation: "В хадисе упомянуто 5 столпов ислама",
//             },
//             {
//               type: "content",
//               question: "Первый столп ислама",
//               options: ["Свидетельство веры (Шахада)", "Намаз (Салят)", "Закят", "Пост в Рамадан"],
//               correct: 0,
//               explanation: "Первый столп - شَهَادَة أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ",
//             },
//           ],
//         },
//       },
//     };
//     return hadithLessons[unitId]?.[lessonId] || null;
//   },

//   // Истории пророков
//   getProphetStoryLesson: (unitId, lessonId) => {
//     const prophetLessons = {
//       1: {
//         // Пророк Адам
//         1: {
//           title: "Сотворение Адама عليه السلام",
//           questions: [
//             {
//               type: "story-comprehension",
//               question: "Из чего был создан пророк Адам عليه السلام?",
//               options: ["Из глины", "Из света", "Из огня", "Из воздуха"],
//               correct: 0,
//               explanation: "Аллах создал Адама عليه السلام из глины, как сказано в Коране",
//             },
//             {
//               type: "quran-reference",
//               question: "Что сказали ангелы, когда Аллах сообщил о создании человека?",
//               options: [
//                 "أَتَجْعَلُ فِيهَا مَن يُفْسِدُ فِيهَا",
//                 "سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا",
//                 "رَبَّنَا تَقَبَّلْ مِنَّا",
//                 "اللَّهُمَّ أَعِنَّا عَلَى ذِكْرِكَ",
//               ],
//               correct: 0,
//               explanation: 'Ангелы спросили: "Неужели Ты поместишь там того, кто будет распространять нечестие?"',
//             },
//             {
//               type: "lesson",
//               question: "Какой урок мы извлекаем из истории создания Адама?",
//               options: [
//                 "Человек - наместник Аллаха на земле",
//                 "Ангелы лучше людей",
//                 "Знания не важны",
//                 "Земная жизнь вечна",
//               ],
//               correct: 0,
//               explanation: "Человек создан как наместник (халиф) Аллаха на земле с великой ответственностью",
//             },
//           ],
//         },
//         2: {
//           title: "Адам и Хавва в раю",
//           questions: [
//             {
//               type: "story-sequence",
//               question: "Что произошло после того, как Адам и Хавва съели запретный плод?",
//               options: [
//                 "Они покаялись перед Аллахом",
//                 "Они обвинили друг друга",
//                 "Они спрятались от ангелов",
//                 "Они заснули",
//               ],
//               correct: 0,
//               explanation: "Адам и Хавва немедленно покаялись: رَبَّنَا ظَلَمْنَا أَنفُسَنَا",
//             },
//           ],
//         },
//       },
//       3: {
//         // Пророк Мухаммад ﷺ
//         1: {
//           title: "Рождение и детство Пророка ﷺ",
//           questions: [
//             {
//               type: "biography",
//               question: "В каком году родился Пророк Мухаммад ﷺ?",
//               options: ["570 г. н.э.", "571 г. н.э.", "569 г. н.э.", "572 г. н.э."],
//               correct: 0,
//               explanation: "Пророк Мухаммад ﷺ родился в 570 году н.э. в Мекке",
//             },
//             {
//               type: "biography",
//               question: "Как звали мать Пророка ﷺ?",
//               options: ["Амина", "Хадиджа", "Айша", "Фатима"],
//               correct: 0,
//               explanation: "Мать Пророка ﷺ звали Амина бинт Вахб",
//             },
//             {
//               type: "biography",
//               question: "Кто был кормилицей Пророка ﷺ?",
//               options: ["Халима ас-Садия", "Барака", "Умм Айман", "Сафия"],
//               correct: 0,
//               explanation: "Халима ас-Садия была кормилицей Пророка ﷺ в племени Бану Саад",
//             },
//           ],
//         },
//       },
//     };
//     return prophetLessons[unitId]?.[lessonId] || null;
//   },
// };

// // ========================== COURSE DATA ==========================
// const coursesData = {
//   "arabic-fundamentals": new Course(
//     "arabic-fundamentals",
//     "Основы арабского языка",
//     "От алфавита к свободному чтению",
//     "Полный курс изучения арабского языка с нуля до уверенного владения основами",
//     "📚",
//     "#10B981",
//     "Начинающий",
//     [
//       new Unit(1, "Арабский алфавит", "Изучение 28 букв арабского алфавита", 15, 15, false),
//       new Unit(2, "Огласовки и чтение", "Харакят - система огласовок в арабском", 12, 8, false),
//       new Unit(3, "Простые слова", "Чтение и понимание базовых слов", 18, 5, false),
//       new Unit(4, "Грамматические основы", "Введение в арабскую грамматику", 25, 0, false),
//       new Unit(5, "Построение предложений", "Создание простых предложений", 20, 0, true),
//     ]
//   ),
//   "quran-memorization": new Course(
//     "quran-memorization",
//     "Хифз аль-Куран",
//     "Заучивание Священного Корана",
//     "Систематическое заучивание Корана с правильной рецитацией",
//     "🕋",
//     "#3B82F6",
//     "Средний",
//     [
//       new Unit(1, "Джуз Амма (30-й джуз)", "Короткие суры для начинающих", 37, 25, false),
//       new Unit(2, "29-й джуз (Табарак)", "Суры среднего размера", 25, 3, false),
//       new Unit(3, "Избранные аяты", "Важнейшие аяты Корана", 20, 0, true),
//     ]
//   ),
//   "hadith-science": new Course(
//     "hadith-science",
//     "Наука о хадисах",
//     "Изучение хадисов Пророка ﷺ",
//     "Изучение достоверных хадисов из Сахих аль-Бухари, Муслим и других сборников",
//     "📖",
//     "#8B5CF6",
//     "Продвинутый",
//     [
//       new Unit(1, "Хадисы о вере (Иман)", "Основы исламской веры в хадисах", 15, 12, false),
//       new Unit(2, "Хадисы о поклонении", "Намаз, пост, закят в хадисах", 20, 5, false),
//       new Unit(3, "Хадисы о нравственности", "Исламская этика и мораль", 18, 0, false),
//     ]
//   ),
//   "prophets-stories": new Course(
//     "prophets-stories",
//     "Истории пророков",
//     "Сира и жизнеописания",
//     "Биографии пророков от Адама до Мухаммада ﷺ и история сподвижников",
//     "🕌",
//     "#F59E0B",
//     "Средний",
//     [
//       new Unit(1, "Пророк Адам عليه السلام", "Первый человек и пророк", 4, 4, false),
//       new Unit(2, "Пророк Ибрагим عليه السلام", "Отец монотеизма", 6, 6, false),
//       new Unit(3, "Пророк Мухаммад ﷺ", "Печать пророков", 25, 18, false),
//       new Unit(4, "Праведные халифы", "Четыре праведных халифа", 8, 0, false),
//     ]
//   ),
// };

// // ========================== PRAYER TIMES SERVICE ==========================
// const PrayerTimesService = {
//   getCurrentPrayerTimes: () => {
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = now.getMinutes();
//     const currentTime = currentHour * 60 + currentMinute;

//     const times = {
//       fajr: { time: "05:42", minutes: 5 * 60 + 42, name: "Фаджр", icon: "🌅" },
//       sunrise: { time: "07:15", minutes: 7 * 60 + 15, name: "Восход", icon: "☀️" },
//       dhuhr: { time: "12:28", minutes: 12 * 60 + 28, name: "Зухр", icon: "🌞" },
//       asr: { time: "15:45", minutes: 15 * 60 + 45, name: "Аср", icon: "🌤️" },
//       maghrib: { time: "18:22", minutes: 18 * 60 + 22, name: "Магриб", icon: "🌅" },
//       isha: { time: "19:48", minutes: 19 * 60 + 48, name: "Иша", icon: "🌙" },
//     };

//     let currentPrayer = "isha";
//     const prayerOrder = ["fajr", "dhuhr", "asr", "maghrib", "isha"];

//     for (let prayer of prayerOrder) {
//       if (currentTime < times[prayer].minutes) {
//         currentPrayer = prayer;
//         break;
//       }
//     }

//     return { ...times, current: currentPrayer, location: "Москва, Россия" };
//   },
// };

// // ========================== MAIN APP COMPONENT ==========================
// const IslamicLearningPlatform = () => {
//   const [user] = useState(new User());
//   const [currentPage, setCurrentPage] = useState("home");
//   const [prayerTimes, setPrayerTimes] = useState(PrayerTimesService.getCurrentPrayerTimes());
//   const [currentLesson, setCurrentLesson] = useState(null);
//   const [currentCourse, setCurrentCourse] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrayerTimes(PrayerTimesService.getCurrentPrayerTimes());
//     }, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   const navigateTo = useCallback((page, data = {}) => {
//     setCurrentPage(page);
//     if (data.currentCourse) setCurrentCourse(data.currentCourse);
//     if (data.lessonData) setCurrentLesson(data.lessonData);
//   }, []);

//   const contextValue = {
//     user,
//     currentPage,
//     prayerTimes,
//     coursesData,
//     navigateTo,
//     currentLesson,
//     currentCourse,
//   };

//   return (
//     <AppContext.Provider value={contextValue}>
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
//         <Navigation />
//         <main className="max-w-7xl mx-auto px-4 py-8">
//           <PageRouter />
//         </main>
//         <MobileBottomNav />
//       </div>
//     </AppContext.Provider>
//   );
// };

// // ========================== NAVIGATION COMPONENT ==========================
// const Navigation = () => {
//   const { user, currentPage, navigateTo } = useAppContext();

//   return (
//     <nav className="bg-white border-b-2 border-gray-100 sticky top-0 z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center space-x-4">
//             <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
//               <span className="text-white text-xl">🕌</span>
//             </div>
//             <div>
//               <h1 className="text-xl font-bold text-gray-900">Академия Нур</h1>
//               <p className="text-xs text-gray-500">Изучение ислама</p>
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center space-x-2">
//             {[
//               { id: "home", icon: Home, label: "Главная" },
//               { id: "courses", icon: Book, label: "Курсы" },
//               { id: "practice", icon: Zap, label: "Практика" },
//               { id: "achievements", icon: Trophy, label: "Достижения" },
//               { id: "leaderboard", icon: Users, label: "Рейтинг" },
//             ].map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => navigateTo(item.id)}
//                 className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
//                   currentPage === item.id
//                     ? "bg-blue-500 text-white shadow-lg transform scale-105"
//                     : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
//                 }`}
//               >
//                 <item.icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center space-x-4">
//             <div className="hidden md:flex items-center space-x-3">
//               <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 px-3 py-2 rounded-full">
//                 <Flame className="w-5 h-5 text-orange-500" />
//                 <span className="font-bold text-orange-600">{user.streak}</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-gradient-to-r from-red-100 to-pink-100 px-3 py-2 rounded-full">
//                 <Heart className="w-5 h-5 text-red-500" />
//                 <span className="font-bold text-red-600">{user.hearts}</span>
//               </div>
//               <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-2 rounded-full">
//                 <Crown className="w-5 h-5 text-blue-500" />
//                 <span className="font-bold text-blue-600">{user.gems}</span>
//               </div>
//             </div>

//             <button
//               onClick={() => navigateTo("profile")}
//               className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg hover:scale-110 transition-transform"
//             >
//               {user.level}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // ========================== PAGE ROUTER ==========================
// const PageRouter = () => {
//   const { currentPage } = useAppContext();

//   const renderPage = () => {
//     switch (currentPage) {
//       case "home":
//         return <HomePage />;
//       case "courses":
//         return <CoursesPage />;
//       case "course-detail":
//         return <CourseDetailPage />;
//       case "lesson":
//         return <LessonPage />;
//       case "achievements":
//         return <AchievementsPage />;
//       case "leaderboard":
//         return <LeaderboardPage />;
//       case "practice":
//         return <PracticePage />;
//       case "profile":
//         return <ProfilePage />;
//       default:
//         return <HomePage />;
//     }
//   };

//   return renderPage();
// };

// // ========================== HOME PAGE COMPONENT ==========================
// export function HomePage() {
//   const { user, prayerTimes, coursesData, navigateTo } = useAppContext();

//   const todaysProgress = 67;
//   const dailyGoal = 3;
//   const completedToday = 2;

//   return (
//     <div className="space-y-8">
//       {/* Hero Banner */}
//       <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 rounded-3xl p-8 text-white overflow-hidden">
//         <div className="relative z-10">
//           <div className="flex items-start justify-between">
//             <div className="space-y-4">
//               <div>
//                 <h1 className="text-3xl font-bold mb-2">Ас-саляму алейкум, {user.name.split(" ")[0]}! 👋</h1>
//                 <p className="text-blue-100 text-lg">Продолжайте свой путь изучения ислама</p>
//               </div>

//               <div className="flex items-center space-x-6">
//                 <div className="bg-white/20 backdrop-blur rounded-2xl px-4 py-2">
//                   <div className="text-sm text-blue-100">Уровень</div>
//                   <div className="text-2xl font-bold">{user.level}</div>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-2xl px-4 py-2">
//                   <div className="text-sm text-blue-100">Общий XP</div>
//                   <div className="text-2xl font-bold">{user.xp.toLocaleString()}</div>
//                 </div>
//                 <div className="bg-white/20 backdrop-blur rounded-2xl px-4 py-2">
//                   <div className="text-sm text-blue-100">Стрик</div>
//                   <div className="text-2xl font-bold flex items-center">
//                     {user.streak} <Flame className="w-5 h-5 ml-1 text-orange-300" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="text-8xl opacity-20">🕌</div>
//           </div>

//           {/* Daily Progress */}
//           <div className="mt-8 bg-white/10 backdrop-blur rounded-3xl p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-semibold">Прогресс сегодня</h3>
//               <div className="text-right">
//                 <div className="text-2xl font-bold">{todaysProgress}%</div>
//                 <div className="text-sm text-blue-200">
//                   {completedToday} из {dailyGoal} уроков
//                 </div>
//               </div>
//             </div>
//             <div className="w-full bg-white/20 rounded-full h-4">
//               <div
//                 className="bg-gradient-to-r from-yellow-400 to-orange-400 h-4 rounded-full transition-all duration-1000 ease-out"
//                 style={{ width: `${todaysProgress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
//         <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
//       </div>

//       {/* Quick Actions */}
//       <div className="grid lg:grid-cols-3 gap-6">
//         <QuickActionCard
//           title="Грамматические основы"
//           subtitle="Изучение падежей в арабском языке"
//           buttonText="Продолжить"
//           lesson="Урок 21"
//           icon={<Play className="w-8 h-8" />}
//           gradient="from-emerald-500 to-emerald-600"
//           onClick={() =>
//             navigateTo("lesson", {
//               courseId: "arabic-fundamentals",
//               unitId: 2,
//               lessonId: 1,
//             })
//           }
//         />

//         <QuickActionCard
//           title="Сура Аль-Мульк"
//           subtitle="Аяты 15-20 • 29-й джуз"
//           buttonText="Заучивание"
//           lesson="Сура 67"
//           icon={<Volume2 className="w-8 h-8" />}
//           gradient="from-blue-500 to-blue-600"
//           onClick={() =>
//             navigateTo("lesson", {
//               courseId: "quran-memorization",
//               unitId: 1,
//               lessonId: 2,
//             })
//           }
//         />

//         <QuickActionCard
//           title="Быстрая практика"
//           subtitle="Случайные вопросы из всех курсов"
//           buttonText="Повторение"
//           lesson="5 мин"
//           icon={<Zap className="w-8 h-8" />}
//           gradient="from-purple-500 to-purple-600"
//           onClick={() => navigateTo("practice")}
//         />
//       </div>

//       {/* Course Progress */}
//       <CourseProgressSection />

//       {/* Stats and Prayer Times */}
//       <div className="grid lg:grid-cols-3 gap-6">
//         <DailyStatsCard />
//         <PrayerTimesCard prayerTimes={prayerTimes} />
//         <RecentAchievementsCard />
//       </div>
//     </div>
//   );
// }
// // ========================== HOME PAGE COMPONENTS ==========================
// const QuickActionCard = ({ title, subtitle, buttonText, lesson, icon, gradient, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`group relative bg-gradient-to-br ${gradient} text-white p-8 rounded-3xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
//   >
//     <div className="flex items-center justify-between mb-4">
//       <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
//         {icon}
//       </div>
//       <div className="text-right">
//         <div className="text-sm opacity-90">{buttonText}</div>
//         <div className="text-lg font-bold">{lesson}</div>
//       </div>
//     </div>
//     <h3 className="text-xl font-bold mb-2">{title}</h3>
//     <p className="text-white/80 text-sm">{subtitle}</p>
//   </button>
// );

// const CourseProgressSection = () => {
//   const { coursesData, navigateTo } = useAppContext();

//   return (
//     <div>
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-bold text-gray-900">Ваши курсы</h2>
//         <button
//           onClick={() => navigateTo("courses")}
//           className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
//         >
//           <span>Смотреть все</span>
//           <ChevronRight className="w-4 h-4" />
//         </button>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-6">
//         {Object.values(coursesData).map((course) => (
//           <CourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const CourseCard = ({ course }) => {
//   const { navigateTo } = useAppContext();

//   return (
//     <div
//       className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
//       onClick={() => navigateTo("course-detail", { currentCourse: course.id })}
//     >
//       <div className="h-2" style={{ backgroundColor: course.color }}></div>
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-6">
//           <div className="flex items-center space-x-4">
//             <div className="text-4xl">{course.icon}</div>
//             <div>
//               <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
//               <p className="text-gray-600 text-sm">{course.subtitle}</p>
//             </div>
//           </div>
//           <div className="text-right">
//             <div className="text-3xl font-bold" style={{ color: course.color }}>
//               {course.progress}%
//             </div>
//             <div className="text-xs text-gray-500 mt-1">
//               {course.completedLessons}/{course.totalLessons}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div
//               className="h-3 rounded-full transition-all duration-1000 ease-out"
//               style={{
//                 width: `${course.progress}%`,
//                 background: `linear-gradient(90deg, ${course.color}88, ${course.color})`,
//               }}
//             ></div>
//           </div>

//           <div className="flex items-center justify-between text-sm">
//             <div className="flex items-center space-x-4">
//               <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-600">{course.difficulty}</span>
//               <span className="text-gray-500">📚 {course.totalLessons} уроков</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: course.color }}></div>
//               <span className="text-gray-600">Активен</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DailyStatsCard = () => (
//   <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
//     <div className="flex items-center justify-between mb-4">
//       <h3 className="text-lg font-bold text-gray-900">Сегодняшняя статистика</h3>
//       <Target className="w-6 h-6 text-green-500" />
//     </div>
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <span className="text-gray-600">Время изучения</span>
//         <span className="font-bold text-gray-900">1ч 23м</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-gray-600">Заработано XP</span>
//         <span className="font-bold text-blue-600">+180</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-gray-600">Точность</span>
//         <span className="font-bold text-green-600">87%</span>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-gray-600">Новых слов</span>
//         <span className="font-bold text-purple-600">12</span>
//       </div>
//     </div>
//   </div>
// );

// const PrayerTimesCard = ({ prayerTimes }) => (
//   <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 text-white">
//     <div className="flex items-center justify-between mb-4">
//       <h3 className="text-lg font-bold">Время намаза</h3>
//       <div className="flex items-center space-x-2">
//         <Compass className="w-5 h-5" />
//         <span className="text-sm">{prayerTimes.location}</span>
//       </div>
//     </div>
//     <div className="space-y-3">
//       {Object.entries(prayerTimes)
//         .filter(([key]) => !["current", "location"].includes(key))
//         .map(([key, prayer]) => (
//           <div
//             key={key}
//             className={`flex items-center justify-between py-2 px-3 rounded-xl transition-all ${
//               prayerTimes.current === key ? "bg-white/20 border-2 border-white/30 shadow-lg" : "hover:bg-white/10"
//             }`}
//           >
//             <div className="flex items-center space-x-3">
//               <span className="text-lg">{prayer.icon}</span>
//               <span className="font-medium">{prayer.name}</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span className="font-bold">{prayer.time}</span>
//               {prayerTimes.current === key && <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>}
//             </div>
//           </div>
//         ))}
//     </div>
//   </div>
// );

// const RecentAchievementsCard = () => {
//   const { navigateTo } = useAppContext();

//   const recentAchievements = [
//     { icon: "🌟", title: "Первые шаги", description: "Завершите первый урок" },
//     { icon: "🔥", title: "Недельная серия", description: "7 дней подряд" },
//     { icon: "👑", title: "Легенда", description: "Достигните 15 уровня" },
//   ];

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-bold text-gray-900">Недавние достижения</h3>
//         <Award className="w-6 h-6 text-yellow-500" />
//       </div>
//       <div className="space-y-4">
//         {recentAchievements.map((achievement, index) => (
//           <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-2xl">
//             <div className="text-2xl">{achievement.icon}</div>
//             <div className="flex-1">
//               <div className="font-semibold text-gray-900 text-sm">{achievement.title}</div>
//               <div className="text-xs text-gray-600">{achievement.description}</div>
//             </div>
//           </div>
//         ))}
//         <button
//           onClick={() => navigateTo("achievements")}
//           className="w-full text-blue-600 hover:text-blue-700 text-sm font-semibold py-2"
//         >
//           Смотреть все достижения
//         </button>
//       </div>
//     </div>
//   );
// };

// // ========================== COURSES PAGE ==========================
// const CoursesPage = () => {
//   const { coursesData } = useAppContext();

//   return (
//     <div className="space-y-8">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Курсы исламских наук</h1>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Комплексное изучение ислама: от арабского языка до глубокого понимания Корана и Сунны
//         </p>
//       </div>

//       <div className="grid gap-8">
//         {Object.values(coursesData).map((course) => (
//           <DetailedCourseCard key={course.id} course={course} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const DetailedCourseCard = ({ course }) => {
//   const { navigateTo } = useAppContext();

//   return (
//     <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
//       <div className="h-3" style={{ backgroundColor: course.color }}></div>

//       <div className="p-8">
//         <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between space-y-6 xl:space-y-0">
//           <div className="flex-1">
//             <div className="flex items-start space-x-6">
//               <div className="text-6xl">{course.icon}</div>
//               <div className="flex-1">
//                 <div className="mb-4">
//                   <h2 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h2>
//                   <p className="text-lg text-gray-600 mb-3">{course.subtitle}</p>
//                   <p className="text-gray-700">{course.description}</p>
//                 </div>

//                 <div className="flex flex-wrap items-center gap-4 text-sm">
//                   <span
//                     className="px-3 py-1 rounded-full text-white font-semibold"
//                     style={{ backgroundColor: course.color }}
//                   >
//                     {course.difficulty}
//                   </span>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <BookOpen className="w-4 h-4" />
//                     <span>{course.totalLessons} уроков</span>
//                   </div>
//                   <div className="flex items-center space-x-2 text-gray-600">
//                     <Target className="w-4 h-4" />
//                     <span>{course.units.length} разделов</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="xl:w-80 text-center xl:text-right">
//             <div className="mb-6">
//               <div className="text-5xl font-bold mb-2" style={{ color: course.color }}>
//                 {course.progress}%
//               </div>
//               <div className="text-gray-600 mb-4">
//                 {course.completedLessons} из {course.totalLessons} уроков
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
//                 <div
//                   className="h-4 rounded-full transition-all duration-1000 ease-out"
//                   style={{
//                     width: `${course.progress}%`,
//                     background: `linear-gradient(90deg, ${course.color}CC, ${course.color})`,
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <button
//               onClick={() => navigateTo("course-detail", { currentCourse: course.id })}
//               className="w-full lg:w-auto px-8 py-4 rounded-2xl font-bold text-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-2xl"
//               style={{ background: `linear-gradient(135deg, ${course.color}EE, ${course.color})` }}
//             >
//               <div className="flex items-center justify-center space-x-2">
//                 <Play className="w-5 h-5" />
//                 <span>{course.progress === 0 ? "Начать курс" : "Продолжить"}</span>
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="mt-8 pt-6 border-t border-gray-100">
//           <h3 className="text-lg font-bold text-gray-900 mb-4">Разделы курса:</h3>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {course.units.map((unit) => (
//               <UnitPreviewCard key={unit.id} unit={unit} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const UnitPreviewCard = ({ unit }) => (
//   <div
//     className={`p-4 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
//       unit.locked
//         ? "border-gray-200 bg-gray-50"
//         : unit.progress === 100
//         ? "border-green-200 bg-green-50"
//         : "border-blue-200 bg-blue-50"
//     }`}
//   >
//     <div className="flex items-center justify-between mb-2">
//       <span
//         className={`text-sm font-semibold ${
//           unit.locked ? "text-gray-400" : unit.progress === 100 ? "text-green-700" : "text-blue-700"
//         }`}
//       >
//         {unit.title}
//       </span>
//       {unit.locked ? (
//         <Lock className="w-4 h-4 text-gray-400" />
//       ) : unit.progress === 100 ? (
//         <CheckCircle2 className="w-4 h-4 text-green-500" />
//       ) : (
//         <Play className="w-4 h-4 text-blue-500" />
//       )}
//     </div>
//     <div className="text-xs text-gray-600 mb-2">
//       {unit.completed} / {unit.lessons} уроков
//     </div>
//     {!unit.locked && (
//       <div className="w-full bg-gray-200 rounded-full h-1">
//         <div
//           className={`h-1 rounded-full transition-all duration-500 ${
//             unit.progress === 100 ? "bg-green-500" : "bg-blue-500"
//           }`}
//           style={{ width: `${unit.progress}%` }}
//         ></div>
//       </div>
//     )}
//   </div>
// );

// // ========================== LESSON PAGE ==========================
// const LessonPage = () => {
//   const { navigateTo, currentLesson } = useAppContext();
//   const [lessonState, setLessonState] = useState({
//     courseId: "arabic-fundamentals",
//     unitId: 1,
//     lessonId: 1,
//     currentQuestion: 0,
//     selectedAnswer: null,
//     showResult: false,
//     score: 0,
//     timeElapsed: 0,
//     hearts: 5,
//   });

//   // Get lesson data based on course
//   const getLessonData = useCallback((courseId, unitId, lessonId) => {
//     switch (courseId) {
//       case "arabic-fundamentals":
//         return LessonDataService.getArabicLesson(unitId, lessonId);
//       case "quran-memorization":
//         return LessonDataService.getQuranLesson(unitId, lessonId);
//       case "hadith-science":
//         return LessonDataService.getHadithLesson(unitId, lessonId);
//       case "prophets-stories":
//         return LessonDataService.getProphetStoryLesson(unitId, lessonId);
//       default:
//         return null;
//     }
//   }, []);

//   const lesson = getLessonData(lessonState.courseId, lessonState.unitId, lessonState.lessonId);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLessonState((prev) => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleAnswer = (answerIndex) => {
//     if (lessonState.showResult) return;

//     setLessonState((prev) => ({
//       ...prev,
//       selectedAnswer: answerIndex,
//       showResult: true,
//     }));

//     const isCorrect = answerIndex === lesson.questions[lessonState.currentQuestion].correct;

//     setTimeout(() => {
//       if (isCorrect) {
//         setLessonState((prev) => ({ ...prev, score: prev.score + 10 }));
//       } else {
//         setLessonState((prev) => ({ ...prev, hearts: Math.max(0, prev.hearts - 1) }));
//       }

//       if (lessonState.currentQuestion < lesson.questions.length - 1) {
//         setLessonState((prev) => ({
//           ...prev,
//           currentQuestion: prev.currentQuestion + 1,
//           selectedAnswer: null,
//           showResult: false,
//         }));
//       } else {
//         // Lesson completed
//         navigateTo("home");
//       }
//     }, 2500);
//   };

//   if (!lesson) {
//     return (
//       <div className="text-center py-20">
//         <div className="text-6xl mb-4">📚</div>
//         <h2 className="text-2xl font-bold text-gray-800 mb-2">Урок не найден</h2>
//         <p className="text-gray-600 mb-6">Этот урок пока недоступен или находится в разработке</p>
//         <button
//           onClick={() => navigateTo("home")}
//           className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 transition-colors"
//         >
//           Вернуться на главную
//         </button>
//       </div>
//     );
//   }

//   const currentQuestion = lesson.questions[lessonState.currentQuestion];
//   const progressPercent = ((lessonState.currentQuestion + 1) / lesson.questions.length) * 100;

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="max-w-4xl mx-auto px-4 py-6">
//         <LessonHeader
//           onBack={() => navigateTo("home")}
//           hearts={lessonState.hearts}
//           time={formatTime(lessonState.timeElapsed)}
//           score={lessonState.score}
//           progress={progressPercent}
//           currentQuestion={lessonState.currentQuestion + 1}
//           totalQuestions={lesson.questions.length}
//           lessonTitle={lesson.title}
//         />

//         <QuestionCard
//           question={currentQuestion}
//           selectedAnswer={lessonState.selectedAnswer}
//           showResult={lessonState.showResult}
//           onAnswer={handleAnswer}
//         />
//       </div>
//     </div>
//   );
// };
// import { ArrowLeft, Heart, Timer, Star } from "lucide-react";

// const LessonHeader = ({ onBack, hearts, time, score, progress, currentQuestion, totalQuestions, lessonTitle }) => (
//   <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8">
//     <div className="flex items-center justify-between mb-6">
//       <div className="flex items-center space-x-4">
//         <button onClick={onBack} className="p-3 rounded-2xl hover:bg-gray-100 transition-colors group">
//           <ArrowLeft className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />
//         </button>
//         <div>
//           <h1 className="text-xl font-bold text-gray-900">{lessonTitle}</h1>
//           <p className="text-sm text-gray-600">
//             Урок {currentQuestion} из {totalQuestions}
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center space-x-6">
//         <div className="flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-full">
//           <Heart className="w-5 h-5 text-red-500" />
//           <span className="font-bold text-red-600">{hearts}</span>
//         </div>

//         <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
//           <Timer className="w-5 h-5 text-blue-500" />
//           <span className="font-bold text-blue-600">{time}</span>
//         </div>

//         <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full">
//           <Star className="w-5 h-5 text-green-500" />
//           <span className="font-bold text-green-600">{score}</span>
//         </div>
//       </div>
//     </div>

//     {/* Индикатор прогресса */}
//     <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
//       <div className="h-3 bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }} />
//     </div>
//   </div>
// );

// export default LessonHeader;
