export const lightTheme: Theme = {
  colors: {
    transparent: "transparent",
    white: "#fff",
    base: "#009688",
    base1: "#3ba294",
    base2: "#59ada1",
    title: "#cdf2ee",
    body: "#daf5f2",
    caption: "#e0f7f4",
    success: "#A5EA5D",
    warning: "#FFEA43",
    primary: "#6D95FA",
    secondary: "#6D95FA",
    info: "#64C9FD",
    error: "#FF9359",
  },
};

export const darkTheme: Theme = {
  colors: {
    transparent: "transparent",
    white: "#fff",
    base: "#009688",
    base1: "#3ba294",
    base2: "#59ada1",
    title: "#cdf2ee",
    body: "#daf5f2",
    caption: "#e0f7f4",
    success: "#A5EA5D",
    warning: "#FFEA43",
    primary: "#6D95FA",
    secondary: "#6D95FA",
    info: "#64C9FD",
    error: "#FF9359",
  },
};

export const themes: Themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type ThemeMode = "dark" | "light";
export type Themes = Record<ThemeMode, Theme>;

export type Theme = {
  colors: Color;
};

export interface Color {
  transparent: string;
  white: string;

  base: string;
  base1: string;
  base2: string;
  title: string;
  body: string;
  caption: string;
  success: string;
  warning: string;
  primary: string;
  secondary: string;
  info: string;
  error: string;
}

export type ColorName = keyof Color;
