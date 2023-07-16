// ThemeContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Theme, ThemeMode, darkTheme, themes } from "ui/theme";

export interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
}

enum StatusBarStyle {
  light = "dark-content",
  dark = "light-content",
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
interface ThemeProviderProps {
  children: ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: any) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const systemMode = useColorScheme();

  const { theme, mode } = useMemo(() => {
    const currentMode: ThemeMode = themeMode ?? (systemMode || "light");
    StatusBar.setBarStyle(StatusBarStyle[currentMode], true);
    return { theme: themes[currentMode], mode: currentMode };
  }, [systemMode, themeMode]);

  const toggleTheme = useCallback(() => {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextType => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeContext;
};

export { ThemeProvider, useTheme };
