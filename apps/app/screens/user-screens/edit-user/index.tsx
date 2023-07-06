import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import supabase from "../../../config/initSupabase";
import { useRouter } from "expo-router";
import MultiSelectComponent from "../../../components/base/dropdown";

export const EditUser = ({ profileId }: any) => {
  const [error, setError] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jobRole, setJobRole] = useState([]);
  const [cellNumber, setCellNumber] = useState<any>();

  const getUser = async () => {
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("id", profileId)
      .single();
    if (error) {
      console.log(error);
    }
    if (data) {
      setUser(data);
      setFirstName(data?.first_name);
      setLastName(data?.last_name);
      //   setJobRole(user?.job_role);
      setCellNumber(data?.cell_number);
      console.log(data);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleDropdownSelect = (role: any) => {
    setJobRole(role);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("users")
      .update({
        first_name: firstName,
        last_name: lastName,
        email,
        job_role: jobRole,
        password,
        cell_number: cellNumber,
      })
      .eq("id", profileId);
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
        <Text>Edit profile</Text>
        <Input
          onChange={(e) => setFirstName(e.target.value || user?.first_name)}
          placeholderTextColor="#000"
          placeholder={user?.first_name ? user?.first_name : "Enter first name"}
        />
        <Input
          onChange={(e) => setLastName(e.target.value || user?.last_name)}
          placeholderTextColor="#000"
          placeholder={user?.last_name ? user?.last_name : "Enter last name"}
        />
        <MultiSelectComponent
          userRole={user?.job_role}
          handleDropdownSelect={handleDropdownSelect}
        />
        <Input
          onChange={(e) => setCellNumber(e.target.value)}
          placeholderTextColor="#000"
          placeholder={
            user?.cell_number ? user?.cell_number : "Enter mobile number"
          }
        />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholderTextColor="#000"
          placeholder={user?.email ? user?.email : "Enter email address"}
        />
        <Button onPress={handleSubmit} title="Edit user" type="outline" />
      </View>
    </View>
  );
};
