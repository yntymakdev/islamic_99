"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Globe,
  Server,
  Smartphone,
  Clock,
  BookOpen,
  Users,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Calendar,
  MessageCircle,
  Award,
  Zap,
  Target,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  Shield,
  Lightbulb,
  Coffee,
  Heart,
  Github,
  Youtube,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Gift,
  Sparkles,
  TrendingUp,
  Brain,
  Rocket,
  Copy,
  AlertCircle,
  Percent,
  User,
  Send,
  Bot,
  Headphones,
} from "lucide-react";
import DevAcademyLoader from "./DevAcademyLoader";
import ChatBot from "./DevTest";

// Тип для опций чата
type ChatOption = {
  text: string;
  value: string;
  emoji?: string;
  multi?: boolean;
  action?: "enroll" | "question" | "restart" | "whatsapp" | "form"; // действия кнопок
};

// Тип для одного шага чата
type ChatStep = {
  message: string;
  options?: ChatOption[];
  next?: keyof typeof chatFlow;
  type?: "input";
};

// Тип сообщения в чате
type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  options?: ChatOption[] | null;
  timestamp: Date;
};

// Тип для профиля пользователя
type UserProfile = {
  name: string;
  experience: string;
  interests: string[];
  timeAvailable: string;
  goals: string;
  currentJob: string;
};

// Тип для рекомендованного курса
type Recommendation = {
  course: {
    title: string;
    salary: string;
    duration: string;
    practice: string;
  };
  courseKey: string;
  score: number;
  explanation: string;
  reasons: string[];
};

