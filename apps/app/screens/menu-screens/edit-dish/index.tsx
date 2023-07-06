import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import supabase from "../../../config/initSupabase";
import { useRouter } from "expo-router";
import MultiSelectComponent from "../../../components/base/dropdown";

export const EditDish = ({ dishId }: any) => {
  const [dishName, setDishName] = useState<string>("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState<any>(0);
  const [about, setAbout] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState<any>(0);
  const [category, setCategory] = useState<string>("");
  
  if (dishId) var idDish: number = parseInt(dishId);

  const getDish = useCallback(async () => {
    const { data, error } = await supabase
      .from("menus")
      .select()
      .eq("id", idDish)
      .single();
    if (error) {
      console.log(error);
    }
    if (data) {
      setDishName(data?.dish_name);
      setCategory(data?.category);
      setIngredients(data?.ingredient);
      setAbout(data?.about);
      setDetails(data?.detail);
      setPrice(data?.price);
      setTime(data?.time);
    }
  }, []);

  useEffect(() => {
    getDish();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("menus")
      .update({
        dish_name: dishName,
        make_time: time,
        ingredient: ingredients,
        about,
        details,
        price,
        category,
      })
      .eq("id", idDish);
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
        <View>
          <Text>Edit dish</Text>
          <Input
            onChange={(e) => setDishName(e.target.value)}
            placeholderTextColor="#000"
            placeholder={dishName ? dishName : "Enter dish name"}
          />
          <Input
            onChange={(e) => setIngredients(e.target.value)}
            placeholderTextColor="#000"
            placeholder={ingredients ? ingredients : "Enter ingredients"}
          />

          <Input
            onChange={(e) => setTime(e.target.value)}
            placeholderTextColor="#000"
            placeholder={time ? time : "Enter time"}
          />
          <Input
            onChange={(e) => setAbout(e.target.value)}
            placeholderTextColor="#000"
            placeholder={about ? about : "Enter about"}
          />
          <Input
            onChange={(e) => setDetails(e.target.value)}
            placeholderTextColor="#000"
            placeholder={details ? details : "Enter detail"}
          />
          <Input
            onChange={(e) => setPrice(e.target.value)}
            placeholderTextColor="#000"
            placeholder={price ? price : "Enter price"}
          />
          <Input
            onChange={(e) => setCategory(e.target.value)}
            placeholderTextColor="#000"
            placeholder={category ? category : "Enter category"}
          />
          <Button onPress={handleSubmit} title="Edit dish" type="outline" />
        </View>
      </View>
    </View>
  );
};
