import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Container, RowImageText } from "ui";
import { useGet } from "../../../components/hooks/useGet";
import { Text } from "ui";
import { router } from "expo-router";
export const Dishes = ({ category }: any) => {
  const [error, setError] = useState<any>(null);
  const [dishes, setDishes] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(0);
  const [modification, setModification] = useState<any>();
  const [selectedModification, setSelectedModification] = useState<any>();

  const { data } = useGet(`http://localhost:3005/dishes/${category}`);


  const handlePressDetail = (id: any) => {
    router.push(`/dish/${id}`)
  }
  const handleOrder = (id:any) => {
    router.push(`/order/${id}`)
    console.log(id)

  }

  return (
    <Container>
      {/* <Text variant="title"> { dishes[0]?.category}</Text> */}
      <View>
        {
          data?.map((dish: any) => (
            <RowImageText
              onpressDetail={() => handlePressDetail(dish?._id?.$oid)}
              handleOrder={() => handleOrder(dish?._id)}
              key={dish?._id}
            imageSource={require("../../../assets/dish.jpg")}
            title={dish?.name}
            description={dish?.main_ingredients}
            variant="primary"
            price= {dish?.price}
            cooking_time = {dish?.cooking_time}
          />
          ))
        }
      </View>
    </Container>
  );
};
