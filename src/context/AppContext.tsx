"use client";

import { createContext } from "react";

interface AppContextType {
  showSideBar: boolean;
  setShowSideBar: (showSideBar: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
