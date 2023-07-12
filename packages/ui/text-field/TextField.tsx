import { FC } from "react";
import { TextInput, TextInputProps } from "react-native";

const variants: Record<TextInputVariants, any> = {
  default: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 8,
  },  outlined: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 8,
  },
  solid: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 8,
  },
};

export const TextFiled: FC<TextFieldType> = ({ variant="outlined", style, ...props }) => {
  return <TextInput style={[[variants[variant],style]]} {...props} />;
};

type TextFieldType = TextInputProps & {
  children?: JSX.Element;
  variant: TextInputVariants;
};

type TextInputVariants = "default" |"outlined" | "solid";
