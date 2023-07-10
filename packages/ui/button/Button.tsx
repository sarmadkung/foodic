import { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
  View,
} from "react-native";

const variants: Record<ButtonVariants, any> = {
  primary: {
    fontSize: 12,
  },
  secondary: {
    fontSize: 14,
  },
  outline: {
    fontSize: 20,
  },
  link: {
    fontSize: 20,
  },
  solid: {
    fontSize: 20,
  },
};

const colorVariants: Record<ButtonVariants, any> = {
  primary: {
    color: "gray",
  },
  secondary: {
    color: "black",
  },
  outline: {
    color: "blue",
  },
  link: {
    fontSize: 20,
  },
  solid: {
    fontSize: 20,
  },
};

export const Button: FC<ButtonType> = ({
  variant = "primary",
  colorVariant = "primary",
  style,
  children,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[[variants[variant]], [colorVariants[colorVariant], style]]}
      {...props}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
};

type ButtonVariants = "primary" | "secondary" | "outline" | "link" | "solid";
export type ButtonType = TouchableOpacityProps & {
  children?: React.JSX.Element;
  variant: ButtonVariants;
  colorVariant: ButtonVariants;
  // onPress: ((event: GestureResponderEvent) => void) | undefined;
};
