'use client';
import { createContext, useContext } from 'react';

export const ThemeModeContext = createContext<{ mode: 'light' | 'dark'; setMode: (m: 'light' | 'dark') => void }>({
  mode: 'dark',
  setMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);
