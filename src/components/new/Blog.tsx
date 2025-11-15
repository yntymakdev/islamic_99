import React, { useState } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  X,
  TrendingUp,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Star,
  Award,
  Globe,
  Code,
  BookOpen,
  Dumbbell,
  Sparkles,
} from "lucide-react";

export default function PersonalBlog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  const categories = [
    { id: "all", name: "Все статьи", count: 15, icon: "📚", color: "blue" },
    { id: "islam", name: "Ислам", count: 5, icon: "☪️", color: "green" },
    { id: "projects", name: "Мои проекты", count: 4, icon: "💻", color: "purple" },
    { id: "languages", name: "Языки", count: 3, icon: "🌍", color: "orange" },
    { id: "sport", name: "Вольная борьба", count: 3, icon: "🥋", color: "red" },
  ];

  const allTags = [
    "Ислам",
    "Коран",
    "Намаз",
    "React",
    "AI",
    "Мобильные приложения",
    "Кыргызский",
    "Русский",
    "Английский",
    "Тренировки",
    "Мотивация",
    "Саморазвитие",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Как я создал исламское приложение для чтения Корана",
      date: "20 Января 2025",
      readTime: "10 мин",
      category: "islam",
      tags: ["Ислам", "React", "Мобильные приложения"],
      excerpt:
        "История создания моего проекта - приложения для чтения Корана с переводом на кыргызский и русский языки. От идеи до релиза.",
      author: "Ынтымак",
      views: 3456,
      likes: 234,
      comments: 67,
      featured: true,
      coverImage: "☪️",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      id: 2,
      title: "Вольная борьба и программирование: что общего?",
      date: "18 Января 2025",
      readTime: "7 мин",
      category: "sport",
      tags: ["Вольная борьба", "Мотивация", "Саморазвитие"],
      excerpt:
        "Как занятия вольной борьбой помогают мне в программировании: дисциплина, выносливость и стремление к победе.",
      author: "Ынтымак",
      views: 2145,
      likes: 189,
      comments: 45,
      featured: true,
      coverImage: "🥋",
      gradient: "from-red-600 to-orange-600",
    },
    {
      id: 3,
      title: "Изучение трёх языков: мой опыт полиглота",
      date: "15 Января 2025",
      readTime: "12 мин",
      category: "languages",
      tags: ["Кыргызский", "Русский", "Английский"],
      excerpt:
        "Как я изучаю кыргызский, русский и английский языки одновременно. Методы, приложения и личные лайфхаки.",
      author: "Ынтымак",
      views: 4321,
      likes: 312,
      comments: 89,
      featured: true,
      coverImage: "🌍",
      gradient: "from-orange-600 to-yellow-600",
    },
    {
      id: 4,
      title: "AI-помощник для изучения исламских текстов",
      date: "12 Января 2025",
      readTime: "15 мин",
      category: "projects",
      tags: ["Ислам", "AI", "React"],
      excerpt:
        "Разработал AI-бота который помогает понять и изучать исламские тексты. Использовал OpenAI API и базу хадисов.",
      author: "Ынтымак",
      views: 5678,
      likes: 445,
      comments: 123,
      featured: false,
      coverImage: "🤖",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 5,
      title: "Время намаза: как я автоматизировал напоминания",
      date: "10 Января 2025",
      readTime: "6 мин",
      category: "islam",
      tags: ["Ислам", "Намаз", "Мобильные приложения"],
      excerpt:
        "Создал приложение которое точно рассчитывает время намаза для Бишкека и отправляет красивые напоминания.",
      author: "Ынтымак",
      views: 2890,
      likes: 234,
      comments: 56,
      featured: false,
      coverImage: "🕌",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 6,
      title: "Тренировочный режим борца и разработчика",
      date: "8 Января 2025",
      readTime: "9 мин",
      category: "sport",
      tags: ["Вольная борьба", "Тренировки", "Саморазвитие"],
      excerpt:
        "Как я совмещаю интенсивные тренировки по вольной борьбе 5 дней в неделю с full-time разработкой. Мой распорядок дня.",
      author: "Ынтымак",
      views: 1876,
      likes: 167,
      comments: 34,
      featured: false,
      coverImage: "💪",
      gradient: "from-red-600 to-pink-600",
    },
    {
      id: 7,
      title: "Мой путь к Intermediate в английском за год",
      date: "5 Января 2025",
      readTime: "11 мин",
      category: "languages",
      tags: ["Английский", "Саморазвитие"],
      excerpt:
        "Как я поднял свой английский с Elementary до Intermediate за 12 месяцев. Приложения, методики и ошибки.",
      author: "Ынтымак",
      views: 3421,
      likes: 289,
      comments: 78,
      featured: false,
      coverImage: "🇬🇧",
      gradient: "from-blue-600 to-purple-600",
    },
    {
      id: 8,
      title: "Исламский календарь и планировщик задач",
      date: "2 Января 2025",
      readTime: "8 мин",
      category: "projects",
      tags: ["Ислам", "React", "AI"],
      excerpt:
        "Веб-приложение которое помогает мусульманам планировать дела с учётом исламского календаря и времени намаза.",
      author: "Ынтымак",
      views: 2134,
      likes: 198,
      comments: 45,
      featured: false,
      coverImage: "📅",
      gradient: "from-green-600 to-teal-600",
    },
    {
      id: 9,
      title: "Почему я начал изучать кыргызский язык глубже",
      date: "28 Декабря 2024",
      readTime: "7 мин",
      category: "languages",
      tags: ["Кыргызский", "Саморазвитие"],
      excerpt:
        "Родной язык - основа идентичности. Как я углубляю знание кыргызского через литературу и общение с аксакалами.",
      author: "Ынтымак",
      views: 1567,
      likes: 134,
      comments: 28,
      featured: false,
      coverImage: "🇰🇬",
      gradient: "from-red-600 to-yellow-600",
    },
    {
      id: 10,
      title: "Чемпионат по вольной борьбе: мой опыт",
      date: "25 Декабря 2024",
      readTime: "10 мин",
      category: "sport",
      tags: ["Вольная борьба", "Мотивация"],
      excerpt: "Рассказ о моём участии в региональном чемпионате по вольной борьбе. Подготовка, эмоции и выводы.",
      author: "Ынтымак",
      views: 2789,
      likes: 245,
      comments: 67,
      featured: false,
      coverImage: "🏆",
      gradient: "from-yellow-600 to-orange-600",
    },
    {
      id: 11,
      title: "Проект: Платформа для изучения арабского языка",
      date: "22 Декабря 2024",
      readTime: "13 мин",
      category: "projects",
      tags: ["AI", "Ислам", "React"],
      excerpt:
        "Разрабатываю платформу для изучения арабского языка для чтения Корана. AI-ассистент, интерактивные уроки и прогресс.",
      author: "Ынтымак",
      views: 4567,
      likes: 389,
      comments: 92,
      featured: false,
      coverImage: "🇸🇦",
      gradient: "from-green-600 to-blue-600",
    },
    {
      id: 12,
      title: "Как ислам влияет на мой подход к программированию",
      date: "20 Декабря 2024",
      readTime: "8 мин",
      category: "islam",
      tags: ["Ислам", "Саморазвитие", "Мотивация"],
      excerpt: "Исламские принципы честности, качества работы и служения людям в моей профессии разработчика.",
      author: "Ынтымак",
      views: 3890,
      likes: 456,
      comments: 112,
      featured: false,
      coverImage: "📿",
      gradient: "from-emerald-600 to-teal-600",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag));

    return matchesSearch && matchesCategory && matchesTags;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const toggleLike = (postId) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]));
  };

  const toggleBookmark = (postId) => {
    setBookmarkedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]));
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const colorMap = {
    blue: "border-blue-600 text-blue-600",
    green: "border-green-600 text-green-600",
    purple: "border-purple-600 text-purple-600",
    orange: "border-orange-600 text-orange-600",
    red: "border-red-600 text-red-600",
  };

  return (
    <section id="blog" className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-6xl px-4">
        {/* Заголовок */}
        <div className="mb-16">
          <h2 className="flex items-center text-3xl font-bold text-foreground mb-2">
            <span className="text-blue-600 font-mono text-2xl mr-2">05.</span>
            Блог
            <span className="ml-4 h-[1px] flex-1 bg-neutral-300 dark:bg-neutral-700"></span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Делюсь опытом про Ислам, мои проекты, изучение языков и вольную борьбу
          </p>
        </div>

        {/* Топ статьи (Featured) */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="size-5 text-yellow-600" />
              <h3 className="text-xl font-bold">Топ статьи месяца</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, idx) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-neutral-900 rounded-xl border-2 border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-blue-600 transition-all hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`h-32 bg-gradient-to-r ${post.gradient} flex items-center justify-center text-6xl`}>
                    {post.coverImage}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="size-3" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="size-3" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="size-3" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="size-3" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="size-3" />
                          {post.comments}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href="#"
                        className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                      >
                        Читать
                      </a>
                      <button
                        onClick={() => toggleBookmark(post.id)}
                        className={`p-2 rounded-lg border transition ${
                          bookmarkedPosts.includes(post.id)
                            ? "bg-blue-600 border-blue-600 text-white"
                            : "border-neutral-300 dark:border-neutral-700 hover:border-blue-600"
                        }`}
                      >
                        <Bookmark className="size-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Поиск и фильтры */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Поиск */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 size-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск статей..."
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Кнопка фильтров */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-blue-600 transition flex items-center gap-2 justify-center"
            >
              <Filter className="size-5" />
              Фильтры
              {(selectedTags.length > 0 || selectedCategory !== "all") && (
                <span className="ml-2 px-2 py-0.5 bg-blue-600 text-white rounded-full text-xs">
                  {selectedTags.length + (selectedCategory !== "all" ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Категории */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg border-2 transition font-medium flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? `bg-${cat.color}-50 dark:bg-${cat.color}-900/20 ${colorMap[cat.color]}`
                    : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-blue-600"
                }`}
              >
                <span className="text-xl">{cat.icon}</span>
                {cat.name}
                <span className="text-xs opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Теги (если открыты фильтры) */}
          {showFilters && (
            <div className="mt-6 p-6 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Фильтр по тегам</h4>
                {selectedTags.length > 0 && (
                  <button onClick={() => setSelectedTags([])} className="text-sm text-blue-600 hover:underline">
                    Сбросить все
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                      selectedTags.includes(tag)
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Результаты поиска */}
        <div className="mb-4 text-sm text-muted-foreground">
          Найдено статей: <span className="font-semibold text-foreground">{filteredPosts.length}</span>
        </div>

        {/* Список статей */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className="group bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`h-24 bg-gradient-to-r ${post.gradient} flex items-center justify-center text-5xl`}>
                {post.coverImage}
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="size-3" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <Clock className="size-3" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded text-xs font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye className="size-3" />
                      {post.views}
                    </span>
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1 transition ${
                        likedPosts.includes(post.id) ? "text-red-600" : "hover:text-red-600"
                      }`}
                    >
                      <Heart className={`size-3 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                      {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                    </button>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="size-3" />
                      {post.comments}
                    </span>
                  </div>
                  <button className="hover:text-blue-600 transition">
                    <Share2 className="size-3" />
                  </button>
                </div>

                <a href="#" className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                  Читать далее
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Если ничего не найдено */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Статьи не найдены</h3>
            <p className="text-muted-foreground mb-6">Попробуйте изменить поисковый запрос или фильтры</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedTags([]);
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Сбросить фильтры
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <Sparkles className="size-12 mx-auto mb-4" />
          <h3 className="text-3xl font-bold mb-4">Хочешь узнать больше?</h3>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Подпишись на уведомления чтобы не пропустить новые статьи про Ислам, технологии и спорт
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Твой email..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform">
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
