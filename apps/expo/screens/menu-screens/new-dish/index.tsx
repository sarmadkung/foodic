import React, { useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import CustomDropdown from "../../../components/base/singleSelect";
import { Button, Container, Image, Label, TextField } from "ui";
import { usePost } from "../../../components/hooks/usePost";
import { router } from "expo-router";

const options = [
  { label: 'Appetizer', value: 'Appetizer' },
  { label: 'Main Course', value: 'MainCourse' },
  { label: 'Dessert', value: 'Dessert' },
  { label: 'Side', value: 'Side' },
];
export const CreateDish = () => {
  const [name, setName] = useState<string>("");
  const [main_ingredients, setMain_ingredients] = useState<string>("");
  const [cooking_time, setCookingTime] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [nutritional_info, setNutritionalInfo] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [cooking_method, setCookingMethod] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState('');
  const placeholder = 'Select an option';

  const handleSelect = (value:any) => {
    setCategory(value);
  };

  const { response, postRequest } = usePost("http://localhost:3005/dishes/create");

  const OnCreateDishClick = useCallback(async () => {
    await postRequest({ name, main_ingredients, cooking_method,cooking_time,price:Number(price),description,nutritional_info, category });
    if (response) {
      localStorage.setItem("token", response?.data?.token);
      router.push("/categories");
    }
  }, [category, cooking_method, cooking_time, description, main_ingredients, name, nutritional_info, postRequest, price, response]);

  return (
    <Container
      style={{
        backgroundColor: "#000000",
        flex: 1,
        alignItems: "center",
        padding: 20,
        margin: 10,
      }}
    >
      <View>
        <Image alt="img" source={require("../../../assets/dish.jpg")} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Dish name</Label>
        <TextField
          onChange={(e) => setName(e.target.value)}
          variant="solid"
          placeholder="Enter dish name"
        ></TextField>
      </View>

      <View style={{ marginTop: 20 }}>
        <View>
          {" "}
          <Label style={{ marginBottom: 8 }}>Dish type</Label>
        </View>
        <CustomDropdown
        options={options}
        selectedValue={category}
        onSelect={handleSelect}
        placeholder={placeholder} // Pass the placeholder prop
      />
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Ingredient</Label>
        <TextField
          onChange={(e) => setMain_ingredients(e.target.value)}
          variant="solid"
          placeholder="Enter dish ingredients"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Price</Label>
        <TextField
          
          onChange={(e) => setPrice(e.target.value)}
          variant="solid"
          placeholder="Enter dish price"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Cooking time</Label>
        <TextField
          onChange={(e) => setCookingTime(e.target.value)}
          variant="solid"
          placeholder="Enter cooking time"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Cooking method</Label>
        <TextField
          onChange={(e) => setCookingMethod(e.target.value)}
          variant="solid"
          placeholder="Enter cooking method"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Nutritional info</Label>
        <TextField
          onChange={(e) => setNutritionalInfo(e.target.value)}
          variant="solid"
          placeholder="Enter nutritional info"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Label style={{ marginBottom: 8 }}>Description</Label>
        <TextField
          multiline={true}
          numberOfLines={5}
          onChange={(e) => setDescription(e.target.value)}
          variant="solid"
          placeholder="Enter dish description"
        ></TextField>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          variant="primary"
          style={{ width: 250, alignItems: "center" }}
          onPress={() => OnCreateDishClick()}
        >
          Create Dish
        </Button>
      </View>
    </Container>
  );
};
