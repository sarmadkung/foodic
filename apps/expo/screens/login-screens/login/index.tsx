import { MotiView } from "moti";
import { router } from "expo-router";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";
import { useCallback, useState } from "react";
import { usePost } from "../../../components/hooks/usePost";

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");

  const handleEmailChange = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const { response, postRequest } = usePost("http://localhost:3005/login");

  const OnLoginClick = useCallback(async () => {
    await postRequest({ email, password });
    if (response) {
      localStorage.setItem("token", response?.data?.token);
      router.push("/categories");
    }
  }, [email, password, postRequest, response]);

  const handlePress = () => {
    if (router) router.replace("/signup");
  };
  return (
    <MotiView
      from={{ opacity: 0, translateY: -15 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        type: "spring",
      }}
    >
      <Container
        style={{
          backgroundColor: "#000000",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          margin: 10,
        }}
      >
        <View>
          <View style={{ borderRadius: 50, overflow: "hidden" }}>
            <Image alt="image" source={require("../../../assets/dish.jpg")} />
          </View>
          <Spacer variant="small" />

          <Text colorVariant="title" variant="logo">
            Leaf & loof
          </Text>
        </View>
        <Spacer variant="medium" />
        <View>
          <Label style={{ marginBottom: 5 }}>Email</Label>
          <TextField
            onChange={handleEmailChange}
            variant="solid"
            placeholder="Enter email"
          ></TextField>
        </View>
        <Spacer variant="medium" />

        <View>
          <Label style={{ marginBottom: 5 }}>Password</Label>
          <TextField
            onChange={handlePasswordChange}
            variant="solid"
            placeholder="Enter password"
          ></TextField>
          <Button
            colorVariant="link"
            variant="link"
            style={{ width: 185, alignItems: "center" }}
          >
            <Text colorVariant="title" variant="body">
              Forget Password?
            </Text>
          </Button>
        </View>
        <Spacer variant="large" />
        <View>
          <Button
            variant="primary"
            style={{ width: 250, alignItems: "center" }}
            onPress={() => OnLoginClick()}
          >
            Login
          </Button>
        </View>
        <View>
          <Button
            onPress={() => handlePress()}
            colorVariant="link"
            variant="link"
            style={{ width: 250, alignItems: "center" }}
          >
            <Text colorVariant="title" variant="body">
              Create an account signup
            </Text>
          </Button>
        </View>
      </Container>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#9c1aff",
  },
});
