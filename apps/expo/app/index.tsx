import React from "react";
import { View } from "react-native";
import { Text } from "ui";
export default function Page() {
  return (
    <View>
      <Text
        variant="title"
        colorVariant="body"
        numberOfLines={1}
        lineBreakMode="clip"
        style={[
          {
            width: 100,
          },
        ]}
      >
        Welcome here at expo router
      </Text>
    </View>
  );
}
