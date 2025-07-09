'use client';
import { useTheme } from '@mui/material/styles';

export default function GradientBackground({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const darkGradient = `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #23272f 60%, ${theme.palette.secondary.main} 100%)`;
  const lightGradient = `linear-gradient(135deg, ${theme.palette.primary.light} 0%, #f5f5f5 60%, ${theme.palette.secondary.light} 100%)`;
  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme.palette.mode === 'dark' ? darkGradient : lightGradient,
        transition: 'background 0.5s',
      }}
    >
      {children}
    </div>
  );
}
