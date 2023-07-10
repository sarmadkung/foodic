import { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
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
};

const colorVariants: Record<ButtonVariants, ViewStyle> = {
  primary: {
    backgroundColor: "red",
  },
  secondary: {
    backgroundColor: "black",
  },
  outline: {
    backgroundColor: "blue",
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

type ButtonVariants = "primary" | "secondary" | "outline";
export type ButtonType = TouchableOpacityProps & {
  children?: React.JSX.Element;
  variant: ButtonVariants;
  colorVariant: ButtonVariants;
  // onPress: ((event: GestureResponderEvent) => void) | undefined;
};
