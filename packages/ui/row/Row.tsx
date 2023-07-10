import { FC } from "react";
import { View, ViewProps } from "react-native";

export const Row: FC<RowType> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {children}
    </View>
  );
};

type RowType = ViewProps & {
  children?: JSX.Element;
};
