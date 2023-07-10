import React from "react";
import { View } from "react-native";
import { Text } from "ui";
import { Button } from "ui";
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
            width: 200,
          },
        ]}
      >
        Welcome here at expo router
      </Text>
      <Button variant="primary">
        <Text variant="title"
        colorVariant="body">ME</Text>
      </Button>
    </View>
  );
}
