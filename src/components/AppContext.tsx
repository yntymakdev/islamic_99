// src/context/AppContext.tsx
"use client";
import { createContext } from "react";

interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

// Обязательно передаём тип в createContext
export const AppContext = createContext<AppContextType | undefined>(undefined);
