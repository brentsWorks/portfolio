'use client';
import { createContext, useContext, useState } from 'react';

export const PortfolioModeContext = createContext<{ mode: 'technical' | 'personal'; setMode: (m: 'technical' | 'personal') => void }>({
  mode: 'technical',
  setMode: () => {},
});

export const usePortfolioMode = () => useContext(PortfolioModeContext);

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'technical' | 'personal'>('technical');
  return (
    <PortfolioModeContext.Provider value={{ mode, setMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
}
