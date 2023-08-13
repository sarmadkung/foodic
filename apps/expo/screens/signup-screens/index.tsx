import { StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";
import { usePost } from "../../components/hooks/usePost";
import { useCallback, useState } from "react";
import { router } from "expo-router";

export const SignUp = () => {
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<any>("");
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const handleFirstNameChange = (e: any) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: any) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handlePhoneNumberChange = (e: any) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const { response, postRequest } = usePost("http://localhost:3005/signup");

  const OnSignupClick = useCallback(async () => {
    await postRequest({
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      email,
      password,
    });
    if (response) {
      localStorage.setItem("token", response?.data?.token);
      router.push("/login");
    }
  }, [
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    postRequest,
    response?.data?.token,
  ]);

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
          <Label style={{ marginBottom: 5 }}>First name</Label>
          <TextField
            onChange={handleFirstNameChange}
            variant="solid"
            placeholder="Enter first name"
          ></TextField>
        </View>
        <Spacer variant="medium" />

        <View>
          <Label style={{ marginBottom: 5 }}>Last name</Label>
          <TextField
            onChange={handleLastNameChange}
            variant="solid"
            placeholder="Enter last name"
          ></TextField>
        </View>
        <Spacer variant="medium" />
        <View>
          <Label style={{ marginBottom: 5 }}>Phone number</Label>
          <TextField
            onChange={handlePhoneNumberChange}
            variant="solid"
            placeholder="Enter phone number"
          ></TextField>
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
        </View>
        <Spacer variant="large" />
        <View>
          <Button
            onPress={OnSignupClick}
            style={{ width: 175, alignItems: "center" }}
          >
            Create account
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
