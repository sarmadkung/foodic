import { useReducer } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { MotiView } from "moti";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";
import { usePost } from "../../components/hooks/usePost";

interface ApiResponse {
  // Define the structure of the API response here
}

interface ApiError {
  // Define the structure of the error object here
}

export const SignUp = () => {
  const { data, error, isLoading, isValidating } = usePost<ApiResponse, ApiError>(
    'http://localhost:3005/singup',
    // { 'Authorization': 'Bearer YOUR_TOKEN' }
  );
  console.log(data);

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
        <TextField variant="solid" placeholder="Enter first name"></TextField>
      </View>
      <Spacer variant="medium" />

      <View>
        <Label style={{ marginBottom: 5 }}>Last name</Label>
        <TextField variant="solid" placeholder="Enter last name"></TextField>
      </View>
      <Spacer variant="medium" />
      <View>
        <Label style={{ marginBottom: 5 }}>Phone number</Label>
        <TextField variant="solid" placeholder="Enter phone number"></TextField>
      </View>
      <Spacer variant="medium" />
      <View>
        <Label style={{ marginBottom: 5 }}>Email</Label>
        <TextField variant="solid" placeholder="Enter email"></TextField>
      </View>
      <Spacer variant="medium" />

      <View>
        <Label style={{ marginBottom: 5 }}>Password</Label>
        <TextField variant="solid" placeholder="Enter password"></TextField>
      </View>
      <Spacer variant="large" />
      <View>
        <Button style={{width:175, alignItems:"center"}}>Create account</Button>
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
