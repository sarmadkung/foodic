import React, { useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import MultiSelectComponent from "../../../components/base/dropdown";
import { Button, Input } from "@rneui/themed";
import { Text } from "@rneui/themed";
import supabase from "../../../config/initSupabase";

export const CreateDish = () => {
  const [dishName, setDishName] = useState<string>("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState(0);
  const [about, setAbout] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase.from("menus").insert([
      {
        dish_name: dishName,
        make_time: time,
        ingredient:ingredients,
        about,
        details,
        price,
        category,
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
    <View>
      <View>
        <Text>Add new dish</Text>
        <Input
          onChange={(e) => setDishName(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter dish name"
        />
        <Input
          onChange={(e) => setIngredients(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter ingredients"
        />

        <Input
          onChange={(e) => setTime(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter time"
        />
        <Input
          onChange={(e) => setAbout(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter about"
        />
        <Input
          onChange={(e) => setDetails(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter detail"
        />
        <Input
          onChange={(e) => setPrice(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter price"
        />
        <Input
          onChange={(e) => setCategory(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter category"
        />
        <Button onPress={handleSubmit} title="Create dish" type="outline" />
      </View>
    </View>
  );
};
