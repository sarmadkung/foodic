import { MotiView } from "moti";
import { router } from "expo-router";
import { StyleSheet, Linking, View, TouchableOpacity } from "react-native";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";
import { useGet } from "../../../components/hooks/useGet";
import { useCallback, useState } from "react";
import { usePost } from "../../../components/hooks/usePost";

interface ApiResponse {
  // Define the structure of the API response here
}

interface ApiError {
  // Define the structure of the error object here
}

export const LoginScreen = ({ navigation }: any) => {
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



  const { data, error, isLoading, isValidating, postRequest } = usePost<
    ApiResponse,
    ApiError
  >(
    "http://localhost:3005/login",
    { 'Authorization': 'Bearer YOUR_TOKEN' },
  );

  const OnLoginClick = useCallback(
    async () => {
      console.log("email");
      console.log(email);
      console.log(password);
      const response = await postRequest({ email: email, password:password });
    },
[email, password]  );
  // console.log(data);
  // console.log(error);
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

          <Text colorVariant="title" variant="title">
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
          <TouchableOpacity
            style={{ width: 150, alignItems: "center" }}
          onPress={() => OnLoginClick()}
          >
            
            
            Login 
          </TouchableOpacity>
         
        </View>
        <View>
          <Button
            colorVariant="link"
            variant="link"
            style={{ width: 185, alignItems: "center" }}
          >
            <Text colorVariant="title" variant="title">
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
