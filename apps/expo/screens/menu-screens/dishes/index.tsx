import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Container, RowImageText } from "ui";

export const Dishes = ({ category }: any) => {
  const [error, setError] = useState<any>(null);
  const [dishes, setDishes] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(0);
  const [modification, setModification] = useState<any>();
  const [selectedModification, setSelectedModification] = useState<any>();



  return (
    <Container>
      <View>
        <RowImageText
          imageSource={require("../../../assets/dish.jpg")}
          title="Example Title"
          description="Example Description"
          variant="primary"
          price="$200"

        />

        <RowImageText
          imageSource={require("../../../assets/dish.jpg")}
          title="Example Title"
          description="Example Description"
          variant="secondary"
          price="$100"
        />
      </View>
    </Container>
  );
};
