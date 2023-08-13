import React, { FC } from "react";
import {
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  Linking,
} from "react-native";
import { lightTheme } from "../colors";
import { Text } from "../text";

type ButtonVariants =
  | "default"
  | "outlined"
  | "highlighted"
  | "link"
  | "primary"
  | "secondary";

export type ButtonType = TouchableOpacityProps & {
  variant?: ButtonVariants;
  style?: ViewStyle;
  textStyle?: TextStyle;
  linkUrl?: string;
  colorVariant?: ColorVariants;
};

const variants: Record<
  ButtonVariants,
  { buttonStyle: ViewStyle; textStyle: TextStyle }
> = {
  default: {
    buttonStyle: {
      backgroundColor: "#007AFF",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "white",
    },
  },
  outlined: {
    buttonStyle: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "#007AFF",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "#007AFF",
    },
  },
  highlighted: {
    buttonStyle: {
      backgroundColor: "#FF3B30",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "white",
    },
  },
  link: {
    buttonStyle: {
      backgroundColor: "transparent",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "#007AFF",
      textDecorationLine: "underline",
    },
  },
  primary: {
    buttonStyle: {
      backgroundColor: "#FFD700",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "black",
    },
  },
  secondary: {
    buttonStyle: {
      backgroundColor: "lightgray",
      padding: 10,
      borderRadius: 8,
    },
    textStyle: {
      fontSize: 16,
      color: "black",
    },
  },
};
type ColorVariants = "primary" | "secondary" | "link";

const colorVariants: Record<ColorVariants, ViewStyle> = {
  primary: {
    backgroundColor: lightTheme.color.base1,
  },
  secondary: {
    backgroundColor: lightTheme.color.base2,
  },
  link: {
    backgroundColor: "transparent",
  },
};

export const Button: FC<ButtonType> = ({
  variant = "highlighted",
  colorVariant = "secondary",
  style,
  children,
  onPress,
  ...props
}) => {
 
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[[variants[variant].buttonStyle], [colorVariants[colorVariant], style]]}
      {...props}
    >
      <Text colorVariant="body" variant="title">
        {children}
      </Text>
    </TouchableOpacity>
  );
};
