// COMMAND CENTER - главная фича портфолио

import { useState, useEffect, useCallback } from "react";
import {
  Search,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  Calendar,
  FileText,
  Code,
  User,
  Briefcase,
  Award,
  MessageCircle,
  ArrowRight,
  Clock,
  Eye,
  TrendingUp,
  X,
} from "lucide-react";

const CommandCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentActions, setRecentActions] = useState([]);
  const [analytics, setAnalytics] = useState({
    visits: 142,
    avgTime: "3:45",
    topPage: "Проекты",
    interactions: 23,
  });

  // Команды с реальной логикой
  const commands = [
    {
      id: "download-cv",
      title: "Скачать резюме",
      description: "PDF, DOCX форматы доступны",
      icon: <Download className="size-4" />,
      action: () => {
        // Реальная логика скачивания
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Resume_Alexander.pdf";
        link.click();
        addRecentAction("Скачал резюме");
      },
      category: "actions",
    },
    {
      id: "email",
      title: "Написать email",
      description: "developer@portfolio.com",
      icon: <Mail className="size-4" />,
      action: () => {
        window.location.href = "mailto:developer@portfolio.com";
        addRecentAction("Открыл email");
      },
      category: "contact",
    },
    {
      id: "schedule",
      title: "Забронировать встречу",
      description: "Calendly интеграция",
      icon: <Calendar className="size-4" />,
      action: () => {
        window.open("https://calendly.com/your-link", "_blank");
        addRecentAction("Открыл календарь");
      },
      category: "actions",
    },
    {
      id: "github",
      title: "Открыть GitHub",
      description: "Посмотреть код и проекты",
      icon: <Github className="size-4" />,
      action: () => {
        window.open("https://github.com/yourusername", "_blank");
        addRecentAction("Открыл GitHub");
      },
      category: "social",
    },
    {
      id: "linkedin",
      title: "LinkedIn профиль",
      description: "Профессиональная сеть",
      icon: <Linkedin className="size-4" />,
      action: () => {
        window.open("https://linkedin.com/in/yourprofile", "_blank");
        addRecentAction("Открыл LinkedIn");
      },
      category: "social",
    },
    {
      id: "projects",
      title: "Перейти к проектам",
      description: "Портфолио работ",
      icon: <Code className="size-4" />,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        addRecentAction("Перешёл к проектам");
      },
      category: "navigation",
    },
    {
      id: "experience",
      title: "Опыт работы",
      description: "История карьеры",
      icon: <Briefcase className="size-4" />,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        addRecentAction("Перешёл к опыту");
      },
      category: "navigation",
    },
    {
      id: "skills",
      title: "Навыки и технологии",
      description: "Технический стек",
      icon: <Award className="size-4" />,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        addRecentAction("Перешёл к навыкам");
      },
      category: "navigation",
    },
    {
      id: "chat",
      title: "Открыть чат",
      description: "Задать вопрос AI ассистенту",
      icon: <MessageCircle className="size-4" />,
      action: () => {
        // Логика открытия чата
        addRecentAction("Открыл чат");
      },
      category: "actions",
    },
  ];

  // Фильтрация команд
  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Добавление действия в историю
  const addRecentAction = (action) => {
    const newAction = {
      text: action,
      time: new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }),
    };
    setRecentActions((prev) => [newAction, ...prev.slice(0, 4)]);
  };

  // Обработка клавиш
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K или Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      if (!isOpen) return;

      // ESC - закрыть
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Стрелка вниз
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < filteredCommands.length - 1 ? prev + 1 : prev));
      }

      // Стрелка вверх
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      }

      // Enter - выполнить команду
      if (e.key === "Enter" && filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Сброс индекса при изменении поиска
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg hover:border-blue-600 transition group"
        >
          <Search className="size-4 text-blue-600" />
          <span className="text-sm font-medium">Команды</span>
          <kbd className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded text-xs font-mono">Ctrl+K</kbd>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl max-w-3xl w-full border border-neutral-200 dark:border-neutral-800 overflow-hidden">
        {/* Search Input */}
        <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <Search className="size-5 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск команд или действий..."
              className="flex-1 bg-transparent border-0 outline-none text-lg"
              autoFocus
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          {/* Commands List */}
          <div className="md:col-span-2 max-h-96 overflow-y-auto">
            {filteredCommands.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">Команды не найдены</div>
            ) : (
              <div className="p-2">
                {filteredCommands.map((cmd, idx) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      setIsOpen(false);
                      setSearchQuery("");
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition ${
                      idx === selectedIndex
                        ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-600"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-800 border border-transparent"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg ${
                        idx === selectedIndex ? "bg-blue-600 text-white" : "bg-neutral-100 dark:bg-neutral-800"
                      }`}
                    >
                      {cmd.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{cmd.title}</div>
                      <div className="text-xs text-muted-foreground">{cmd.description}</div>
                    </div>
                    <ArrowRight className="size-4 text-neutral-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Analytics & Recent */}
          <div className="border-l border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-4 space-y-4">
            {/* Analytics */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="size-3" />
                Аналитика
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Визиты</span>
                  <span className="font-semibold">{analytics.visits}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Время</span>
                  <span className="font-semibold">{analytics.avgTime}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Топ</span>
                  <span className="font-semibold">{analytics.topPage}</span>
                </div>
              </div>
            </div>

            {/* Recent Actions */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground mb-3 flex items-center gap-2">
                <Clock className="size-3" />
                Недавние
              </h3>
              <div className="space-y-2">
                {recentActions.length === 0 ? (
                  <p className="text-xs text-muted-foreground">Нет действий</p>
                ) : (
                  recentActions.map((action, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="font-medium">{action.text}</div>
                      <div className="text-muted-foreground">{action.time}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-neutral-900 rounded border">↑↓</kbd>
              <span>Навигация</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-neutral-900 rounded border">Enter</kbd>
              <span>Выбрать</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-white dark:bg-neutral-900 rounded border">Esc</kbd>
              <span>Закрыть</span>
            </div>
          </div>
          <div>{filteredCommands.length} команд</div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
