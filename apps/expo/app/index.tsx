import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, Label, Row, Text, TextField, RowImageText } from "ui";
import { Button } from "ui";
import { TextInputIcon } from "ui";
import { ThemeProvider } from '../components/theme';

export default function Page() {

  const handlePress = () => {
    alert("im presed");
  };
  return (
    <ThemeProvider>
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
        <Button colorVariant="primary" variant="highlighted">
          <Text variant="title" colorVariant="body">
            ME
          </Text>
        </Button>
      </Row>
      <TextField
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
      <View>
        <Label variant="default">Default Label</Label>
        <Label variant="outlined">Outlined Label</Label>
        <Label variant="highlighted">Highlighted Label</Label>
      </View>
      <TextInputIcon
        variant="default"
        leftIcon="person"
        rightIcon="lock-closed"
        placeholder="Username"
      />
      <View>
        <RowImageText
          imageSource={require("../assets/dish.jpg")}
          title="Example Title"
          description="Example Description"
          variant="primary"
          price="$100"
        />

        <RowImageText
          imageSource={require("../assets/dish.jpg")}
          title="Example Title"
          description="Example Description"
          variant="secondary"
          price="$100"
        />
      </View>
      </View>
      </ThemeProvider>
  );
}
