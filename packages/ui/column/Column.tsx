import { FC } from "react";
import { View, ViewProps } from "react-native";

export const Column: FC<ColumnType> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "column" }, style]} {...props}>
      {children}
    </View>
  );
};

type ColumnType = ViewProps & {
  children?: JSX.Element;
};
