"use client";
import React, { useEffect, useState } from "react";
import { Search, Book, Heart, Play, Menu, X, Star, Bookmark, Volume2, Moon, Sun } from "lucide-react";
import Link from "next/link";

const IslamicNamesDesign = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedName, setSelectedName] = useState<Name | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  type Name = {
    id: number;
    arabic: string;
    transliteration: string;
    meaning: string;
    description: string;
  };

  const names = [
    {
      id: 1,
      arabic: "الرَّحْمَنُ",
      transliteration: "Ar-Rahman",
      meaning: "Милостивый",
      description: "Тот, Кто милостив ко всем творениям без исключения",
      audio: "rahman.mp3",
    },
    {
      id: 2,
      arabic: "الرَّحِيمُ",
      transliteration: "Ar-Raheem",
      meaning: "Милосердный",
      description: "Тот, Кто особенно милосерден к верующим",
      audio: "rahman.mp3",
    },
    {
      id: 3,
      arabic: "الْمَلِكُ",
      transliteration: "Al-Malik",
      meaning: "Царь",
      description: "Абсолютный владыка всего сущего",
      audio: "rahman.mp3",
    },
    {
      id: 4,
      arabic: "الْقُدُّوسُ",
      transliteration: "Al-Quddus",
      meaning: "Святой",
      description: "Свободный от всех недостатков и пороков",
      audio: "rahman.mp3",
    },
    {
      id: 5,
      arabic: "السَّلاَمُ",
      transliteration: "As-Salaam",
      meaning: "Мир",
      description: "Источник безопасности и мира",
      audio: "rahman.mp3",
    },
    {
      id: 6,
      arabic: "الْمُؤْمِنُ",
      transliteration: "Al-Mu'min",
      meaning: "Верный",
      description: "Дарующий безопасность и защиту",
      audio: "rahman.mp3",
    },
    {
      id: 7,
      arabic: "الْمُهَيْمِنُ",
      transliteration: "Al-Muhaymin",
      meaning: "Хранитель",
      description: "Наблюдающий и охраняющий все",
      audio: "rahman.mp3",
    },
    {
      id: 8,
      arabic: "الْعَزِيزُ",
      transliteration: "Al-Aziz",
      meaning: "Могущественный",
      description: "Непобедимый и почитаемый",
      audio: "rahman.mp3",
    },
  ];

  const filteredNames = names.filter(
    (name) =>
      name.arabic.includes(searchTerm) ||
      name.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const loadFavorites = () => {
    const stored = localStorage.getItem("favoriteNames");
    if (stored) {
      setFavorites(JSON.parse(stored));
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    loadFavorites();

    // Обновляем избранное при фокусе окна (когда возвращаемся на страницу)
    window.addEventListener("focus", loadFavorites);

    return () => {
      window.removeEventListener("focus", loadFavorites);
    };
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => {
      let newFavs;
      if (prev.includes(id)) {
        newFavs = prev.filter((favId) => favId !== id);
      } else {
        newFavs = [...prev, id];
      }
      localStorage.setItem("favoriteNames", JSON.stringify(newFavs));
      return newFavs;
    });
  };
  const playAudio = (audioFile: string) => {
    const audio = new Audio(`/sounds/${audioFile}`);
    audio.play();
  };

  return (
    <div
      className={`min-h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50"
      }`}
    >
      {/* Header */}
      <header
        className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800/95" : "bg-white/95"} backdrop-blur-md border-b ${
          darkMode ? "border-gray-700" : "border-emerald-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-full ${
                  darkMode
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                } flex items-center justify-center`}
              >
                <Book className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>الأسماء الحسنى</h1>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>99 имен Аллаха</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className={`hover:text-emerald-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Главная
              </a>
              <Link
                href={"/favorites"}
                className={`hover:text-emerald-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Избранное
              </Link>
              <a
                href="#"
                className={`hover:text-emerald-600 transition-colors ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                О проекте
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                } transition-colors`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"} border-b ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            <a
              href="#"
              className={`block px-3 py-2 rounded-md ${
                darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Главная
            </a>
            <a
              href="#"
              className={`block px-3 py-2 rounded-md ${
                darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Избранное
            </a>
            <a
              href="#"
              className={`block px-3 py-2 rounded-md ${
                darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              О проекте
            </a>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            الأسماء الحسنى
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}>
            Изучайте 99 прекрасных имен Аллаха с переводом, транскрипцией и объяснениями
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <input
              type="text"
              placeholder="Поиск имени..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-2xl border ${
                darkMode
                  ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
              } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent`}
            />
          </div>
        </div>

        {/* Names Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredNames.map((name) => (
            <div
              key={name.id}
              onClick={() => setSelectedName(name)}
              className={`group cursor-pointer p-6 rounded-2xl border ${
                darkMode
                  ? "bg-gray-800 border-gray-700 hover:border-emerald-500"
                  : "bg-white border-gray-200 hover:border-emerald-300"
              } hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      darkMode ? "text-white" : "text-gray-900"
                    } group-hover:text-emerald-600 transition-colors`}
                  >
                    {name.arabic}
                  </h3>
                  <p className={`text-lg font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {name.transliteration}
                  </p>
                  <p className={`text-sm ${darkMode ? "text-emerald-400" : "text-emerald-600"} font-medium`}>
                    {name.meaning}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(name.id);
                  }}
                  className={`p-2 rounded-full ${
                    favorites.includes(name.id)
                      ? "text-red-500"
                      : darkMode
                      ? "text-gray-400 hover:text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  } transition-colors`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(name.id) ? "fill-current" : ""}`} />
                </button>
              </div>

              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                {name.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(name.audio);
                    }}
                    className={`p-2 rounded-full ${
                      darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    className={`p-2 rounded-full ${
                      darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"
                    } transition-colors`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
                <span className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"}`}>#{name.id}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Name */}
        {selectedName && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {selectedName.arabic}
                  </h3>
                  <p className={`text-xl font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {selectedName.transliteration}
                  </p>
                  <p className={`text-lg ${darkMode ? "text-emerald-400" : "text-emerald-600"} font-medium`}>
                    {selectedName.meaning}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedName(null)}
                  className={`p-2 rounded-full ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  } transition-colors`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Значение:</h4>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
                    {selectedName.description}
                  </p>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Volume2 className="w-4 h-4" />
                    <span>Прослушать</span>
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedName.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      favorites.includes(selectedName.id)
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(selectedName.id) ? "fill-current" : ""}`} />
                    <span>{favorites.includes(selectedName.id) ? "Убрать из избранного" : "В избранное"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className={`mt-16 ${darkMode ? "bg-gray-800" : "bg-white"} border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
              «И у Аллаха прекрасные имена, так взывайте к Нему посредством их»
            </p>
            <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>Коран 7:180</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IslamicNamesDesign;
