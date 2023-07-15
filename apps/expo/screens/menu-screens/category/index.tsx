import { Box, Container, Row, Spacer } from "ui";

export const Category = () => {
  const handlePress = () => {
    alert("im presed");
  };

  return (
    <Container style={{padding:10}}>
      <Row >
        <Box
          imageSource={require("../../../assets/dish.jpg")}
          title="Box Title"
          description="Box Description"
          onPress={handlePress}
          style={{margin:10}}
        />
        <Spacer variant="medium" />
        <Box
          imageSource={require("../../../assets/dish.jpg")}
          title="Box Title"
          description="Box Description"
          onPress={handlePress}
          style={{margin:10}}

        />
        <Box
          imageSource={require("../../../assets/dish.jpg")}
          title="Box Title"
          description="Box Description"
          onPress={handlePress}
          style={{margin:10}}
        />
      </Row>
    </Container>
  );
};
