import { MotiView } from "moti";
import { useReducer } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";

export const PasswordChange = () => {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
    >
      <Container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          margin: 10,
        }}
      >
        <View>
          <View style={{ borderRadius: 50, overflow: "hidden" }}>
            <Image alt="image" source={require("../../assets/dish.jpg")} />
          </View>
          <Spacer variant="small" />

          <Text colorVariant="title" variant="title">
            Leaf & loof
          </Text>
        </View>
        <Spacer variant="medium" />
        <View>
          <Label style={{ marginBottom: 5 }}>Previous password</Label>
          <TextField variant="solid" placeholder="Enter previous password"></TextField>
        </View>
        <View>
          <Label style={{ marginBottom: 5 }}>New password</Label>
          <TextField variant="solid" placeholder="Enter new password"></TextField>
        </View>
        <Spacer variant="medium" />
      </Container>
    </MotiView>
  );
};

