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
};

const colorVariants: Record<TextVariants, TextStyle> = {
  caption: {
    color: lightTheme.color.caption,
  },
  body: {
    color: lightTheme.color.body,
  },
  title: {
    color: lightTheme.color.title,

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

type TextVariants = "body" | "title" | "caption";
export type TextType = TextProps & {
  children: any;
  variant?: TextVariants;
  colorVariant?: TextVariants;
};
