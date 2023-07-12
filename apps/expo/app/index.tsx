import React from "react";
import { View } from "react-native";
import { Box, Image, Row, Text, TextFiled } from "ui";
import { Button } from "ui";


export default function Page() {
  const handlePress = () => { alert("im presed")}
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
        <Button colorVariant="primary" variant="outline">
          <Text variant="title" colorVariant="body">
            ME
          </Text>
        </Button>
      </Row>
      <TextFiled
        variant="outlined"
        style={{ padding: 10, color: "red" }}
        placeholderTextColor="pink"
        placeholder="Enter your name"
      />
      <Box
        imageSource={require("../../../apps/expo/assets/dish.jpg")}
        title="Box Title"
        description="Box Description"
        onPress={handlePress}
      />
    </View>
  );
}
