// src/context/AppProvider.tsx
"use client";
import { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";

export default function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("home");

  return <AppContext.Provider value={{ currentPage, setCurrentPage }}>{children}</AppContext.Provider>;
}
// asasasssas
