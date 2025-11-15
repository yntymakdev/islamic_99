import React, { useState, useEffect, useRef } from "react";
import { Send, MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState("greeting");
  const [isOpen, setIsOpen] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "",
    experience: "",
    interests: [],
    timeAvailable: "",
    goals: "",
    currentJob: "",
  });
  const [recommendedCourse, setRecommendedCourse] = useState(null);
  const messagesEndRef = useRef(null);

  const coursesEnhanced = {
    frontend: {
      title: "Frontend Developer",
      salary: "от 60,000 до 120,000 сом",
      duration: "4 месяца",
      practice: "8 реальных проектов",
      graduates: 156,
      employed: "89%",
      avgTime: "2.3 месяца",
      reviews: 4.8,
      discount: "15%",
      spotsLeft: 7,
    },
    backend: {
      title: "Backend Developer",
      salary: "от 80,000 до 150,000 сом",
      duration: "5 месяцев",
      practice: "10 реальных проектов",
      graduates: 124,
      employed: "92%",
      avgTime: "1.8 месяца",
      reviews: 4.9,
      discount: "20%",
      spotsLeft: 5,
    },
    fullstack: {
      title: "Full-Stack Developer",
      salary: "от 100,000 до 180,000 сом",
      duration: "6 месяцев",
      practice: "15 реальных проектов",
      graduates: 98,
      employed: "95%",
      avgTime: "1.5 месяца",
      reviews: 4.9,
      discount: "25%",
      spotsLeft: 3,
    },
    mobile: {
      title: "Mobile Developer",
      salary: "от 70,000 до 140,000 сом",
      duration: "5 месяцев",
      practice: "12 реальных проектов",
      graduates: 87,
      employed: "88%",
      avgTime: "2.1 месяца",
      reviews: 4.7,
      discount: "18%",
      spotsLeft: 6,
    },
  };

  const chatFlow = {
    greeting: {
      message: "Привет! 👋 Я помогу подобрать идеальный IT-курс для тебя! Как тебя зовут?",
      next: "experience",
    },
    experience: {
      message: "Какой у тебя опыт в программировании?",
      options: [
        { text: "🌱 Новичок (нет опыта)", value: "beginner" },
        { text: "📚 Есть базовые знания", value: "some_knowledge" },
        { text: "💼 Есть опыт работы", value: "experienced" },
      ],
      next: "interests",
    },
    interests: {
      message: "Что тебе интересно? (Можно выбрать несколько)",
      options: [
        { text: "🎨 Дизайн и интерфейсы", value: "frontend", multi: true },
        { text: "⚙️ Логика и алгоритмы", value: "backend", multi: true },
        { text: "📱 Мобильные приложения", value: "mobile", multi: true },
        { text: "🚀 Все сразу (Full-Stack)", value: "fullstack", multi: true },
      ],
      next: "timeAvailable",
    },
    timeAvailable: {
      message: "Сколько времени готов(а) уделять обучению?",
      options: [
        { text: "⏰ 1-2 часа в день", value: "light" },
        { text: "📅 3-4 часа в день", value: "moderate" },
        { text: "🔥 5+ часов (интенсив)", value: "intensive" },
      ],
      next: "goals",
    },
    goals: {
      message: "Какая главная цель?",
      options: [
        { text: "💰 Высокая зарплата", value: "salary" },
        { text: "📈 Карьерный рост", value: "career" },
        { text: "🌍 Фриланс и удаленка", value: "freelance" },
        { text: "🚀 Свой стартап", value: "startup" },
      ],
      next: "currentJob",
    },
    currentJob: {
      message: "Твоя текущая ситуация?",
      options: [
        { text: "🎓 Студент", value: "student" },
        { text: "💼 Работаю (не IT)", value: "working" },
        { text: "🔄 Хочу сменить профессию", value: "career_change" },
        { text: "🏠 Ищу работу", value: "unemployed" },
      ],
      next: "recommendation",
    },
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(chatFlow.greeting.message, null, true, 800);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addBotMessage = (text, options = null, showTyping = true, delay = 1000) => {
    if (showTyping) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            text,
            sender: "bot",
            options,
            timestamp: new Date(),
          },
        ]);
      }, delay);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          text,
          sender: "bot",
          options,
          timestamp: new Date(),
        },
      ]);
    }
  };

  const addUserMessage = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        text,
        sender: "user",
        timestamp: new Date(),
      },
    ]);
  };

  const handleOptionClick = (option) => {
    const currentFlow = chatFlow[currentStep];

    if (currentFlow?.options?.some((opt) => opt.multi)) {
      if (userProfile.interests.includes(option.value)) {
        setUserProfile((prev) => ({
          ...prev,
          interests: prev.interests.filter((i) => i !== option.value),
        }));
      } else {
        setUserProfile((prev) => ({
          ...prev,
          interests: [...prev.interests, option.value],
        }));
        addUserMessage(option.text);
      }
      return;
    }

    addUserMessage(option.text);
    setUserProfile((prev) => ({ ...prev, [currentStep]: option.value }));

    setTimeout(() => {
      const nextStep = currentFlow.next;
      if (nextStep) {
        setCurrentStep(nextStep);
        const nextFlow = chatFlow[nextStep];
        addBotMessage(nextFlow.message, nextFlow.options || null, true, 800);
      }
    }, 1200);
  };

  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);

    if (currentStep === "greeting") {
      setUserProfile((prev) => ({ ...prev, name: inputValue }));
      const name = inputValue;
      setInputValue("");

      setTimeout(() => {
        addBotMessage(`Приятно познакомиться, ${name}! 😊`, null, true, 800);
      }, 600);

      setTimeout(() => {
        const nextFlow = chatFlow.experience;
        setCurrentStep("experience");
        addBotMessage(nextFlow.message, nextFlow.options || null, true, 1000);
      }, 2000);
    }

    setInputValue("");
  };

  const proceedToNext = () => {
    if (currentStep === "interests" && userProfile.interests.length === 0) {
      addBotMessage("Выбери хотя бы одно направление! 😊", null, true, 500);
      return;
    }

    const nextStep = chatFlow[currentStep].next;
    setCurrentStep(nextStep);

    if (nextStep === "recommendation") {
      generateRecommendation();
    } else {
      const nextFlow = chatFlow[nextStep];
      setTimeout(() => {
        addBotMessage(nextFlow.message, nextFlow.options, true, 800);
      }, 600);
    }
  };

  const analyzeUserProfile = () => {
    const { experience, interests, timeAvailable, goals } = userProfile;

    const scores = {
      frontend: 0,
      backend: 0,
      fullstack: 0,
      mobile: 0,
    };

    interests.forEach((interest) => {
      if (interest === "frontend") {
        scores.frontend += 40;
        scores.fullstack += 20;
      }
      if (interest === "backend") {
        scores.backend += 40;
        scores.fullstack += 20;
      }
      if (interest === "mobile") {
        scores.mobile += 40;
      }
      if (interest === "fullstack") {
        scores.fullstack += 35;
      }
    });

    if (experience === "beginner") {
      scores.frontend += 25;
      scores.mobile += 20;
    } else if (experience === "experienced") {
      scores.fullstack += 30;
      scores.backend += 25;
    }

    if (timeAvailable === "light") {
      scores.frontend += 20;
    } else if (timeAvailable === "intensive") {
      scores.fullstack += 25;
    }

    if (goals === "salary") {
      scores.fullstack += 30;
      scores.backend += 25;
    } else if (goals === "freelance") {
      scores.frontend += 25;
    }

    const winner = Object.entries(scores).reduce((a, b) => (scores[a[0]] > scores[b[0]] ? a : b));
    const courseKey = winner[0];

    return {
      course: coursesEnhanced[courseKey],
      courseKey,
    };
  };

  const generateRecommendation = () => {
    const recommendation = analyzeUserProfile();
    const course = recommendation.course;
    setRecommendedCourse(recommendation);

    const messagesList = [
      {
        text: `${userProfile.name}, анализирую твой профиль... 🤔`,
        delay: 1000,
      },
      {
        text: `Отлично! Рекомендую курс: **${course.title}**! 🎯`,
        delay: 1800,
      },
      {
        text: `📊 **О курсе:**\n\n💰 Зарплата: ${course.salary}\n⏱️ Длительность: ${course.duration}\n🎯 Проектов: ${course.practice}\n⭐ Рейтинг: ${course.reviews}/5\n💼 Трудоустройство: ${course.employed} за ${course.avgTime}`,
        delay: 2200,
      },
      {
        text: `🔥 **СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ:**\n\n🎁 Скидка ${course.discount} при записи сегодня!\n⚡ Осталось ${
          course.spotsLeft
        } ${course.spotsLeft < 5 ? "места" : "мест"}!\n💳 Рассрочка 0% на 4 месяца`,
        delay: 2600,
      },
      {
        text: `${userProfile.name}, готов(а) начать? 🚀`,
        delay: 3000,
        options: [
          { text: "🔥 Записаться сейчас", value: "enroll" },
          { text: "💬 Задать вопрос", value: "question" },
          { text: "🎁 Узнать о скидках", value: "discounts" },
          { text: "🔄 Пройти заново", value: "restart" },
        ],
      },
    ];

    let cumulativeDelay = 0;
    messagesList.forEach((msg) => {
      cumulativeDelay += msg.delay;
      setTimeout(() => {
        addBotMessage(msg.text, msg.options || null, true, 500);
      }, cumulativeDelay);
    });
  };

  const handleActionClick = (value) => {
    if (value === "enroll") {
      addUserMessage("Хочу записаться!");
      setTimeout(() => {
        addBotMessage(
          "Отлично! Выбери удобный способ связи:",
          [
            { text: "📱 WhatsApp", value: "whatsapp" },
            { text: "✈️ Telegram", value: "telegram" },
          ],
          true,
          800
        );
      }, 1000);
    } else if (value === "question") {
      addUserMessage("У меня вопрос");
      setTimeout(() => {
        addBotMessage("Задавай! Например:\n• Сколько стоит?\n• Есть рассрочка?\n• Как проходит обучение?", null, false);
      }, 800);
    } else if (value === "discounts") {
      addUserMessage("Расскажи про скидки");
      setTimeout(() => {
        addBotMessage(
          `🎁 **Актуальные предложения:**\n\n💰 Скидка ${recommendedCourse?.course.discount} сегодня!\n📅 Рассрочка 0% на 4 месяца\n🎓 Первый урок БЕСПЛАТНО\n👥 Приведи друга - 2000 сом бонус`,
          [
            { text: "🚀 Записаться", value: "enroll" },
            { text: "💬 Вопрос", value: "question" },
          ]
        );
      }, 1000);
    } else if (value === "restart") {
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
      setTimeout(() => {
        addBotMessage(chatFlow.greeting.message, null, true, 800);
      }, 500);
    } else if (value === "whatsapp") {
      window.open("https://wa.me/996709826628?text=Здравствуйте!%20Хочу%20записаться%20на%20курс", "_blank");
      addBotMessage("Отлично! Менеджер ответит в течение 5 минут! 📱", null, true, 500);
    } else if (value === "telegram") {
      window.open("https://t.me/itacademy_kg", "_blank");
      addBotMessage("Супер! Менеджер онлайн! ✈️", null, true, 500);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
        >
          <MessageCircle size={32} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">IT Академия 🚀</h3>
              <p className="text-sm opacity-90">Подберем идеальный курс</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-2 transition">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-white shadow-md"
                  }`}
                >
                  <div className="whitespace-pre-line text-sm">{msg.text}</div>
                  {msg.options && (
                    <div className="mt-3 space-y-2">
                      {msg.options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(opt.value)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition text-sm font-medium ${
                            userProfile.interests?.includes(opt.value)
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 hover:bg-purple-100 text-gray-700"
                          }`}
                        >
                          {opt.text}
                        </button>
                      ))}
                      {currentStep === "interests" && (
                        <button
                          onClick={proceedToNext}
                          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition font-medium"
                        >
                          Продолжить →
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-md rounded-2xl p-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {currentStep === "greeting" && (
            <div className="p-4 border-t bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleInputSubmit()}
                  placeholder="Введите ваше имя..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-purple-600"
                />
                <button
                  onClick={handleInputSubmit}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-xl hover:opacity-90 transition"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBot;
