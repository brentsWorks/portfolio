import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';
import ThemeProviderWrapper from './ThemeProviderWrapper';
import { PortfolioModeProvider } from './PortfolioModeContext';
import GradientBackground from './GradientBackground';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "© 2025 Brent Brison. All rights reserved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProviderWrapper>
          <PortfolioModeProvider>
            <GradientBackground>
              {children}
            </GradientBackground>
          </PortfolioModeProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
