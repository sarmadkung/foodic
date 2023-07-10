import { FC } from "react";
import { View, ViewProps } from "react-native";

export const Container: FC<ContainerType> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

type ContainerType = ViewProps & {
  children: JSX.Element;
};
