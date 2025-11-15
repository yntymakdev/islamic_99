import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Zap,
  Image as ImageIcon,
  FileText,
  Languages,
  Brain,
  Sparkles,
  Send,
  X,
  Command,
  Search,
  Mic,
  Download,
  Copy,
  Trash2,
  Settings,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";

export default function UltimateAIAssistant() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("chat");
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Привет! 👋 Я твой AI-ассистент. Могу помочь с чем угодно - от домашки до создания проектов!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [commandSearch, setCommandSearch] = useState("");
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const commands = [
    {
      icon: <Brain />,
      name: "Решить задачу",
      desc: "Математика, физика, химия",
      action: () => addMessage("Помоги решить задачу: "),
      category: "Учеба",
    },
    {
      icon: <FileText />,
      name: "Написать текст",
      desc: "Эссе, резюме, письмо",
      action: () => addMessage("Напиши текст: "),
      category: "Текст",
    },
    {
      icon: <ImageIcon />,
      name: "Создать изображение",
      desc: "AI генерация картинок",
      action: () => handleImageGen(),
      category: "Креатив",
    },
    {
      icon: <Languages />,
      name: "Перевести",
      desc: "На любой язык мира",
      action: () => addMessage("Переведи на "),
      category: "Языки",
    },
    {
      icon: <Sparkles />,
      name: "Улучшить код",
      desc: "Оптимизация и исправления",
      action: () => addMessage("Улучши этот код: "),
      category: "Код",
    },
    {
      icon: <Search />,
      name: "Объяснить тему",
      desc: "Простым языком",
      action: () => addMessage("Объясни простыми словами: "),
      category: "Обучение",
    },
    {
      icon: <FileText />,
      name: "Проанализировать файл",
      desc: "PDF, DOC, TXT",
      action: () => handleFileAnalysis(),
      category: "Файлы",
    },
    {
      icon: <Brain />,
      name: "Придумать идею",
      desc: "Для проекта, бизнеса, контента",
      action: () => addMessage("Придумай идею для: "),
      category: "Креатив",
    },
  ];

  const quickActions = [
    { text: "Помоги с домашкой 📚", action: () => sendMessage("Помоги с домашним заданием") },
    { text: "Создай план обучения 📝", action: () => sendMessage("Создай план обучения для начинающего") },
    {
      text: "Объясни как работает AI 🤖",
      action: () => sendMessage("Объясни простыми словами как работает искусственный интеллект"),
    },
    {
      text: "Напиши мотивационное письмо ✨",
      action: () => sendMessage("Напиши мотивационное письмо для поступления"),
    },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandPalette(!showCommandPalette);
      }
      if (e.key === "Escape") {
        setShowCommandPalette(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showCommandPalette]);

  const addMessage = (text) => {
    setInput(text);
    setShowCommandPalette(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const sendMessage = async (customMessage = null) => {
    const messageText = customMessage || input.trim();
    if (!messageText) return;

    const userMessage = { role: "user", content: messageText, timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(messageText);
      setMessages((prev) => [...prev, { role: "assistant", content: response, timestamp: new Date() }]);
      setIsTyping(false);
      if (voiceEnabled) speak(response);
    }, 1000 + Math.random() * 1000);
  };

  const generateAIResponse = (input) => {
    const lower = input.toLowerCase();

    if (lower.includes("привет") || lower.includes("здравствуй")) {
      return "👋 Привет! Чем могу помочь? Я умею решать задачи, писать тексты, создавать изображения и многое другое!";
    }

    if (lower.includes("задач") || lower.includes("решить") || lower.includes("математик")) {
      return "🔢 Конечно! Я помогу решить задачу. Вот пошаговое решение:\n\n1. Сначала определим известные данные\n2. Применим нужную формулу\n3. Подставим значения и вычислим\n\nНапиши конкретную задачу, и я дам подробное решение с объяснениями!";
    }

    if (
      lower.includes("код") ||
      lower.includes("программ") ||
      lower.includes("python") ||
      lower.includes("javascript")
    ) {
      return "💻 Отлично! Вот улучшенная версия кода:\n\n```javascript\n// Оптимизированный код\nconst solution = (data) => {\n  return data.map(item => item * 2)\n    .filter(n => n > 10);\n};\n```\n\nЧто улучшено:\n✓ Использованы современные методы\n✓ Код стал читабельнее\n✓ Производительность выше";
    }

    if (lower.includes("перевед") || lower.includes("translate")) {
      return '🌐 **Перевод готов!**\n\n🇬🇧 English: "Hello, how can I help you?"\n🇪🇸 Español: "Hola, ¿cómo puedo ayudarte?"\n🇫🇷 Français: "Bonjour, comment puis-je vous aider?"\n\nНапиши текст и язык для точного перевода!';
    }

    if (lower.includes("изображ") || lower.includes("картинк") || lower.includes("фото")) {
      return "🎨 **Генерация изображения...**\n\n✨ Создаю уникальное изображение по твоему описанию!\n\n🖼️ [Здесь будет AI-сгенерированное изображение]\n\nОписание: Футуристический город с летающими машинами\nСтиль: Киберпанк, неоновые цвета\nРазрешение: 1024x1024\n\n💡 Хочешь изменить что-то? Просто скажи!";
    }

    if (lower.includes("объясни") || lower.includes("что такое") || lower.includes("как работает")) {
      return "🧠 **Объяснение простыми словами:**\n\nПредставь, что это как... 🤔\n\nИскусственный интеллект (AI) - это программа, которая учится на примерах, как ребенок. Чем больше примеров она видит, тем умнее становится!\n\n**Пример:**\n• Показываешь AI 1000 фото кошек 🐱\n• AI запоминает: уши, усы, хвост\n• Теперь AI распознает кошек на новых фото!\n\nТак же работают голосовые помощники, рекомендации в YouTube и многое другое!";
    }

    if (lower.includes("план") || lower.includes("обучени") || lower.includes("учить")) {
      return "📚 **План обучения на 30 дней:**\n\n**Неделя 1-2: Основы**\n• День 1-3: Теория и концепции\n• День 4-7: Практические задачи\n• День 8-14: Мини-проекты\n\n**Неделя 3-4: Продвинутый уровень**\n• День 15-21: Сложные темы\n• День 22-28: Реальный проект\n• День 29-30: Повторение и тесты\n\n✅ Совет: Учи по 1-2 часа в день, делай перерывы!";
    }

    if (lower.includes("идея") || lower.includes("придумай")) {
      return "💡 **Крутые идеи для тебя:**\n\n1. **AI Помощник для студентов** 🎓\n   Автоматически решает задачи и объясняет\n\n2. **Умный планировщик задач** 📱\n   С AI-приоритизацией и напоминаниями\n\n3. **Генератор контента** ✍️\n   Создает посты для соцсетей за секунды\n\n4. **Персональный тренер** 💪\n   AI подбирает упражнения под тебя\n\nВыбери любую и начнем разрабатывать!";
    }

    if (lower.includes("мотивац") || lower.includes("письмо") || lower.includes("резюме")) {
      return "✍️ **Готовое мотивационное письмо:**\n\nУважаемая приемная комиссия,\n\nПишу вам, чтобы выразить свой искренний интерес к поступлению в ваш университет. Моя страсть к обучению и стремление к развитию делают меня идеальным кандидатом.\n\n**Мои достижения:**\n✓ Средний балл: 4.8/5.0\n✓ Участие в олимпиадах\n✓ Волонтерская работа\n\nУверен, что смогу внести вклад в студенческое сообщество и достичь высоких результатов.\n\nС уважением,\n[Твое имя]";
    }

    return `✨ **Понял твой запрос!**\n\n"${input}"\n\nВот что я могу сделать:\n\n📊 **Анализирую** твой запрос...\n🎯 **Генерирую** оптимальное решение...\n✅ **Готово!**\n\nЭто мощный AI-ассистент, который поможет с:\n• Учебой и домашкой\n• Написанием текстов\n• Программированием\n• Креативными идеями\n• Переводами\n• И многим другим!\n\n💡 Попробуй команды через Ctrl+K или напиши что нужно!`;
  };

  const speak = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text.slice(0, 200));
      utterance.lang = "ru-RU";
      utterance.rate = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleImageGen = () => {
    setShowCommandPalette(false);
    sendMessage("Создай изображение: футуристический город с неоновыми огнями");
  };

  const handleFileAnalysis = () => {
    setShowCommandPalette(false);
    const analysis = `📄 **Анализ файла завершен!**

**Тип:** PDF документ
**Размер:** 2.4 MB
**Страниц:** 47

**Краткое содержание:**
Документ содержит информацию о разработке AI-систем. Основные темы: машинное обучение, нейронные сети, обработка естественного языка.

**Ключевые моменты:**
• Архитектура трансформеров
• Обучение с подкреплением
• Этические аспекты AI

✅ Могу ответить на вопросы по содержанию!`;
    setMessages((prev) => [...prev, { role: "assistant", content: analysis, timestamp: new Date() }]);
  };

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
  };

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.name.toLowerCase().includes(commandSearch.toLowerCase()) ||
      cmd.desc.toLowerCase().includes(commandSearch.toLowerCase())
  );

  const categories = [...new Set(commands.map((c) => c.category))];

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors`}
    >
      {/* Header */}
      <div
        className={`${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        } border-b sticky top-0 z-50 backdrop-blur-lg bg-opacity-90`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Ultimate AI Assistant</h1>
              <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Твой мощный помощник 24/7</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-2 rounded-lg ${
                voiceEnabled ? "bg-purple-500 text-white" : darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setShowCommandPalette(true)}
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition"
            >
              <Command className="w-4 h-4" />
              <span className="hidden sm:inline">Команды</span>
            </button>
          </div>
        </div>
      </div>

      {/* Command Palette */}
      {showCommandPalette && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
          <div
            className={`w-full max-w-2xl ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-2xl shadow-2xl overflow-hidden animate-in`}
          >
            <div className="p-4 border-b border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={commandSearch}
                  onChange={(e) => setCommandSearch(e.target.value)}
                  placeholder="Найти команду... (Ctrl+K)"
                  className={`w-full pl-12 pr-4 py-3 ${
                    darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  autoFocus
                />
                <button
                  onClick={() => setShowCommandPalette(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {categories.map((category) => (
                <div key={category} className="p-2">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase">{category}</div>
                  {filteredCommands
                    .filter((cmd) => cmd.category === category)
                    .map((cmd, idx) => (
                      <button
                        key={idx}
                        onClick={cmd.action}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl ${
                          darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                        } transition group`}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                          {React.cloneElement(cmd.icon, { className: "w-5 h-5 text-white" })}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{cmd.name}</div>
                          <div className="text-sm text-gray-400">{cmd.desc}</div>
                        </div>
                        <Zap className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition" />
                      </button>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Chat */}
      <div className={`max-w-4xl mx-auto ${isFullscreen ? "h-screen" : "h-[calc(100vh-80px)]"} flex flex-col`}>
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 1 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Чем могу помочь?</h2>
              <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-6`}>
                Выбери быстрое действие или используй Ctrl+K
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
                {quickActions.map((action, idx) => (
                  <button
                    key={idx}
                    onClick={action.action}
                    className={`p-4 ${
                      darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-50"
                    } rounded-xl text-left transition border ${darkMode ? "border-gray-700" : "border-gray-200"}`}
                  >
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] ${
                  msg.role === "user"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : darkMode
                    ? "bg-gray-800"
                    : "bg-white"
                } rounded-2xl p-4 shadow-lg group relative`}
              >
                <div className="whitespace-pre-wrap break-words">{msg.content}</div>
                <div className={`text-xs mt-2 ${msg.role === "user" ? "text-purple-200" : "text-gray-500"}`}>
                  {msg.timestamp.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}
                </div>
                {msg.role === "assistant" && (
                  <button
                    onClick={() => copyMessage(msg.content)}
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition p-2 bg-gray-700 rounded-lg"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-2xl p-4 shadow-lg`}>
                <div className="flex gap-2">
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} border-t p-4`}>
          <div className="max-w-4xl mx-auto flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Напиши сообщение... (Ctrl+K для команд)"
              className={`flex-1 px-4 py-3 ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
              } rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!input.trim()}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className={`text-center mt-2 text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
            Нажми <kbd className="px-2 py-1 bg-gray-700 rounded">Ctrl</kbd> +{" "}
            <kbd className="px-2 py-1 bg-gray-700 rounded">K</kbd> для быстрых команд
          </div>
        </div>
      </div>
    </div>
  );
}
