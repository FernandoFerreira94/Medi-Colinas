"use client";

import { ReactNode, useState } from "react";
import { AppContext } from "./AppContext";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ showSideBar, setShowSideBar,  }}>
      {children}
    </AppContext.Provider>
  );
}
