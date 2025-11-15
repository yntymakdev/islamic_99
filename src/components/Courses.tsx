"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Clock,
  BookOpen,
  Users,
  Trophy,
  Star,
  Zap,
  TrendingUp,
  Target,
  Rocket,
  Brain,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Gift,
} from "lucide-react";
const Courses = () => {
  const [activeTab, setActiveTab] = useState<"frontend" | "backend" | "fullstack" | "mobile">("frontend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState("beginner");
  type CourseKey = "frontend" | "backend" | "fullstack" | "mobile";
  const courses = {
    frontend: {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      description: "Создавайте современные веб-приложения с React и Next.js",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Redux", "GraphQL"],
      duration: "8 недель",
      lessons: 16,
      practice: "12+ проектов",
      salary: "80-150K",
      difficulty: 3,
      projects: ["🛒 E-commerce платформа", "📱 Social Media App", "🎮 Игровой портал", "📊 Dashboard админки"],
    },
    backend: {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      description: "Серверная разработка на Node.js и Python",
      technologies: ["Node.js", "NestJS", "Python", "Django", "PostgreSQL", "MongoDB", "Docker"],
      duration: "10 недель",
      lessons: 20,
      practice: "8+ проектов",
      salary: "90-180K",
      difficulty: 4,
      projects: ["🔐 Auth система", "💳 Payment Gateway", "📡 Real-time Chat", "🚀 REST & GraphQL API"],
    },
    fullstack: {
      title: "Full-Stack Mastery",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      description: "Полный цикл разработки веб-приложений",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "CI/CD", "Kubernetes"],
      duration: "16 недель",
      lessons: 32,
      practice: "20+ проектов",
      salary: "120-250K",
      difficulty: 5,
      projects: ["🏢 SaaS платформа", "🤖 AI-powered App", "📈 Trading Platform", "🎯 Complete Startup"],
    },
    mobile: {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      description: "Разработка мобильных приложений",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Redux", "Native APIs", "App Store"],
      duration: "12 недель",
      lessons: 24,
      practice: "15+ проектов",
      salary: "100-200K",
      difficulty: 4,
      projects: ["📱 Instagram Clone", "🎵 Music Player", "🗺️ Maps & Navigation", "💬 Messenger App"],
    },
  };

  const levels = {
    beginner: { name: "Новичок", icon: "🌱", desc: "Начни с нуля" },
    intermediate: { name: "Средний", icon: "🚀", desc: "Есть базовые знания" },
    advanced: { name: "Продвинутый", icon: "💎", desc: "Хочу углубить навыки" },
  };

  const techDetails: Record<string, string> = {
    React: "Библиотека для создания UI",
    "Next.js": "Фреймворк для production",
    TypeScript: "Типизированный JavaScript",
    "Node.js": "JavaScript на сервере",
    Python: "Универсальный язык",
    Docker: "Контейнеризация",
    MongoDB: "NoSQL база данных",
    PostgreSQL: "SQL база данных",
  };

  return (
    <section className="py-20 px-6 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-emerald-400 font-medium">4 направления обучения</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Выбери свой
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              {" "}
              путь в IT
            </span>
          </h2>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            От новичка до профессионала за <span className="text-emerald-400 font-semibold">4 месяца</span>. Практика с
            первого дня!
          </p>

          {/* Level selector */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(levels).map(([key, level]) => (
              <button
                key={key}
                onClick={() => setSelectedLevel(key)}
                className={`px-6 py-3 rounded-xl border transition-all transform hover:scale-105 ${
                  selectedLevel === key
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                    : "bg-zinc-900/50 border-zinc-700 text-zinc-300 hover:border-zinc-600"
                }`}
              >
                <span className="text-2xl mr-2">{level.icon}</span>
                <span className="font-medium">{level.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Course cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {(Object.entries(courses) as [CourseKey, (typeof courses)[CourseKey]][]).map(([key, course]) => (
            <div
              key={key}
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                activeTab === key ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {/* Card */}
              <div
                className={`relative h-full p-6 bg-zinc-900/80 backdrop-blur-xl border rounded-2xl overflow-hidden ${
                  activeTab === key ? "border-emerald-500" : "border-zinc-700 hover:border-emerald-500/50"
                }`}
              >
                {/* Popular badge */}
                {key === "fullstack" && (
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                    <span className="text-white text-xs font-bold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Популярный
                    </span>
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  {course.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>

                {/* Description */}
                <p className="text-zinc-400 text-sm mb-4">{course.description}</p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="text-emerald-400 font-semibold">{course.lessons} уроков</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400 flex items-center">
                      <Trophy className="w-4 h-4 mr-1" />
                      Проекты
                    </span>
                    <span className="text-emerald-400 font-semibold">{course.practice}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-400 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Зарплата
                    </span>
                    <span className="text-emerald-400 font-semibold">{course.salary}</span>
                  </div>
                </div>

                {/* Difficulty */}
                <div className="flex items-center gap-1">
                  <span className="text-xs text-zinc-400">Сложность:</span>
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${i < course.difficulty ? "bg-emerald-400" : "bg-zinc-700"}`}
                    />
                  ))}
                </div>

                {/* Hover effect - Show projects */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 transform transition-transform ${
                    activeTab === key ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                  }`}
                >
                  <div className="text-white text-sm font-medium mb-2">Что создадите:</div>
                  <div className="space-y-1">
                    {course.projects.slice(0, 2).map((project, i) => (
                      <div key={i} className="text-xs text-zinc-300">
                        {project}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed view of selected course */}
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8">
          <div className="flex items-center mb-8">
            <div
              className={`w-20 h-20 bg-gradient-to-r ${
                courses[activeTab as CourseKey].color
              } rounded-2xl flex items-center justify-center mr-6`}
            >
              {React.cloneElement(courses[activeTab as keyof typeof courses].icon, {
                className: "w-10 h-10 text-white",
              })}
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{courses[activeTab].title}</h3>
              <p className="text-zinc-400 text-lg">{courses[activeTab].description}</p>
            </div>

            {/* Special offer badge */}
            <div className="ml-auto">
              <div className="px-6 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl">
                <div className="text-red-400 font-bold text-lg">-40%</div>
                <div className="text-zinc-400 text-sm">для первых 5</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technologies */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-emerald-400" />
                Технологии которые изучите:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {courses[activeTab].technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="relative group"
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className="flex items-center p-3 bg-zinc-800/50 rounded-xl hover:bg-zinc-800/70 transition-all cursor-pointer">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                      <span className="text-white font-medium">{tech}</span>
                    </div>

                    {/* Tooltip */}
                    {hoveredTech === tech && techDetails[tech] && (
                      <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap z-10">
                        {techDetails[tech]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Rocket className="w-5 h-5 mr-2 text-emerald-400" />
                Проекты для портфолио:
              </h4>
              <div className="space-y-3">
                {courses[activeTab].projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 rounded-xl hover:border-emerald-500/40 transition-all"
                  >
                    <span className="text-white">{project}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 rounded-2xl">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Gift className="w-5 h-5 text-emerald-400 mr-2" />
                  <span className="text-emerald-400 font-semibold">Специальное предложение</span>
                </div>
                <p className="text-zinc-300">
                  Запишитесь сегодня и получите <span className="text-white font-bold">2 недели бесплатно</span> +
                  доступ к закрытому сообществу разработчиков!
                </p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl font-bold text-white transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30">
                Начать обучение
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
