import React, { useEffect, useState } from "react";
import { View, TextInput } from "react-native";
import Cards from "../../../components/base/card";
import { useRouter } from "expo-router";
import supabase from "../../../config/initSupabase";

export const Category = () => {
  const [error, setError] = useState<any>(null);
  const [dishes, setDishes] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>("");
  const router = useRouter();
  const getDishes = async () => {
    const { data, error } = await supabase.from("uniquecategory").select();
    if (error) {
      setError("No dishes found");
      console.log(error);
      setDishes(null);
    }
    if (data) {
      setDishes(data);
      setError(null);
    }
  };

  useEffect(() => {
    getDishes();
  }, [getDishes]);
  const handleCategorySelect = (category: any) => {
    router.push(`/dishes/${category}`);
  };

  return (
    <View>
      <Cards category={dishes} handleCategorySelect={handleCategorySelect} />
    </View>
  );
};
