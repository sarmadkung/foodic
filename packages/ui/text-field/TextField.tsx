import { FC } from "react";
import { View, TextInput, TextInputProps } from "react-native";

export const TextFiled: FC<TextFieldType> = ({ style, ...props }) => {
  return <TextInput style={[style]} {...props} />;
};

type TextFieldType = TextInputProps & {
  children?: JSX.Element;
};
