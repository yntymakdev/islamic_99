"use client";
import React, { useState, useEffect, useRef } from "react";
import { Crown, Shield, Plus, Minus, MapPin, GraduationCap, Twitter, Instagram, Sparkle } from "lucide-react";

import {
  Menu,
  X,
  Code2,
  BookOpen,
  ChartArea,
  Terminal,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  Star,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Globe,
  Briefcase,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Monitor,
  Smartphone,
  Tablet,
  Sun,
  Moon,
  Coffee,
  Heart,
  Eye,
  Download,
  Send,
  Calendar,
  Clock,
  Target,
  Flame,
  Trophy,
  Gift,
  Lock,
  Unlock,
  Settings,
  User,
  BarChart3,
  Code,
  Database,
  Layers,
  Box,
  FileCode,
  GitBranch,
  Package,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Logo from "./Logo";
import Image from "next/image";
import logo from "./image.png";
import CommandCenter from "./new/CommandCenter";
import PersonalBlog from "./new/Blog";
// import UltimateAIAssistant from "./new/Chat";
const Pro = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [sortBy, setSortBy] = useState("date"); // date, popularity, name

  const [activeYear, setActiveYear] = useState(2024);
  const [showChatbot, setShowChatbot] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", text: "Привет! 👋 Я AI-ассистент. Чем могу помочь?" },
  ]);
  const [activeJob, setActiveJob] = useState(0);

  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [activeTimeline, setActiveTimeline] = useState(null);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [deviceView, setDeviceView] = useState("desktop");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [visitCount, setVisitCount] = useState(1247);
  const [showContactForm, setShowContactForm] = useState(false);
  const [likeCount, setLikeCount] = useState(89);
  const [hasLiked, setHasLiked] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [currentLang, setCurrentLang] = useState("ru");
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const [konamiCode, setKonamiCode] = useState([]);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [showAboutSheet, setShowAboutSheet] = useState(false);
  const [showPricingModal, setShowPricingModal] = useState(false);

  const fullText = "Full-Stack разработчик";
  const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e) => {
      setKonamiCode((prev) => [...prev.slice(-7), e.key]);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Typing animation
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    // Visit counter animation
    const visitInterval = setInterval(() => {
      setVisitCount((prev) => prev + 1);
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(timer);
      clearInterval(typingInterval);
      clearInterval(visitInterval);
    };
  }, []);

  useEffect(() => {
    if (JSON.stringify(konamiCode) === JSON.stringify(konami)) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 5000);
    }
  }, [konamiCode]);
  useEffect(() => {
    const handleScroll = () => {
      const timelineSection = document.getElementById("timeline");
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = timelineSection.offsetHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = Math.max(0, windowHeight - rect.top);
          const total = windowHeight + sectionHeight;
          const progress = Math.min(100, (scrolled / total) * 100);
          setTimelineProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);
  const faqs = [
    {
      question: "Сколько стоят ваши услуги?",
      answer:
        "Стоимость зависит от сложности проекта. Базовый лендинг от $500, сложное веб-приложение от $3000. Первая консультация бесплатно!",
    },
    {
      question: "Как долго длится разработка проекта?",
      answer:
        "Простой лендинг - 1-2 недели, средний проект - 1-2 месяца, сложное приложение - 3-6 месяцев. Все зависит от требований.",
    },
    {
      question: "Предоставляете ли вы поддержку после запуска?",
      answer: "Да! Предоставляю бесплатную поддержку 1 месяц после запуска. Далее можно оформить платную техподдержку.",
    },
    {
      question: "Работаете ли вы с международными клиентами?",
      answer: "Конечно! Работаю с клиентами по всему миру. Общение на русском и английском языках.",
    },
    {
      question: "Какие технологии вы используете?",
      answer:
        "React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, Redis, Docker и многие другие современные технологии.",
    },
    {
      question: "Можете ли вы доработать существующий проект?",
      answer:
        "Да, занимаюсь как разработкой с нуля, так и доработкой существующих проектов, исправлением багов и оптимизацией.",
    },
  ];
  const experience = [
    {
      id: 0,
      company: "Motion Web",
      role: "Frontend Engineer",
      period: "Jun 2024 - Present",
      url: "https://motion.kg/",
      achievements: [
        "Разработал платформу MotionWebLMS с нуля используя TypeScript и MVP принцип",
        "Увеличил посещаемость студентов на 60% через интеграцию системы еженедельного рейтинга",
        "Оптимизировал работу бухгалтерии на 90% через автоматизацию расчета зарплат",
      ],
    },
    {
      id: 1,
      company: "Peaksoft",
      role: "Frontend Engineer",
      period: "Jan 2022 - Jun 2024",
      url: "https://lms.peaksoft.house/",
      achievements: [
        "Разработал и оптимизировал компоненты с TypeScript и Next.js, улучшив скорость загрузки на 30%",
        "Внедрил Zustand и RTK Query для эффективного state management, снизив ошибки на 20%",
        "Создал unit тесты и Selenium тесты, увеличив стабильность на 15%",
        "Улучшил UX/UI банковского приложения, увеличив retention на 25%",
        "Работал в Scrum и Agile, сократив время релизов на 10%",
      ],
    },
    {
      id: 2,
      company: "WEDEVX",
      role: "Frontend Engineer",
      period: "May 2021 - Jan 2022",
      url: "https://www.wedevx.co/",
      achievements: [
        "Улучшил пользовательский feedback через интеграцию kommoCRM",
        "Создал WeDevX log для оптимизации контроля посещаемости, сэкономив 90% времени",
        "Настроил автоматизированные процессы через kommoCRM API",
        "Провел обучение разработчиков kommoCRM, повысив скорость разработки с 74% до 80%",
      ],
    },
  ];
  const translations = {
    ru: {
      nav: {
        about: "О себе",
        experience: "Опыт",
        projects: "Проекты",
        contact: "Контакты",
      },
      hero: {
        greeting: "Привет, я",
        role: "Full-Stack разработчик",
        description: "Специализируюсь на создании масштабируемых веб-приложений",
        cta: "Посмотреть проекты",
      },
      chat: {
        title: "AI Ассистент",
        online: "Онлайн",
        placeholder: "Напишите сообщение...",
        greeting: "Привет! 👋 Я AI-ассистент. Чем могу помочь?",
      },
    },
    en: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "Hi, I'm",
        role: "Full-Stack Developer",
        description: "I specialize in building scalable web applications",
        cta: "View Projects",
      },
      chat: {
        title: "AI Assistant",
        online: "Online",
        placeholder: "Write a message...",
        greeting: "Hello! 👋 I am an AI assistant. How can I help?",
      },
    },
    kg: {
      nav: {
        about: "Мен жөнүндө",
        experience: "Тажрыйба",
        projects: "Долбоорлор",
        contact: "Байланыш",
      },
      hero: {
        greeting: "Салам, мен",
        role: "Full-Stack иштеп чыгуучу",
        description: "Веб-тиркемелерди түзүүгө адистешкенмин",
        cta: "Долбоорлорду көрүү",
      },
      chat: {
        title: "AI Жардамчы",
        online: "Онлайн",
        placeholder: "Билдирүү жазыңыз...",
        greeting: "Салам! 👋 Мен AI жардамчымын. Кандай жардам бере алам?",
      },
    },
  };

  const languages = [
    { code: "ru", name: "Русский", flag: "🇷🇺" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "kg", name: "Кыргызча", flag: "🇰🇬" },
    { code: "jp", name: "日本語", flag: "🇯🇵" },
    { code: "kr", name: "한국어", flag: "🇰🇷" },
  ];

  const t = translations[currentLang];
  const journeyData = [
    {
      year: 2020,
      title: "Старт",
      role: "Junior Developer",
      company: "Freelance",
      description: "Первые шаги в веб-разработке. Изучение основ React и современного JavaScript.",
      skills: ["HTML/CSS", "JavaScript", "React", "Git"],
      projects: 5,
      achievement: "Первый коммерческий проект",
      color: "bg-blue-500",
    },
    {
      year: 2021,
      title: "Рост",
      role: "Middle Developer",
      company: "Tech Startup",
      description: "Погружение в Full-Stack разработку. Освоение серверных технологий и баз данных.",
      skills: ["Node.js", "PostgreSQL", "MongoDB", "Docker"],
      projects: 15,
      achievement: "Ключевой разработчик в команде",
      color: "bg-purple-500",
    },
    {
      year: 2022,
      title: "Масштаб",
      role: "Senior Developer",
      company: "Enterprise Corp",
      description: "Работа над высоконагруженными системами. Менторство junior разработчиков.",
      skills: ["Kubernetes", "AWS", "Microservices", "GraphQL"],
      projects: 25,
      achievement: "Tech Lead в 2 проектах",
      color: "bg-emerald-500",
    },
    {
      year: 2023,
      title: "Экспертиза",
      role: "Lead Developer",
      company: "Multiple Projects",
      description: "Архитектура сложных систем. Консультирование стартапов по техническим вопросам.",
      skills: ["System Design", "Team Leading", "CI/CD", "DevOps"],
      projects: 40,
      achievement: "Запуск 3 успешных продуктов",
      color: "bg-orange-500",
    },
    {
      year: 2024,
      title: "Инновации",
      role: "Tech Consultant",
      company: "Own Practice",
      description: "Создание образовательных программ. Помощь компаниям в digital трансформации.",
      skills: ["AI Integration", "Next.js 15", "Serverless", "Web3"],
      projects: 50,
      achievement: "1000+ студентов обучено",
      color: "bg-pink-500",
    },
  ];

  // Данные для чатбота:
  const botResponses = {
    привет: "Привет! Рад знакомству! 😊",
    проект: "У меня более 50 завершенных проектов. Хотите увидеть портфолио?",
    цена: "Стоимость зависит от сложности. Давайте обсудим ваш проект!",
    технологии: "Работаю с React, Next.js, Node.js, TypeScript, PostgreSQL и многими другими технологиями.",
    контакт: "Вы можете написать мне на developer@portfolio.com или позвонить +7 (999) 123-45-67",
    опыт: "У меня более 5 лет опыта в веб-разработке, работал с компаниями разного масштаба.",
    помощь:
      "Я могу помочь с:\n• Разработкой веб-приложений\n• Консультацией по архитектуре\n• Оптимизацией существующих проектов\n• Обучением команды",
  };

  // Функция отправки сообщения:
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = { type: "user", text: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerInput = chatInput.toLowerCase();
      let botResponse = "Интересный вопрос! Напишите мне на developer@portfolio.com для детального обсуждения.";

      for (const [key, value] of Object.entries(botResponses)) {
        if (lowerInput.includes(key)) {
          botResponse = value;
          break;
        }
      }

      setChatMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };
  const timeline = [
    {
      year: "2020",
      title: "Начало пути",
      desc: "Первые проекты на React",
      details: "Изучил основы React, создал первый landing page. Освоил HTML, CSS, JavaScript на продвинутом уровне.",
      icon: <Rocket className="size-6" />,
      color: "from-blue-500 to-cyan-500",
      achievements: ["3 завершенных проекта", "Изучено React", "Первый фриланс заказ"],
    },
    {
      year: "2021",
      title: "Full-Stack",
      desc: "Освоение Node.js и баз данных",
      details:
        "Погрузился в backend разработку. Освоил Node.js, Express, MongoDB и PostgreSQL. Создал первое полноценное приложение.",
      icon: <Database className="size-6" />,
      color: "from-purple-500 to-pink-500",
      achievements: ["10+ проектов", "Освоен Node.js", "Работа с БД"],
    },
    {
      year: "2022",
      title: "Профессионал",
      desc: "Работа в крупных проектах",
      details:
        "Начал работать в продуктовой компании. Участвовал в разработке высоконагруженных систем. Изучил Docker и CI/CD.",
      icon: <TrendingUp className="size-6" />,
      color: "from-emerald-500 to-teal-500",
      achievements: ["Работа в команде", "20+ проектов", "DevOps навыки"],
    },
    {
      year: "2023",
      title: "Архитектор",
      desc: "Проектирование систем",
      details: "Стал Senior разработчиком. Проектировал архитектуру сложных систем. Менторил junior разработчиков.",
      icon: <Layers className="size-6" />,
      color: "from-orange-500 to-red-500",
      achievements: ["Senior позиция", "Менторство", "Архитектура"],
    },
    {
      year: "2024",
      title: "Эксперт",
      desc: "Наставничество и консалтинг",
      details:
        "Веду собственные проекты, провожу консультации для стартапов. Создал обучающие курсы для разработчиков.",
      icon: <Award className="size-6" />,
      color: "from-violet-500 to-purple-500",
      achievements: ["50+ проектов", "Свои курсы", "Tech Lead"],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/месяц",
      description: "Для начинающих проектов",
      features: [
        "1 проект в месяц",
        "Email поддержка",
        "Базовая документация",
        "Code review раз в неделю",
        "Доступ к шаблонам",
      ],
      icon: <Rocket className="size-8 text-blue-600" />,
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/месяц",
      description: "Для серьезных проектов",
      features: [
        "3 проекта в месяц",
        "Приоритетная поддержка 24/7",
        "Полная документация",
        "Daily code review",
        "Все шаблоны + компоненты",
        "Консультации по архитектуре",
        "Оптимизация производительности",
      ],
      icon: <Crown className="size-8 text-purple-600" />,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/месяц",
      description: "Для крупного бизнеса",
      features: [
        "Безлимитные проекты",
        "VIP поддержка 24/7",
        "Кастомная документация",
        "Персональный менеджер",
        "Все возможности Pro",
        "Корпоративное обучение",
        "SLA гарантии",
        "Приоритетный code review",
      ],
      icon: <Shield className="size-8 text-emerald-600" />,
      popular: false,
    },
  ];

  const aboutInfo = {
    name: "Александр Иванов",
    role: "Senior Full-Stack Developer",
    location: "Бишкек, Кыргызстан",
    email: "developer@portfolio.com",
    phone: "+7 (999) 123-45-67",
    bio: "Я увлеченный разработчик с более чем 5-летним опытом создания веб-приложений. Специализируюсь на JavaScript экосистеме и люблю создавать красивые, функциональные продукты.",
    education: [
      {
        degree: "Магистр компьютерных наук",
        school: "КРСУ",
        year: "2018-2020",
      },
    ],
    hobbies: ["Программирование", "Фотография", "Путешествия", "Музыка"],
    languages: ["Русский (родной)", "English (Fluent)", "Кыргызский (родной)"],
  };

  const features = [
    {
      icon: <Code2 className="size-6 text-blue-600" />,
      title: "Современный стек",
      description:
        "Использую последние версии React, Next.js, Node.js и TypeScript для создания быстрых и надежных приложений.",
    },
    {
      icon: <ChartArea className="size-6 text-blue-600" />,
      title: "Full-Stack опыт",
      description: "Работаю со всем циклом разработки - от UI/UX дизайна до развертывания на production серверах.",
    },
    {
      icon: <BookOpen className="size-6 text-blue-600" />,
      title: "Чистый код",
      description: "Пишу понятный, поддерживаемый код с использованием лучших практик и паттернов проектирования.",
    },
  ];

  const projects = [
    {
      title: "Full Stack авторизация",
      description:
        "Создание современной системы авторизации с NestJS, Prisma, PostgreSQL, Redis для управления сессиями и Next.js, включая двухфакторную аутентификацию.",
      lessons: "23 урока",
      gradient: "from-blue-600 to-cyan-500",
      color: "blue",
      image: "🔐",
      tech: ["NestJS", "React", "PostgreSQL", "Redis"],
      year: "2024",
      status: "Завершен",
    },
    {
      title: "Интернет-магазин с CMS",
      description:
        "Создание полнофункционального интернет-магазина с CMS на Next.js, NestJS и Prisma с авторизацией через Google и Yandex и панелью управления.",
      lessons: "25 уроков",
      gradient: "from-purple-600 to-pink-500",
      color: "purple",
      image: "🛍️",
      tech: ["Next.js", "Prisma", "OAuth", "Stripe"],
      year: "2024",
      status: "Завершен",
    },
    {
      title: "Full-stack копия Twitch",
      description:
        "Создание клона Twitch с авторизацией на сессиях Redis, TOTP, подписками, чатом, настройкой профиля и функционалом Telegram-бота.",
      lessons: "30+ уроков",
      gradient: "from-violet-600 to-purple-500",
      color: "violet",
      image: "📺",
      tech: ["WebRTC", "Socket.io", "Redis", "Telegram API"],
      year: "2024",
      status: "Завершен",
    },
    {
      title: "Полный курс по Nest.js",
      description:
        "Курс по NestJS для разработки серверных приложений с REST API, TypeORM и Prisma, middleware, guards, interceptors, Swagger.",
      lessons: "40+ уроков",
      gradient: "from-emerald-600 to-teal-500",
      color: "emerald",
      image: "🚀",
      tech: ["NestJS", "TypeORM", "Swagger", "Jest"],
      year: "2024",
      status: "Завершен",
    },
  ];

  const skills = [
    { name: "React", level: 95, icon: <Code className="size-5" />, color: "from-blue-500 to-cyan-500" },
    { name: "Next.js", level: 92, icon: <Box className="size-5" />, color: "from-gray-700 to-gray-900" },
    { name: "TypeScript", level: 90, icon: <FileCode className="size-5" />, color: "from-blue-600 to-blue-800" },
    { name: "Node.js", level: 88, icon: <Terminal className="size-5" />, color: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 85, icon: <Database className="size-5" />, color: "from-blue-500 to-indigo-600" },
    { name: "NestJS", level: 87, icon: <Layers className="size-5" />, color: "from-red-500 to-pink-600" },
  ];

  const achievements = [
    { icon: <Trophy className="size-6 text-yellow-500" />, title: "50+ проектов", desc: "Успешно завершенных" },
    { icon: <Users className="size-6 text-blue-500" />, title: "30+ клиентов", desc: "Довольных заказчиков" },
    { icon: <Star className="size-6 text-purple-500" />, title: "5 лет", desc: "Опыта разработки" },
    { icon: <Flame className="size-6 text-orange-500" />, title: "100%", desc: "Положительных отзывов" },
  ];

  // const timeline = [
  //   { year: "2020", title: "Начало пути", desc: "Первые проекты на React" },
  //   { year: "2021", title: "Full-Stack", desc: "Освоение Node.js и баз данных" },
  //   { year: "2022", title: "Профессионал", desc: "Работа в крупных проектах" },
  //   { year: "2023", title: "Архитектор", desc: "Проектирование систем" },
  //   { year: "2024", title: "Эксперт", desc: "Наставничество и консалтинг" },
  // ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const handleDownloadCV = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          alert("CV успешно скачано! 🎉");
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="flex h-full w-full flex-col font-sans bg-background text-foreground relative overflow-x-hidden">
      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="text-center space-y-4 animate-bounce">
            <div className="text-6xl">🎉</div>
            <div className="text-3xl font-bold text-white">Вы нашли секрет!</div>
            <div className="text-xl text-white/80">Konami Code активирован!</div>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-in-right flex items-center gap-2">
          <CheckCircle2 className="size-5" />
          <span>Спасибо за лайк! ❤️</span>
        </div>
      )}

      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed w-8 h-8 rounded-full border-2 border-blue-500 z-[9999] transition-transform duration-100 hidden md:block"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-110"
        >
          <ArrowRight className="size-5 -rotate-90" />
        </button>
      )}

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`fixed bottom-24 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 ${
          hasLiked ? "bg-red-500 text-white" : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
        }`}
      >
        <Heart className={`size-5 ${hasLiked ? "fill-current" : ""}`} />
      </button>

      {/* Contact Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Свяжитесь со мной</h3>
              <button onClick={() => setShowContactForm(false)} className="text-neutral-500 hover:text-neutral-700">
                <X className="size-6" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background"
                  placeholder="ivan@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-background h-32"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white h-11">
                <Send className="size-4 mr-2" />
                Отправить
              </Button>
            </form>
          </div>
        </div>
      )}
      {showAboutSheet && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={() => setShowAboutSheet(false)}>
          <div
            className="fixed right-0 top-0 h-full w-full md:w-[500px] bg-white dark:bg-neutral-900 shadow-2xl overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">О себе</h2>
                <button
                  onClick={() => setShowAboutSheet(false)}
                  className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-lg transition"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Profile Photo */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                      АИ
                    </div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-neutral-900"></div>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{aboutInfo.name}</h3>
                  <p className="text-muted-foreground">{aboutInfo.role}</p>
                </div>

                {/* Info Cards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                    <MapPin className="size-5 text-blue-600" />
                    <span>{aboutInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                    <Mail className="size-5 text-blue-600" />
                    <span className="text-sm">{aboutInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                    <Phone className="size-5 text-blue-600" />
                    <span>{aboutInfo.phone}</span>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <User className="size-5 text-blue-600" />
                    Обо мне
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{aboutInfo.bio}</p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <GraduationCap className="size-5 text-blue-600" />
                    Образование
                  </h4>
                  {aboutInfo.education.map((edu, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-sm text-muted-foreground">
                        {edu.school} • {edu.year}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Languages */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Globe className="size-5 text-blue-600" />
                    Языки
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.languages.map((lang, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hobbies */}
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Heart className="size-5 text-blue-600" />
                    Увлечения
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.hobbies.map((hobby, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold mb-3">Социальные сети</h4>
                  <div className="grid grid-cols-4 gap-3">
                    <a
                      href="#"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                    >
                      <Github className="size-6" />
                      <span className="text-xs">GitHub</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                    >
                      <Linkedin className="size-6" />
                      <span className="text-xs">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                    >
                      <Twitter className="size-6" />
                      <span className="text-xs">Twitter</span>
                    </a>
                    <a
                      href="#"
                      className="flex flex-col items-center gap-2 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition"
                    >
                      <Instagram className="size-6" />
                      <span className="text-xs">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showPricingModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowPricingModal(false)}
        >
          <div
            className="bg-white dark:bg-neutral-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Выберите план подписки</h2>
                  <p className="text-muted-foreground">Получите доступ к премиум функциям</p>
                </div>
                <button
                  onClick={() => setShowPricingModal(false)}
                  className="hover:bg-neutral-100 dark:hover:bg-neutral-800 p-2 rounded-lg transition"
                >
                  <X className="size-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {pricingPlans.map((plan, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-xl ${
                      plan.popular
                        ? "border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 scale-105"
                        : "border-neutral-200 dark:border-neutral-800"
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                          <Sparkle className="size-3" />
                          Популярный
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">{plan.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground mb-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                          : "bg-blue-600 hover:bg-blue-700"
                      } text-white`}
                    >
                      Выбрать план
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header
        className={`sticky left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/85 shadow-sm backdrop-blur-md" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 w-full items-center justify-between">
            <div className="flex items-center">
              <a className="mr-10 flex items-center gap-x-3 text-xl font-bold text-blue-600" href="/">
                <Image src={logo} alt="image" width={40} height={40} />
                DevPortfolio
              </a>
            </div>

            <div className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex">
              <nav className="hidden items-center space-x-7 text-sm font-medium md:flex">
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#projects"
                >
                  Проекты
                </a>
                <a
                  className="text-sm text-neutral-600 transition hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
                  href="#faq"
                >
                  FAQ
                </a>
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#skills"
                >
                  Навыки
                </a>
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#timeline"
                >
                  Опыт
                </a>
                <button
                  onClick={() => setShowAboutSheet(true)}
                  className="text-sm text-neutral-600 transition hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400"
                >
                  О себе
                </button>
                <button
                  onClick={() => setShowPricingModal(true)}
                  className="text-sm text-neutral-600 transition hover:text-blue-600 dark:text-neutral-300 dark:hover:text-blue-400 flex items-center gap-1"
                >
                  <Crown className="size-4" />
                  Премиум
                </button>
                <a
                  className="text-sm text-neutral-600 transition hover:text-foreground dark:text-neutral-300 dark:hover:text-white"
                  href="#services"
                >
                  Услуги
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden items-center space-x-3 md:flex">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Eye className="size-4" />
                    <span>{visitCount.toLocaleString()}</span>
                  </div>
                  <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    className="h-9 px-5 py-2 rounded-full border border-input bg-transparent hover:bg-accent hover:text-accent-foreground"
                    disabled={isDownloading}
                  >
                    <Download className="size-4 mr-2" />
                    {isDownloading ? `${downloadProgress}%` : "Скачать CV"}
                  </Button>
                  <Button
                    onClick={() => setShowContactForm(true)}
                    className="h-9 px-5 py-2 rounded-full bg-gradient-to-t from-blue-600 to-blue-500 text-primary-foreground hover:opacity-90"
                  >
                    <MessageCircle className="size-4 mr-2" />
                    Связаться
                  </Button>
                </div>
              </div>
              <div className="md:hidden">
                <button
                  className="size-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden pb-4 border-t pt-4 space-y-3">
              <a
                className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground"
                href="#projects"
              >
                Проекты
              </a>
              <a className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground" href="#skills">
                Навыки
              </a>
              <a
                className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground"
                href="#timeline"
              >
                Опыт
              </a>
              <a
                className="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-foreground"
                href="#services"
              >
                Услуги
              </a>
              <Button variant="outline" className="w-full" onClick={handleDownloadCV}>
                <Download className="size-4 mr-2" />
                Скачать CV
              </Button>
              <Button
                className="w-full bg-gradient-to-t from-blue-600 to-blue-500"
                onClick={() => setShowContactForm(true)}
              >
                Связаться
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto my-20 overflow-x-hidden w-full">
        {/* Hero Section */}
        <section className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-16 text-center sm:space-y-10 sm:py-20 md:py-28 px-4">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float absolute left-10 top-20 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/5">
              <BookOpen className="h-6 w-6 animate-pulse text-blue-500/20" />
            </div>
            <div
              className="animate-float absolute right-20 top-40 flex h-12 w-12 rotate-45 items-center justify-center rounded-lg bg-blue-600/5"
              style={{ animationDelay: "2s" }}
            >
              <Code2 className="h-5 w-5 -rotate-45 text-blue-600/20" />
            </div>
            <div
              className="animate-float absolute bottom-40 left-20 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/5"
              style={{ animationDelay: "4s" }}
            >
              <Terminal className="h-4 w-4 animate-pulse text-blue-500/20" />
            </div>
            <div
              className="animate-float absolute bottom-20 right-10 flex h-20 w-20 rotate-12 items-center justify-center rounded-lg bg-blue-600/5"
              style={{ animationDelay: "1s" }}
            >
              <Terminal className="h-8 w-8 -rotate-12 text-blue-600/20" />
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
              <Sparkles className="size-4" />
              Доступен для freelance проектов
            </div>

            <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl xl:text-7xl">
              Привет, я {typedText}
              <span className="animate-blink">|</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                создаю крутые веб-приложения
              </span>
            </h1>
            <p className="mx-auto max-w-xs text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:max-w-sm md:max-w-lg md:text-base lg:max-w-2xl lg:text-xl">
              Специализируюсь на создании масштабируемых веб-приложений с использованием React, Next.js, Node.js и
              современных технологий
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="items-center justify-center whitespace-nowrap select-none transition-all will-change-transform active:hover:scale-[0.98] active:hover:transform text-sm font-medium bg-gradient-to-t from-blue-600 to-blue-500 text-primary-foreground hover:opacity-90 h-11 px-8 rounded-full flex gap-2">
              <Terminal className="size-4" />
              Посмотреть проекты
            </Button>
            <Button onClick={handleDownloadCV} variant="outline" className="h-11 px-8 rounded-full flex gap-2">
              <Download className="size-4" />
              Скачать CV
            </Button>
          </div>

          {/* Live Widgets */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>Онлайн</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2">
              <Clock className="size-4" />
              <span>{currentTime.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2">
              <Heart className="size-4" />
              <span>{likeCount} лайков</span>
            </div>
          </div>
        </section>
        {/* Achievements Section */}
        {/* <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="mx-auto max-w-7xl px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-neutral-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                  >
                    <div className="flex justify-center mb-4">{achievement.icon}</div>
                    <div className="text-2xl font-bold mb-1">{achievement.title}</div>
                    <div className="text-sm text-muted-foreground">{achievement.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}
        {/* Interactive Skills Section */}
        {/* <section id="skills" className="py-20 bg-background">
            <div className="mx-auto max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">Технический стек</h2>
                <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                  Навыки, которыми я владею профессионально
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      activeSkill === index
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20 scale-105"
                        : "border-neutral-200 dark:border-neutral-800 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} text-white`}>{skill.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">{skill.name}</div>
                        <div className="text-sm text-muted-foreground">{skill.level}% владения</div>
                      </div>
                    </div>

                    <div className="relative h-3 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
                        style={{ width: activeSkill === index ? `${skill.level}%` : "0%" }}
                      />
                    </div>

                    {activeSkill === index && (
                      <div className="mt-4 p-4 bg-white dark:bg-neutral-800 rounded-lg text-sm animate-fade-in">
                        <p className="text-muted-foreground">
                          Использую в продакшене более 2 лет. Глубокое понимание архитектуры и best practices.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section> */}
        {/* Timeline Section */}
        <section id="about" className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">01.</span>О себе
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Привет! Меня зовут <span className="text-blue-600 font-semibold">Александр</span>, и я увлечён
                  созданием веб-приложений, которые существуют в интернете. Мой интерес к веб-разработке начался в 2019
                  году, когда я решил попробовать создать свой первый сайт.
                </p>
                <p>
                  Сегодня у меня была возможность работать в{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    стартапе
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    корпорации
                  </a>{" "}
                  и{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    продуктовой компании
                  </a>
                  . Мой основной фокус сейчас - создание доступных, инклюзивных продуктов и цифровых решений для
                  различных клиентов.
                </p>
                <p>
                  Также я недавно запустил курс, который охватывает всё, что вам нужно знать для создания
                  веб-приложения.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Вот несколько технологий, с которыми я работал недавно:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "NestJS"].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-mono">
                      <span className="text-blue-600">▹</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                <div className="relative z-10">
                  <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                      АИ
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-full h-full border-2 border-blue-600 rounded-lg -z-10 group-hover:top-4 group-hover:left-4 transition-all"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="py-24 bg-background">
          <div className="mx-auto max-w-5xl px-4">
            {/* Header */}
            <div className="mb-16">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">02.</span>
                Где я работал
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            {/* Experience Tabs */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Tab List */}
              <div className="flex md:flex-col border-l-2 border-neutral-200 dark:border-neutral-800 md:min-w-[200px]">
                {experience.map((job, index) => (
                  <button
                    key={job.id}
                    onClick={() => setActiveJob(index)}
                    className={`relative px-6 py-3 text-left font-medium transition-all ${
                      activeJob === index
                        ? "text-blue-600 bg-blue-50 dark:bg-blue-900/10"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-blue-600 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    }`}
                  >
                    <span className="font-mono text-sm">{job.company}</span>
                    {activeJob === index && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600"></div>}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1">
                {experience.map((job, index) => (
                  <div key={job.id} className={`${activeJob === index ? "opacity-100 animate-fade-in" : "hidden"}`}>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">
                      {job.role}
                      <span className="text-blue-600">
                        &nbsp;@&nbsp;
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {job.company}
                        </a>
                      </span>
                    </h3>

                    <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mb-6">{job.period}</p>

                    <ul className="space-y-4">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                          <span className="text-blue-600 mt-1.5 shrink-0">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Visual */}
            <div className="mt-16 pt-16 border-t border-neutral-200 dark:border-neutral-800">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 transform md:-translate-x-1/2"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {experience.map((job, index) => (
                    <div
                      key={job.id}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 border-4 border-background rounded-full transform md:-translate-x-1/2 z-10"></div>

                      {/* Content */}
                      <div className={`ml-8 md:ml-0 flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <div className="bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-600 transition-colors">
                          <div className="flex items-center gap-2 mb-2 justify-start md:justify-end">
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-mono">
                              {job.period.split(" - ")[0]}
                            </span>
                            {job.period.includes("Present") && (
                              <span className="flex items-center gap-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-mono">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                Сейчас
                              </span>
                            )}
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-1">{job.company}</h4>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-6 right-6 z-50">
          {!showChatbot ? (
            <button
              onClick={() => setShowChatbot(true)}
              className="group relative w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
            >
              <MessageCircle className="size-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </button>
          ) : (
            <div className="w-96 h-[600px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-neutral-200 dark:border-neutral-800">
              {/* Header */}
              <div className="bg-blue-600 p-5 text-white">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">AI Ассистент</h3>
                      <div className="flex items-center gap-1 text-sm text-white/80">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Онлайн
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowChatbot(false)}
                    className="hover:bg-white/20 p-1.5 rounded-lg transition"
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <p className="text-sm text-white/90">Задайте вопрос о моих услугах или проектах</p>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50 dark:bg-neutral-950">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-4 py-2.5 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {["проект", "цена", "технологии", "контакт"].map((quick) => (
                    <button
                      key={quick}
                      onClick={() => {
                        setChatInput(quick);
                        setTimeout(handleSendMessage, 100);
                      }}
                      className="shrink-0 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
                    >
                      {quick}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Напишите сообщение..."
                    className="flex-1 px-4 py-2.5 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim()}
                    className="px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    <Send className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Interactive Project Showcase */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
                Интерактивная демонстрация
              </h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Посмотрите проекты в разных форматах
              </p>
            </div>

            {/* Device Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setDeviceView("desktop")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  deviceView === "desktop" ? "bg-blue-600 text-white" : "bg-neutral-200 dark:bg-neutral-800"
                }`}
              >
                <Monitor className="size-4" />
                Desktop
              </button>
              <button
                onClick={() => setDeviceView("tablet")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  deviceView === "tablet" ? "bg-blue-600 text-white" : "bg-neutral-200 dark:bg-neutral-800"
                }`}
              >
                <Tablet className="size-4" />
                Tablet
              </button>
              <button
                onClick={() => setDeviceView("mobile")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                  deviceView === "mobile" ? "bg-blue-600 text-white" : "bg-neutral-200 dark:bg-neutral-800"
                }`}
              >
                <Smartphone className="size-4" />
                Mobile
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition"
              >
                {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                {isPlaying ? "Пауза" : "Играть"}
              </button>
            </div>

            {/* Device Frame */}
            <div className="flex justify-center items-center">
              <div
                className={`bg-neutral-900 rounded-3xl p-4 shadow-2xl transition-all duration-500 ${
                  deviceView === "desktop"
                    ? "w-full max-w-5xl"
                    : deviceView === "tablet"
                    ? "w-full max-w-2xl"
                    : "w-full max-w-sm"
                }`}
              >
                <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-neutral-200 dark:bg-neutral-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex-1 mx-4 h-6 rounded bg-white dark:bg-neutral-800 flex items-center px-3 text-xs text-neutral-500">
                      https://portfolio.dev/{projects[activeProject].title.toLowerCase().replace(/\s/g, "-")}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`bg-gradient-to-br ${projects[activeProject].gradient} p-12 flex flex-col items-center justify-center text-white min-h-[400px] relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="relative z-10 text-center">
                      <div className="text-8xl mb-6 animate-bounce-slow">{projects[activeProject].image}</div>
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mb-4">
                        <Calendar className="size-3" />
                        {projects[activeProject].year}
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{projects[activeProject].title}</h3>
                      <p className="text-center max-w-md mb-6 opacity-90 text-sm">
                        {projects[activeProject].description}
                      </p>

                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {projects[activeProject].tech.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                          <BookOpen className="size-4" />
                          <span>{projects[activeProject].lessons}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-500/30 backdrop-blur-sm px-4 py-2 rounded-full">
                          <CheckCircle2 className="size-4" />
                          <span>{projects[activeProject].status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeProject ? "w-8 bg-blue-600" : "w-2 bg-neutral-300 dark:bg-neutral-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">01.</span>О себе
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <p>
                  Привет! Меня зовут <span className="text-blue-600 font-semibold">Александр</span>, и я увлечён
                  созданием веб-приложений, которые существуют в интернете. Мой интерес к веб-разработке начался в 2019
                  году, когда я решил попробовать создать свой первый сайт.
                </p>
                <p>
                  Сегодня у меня была возможность работать в{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    стартапе
                  </a>
                  ,{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    корпорации
                  </a>{" "}
                  и{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    продуктовой компании
                  </a>
                  . Мой основной фокус сейчас - создание доступных, инклюзивных продуктов и цифровых решений для
                  различных клиентов.
                </p>
                <p>
                  Также я недавно запустил курс, который охватывает всё, что вам нужно знать для создания
                  веб-приложения.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Вот несколько технологий, с которыми я работал недавно:
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Node.js", "NestJS"].map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-mono">
                      <span className="text-blue-600">▹</span>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative group">
                <div className="relative z-10">
                  <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-white text-6xl font-bold">
                      АИ
                    </div>
                  </div>
                </div>
                <div className="absolute top-6 left-6 w-full h-full border-2 border-blue-600 rounded-lg -z-10 group-hover:top-4 group-hover:left-4 transition-all"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="blog" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">05.</span>
                Блог
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Делюсь знаниями о веб-разработке, архитектуре и лучших практиках
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Оптимизация производительности React приложений",
                  date: "15 Января 2025",
                  readTime: "8 мин",
                  tags: ["React", "Performance"],
                  excerpt:
                    "Практические советы по улучшению производительности React приложений: мемоизация, виртуализация и code splitting.",
                },
                {
                  title: "TypeScript: Advanced Types",
                  date: "10 Января 2025",
                  readTime: "12 мин",
                  tags: ["TypeScript", "Advanced"],
                  excerpt:
                    "Углублённое изучение продвинутых типов TypeScript: utility types, conditional types и mapped types.",
                },
                {
                  title: "Микрофронтенды: Когда и зачем",
                  date: "5 Января 2025",
                  readTime: "10 мин",
                  tags: ["Architecture", "Micro-frontends"],
                  excerpt:
                    "Разбираем архитектуру микрофронтендов: преимущества, недостатки и когда стоит использовать.",
                },
              ].map((post, idx) => (
                <article
                  key={idx}
                  className="group bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-blue-600 transition-all hover:-translate-y-1"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="size-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="size-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">{post.title}</h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <a href="#" className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                      Читать далее
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <PersonalBlog />
        <section id="contact" className="py-24 bg-background">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <div className="mb-12">
              <p className="text-blue-600 font-mono mb-4">06. Что дальше?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь со мной</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я всегда открыт для новых возможностей и интересных проектов. Если у вас есть вопросы или просто хотите
                поздороваться, мой почтовый ящик всегда открыт. Я постараюсь ответить как можно скорее!
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="mailto:developer@portfolio.com"
                className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10 transition font-mono"
              >
                Написать письмо
              </a>

              <div className="flex justify-center gap-6 pt-8">
                {[
                  { icon: <Github className="size-5" />, label: "GitHub", href: "#" },
                  { icon: <Linkedin className="size-5" />, label: "LinkedIn", href: "#" },
                  { icon: <Twitter className="size-5" />, label: "Twitter", href: "#" },
                  { icon: <Mail className="size-5" />, label: "Email", href: "mailto:developer@portfolio.com" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition group"
                    aria-label={social.label}
                  >
                    <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section id="services" className="bg-neutral-50 dark:bg-neutral-900/50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 antialiased">
            <div className="mx-auto w-full">
              <h2 className="mb-4 text-center text-3xl font-semibold text-foreground md:mb-6 md:text-4xl lg:text-5xl">
                Что я предлагаю?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-center text-base text-muted-foreground md:mb-8 md:text-lg">
                Профессиональная разработка веб-приложений от концепции до запуска
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-none text-card-foreground shadow-none group cursor-pointer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="space-y-4 p-6 transition-transform group-hover:-translate-y-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/10 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="py-20 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10"
        >
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 mb-4">
                <MessageCircle className="size-4" />
                Частые вопросы
              </div>
              <h2 className="mb-4 text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">FAQ</h2>
              <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
                Ответы на самые популярные вопросы
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border-2 border-neutral-100 dark:border-neutral-800 overflow-hidden transition-all hover:border-blue-500"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <div className={`shrink-0 transition-transform ${activeFaq === index ? "rotate-180" : ""}`}>
                      {activeFaq === index ? (
                        <Minus className="size-5 text-blue-600" />
                      ) : (
                        <Plus className="size-5 text-blue-600" />
                      )}
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all ${activeFaq === index ? "max-h-96" : "max-h-0"}`}>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Не нашли ответ на свой вопрос?</p>
              <Button
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
              >
                <Send className="size-4 mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </section>
        <section id="certificates" className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-16">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">04.</span>
                Сертификаты и награды
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "AWS Certified Developer",
                  org: "Amazon Web Services",
                  date: "2024",
                  icon: <Award className="size-8 text-orange-600" />,
                  verified: true,
                },
                {
                  title: "Meta Front-End Developer",
                  org: "Meta (Facebook)",
                  date: "2023",
                  icon: <Award className="size-8 text-blue-600" />,
                  verified: true,
                },
                {
                  title: "Google UX Design",
                  org: "Google",
                  date: "2023",
                  icon: <Award className="size-8 text-green-600" />,
                  verified: true,
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-600 transition group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg group-hover:scale-110 transition-transform">
                      {cert.icon}
                    </div>
                    {cert.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                        <CheckCircle2 className="size-4" />
                        Verified
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.org}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="tech-stack" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">05.</span>
                Технологический стек
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            {/* Фильтр категорий */}
            <div className="flex flex-wrap gap-3 mb-8">
              {["all", "frontend", "backend", "database", "tools", "cloud"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-blue-600"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {/* Технологии */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "React", category: "frontend", level: 95, color: "text-blue-500" },
                { name: "Next.js", category: "frontend", level: 92, color: "text-gray-700" },
                { name: "TypeScript", category: "frontend", level: 90, color: "text-blue-600" },
                { name: "Node.js", category: "backend", level: 88, color: "text-green-600" },
                { name: "NestJS", category: "backend", level: 87, color: "text-red-500" },
                { name: "PostgreSQL", category: "database", level: 85, color: "text-blue-500" },
                { name: "MongoDB", category: "database", level: 83, color: "text-green-500" },
                { name: "Docker", category: "tools", level: 80, color: "text-blue-600" },
                { name: "AWS", category: "cloud", level: 78, color: "text-orange-500" },
                { name: "Git", category: "tools", level: 90, color: "text-orange-600" },
              ]
                .filter((tech) => selectedCategory === "all" || tech.category === selectedCategory)
                .map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-4 hover:border-blue-600 transition group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        // РАЗДЕЛ: РЕКОМЕНДАЦИИ (Testimonials)
        <section id="testimonials" className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">06.</span>
                Рекомендации
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Алексей Морозов",
                  role: "CEO at TechStart",
                  company: "TechStart",
                  avatar: "AM",
                  text: "Работал с несколькими разработчиками, но Александр - один из лучших. Его внимание к деталям и способность понимать бизнес-требования впечатляют.",
                  rating: 5,
                  linkedin: true,
                },
                {
                  name: "Мария Петрова",
                  role: "Product Manager",
                  company: "Digital Agency",
                  avatar: "МП",
                  text: "Александр не просто пишет код - он думает о продукте. Предлагает решения, которые действительно улучшают UX. Профессионал высокого уровня.",
                  rating: 5,
                  linkedin: true,
                },
                {
                  name: "Дмитрий Иванов",
                  role: "CTO",
                  company: "StartupLab",
                  avatar: "ДИ",
                  text: "Отличный технический специалист с глубоким пониманием современных технологий. Всегда выполняет работу в срок и с высоким качеством.",
                  rating: 5,
                  linkedin: true,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                    {testimonial.linkedin && <Linkedin className="size-5 text-blue-600" />}
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        // РАЗДЕЛ: ИСПОЛЬЗОВАННЫЕ В ПРОИЗВОДСТВЕ
        <section id="production" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">07.</span>
                Production проекты
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Проекты, которые работают в production и используются реальными пользователями
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  name: "MotionWebLMS",
                  desc: "Образовательная платформа для студентов",
                  users: "1,000+",
                  uptime: "99.9%",
                  url: "https://motion.kg",
                  stack: ["Next.js", "NestJS", "PostgreSQL"],
                },
                {
                  name: "E-commerce Platform",
                  desc: "Интернет-магазин с CMS",
                  users: "5,000+",
                  uptime: "99.8%",
                  url: "https://example.com",
                  stack: ["React", "Node.js", "MongoDB"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-600 transition"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <a href={project.url} className="text-blue-600 hover:underline flex items-center gap-1 text-sm">
                          <Globe className="size-4" />
                          Visit
                        </a>
                      </div>
                      <p className="text-muted-foreground mb-3">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{project.users}</div>
                        <div className="text-xs text-muted-foreground">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{project.uptime}</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        // РАЗДЕЛ: СТАТИСТИКА GITHUB
        <section id="github-stats" className="py-24 bg-background">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
                <span className="text-blue-600 font-mono text-2xl mr-2">08.</span>
                GitHub активность
                <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Repos", value: "47", icon: <Package className="size-5" /> },
                { label: "Commits (2024)", value: "1,234", icon: <GitBranch className="size-5" /> },
                { label: "Pull Requests", value: "89", icon: <Code className="size-5" /> },
                { label: "Stars", value: "156", icon: <Star className="size-5" /> },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 text-center hover:border-blue-600 transition"
                >
                  <div className="flex justify-center mb-3 text-blue-600">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-6">
              <h3 className="font-semibold mb-4">Contribution Graph</h3>
              <div className="grid grid-cols-52 gap-1">
                {[...Array(364)].map((_, i) => {
                  const intensity = Math.floor(Math.random() * 5);
                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${
                        intensity === 0
                          ? "bg-neutral-100 dark:bg-neutral-800"
                          : intensity === 1
                          ? "bg-green-200 dark:bg-green-900"
                          : intensity === 2
                          ? "bg-green-300 dark:bg-green-700"
                          : intensity === 3
                          ? "bg-green-400 dark:bg-green-600"
                          : "bg-green-500 dark:bg-green-500"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* Projects Grid */}
        <div id="projects" className="mx-auto max-w-7xl py-10 antialiased md:py-20">
          <h2 className="mb-4 text-center text-3xl font-semibold text-foreground md:mb-6 md:text-4xl lg:text-5xl">
            Все проекты
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-center text-base text-muted-foreground md:mb-8 md:text-lg">
            Полное портфолио реализованных проектов
          </p>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 px-5 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 md:px-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project, index) => (
              <a key={index} href="#" className="group relative rounded-lg">
                <div
                  className={`relative aspect-video overflow-hidden rounded-md transition-all bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:shadow-2xl group-hover:-translate-y-2`}
                >
                  <div className="text-6xl group-hover:scale-110 transition-transform">{project.image}</div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-white/90 dark:bg-neutral-900/90 px-2 py-1 rounded-full text-xs font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="px-0 py-3">
                  <h3 className="text-base font-medium text-foreground transition group-hover:text-blue-500">
                    {project.title}
                  </h3>
                  <p
                    className="mt-1 overflow-hidden text-sm text-neutral-600 dark:text-neutral-300"
                    style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-xs text-muted-foreground">
                        #{tech}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-x-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset bg-blue-50 text-blue-900 ring-blue-600/30 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30 mt-3">
                    <BookOpen className="mr-0.5 size-3.5" />
                    {project.lessons}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div className="my-12 flex w-full flex-col items-center justify-center px-4 py-10 text-center md:my-16 md:px-8 md:py-16 lg:my-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl mx-auto max-w-7xl relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: Math.random() * 4 + 2 + "px",
                    height: Math.random() * 4 + 2 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                    animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 text-center text-3xl font-semibold text-white md:mb-6 md:text-4xl lg:text-5xl">
              Готовы начать проект?
            </h2>
            <p className="mb-6 max-w-2xl text-base text-white/90 md:mb-8 md:text-lg">
              Свяжитесь со мной для обсуждения вашей идеи. Первая консультация бесплатно!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => setShowContactForm(true)}
                className="bg-white text-blue-600 hover:bg-white/90 h-11 px-8 rounded-full flex gap-2"
              >
                <Send className="size-4" />
                Написать сейчас
              </Button>
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                className="border-white text-white hover:bg-white/10 h-11 px-8 rounded-full flex gap-2"
              >
                <Download className="size-4" />
                Скачать CV
              </Button>
            </div>
          </div>
        </div>
      </main>
      <CommandCenter />
      {/* Footer */}
      <footer className="border-t bg-neutral-50 dark:bg-neutral-900/50">
        <div className="relative mx-auto max-w-[1340px] px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-4 sm:col-span-2 md:col-span-2">
              <h2 className="text-2xl font-bold">DevPortfolio</h2>
              <p className="text-sm text-muted-foreground">
                Full-stack разработка веб-приложений с фокусом на качество и результат.
                <br />В случае возникновения вопросов, обращайтесь на почту{" "}
                <a className="text-blue-500 hover:underline" href="mailto:developer@portfolio.com">
                  developer@portfolio.com
                </a>
                .
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-600 hover:text-white transition"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-600 hover:text-white transition"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-blue-600 hover:text-white transition"
                >
                  <Mail className="size-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Навигация</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="#projects">
                    Проекты
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="#skills">
                    Навыки
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="#timeline">
                    Опыт
                  </a>
                </li>
                <li>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="#services">
                    Услуги
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Технологии</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-muted-foreground">React & Next.js</li>
                <li className="text-muted-foreground">Node.js & NestJS</li>
                <li className="text-muted-foreground">TypeScript</li>
                <li className="text-muted-foreground">PostgreSQL</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Контакты</h3>
              <ul className="space-y-3 text-sm">
                <li className="text-muted-foreground">developer@portfolio.com</li>
                <li className="text-muted-foreground">+7 (999) 123-45-67</li>
                <li className="text-muted-foreground">Бишкек, Кыргызстан</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-full border-t py-6">
          <p className="text-center text-sm text-muted-foreground">
            DevPortfolio © 2025 Все права защищены. Сделано с ❤️ в Бишкеке
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scaleIn 0.3s ease-out;
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Pro;
