import { FC } from "react";
import { Text as TextPlain, TextProps } from "react-native";

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

const colorVariants: Record<TextVariants, any> = {
  caption: {
    color: "gray",
  },
  body: {
    color: "black",
  },
  title: {
    color: "blue",
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
  variant: TextVariants;
  colorVariant: TextVariants;
};
