import { FC, ReactNode } from "react";
import { View, ViewProps, StyleSheet } from "react-native";

export const Container: FC<ContainerType> = ({ children, ...props }) => {
  return <View {...props}>{children}</View>;
};

type ContainerType = ViewProps & {
  children: ReactNode;
};
