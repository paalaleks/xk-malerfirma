"use client";

import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  isVideoOpen: boolean;
  setIsVideoOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isVideoOpen,
        setIsVideoOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
