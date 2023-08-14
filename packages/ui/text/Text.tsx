import { FC } from "react";
import { Text as TextPlain, TextProps, TextStyle } from "react-native";
import { lightTheme } from "../colors";

const variants: Record<TextVariants, any> = {
  caption: {
    fontSize: 12,
  },
  body: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
  },
  logo: {
    fontSize: 24,
  },
};

const colorVariants: Record<TextVariants, TextStyle> = {
  caption: {
    color: lightTheme.color.base1,
  },
  body: {
    color: lightTheme.color.body,
  },
  title: {
    color: lightTheme.color.text,
  },
  logo: {
    color: lightTheme.color.text,
  },
};

export const Text: FC<TextType> = ({
  variant = "body",
  colorVariant = "body",
  style,
  children,
  ...props
}) => {
  return (
    <TextPlain
      style={[[variants[variant]], [colorVariants[colorVariant], style]]}
      {...props}
    >
      {children}
    </TextPlain>
  );
};

type TextVariants = "body" | "title" | "caption" | "logo";
export type TextType = TextProps & {
  children: any;
  variant?: TextVariants;
  colorVariant?: TextVariants;
};
