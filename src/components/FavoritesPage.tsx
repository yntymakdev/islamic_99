"use client";
import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

type Name = {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  description: string;
};

const allNames: Name[] = [
  {
    id: 1,
    arabic: "الرَّحْمَنُ",
    transliteration: "Ar-Rahman",
    meaning: "Милостивый",
    description: "Тот, Кто милостив ко всем творениям без исключения",
  },
  {
    id: 2,
    arabic: "الرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "Милосердный",
    description: "Тот, Кто особенно милосерден к верующим",
  },
  {
    id: 3,
    arabic: "الْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "Царь",
    description: "Абсолютный владыка всего сущего",
  },
  {
    id: 4,
    arabic: "الْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "Святой",
    description: "Свободный от всех недостатков и пороков",
  },
  {
    id: 5,
    arabic: "السَّلاَمُ",
    transliteration: "As-Salaam",
    meaning: "Мир",
    description: "Источник безопасности и мира",
  },
  {
    id: 6,
    arabic: "الْمُؤْمِنُ",
    transliteration: "Al-Mu'min",
    meaning: "Верный",
    description: "Дарующий безопасность и защиту",
  },
  {
    id: 7,
    arabic: "الْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "Хранитель",
    description: "Наблюдающий и охраняющий все",
  },
  {
    id: 8,
    arabic: "الْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "Могущественный",
    description: "Непобедимый и почитаемый",
  },
];

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Name[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteNames");
    if (stored) {
      const ids: number[] = JSON.parse(stored);
      const favNames = allNames.filter((n) => ids.includes(n.id));
      setFavorites(favNames);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🌟 Избранные имена Аллаха</h1>
      <Link href={"/namaz"}>Назад</Link>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Нет избранных имён 😔</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((name) => (
            <div key={name.id} className="p-6 bg-white dark:bg-gray-800 rounded-2xl border dark:border-gray-700 shadow">
              <h2 className="text-2xl font-bold mb-2">{name.arabic}</h2>
              <p className="font-semibold">{name.transliteration}</p>
              <p className="text-emerald-600 dark:text-emerald-400">{name.meaning}</p>
              <p className="text-sm mt-2">{name.description}</p>
              <div className="mt-4 text-red-500">
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
