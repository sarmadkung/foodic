import { FC } from "react";
import { View, ViewProps } from "react-native";

export const Box: FC<BoxType> = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: "row" }, style]} {...props}>
      {/* <Image alt="image">

      </Image>
      <Text variant="title"> */}
      {/* </Text> */}
      {children}
    </View>
  );
};

type BoxType = ViewProps & {
  children?: any;
};
