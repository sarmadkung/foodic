import { MotiView } from "moti";
import { useReducer } from "react";
import { StyleSheet, Linking, View } from "react-native";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";
import { Link } from "@react-navigation/native";

export const LoginScreen = ({ navigation }: any) => {

  const handlePress = () => {
    navigation.navigate("SignUp")
  }
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
          <TextField variant="solid"></TextField>
        </View>
        <Spacer variant="medium" />

        <View>
          <Label style={{ marginBottom: 5 }}>Password</Label>
          <TextField variant="solid"></TextField>
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
          <Button style={{ width: 150, alignItems: "center" }}>Login</Button>
        </View>
        <View>
          <Button
            onPress={() => handlePress}
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
