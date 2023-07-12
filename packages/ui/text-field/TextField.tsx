import { FC } from "react";
import { TextInput, TextInputProps } from "react-native";

const variants: Record<TextInputVariants, any> = {
  outlined: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  filled: {
    fontSize: 14,
  },
};

export const TextFiled: FC<TextFieldType> = ({ variant="oultined", style, ...props }) => {
  return <TextInput style={[[variants[variant],style]]} {...props} />;
};

type TextFieldType = TextInputProps & {
  children?: JSX.Element;
  variant: TextInputVariants;
};

type TextInputVariants = "outlined" | "filled";
