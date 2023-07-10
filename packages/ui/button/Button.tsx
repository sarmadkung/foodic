import { FC } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { lightTheme } from "../colors";
// @ts-ignore
const variants: Record<ButtonVariants, any> = {
  primary: {
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
  },
  secondary: {
    fontSize: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius: 4,
    elevation: 3,
  },
  outline: {
    fontSize: 20,
    background: "transparent",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderWidth: 2,
    borderColor: "#3ba294",
  },
};

const colorVariants: Record<ButtonVariants, ViewStyle> = {
  primary: {
    backgroundColor: lightTheme.color.base1,
  },
  secondary: {
    backgroundColor: lightTheme.color.base2,
  },
  outline: {
    backgroundColor: lightTheme.color.base3,
  },
};

export const Button: FC<ButtonType> = ({
  variant = "primary",
  colorVariant,
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
