/* eslint-disable react/jsx-no-undef */
import { FC } from "react";
import { ViewProps, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Text } from "../text";
import { Image } from "../image";

export const Box: FC<BoxType> = ({
  imageSource,
  title,
  description,
  onPress,
  children,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Image
        alt="image"
        source={imageSource}
        variant="large"
      />
      <Text variant="title" colorVariant="body">
        {title}
      </Text>
      <Text variant="body" colorVariant="body">
        {description}
      </Text>
    </TouchableOpacity>
  );
};

type BoxType = ViewProps & {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  children?: any;
  onPress?: () => void;
};
