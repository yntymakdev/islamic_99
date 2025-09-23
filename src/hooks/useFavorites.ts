import React, { useState, useEffect } from "react";

type Name = {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  description: string;
};

function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Загрузка избранных из localStorage
  const loadFavorites = () => {
    const stored = localStorage.getItem("favoriteNames");
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
  };

  useEffect(() => {
    loadFavorites();

    // Обновление избранных при возвращении на вкладку
    window.addEventListener("focus", loadFavorites);

    return () => {
      window.removeEventListener("focus", loadFavorites);
    };
  }, []);

  // Переключатель избранного с сохранением в localStorage
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

  return { favorites, toggleFavorite };
}

export default useFavorites;
