"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Users,
  BookOpen,
  Trophy,
  Star,
  ArrowRight,
  CheckCircle,
  Play,
  Clock,
  Calendar,
  User,
  MessageCircle,
  Award,
  Zap,
  Target,
  ChevronRight,
  Menu,
  X,
  Smartphone,
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
} from "lucide-react";

const page = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Создавайте современные веб-приложения с React, Next.js и TypeScript",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
      duration: "8 недель",
      lessons: 16,
      practice: "12+ проектов",
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description: "Серверная разработка на Node.js, NestJS и Python Django",
      technologies: ["Node.js", "NestJS", "Python", "Django", "REST API"],
      duration: "10 недель",
      lessons: 20,
      practice: "8+ проектов",
    },
    fullstack: {
      title: "Full-Stack",
      icon: <Code className="w-6 h-6" />,
      description: "Полный цикл разработки веб-приложений",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      duration: "16 недель",
      lessons: 32,
      practice: "20+ проектов",
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Разработка мобильных приложений на React Native",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux"],
      duration: "12 недель",
      lessons: 24,
      practice: "15+ проектов",
    },
  };

  const plans = [
    {
      id: "basic",
      name: "Базовый",
      price: "759",
      period: "за 2 недели",
      description: "Идеально для начинающих",
      features: [
        "2 урока в неделю (Сб, Вс)",
        "По 2 часа каждый урок",
        "Доступ к материалам",
        "Домашние задания",
        "Общий чат поддержки",
      ],
      popular: false,
      color: "border-zinc-700 hover:border-zinc-600",
    },
    {
      id: "standard",
      name: "Стандарт",
      price: "1299",
      period: "за 2 недели",
      description: "Самый популярный выбор",
      features: [
        "Все из Базового плана",
        "Индивидуальные консультации",
        "Проверка кода ментором",
        "Дополнительные материалы",
        "Приоритетная поддержка",
        "Сертификат об окончании",
      ],
      popular: true,
      color: "border-emerald-500 bg-emerald-500/5",
    },
    {
      id: "premium",
      name: "Премиум",
      price: "1899",
      period: "за 2 недели",
      description: "Максимальный результат",
      features: [
        "Все из Стандарт плана",
        "1-на-1 менторинг",
        "Помощь в трудоустройстве",
        "Подготовка резюме",
        "Мок-интервью",
        "Пожизненный доступ к курсу",
        "Участие в реальных проектах",
      ],
      popular: false,
      color: "border-purple-500 hover:border-purple-400",
    },
  ];

  const mentorInfo = {
    name: "Ваше имя",
    role: "Senior Full-Stack Developer & Mentor",
    experience: "5+ лет в разработке",
    students: "Готов принять первых студентов",
    avatar: "👨‍💻",
  };

  return (
    <div className="min-h-screen bg-black text-white">
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
              <span className="text-2xl font-bold text-white">DevAcademy</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-zinc-400 hover:text-white transition-colors">
                Курсы
              </a>
              <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors">
                Тарифы
              </a>
              <a href="#mentor" className="text-zinc-400 hover:text-white transition-colors">
                О менторе
              </a>
              <a href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                Контакты
              </a>
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg transition-colors">
                Начать обучение
              </button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#courses" className="text-2xl text-zinc-400 hover:text-white">
              Курсы
            </a>
            <a href="#pricing" className="text-2xl text-zinc-400 hover:text-white">
              Тарифы
            </a>
            <a href="#mentor" className="text-2xl text-zinc-400 hover:text-white">
              О менторе
            </a>
            <a href="#contact" className="text-2xl text-zinc-400 hover:text-white">
              Контакты
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg text-xl">
              Начать обучение
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                <Lightbulb className="w-4 h-4 mr-2" />
                Запуск новой онлайн-академии
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Изучайте программирование
                <span className="text-emerald-400"> с ментором</span>
              </h1>

              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                Персональное обучение IT-технологиям по выходным. Практический подход, реальные проекты и индивидуальная
                поддержка.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center">
                  Записаться на курс
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border border-zinc-700 hover:border-zinc-600 text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Смотреть презентацию
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">2ч</div>
                  <div className="text-sm text-zinc-400">Длительность урока</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">Сб-Вс</div>
                  <div className="text-sm text-zinc-400">Дни занятий</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">759₽</div>
                  <div className="text-sm text-zinc-400">За 2 недели</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {mentorInfo.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{mentorInfo.name}</h3>
                    <p className="text-emerald-400">{mentorInfo.role}</p>
                    <p className="text-sm text-zinc-400">{mentorInfo.experience}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Персональный подход к каждому студенту
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Практические проекты для портфолио
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Помощь в трудоустройстве
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                  <div className="flex items-center text-emerald-400 mb-2">
                    <Heart className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Особое предложение</span>
                  </div>
                  <p className="text-sm text-zinc-300">
                    {mentorInfo.students} - успейте попасть в первый поток со скидкой!
                  </p>
                </div>
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
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Выберите технологию и станьте востребованным разработчиком
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(courses).map(([key, course]) => (
              <div
                key={key}
                className={`group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all cursor-pointer ${
                  activeTab === key ? "border-emerald-500 bg-emerald-500/5" : ""
                }`}
                onClick={() => setActiveTab(key)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500/20 transition-colors">
                    {course.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                </div>

                <p className="text-zinc-400 mb-4 text-sm">{course.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-zinc-300">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <BookOpen className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-zinc-300">{course.lessons} уроков</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Code className="w-4 h-4 text-emerald-400 mr-2" />
                    <span className="text-zinc-300">{course.practice}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {course.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {course.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">
                      +{course.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Course Details */}
          <div className="mt-12 p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                {courses[activeTab].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{courses[activeTab].title}</h3>
                <p className="text-zinc-400">{courses[activeTab].description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Технологии курса:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {courses[activeTab].technologies.map((tech, index) => (
                    <div key={index} className="flex items-center p-3 bg-zinc-800/50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      <span className="text-zinc-300">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Что вы получите:</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Практические навыки</div>
                      <div className="text-sm text-zinc-400">Реальные проекты для портфолио</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Менторская поддержка</div>
                      <div className="text-sm text-zinc-400">Помощь на каждом этапе обучения</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                    <div>
                      <div className="text-white font-medium">Сертификат</div>
                      <div className="text-sm text-zinc-400">Подтверждение ваших знаний</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Тарифные планы</h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">Выберите подходящий план обучения</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 bg-zinc-900/50 border rounded-2xl transition-all hover:scale-105 ${
                  plan.popular ? "border-emerald-500 bg-emerald-500/5" : plan.color
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-emerald-400 mb-1">
                    {plan.price} <span className="text-sm text-zinc-400">сом</span>
                  </div>
                  <div className="text-zinc-400">{plan.period}</div>
                  <p className="text-sm text-zinc-400 mt-2">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white"
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Выбрать план
                </button>
              </div>
            ))}
          </div>

          {/* Payment Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Способы оплаты</h3>
                <p className="text-zinc-400">Удобная оплата через мобильный банкинг</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-zinc-800/50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">MBank</div>
                      <div className="text-sm text-zinc-400">Номер для перевода</div>
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Phone className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-emerald-400 font-semibold">Номер для оплаты:</span>
                    </div>
                    <div className="text-2xl font-bold text-white font-mono">0709 826 628</div>
                    <p className="text-sm text-zinc-400 mt-2">
                      После оплаты отправьте скриншот в чат для подтверждения
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Инструкция по оплате:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        1
                      </div>
                      <div className="text-zinc-300">Откройте приложение MBank</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        2
                      </div>
                      <div className="text-zinc-300">Переведите средства на номер 0709826628</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        3
                      </div>
                      <div className="text-zinc-300">Отправьте скриншот в WhatsApp или Telegram</div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-0.5">
                        4
                      </div>
                      <div className="text-zinc-300">Получите доступ к курсу в течение 1 часа</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Почему выбирают нас</h2>
            <p className="text-xl text-zinc-400">Уникальные особенности нашей онлайн-академии</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Практические проекты</h3>
              <p className="text-zinc-400">
                Создавайте реальные проекты для портфолио. От простых сайтов до сложных веб-приложений.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Поддержка 24/7</h3>
              <p className="text-zinc-400">
                Общий чат студентов и быстрые ответы на вопросы. Помощь с домашними заданиями в любое время.
              </p>
            </div>

            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Карьерная поддержка</h3>
              <p className="text-zinc-400">
                Помогу составить резюме, подготовлю к собеседованиям и поделюсь контактами из IT-индустрии.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section id="mentor" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    {mentorInfo.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{mentorInfo.name}</h3>
                  <p className="text-emerald-400 mb-2">{mentorInfo.role}</p>
                  <p className="text-zinc-400">{mentorInfo.experience}</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Github className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-white font-medium">GitHub</span>
                    </div>
                    <p className="text-sm text-zinc-400">50+ открытых проектов</p>
                  </div>

                  <div className="p-4 bg-zinc-800/50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Code className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-white font-medium">Технологии</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "Node.js", "Python", "TypeScript"].map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Heart className="w-5 h-5 text-emerald-400 mr-2" />
                      <span className="text-emerald-400 font-medium">Миссия</span>
                    </div>
                    <p className="text-sm text-zinc-300">Помочь людям освоить программирование и найти работу в IT</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Привет! Я ваш ментор</h2>

              <div className="space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  Меня зовут <span className="text-emerald-400 font-semibold">[Ваше имя]</span>, и я{" "}
                  <span className="text-white">Senior Full-Stack разработчик</span> с опытом более 5 лет.
                </p>

                <p>
                  Я создал эту онлайн-академию, чтобы делиться своими знаниями и помогать людям войти в IT-сферу. Мой
                  подход основан на <span className="text-emerald-400">практике</span> - мы сразу создаем реальные
                  проекты.
                </p>

                <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Мой опыт:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <span>Разработка веб-приложений для стартапов</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <span>Ментерство и обучение джуниор-разработчиков</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <span>Участие в open-source проектах</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5" />
                      <span>Создание технических решений для бизнеса</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl">
                  <blockquote className="text-lg italic text-emerald-100">
                    "Программирование - это не только код, это способ мышления и решения проблем. Я помогу вам развить
                    этот навык."
                  </blockquote>
                  <div className="text-emerald-400 font-semibold mt-3">— Ваш ментор</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Часто задаваемые вопросы</h2>
            <p className="text-xl text-zinc-400">Ответы на популярные вопросы о курсах</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Подходит ли курс для новичков?",
                answer:
                  "Да, курсы рассчитаны на студентов с любым уровнем подготовки. Мы начинаем с основ и постепенно переходим к сложным темам.",
              },
              {
                question: "Какое расписание занятий?",
                answer:
                  "Занятия проходят по субботам и воскресеньям по 2 часа каждый день. Это удобно для работающих людей.",
              },
              {
                question: "Что если я пропущу урок?",
                answer:
                  "Все уроки записываются, и вы сможете посмотреть их позже. Также можно задать вопросы в общем чате.",
              },
              {
                question: "Помогаете ли с трудоустройством?",
                answer:
                  "Да, я помогаю составить резюме, подготовиться к собеседованиям и могу поделиться контактами работодателей.",
              },
              {
                question: "Можно ли оплачивать частями?",
                answer: "Да, оплата происходит каждые 2 недели. Это делает обучение доступнее.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{item.question}</h4>
                <p className="text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Свяжитесь со мной</h2>
            <p className="text-xl text-zinc-400">Готовы начать обучение? Напишите мне!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">WhatsApp/Telegram</div>
                    <div className="text-emerald-400 font-mono">+996 709 826 628</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Email</div>
                    <div className="text-emerald-400">your.email@example.com</div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">Время ответа</div>
                    <div className="text-zinc-400">Обычно в течение 1 часа</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">Бесплатная консультация</h4>
                <p className="text-zinc-300 mb-4">
                  Не знаете, какой курс выбрать? Запишитесь на бесплатную 30-минутную консультацию, где мы обсудим ваши
                  цели и подберем оптимальный план обучения.
                </p>
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all">
                  Записаться на консультацию
                </button>
              </div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Быстрая запись</h3>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Номер телефона</label>
                  <input
                    type="tel"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="+996 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Курс</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors">
                    <option value="">Выберите курс</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Full-Stack Development</option>
                    <option value="mobile">Mobile Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Тариф</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors">
                    <option value="">Выберите тариф</option>
                    <option value="basic">Базовый (759 сом)</option>
                    <option value="standard">Стандарт (1299 сом)</option>
                    <option value="premium">Премиум (1899 сом)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Сообщение (необязательно)</label>
                  <textarea
                    rows="4"
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Расскажите о ваших целях и опыте..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold transition-all flex items-center justify-center"
                >
                  Отправить заявку
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">DevAcademy</span>
              </div>
              <p className="text-zinc-400 mb-6 max-w-md">
                Онлайн-академия программирования с персональным подходом. Изучайте IT-технологии удобно и эффективно.
              </p>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all">
                  <MessageCircle className="w-6 h-6 text-zinc-400 mx-auto" />
                </button>
                <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all">
                  <Youtube className="w-6 h-6 text-zinc-400 mx-auto" />
                </button>
                <button className="w-12 h-12 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-all">
                  <Github className="w-6 h-6 text-zinc-400 mx-auto" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Курсы</h4>
              <div className="space-y-2">
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Frontend
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Backend
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Full-Stack
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Mobile
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  WhatsApp
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Telegram
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  Email
                </a>
                <a href="#" className="block text-zinc-400 hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-zinc-400">&copy; 2024 DevAcademy. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
