import { useReducer } from "react";
import { StyleSheet, Pressable, View } from "react-native";
import { MotiView } from "moti";
import { Button, Container, Image, Label, TextField, Text, Spacer } from "ui";

function Shape() {
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
      transition={{
        type: "timing",
      }}
      style={styles.shape}
    />
  );
}

export const LoginScreen = () => {
  const [visible, toggle] = useReducer((s) => !s, true);

  return (
    <Container
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        margin: 10,
      }}
    >
      <View style={{ justifyContent: "center" }}>
        <Image alt="image" source={require("../../assets/dish.jpg")} />
        <Text colorVariant="title" variant="title">
          Leaf & loof
        </Text>
      </View>
      <Spacer variant="medium" />
      <View>
        <Label>Email</Label>
        <TextField variant="solid"></TextField>
      </View>
      <Spacer variant="medium" />

      <View>
        <Label>Password</Label>
        <TextField variant="solid"></TextField>
      </View>
      <Spacer variant="large" />

      <View>
        <Button>Login</Button>
      </View>
    </Container>
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
