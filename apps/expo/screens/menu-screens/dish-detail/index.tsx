import React from "react";
import { StyleSheet} from "react-native";
import { MotiImage, MotiView } from "moti";
import { Container, Text, Image, Button } from "ui";

export const AboutDish: React.FC = () => {
  return (
    <Container style={styles.container}>
      <MotiImage
        source={require("../../../assets/dish.jpg")}
        style={styles.image}
        animate={{
          opacity: 1,
        }}
      />

      <MotiView
        style={styles.descriptionContainer}
        from={{
          translateY: 100,
        }}
        animate={{
          translateY: 0,
        }}
        transition={{
          type: "timing",
          duration: 1000,
        }}
      >
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut
          mauris eget quam luctus pharetra. Morbi eu ex at est posuere rhoncus.
          Proin a orci et nisi lacinia ullamcorper ac a ex. Vestibulum suscipit
          lacinia ex, sit amet ullamcorper dui.
        </Text>
      </MotiView>
      {/* <Video
          source={require('./path/to/your/video.mp4')}
          style={styles.video}
          resizeMode="contain"
          repeat
          controls
        />  */}

      <Button
        style={styles.buttonContainer}
        onPress={() => alert("Place Order")}
      >
        <Text style={styles.buttonText}>Place Order</Text>
      </Button>

      <Button
        style={styles.buttonContainer}
        onPress={() => alert("Go Back")}
      >
        <Text style={styles.buttonText}>Back</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  descriptionContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333333",
  },
  buttonContainer: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