const DevAcademyLanding: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [typedText, setTypedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showStudentDiscount, setShowStudentDiscount] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<keyof typeof chatFlow>("greeting");
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    experience: "",
    interests: [],
    timeAvailable: "",
    goals: "",
    currentJob: "",
  });
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [recommendedCourse, setRecommendedCourse] = useState<Recommendation | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const words = ["Frontend", "Backend", "Full-Stack", "Mobile"];

  // Chat flow (для типизации next используем keyof)
  const chatFlow = {
    greeting: { message: "Привет! 👋 Меня зовут Айгерим...", type: "input", next: "experience" },
    experience: {
      message: "Приятно познакомиться! Расскажи о своем опыте в программировании:",
      options: [
        { text: "🌱 Полный новичок", value: "beginner", emoji: "🌱" },
        { text: "💡 Немного знаком", value: "some", emoji: "💡" },
        { text: "💻 Есть опыт, хочу развиваться", value: "experienced", emoji: "💻" },
      ],
      next: "currentJob",
    },
    currentJob: {
      message: "А чем ты сейчас занимаешься?",
      options: [
        { text: "🎓 Учусь в университете", value: "student", emoji: "🎓" },
        { text: "💼 Работаю не в IT", value: "other_job", emoji: "💼" },
        { text: "🔄 Хочу сменить профессию", value: "career_change", emoji: "🔄" },
        { text: "🏠 В поиске работы", value: "unemployed", emoji: "🏠" },
      ],
      next: "interests",
    },
    interests: {
      message: "Что тебе больше всего интересно? (можешь выбрать несколько)",
      options: [
        { text: "🎨 Создавать красивые сайты", value: "frontend", multi: true, emoji: "🎨" },
        { text: "⚙️ Программировать логику", value: "backend", multi: true, emoji: "⚙️" },
        { text: "📱 Мобильные приложения", value: "mobile", multi: true, emoji: "📱" },
        { text: "🚀 Полный цикл разработки", value: "fullstack", multi: true, emoji: "🚀" },
        { text: "☁️ Серверы и DevOps", value: "devops", multi: true, emoji: "☁️" },
      ],
      next: "timeAvailable",
    },
    timeAvailable: {
      message: "Сколько времени готов уделять обучению?",
      options: [
        { text: "⏰ 5-10 часов/неделя", value: "light", emoji: "⏰" },
        { text: "📚 15-20 часов/неделя", value: "medium", emoji: "📚" },
        { text: "🔥 20+ часов/неделя", value: "intensive", emoji: "🔥" },
      ],
      next: "goals",
    },
    goals: {
      message: "Какая твоя главная цель?",
      options: [
        { text: "💰 Высокая зарплата", value: "salary", emoji: "💰" },
        { text: "🎯 Сменить профессию", value: "career", emoji: "🎯" },
        { text: "💡 Развить навыки", value: "skills", emoji: "💡" },
        { text: "🏢 Открыть свой бизнес", value: "business", emoji: "🏢" },
      ],
      next: "recommendation",
    },
  } as const;

  // Функции чата с полной типизацией
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addBotMessage = (text: string, options: ChatOption[] | null = null, showTyping: boolean = true) => {
    if (showTyping) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { id: Date.now(), text, sender: "bot", options, timestamp: new Date() }]);
      }, 1000 + Math.random() * 1000);
    } else {
      setMessages((prev) => [...prev, { id: Date.now(), text, sender: "bot", options, timestamp: new Date() }]);
    }
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user", timestamp: new Date() }]);
  };

  const handleOptionClick = (option: ChatOption) => {
    const currentFlow: ChatStep = chatFlow[currentStep];

    if (currentFlow?.options?.some((opt) => opt.multi)) {
      if (userProfile.interests.includes(option.value)) {
        setUserProfile((prev) => ({ ...prev, interests: prev.interests.filter((i) => i !== option.value) }));
      } else {
        setUserProfile((prev) => ({ ...prev, interests: [...prev.interests, option.value] }));
        addUserMessage(option.text);
      }
      return;
    }

    addUserMessage(option.text);
    setUserProfile((prev) => ({ ...prev, [currentStep]: option.value }));

    const nextStep = currentFlow.next;
    if (nextStep) {
      setCurrentStep(nextStep);
      const nextFlow: ChatStep = chatFlow[nextStep];
      addBotMessage(nextFlow.message, nextFlow.options || null);
    }
  };

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (currentStep === "greeting") {
      setUserProfile((prev) => ({ ...prev, name: inputValue }));
      setInputValue("");
      const nextFlow: ChatStep = chatFlow.experience;
      setCurrentStep("experience");
      addBotMessage(`${inputValue}, ${nextFlow.message}`, nextFlow.options || null);
    } else if (currentStep === "interests" && userProfile.interests.length > 0) {
      const nextStep = chatFlow[currentStep].next;
      if (nextStep) setCurrentStep(nextStep);
    }

    setInputValue("");
  };

  const proceedToNext = () => {
    const nextStep = chatFlow[currentStep].next;
    setCurrentStep(nextStep);

    if (nextStep === "recommendation") {
      generateRecommendation();
    } else {
      const nextFlow = chatFlow[nextStep];
      addBotMessage(nextFlow.message, nextFlow.options);
    }
  };

  const generateRecommendation = () => {
    setTimeout(() => {
      const recommendation = analyzeUserProfile();
      setRecommendedCourse(recommendation);

      const messages = [
        `Отлично! Я проанализировала твои ответы... 🤔`,
        `На основе твоего профиля, рекомендую курс: **${recommendation.course.title}**! 🎯`,
        recommendation.explanation,
        `**Почему именно этот курс:**\n${recommendation.reasons.join("\n")}`,
        `💰 Зарплата: ${recommendation.course.salary}\n⏱️ Длительность: ${recommendation.course.duration}\n🎯 Проектов: ${recommendation.course.practice}`,
      ];

      messages.forEach((msg, index) => {
        setTimeout(() => {
          addBotMessage(
            msg,
            index === messages.length - 1
              ? [
                  { text: "📞 Записаться на курс", value: "enroll", action: "enroll" },
                  { text: "💬 Задать вопрос", value: "question", action: "question" },
                  { text: "🔄 Пройти тест заново", value: "restart", action: "restart" },
                ]
              : null
          );
        }, (index + 1) * 1500);
      });
    }, 1000);
  };

  const analyzeUserProfile = () => {
    const { experience, interests, timeAvailable, goals, currentJob } = userProfile;

    // Система подсчета очков для каждого курса
    const scores = {
      frontend: 0,
      backend: 0,
      fullstack: 0,
      mobile: 0,
    };

    // Анализ интересов
    interests.forEach((interest) => {
      if (interest === "frontend") {
        scores.frontend += 30;
        scores.fullstack += 15;
      }
      if (interest === "backend") {
        scores.backend += 30;
        scores.fullstack += 15;
      }
      if (interest === "mobile") {
        scores.mobile += 30;
        scores.fullstack += 10;
      }
      if (interest === "fullstack") {
        scores.fullstack += 25;
      }
    });

    // Анализ опыта
    if (experience === "beginner") {
      scores.frontend += 20; // Легче для начинающих
      scores.mobile += 15;
    } else if (experience === "experienced") {
      scores.fullstack += 20;
      scores.backend += 15;
    }

    // Анализ времени
    if (timeAvailable === "light") {
      scores.frontend += 15;
      scores.mobile += 10;
    } else if (timeAvailable === "intensive") {
      scores.fullstack += 20;
      scores.backend += 15;
    }

    // Анализ целей
    if (goals === "salary") {
      scores.fullstack += 25;
      scores.backend += 20;
    } else if (goals === "career") {
      scores.frontend += 20;
      scores.mobile += 15;
    }

    // Анализ текущей работы
    if (currentJob === "student") {
      scores.frontend += 10;
    } else if (currentJob === "career_change") {
      scores.fullstack += 15;
    }

    // Определяем победителя
    const winner = Object.entries(scores).reduce((a, b) => (scores[a[0]] > scores[b[0]] ? a : b));
    const courseKey = winner[0];

    return {
      course: courses[courseKey],
      courseKey,
      score: winner[1],
      explanation: getExplanation(courseKey, userProfile),
      reasons: getReasons(courseKey, userProfile),
    };
  };

  const getExplanation = (courseKey, profile) => {
    const explanations = {
      frontend: `Perfect! Frontend подходит тебе, потому что ты ${
        profile.experience === "beginner"
          ? "новичок и этот курс отлично подходит для старта"
          : "интересуешься созданием пользовательских интерфейсов"
      } 🎨`,
      backend: `Отличный выбор! Backend идеален для тебя, так как ${
        profile.goals === "salary" ? "здесь высокие зарплаты" : "ты любишь логику и системы"
      } ⚙️`,
      fullstack: `Супер! Full-Stack это твой путь! ${
        profile.timeAvailable === "intensive"
          ? "У тебя достаточно времени для изучения полного стека"
          : "Это даст тебе максимум возможностей"
      } 🚀`,
      mobile: `Замечательно! Mobile разработка для тебя, потому что ${
        profile.interests.includes("mobile")
          ? "ты прямо сказал об интересе к мобильным приложениям"
          : "это быстрорастущая сфера"
      } 📱`,
    };
    return explanations[courseKey] || "Этот курс идеально подходит под твой профиль!";
  };

  const getReasons = (courseKey, profile) => {
    const allReasons = {
      frontend: [
        "✨ Быстрый старт для новичков",
        "🎨 Визуальные результаты работы",
        "💼 Много вакансий на рынке",
        "🚀 Можно быстро найти первую работу",
      ],
      backend: [
        "💰 Высокие зарплаты",
        "🔧 Работа с логикой и алгоритмами",
        "🏢 Востребовано в крупных компаниях",
        "📈 Отличные перспективы роста",
      ],
      fullstack: [
        "🌟 Максимум возможностей на рынке",
        "💡 Полное понимание веб-разработки",
        "🎯 Можешь работать в любой команде",
        "💸 Самые высокие зарплаты",
      ],
      mobile: [
        "📱 Быстрорастущий рынок",
        "🎮 Создание пользовательских приложений",
        "💎 Уникальные навыки",
        "🌍 Работа с международными проектами",
      ],
    };

    return allReasons[courseKey]?.slice(0, 3) || ["🎯 Отличные перспективы"];
  };

  const handleActionClick = (action) => {
    if (action === "enroll") {
      addUserMessage("Хочу записаться на курс!");
      setTimeout(() => {
        addBotMessage(
          "Отлично! Сейчас перенаправлю тебя к форме записи. Или можешь написать в WhatsApp: +996 709 826 628 📱",
          [
            { text: "📱 WhatsApp", value: "whatsapp", action: "whatsapp" },
            { text: "📋 Форма записи", value: "form", action: "form" },
          ]
        );
      }, 1000);
    } else if (action === "question") {
      addUserMessage("У меня есть вопрос");
      setTimeout(() => {
        addBotMessage("Конечно! Задавай любой вопрос, я помогу 😊", [], false);
        setCurrentStep("question");
      }, 800);
    } else if (action === "restart") {
      addUserMessage("Хочу пройти тест заново");
      setTimeout(() => {
        setMessages([]);
        setCurrentStep("greeting");
        setUserProfile({
          name: "",
          experience: "",
          interests: [],
          timeAvailable: "",
          goals: "",
          currentJob: "",
        });
        setRecommendedCourse(null);
        addBotMessage(chatFlow.greeting.message);
      }, 800);
    } else if (action === "whatsapp") {
      window.open("https://wa.me/996709826628", "_blank");
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    let index = 0;
    const interval = setInterval(() => {
      if (index <= word.length) {
        setTypedText(word.slice(0, index));
        index++;
      } else {
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [currentWordIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("0709826628");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const courses = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "React, Next.js, TypeScript",
      duration: "8 недель",
      lessons: 16,
      practice: "12+ проектов",
      salary: "80-150K",
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Node.js, Python, Databases",
      duration: "10 недель",
      lessons: 20,
      practice: "8+ проектов",
      salary: "90-180K",
    },
    fullstack: {
      title: "Full-Stack Mastery",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Complete Web Development",
      duration: "16 недель",
      lessons: 32,
      practice: "20+ проектов",
      salary: "120-250K",
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "React Native & Flutter",
      duration: "12 недель",
      lessons: 24,
      practice: "15+ проектов",
      salary: "100-200K",
    },
  };

  const plans = [
    {
      id: "basic",
      name: "Базовый",
      price: 759,
      features: ["2 урока/неделя", "Материалы", "Чат поддержки"],
      popular: false,
    },
    {
      id: "standard",
      name: "Стандарт",
      price: 1299,
      features: ["Всё из Базового", "Менторинг", "Проверка кода", "Сертификат"],
      popular: true,
    },
    {
      id: "premium",
      name: "Премиум",
      price: 1899,
      features: ["Всё из Стандарта", "1-на-1 менторинг", "Помощь с работой", "Пожизненный доступ"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background
       {isLoading && (
      <DevAcademyLan onLoadingComplete={() => setIsLoading(false)} />
    )}
    {!isLoading && (
      <DevAcademyLanding />
    )} */}

      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-zinc-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DevAcademy</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-zinc-400 hover:text-white transition-colors">
                Курсы
              </a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
                Тарифы
              </a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                Контакты
              </a>
              <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all">
                Начать обучение
              </button>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Student Discount Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full mb-6 animate-bounce">
                <Gift className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-purple-400 font-medium">Скидка 30% для студентов!</span>
                <Sparkles className="w-4 h-4 ml-2 text-purple-400" />
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-white">Стань</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                  {typedText}
                </span>
                <span className="animate-pulse">|</span>
                <br />
                <span className="text-white">разработчиком</span>
              </h1>

              <p className="text-xl text-zinc-300 mb-8">
                <span className="text-emerald-400 font-semibold">Начни с нуля</span> и получи работу в IT за
                <span className="text-yellow-400 font-bold"> 4 месяца</span>. Учись по выходным!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all">
                  Начать бесплатно
                  <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-zinc-900/80 backdrop-blur border border-zinc-700 hover:border-emerald-500 rounded-xl font-bold text-white transition-all">
                  <Play className="w-5 h-5 mr-2 inline" />
                  Смотреть Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
                  <div className="text-2xl font-bold text-emerald-400">500+</div>
                  <div className="text-sm text-zinc-400">Студентов</div>
                </div>
                <div className="text-center p-3 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-zinc-400">Проектов</div>
                </div>
                <div className="text-center p-3 bg-zinc-900/50 backdrop-blur rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all">
                  <div className="text-2xl font-bold text-yellow-400">95%</div>
                  <div className="text-sm text-zinc-400">Трудоустройство</div>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-3xl animate-pulse"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  <Zap className="w-4 h-4 inline mr-1" />
                  Осталось 24 часа!
                </div>

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Первый урок бесплатно!</h3>
                  <p className="text-emerald-400">Попробуй прямо сейчас</p>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "✅ Личный ментор 24/7",
                    "✅ Готовое портфолио",
                    "✅ Помощь с трудоустройством",
                    "✅ Сертификат",
                    "✅ Сообщество",
                  ].map((item, i) => (
                    <div key={i} className="text-zinc-300">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl p-4 border border-emerald-500/30">
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">759</span>
                    <span className="text-zinc-400 line-through">1299</span>
                    <span className="text-emerald-400 text-sm">сом/2 недели</span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">* для первых 10 студентов</div>
                </div>

                <button className="w-full mt-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/50 transition-all">
                  Забронировать место
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Направления обучения</h2>
            <p className="text-xl text-zinc-400">Выберите свой путь в IT</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(courses).map(([key, course]) => (
              <div
                key={key}
                className={`p-6 bg-zinc-900/50 border rounded-2xl cursor-pointer transform hover:scale-105 transition-all ${
                  activeTab === key
                    ? "border-emerald-500 bg-emerald-500/5"
                    : "border-zinc-800 hover:border-emerald-500/50"
                }`}
                onClick={() => setActiveTab(key)}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{course.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Длительность</span>
                    <span className="text-emerald-400">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Зарплата</span>
                    <span className="text-emerald-400">{course.salary}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full mb-6 animate-pulse">
              <Clock className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-red-400 font-medium">
                Скидка истекает: {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Тарифы</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 bg-zinc-900/50 border rounded-2xl transition-all hover:scale-105 ${
                  plan.popular ? "border-emerald-500 bg-emerald-500/5" : "border-zinc-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-1">
                  {showStudentDiscount ? Math.floor(plan.price * 0.7) : plan.price}
                  <span className="text-sm text-zinc-400"> сом</span>
                </div>
                {showStudentDiscount && <div className="text-zinc-400 line-through text-sm">{plan.price} сом</div>}
                <div className="text-zinc-400 mb-6">за 2 недели</div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                >
                  Выбрать план
                </button>
              </div>
            ))}
          </div>

          {/* Payment Info with QR */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Способы оплаты</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* QR Code Section */}
              <div className="text-center">
                <div className="relative mx-auto w-64 h-64 bg-white rounded-2xl p-4 mb-6 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-xl opacity-50"></div>
                  <div className="relative bg-white rounded-xl p-4 h-full flex flex-col items-center justify-center">
                    <div className="w-full h-full bg-zinc-900 rounded-lg flex flex-col items-center justify-center">
                      <Smartphone className="w-16 h-16 text-white mb-2" />
                      <span className="text-white text-sm">QR Code MBank</span>
                      <span className="text-zinc-400 text-xs mt-1">Сканируйте для оплаты</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                    <span className="text-white font-bold text-sm">MBank</span>
                  </div>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-emerald-400 font-semibold">Номер для оплаты:</span>
                    {copied && <span className="text-emerald-400 text-sm">Скопировано!</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white font-mono">0709 826 628</span>
                    <button
                      onClick={handleCopyNumber}
                      className="p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-colors"
                    >
                      <Copy className="w-5 h-5 text-emerald-400" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Инструкция по оплате:</h4>
                <div className="space-y-3">
                  {[
                    "Откройте приложение MBank",
                    "Сканируйте QR-код или введите номер",
                    "Укажите сумму согласно тарифу",
                    "Отправьте скриншот в WhatsApp",
                    "Получите доступ в течение 1 часа",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        {i + 1}
                      </div>
                      <span className="text-zinc-300">{step}</span>
                    </div>
                  ))}
                </div>

                {/* Student Discount Toggle */}
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showStudentDiscount}
                      onChange={(e) => setShowStudentDiscount(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`relative w-12 h-6 rounded-full transition-colors ${
                        showStudentDiscount ? "bg-purple-500" : "bg-zinc-700"
                      }`}
                    >
                      <div
                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                          showStudentDiscount ? "translate-x-6" : ""
                        }`}
                      ></div>
                    </div>
                    <span className="ml-3 text-white">Я студент (скидка 30%)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Свяжитесь со мной</h2>
            <p className="text-xl text-zinc-400">Готовы начать? Напишите мне!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <Phone className="w-12 h-12 text-emerald-400 mr-4" />
                <div>
                  <div className="text-white font-medium">WhatsApp/Telegram</div>
                  <div className="text-emerald-400 font-mono">+996 709 826 628</div>
                </div>
              </div>
              <div className="flex items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <Mail className="w-12 h-12 text-emerald-400 mr-4" />
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-emerald-400">academy@devacademy.kg</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Быстрая запись</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                  placeholder="Ваше имя"
                />
                <input
                  type="tel"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none"
                  placeholder="+996 XXX XXX XXX"
                />
                <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none">
                  <option value="">Выберите курс</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Full-Stack</option>
                  <option value="mobile">Mobile</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all z-50"
      >
        {showChat ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Widget */}
      {showChat && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-zinc-700 bg-gradient-to-r from-emerald-500/10 to-teal-500/10">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold flex items-center">
                  <Brain className="w-5 h-5 mr-2 text-emerald-400" />
                  IT Консультант
                </h3>
                <p className="text-emerald-400 text-sm flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                  Помогаю выбрать курс
                </p>
              </div>
              <button onClick={() => setShowChat(false)} className="p-1 hover:bg-zinc-800 rounded-lg transition-colors">
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "bot" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-xs ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg rounded-br-sm"
                      : "bg-zinc-800 text-white rounded-lg rounded-bl-sm"
                  } px-3 py-2`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>

                  {/* Options */}
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => (option.action ? handleActionClick(option.action) : handleOptionClick(option))}
                          className={`w-full text-left p-2 text-sm rounded-lg border transition-all ${
                            option.action === "enroll"
                              ? "bg-emerald-500/20 border-emerald-500/50 hover:bg-emerald-500/30 text-emerald-400"
                              : option.action
                              ? "bg-teal-500/20 border-teal-500/50 hover:bg-teal-500/30 text-teal-400"
                              : userProfile.interests?.includes(option.value)
                              ? "bg-emerald-500/30 border-emerald-500 text-emerald-400"
                              : "bg-zinc-700/50 border-zinc-600 hover:bg-zinc-700 hover:border-emerald-500/50 text-zinc-300"
                          }`}
                        >
                          {option.text}
                        </button>
                      ))}

                      {/* Continue button for interests */}
                      {currentStep === "interests" && userProfile.interests.length > 0 && (
                        <button
                          onClick={proceedToNext}
                          className="w-full p-2 text-sm bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg hover:shadow-emerald-500/30 transition-all mt-2"
                        >
                          Продолжить →
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {message.sender === "user" && (
                  <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                    <User className="w-4 h-4 text-zinc-300" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-zinc-800 rounded-lg px-4 py-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {(currentStep === "greeting" || currentStep === "question") && (
            <div className="p-4 border-t border-zinc-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleInputSubmit()}
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                  placeholder={currentStep === "greeting" ? "Напишите ваше имя..." : "Задайте вопрос..."}
                />
                <button
                  onClick={handleInputSubmit}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-lg hover:shadow-emerald-500/30 text-white rounded-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="text-black">
        <ChatBot />
      </div>
    </div>
  );
};

export default DevAcademyLanding;
