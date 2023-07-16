// ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }:any) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // You can store the theme preference in AsyncStorage or any other storage mechanism here
    // For this example, we'll use local state and the 'toggleTheme' function to switch themes
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return themeContext;
};

export { ThemeProvider, useTheme };
