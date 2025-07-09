'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { darkTheme, lightTheme } from './theme';
import { ThemeModeContext } from './ThemeContext';

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') setMode(stored);
  }, []);
  useEffect(() => {
    window.localStorage.setItem('theme', mode);
  }, [mode]);

  const theme = mode === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
