import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";
import supabase from "../../../config/initSupabase";
import { ScrollView, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Picker } from "react-native";

export const Dishes = ({ category }: any) => {
  const [error, setError] = useState<any>(null);
  const [dishes, setDishes] = useState<any>(null);
  const [quantity, setQuantity] = useState<any>(0);
  const [modification, setModification] = useState<any>();
  const [selectedModification, setSelectedModification] = useState<any>();

  const router = useRouter();

  const getDishes = async () => {
    const { data, error } = await supabase
      .from("menus")
      .select()
      .eq("category", category);
    if (error) {
      console.log(error);
    }
    if (data) {
      setDishes(data);
    }
  };
  useEffect(() => { 
    const getDishes = async () => {
      const { data, error } = await supabase
        .from("menus")
        .select()
        .eq("category", category);
      if (error) {
        console.log(error);
      }
      if (data) {
        setDishes(data);
      }
    };
    getDishes()
  },[])

  useEffect(() => {
    const getModification = async () => {
      const { data, error } = await supabase.from("modification").select();
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data)
        setModification(data);
      }
    };
    getModification()
  }, []);

  const handleEditDish = (dishId: number) => {
    router.push(`/edit-dish/${dishId}`);
  };

  const handleOrder = async (dishId: number) => {
    // e.preventDefault();
    const { data, error } = await supabase.from("order_items").insert([
      {
        order_id: 1,
        menu_item: dishId,
        quantity,
        modification: selectedModification,
      },
    ]);
    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

  return (
    <View style={styles.container}>
      {dishes?.map((dish: any) => (
        <View key={dish?.id} style={styles.main}>
          <Text> {dish?.dish_name}</Text>
          <Text>PKR: {dish?.price}</Text>
          <Button onPress={() => handleOrder(dish?.id)}>Add to order</Button>
          <View style={styles.container}>
            <Picker
              selectedValue={quantity}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue: any) => setQuantity(itemValue)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
            </Picker>
            <Picker
              selectedValue={selectedModification}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue: any) =>
                setSelectedModification(itemValue)
              }
            >
              {modification?.map((modifier: any) => (
                <Picker.Item
                  label={modifier?.modifier_name}
                  value={modifier?.quantity}
                />
              ))}
            </Picker>
          </View>

          <Button>Detail</Button>
          <Button
            onPress={() => handleEditDish(dish?.id)}
            radius={"sm"}
            type="solid"
          >
            Edit order
            <Icon name="edit" color="white" />
          </Button>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
