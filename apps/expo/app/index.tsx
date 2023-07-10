import React from "react";
import { View } from "react-native";
import { Row, Text, TextFiled } from "ui";
import { Button } from "ui";
export default function Page() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        flex: 1,
      }}
    >
      <Row>
        <Text variant="title" colorVariant="body">
          Welcome here at expo router
        </Text>
        <Button variant="outline">
          <Text variant="title" colorVariant="body">
            ME
          </Text>
        </Button>
      </Row>
      <TextFiled
        style={{ padding: 10, color: "red" }}
        placeholderTextColor="pink"
        placeholder="Enter your name"
      />
    </View>
  );
}
