import React, { useCallback, useState } from "react";
import { View, TextInput } from "react-native";
import MultiSelectComponent from "../../../components/base/dropdown";
import { Button, Input } from "@rneui/themed";
import { Text } from "@rneui/themed";
import supabase from "../../../config/initSupabase";

export const CreateUser = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobRole, setJobRole] = useState([]);
  const [cellNumber, setCellNumber] = useState<any>();

  const handleDropdownSelect = (role: any) => {
    setJobRole(role);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase.from("users").insert([
      {
        first_name: firstName,
        last_name: lastName,
        email,
        job_role: jobRole,
        password,
        cell_number: cellNumber,
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
        <Text>Create new user</Text>
        <Input
          onChange={(e) => setFirstName(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter first name"
        />
        <Input
          onChange={(e) => setLastName(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter last name"
        />
        <MultiSelectComponent handleDropdownSelect={handleDropdownSelect} />
        <Input
          onChange={(e) => setCellNumber(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter mobile number"
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter email address"
        />

        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholderTextColor="#000"
          placeholder="Enter password"
        />
        <Button onPress={handleSubmit} title="Create user" type="outline" />
      </View>
    </View>
  );
};
