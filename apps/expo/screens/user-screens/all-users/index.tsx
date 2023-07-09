import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import supabase from "../../../config/initSupabase";
import { UserTable } from "../../../components/base/table/user-table";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

export const AllUsers = () => {
  const [error, setError] = useState<any>(null);
  const [users, setUsers] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await supabase.from("users").select();

      if (error) {
        setError("No users found");
        console.log(error);
        setUsers(null);
      }
      if (data) {
        setUsers(data);
        setError(null);
      }
    };
    getUsers();
  }, []);

  return (
    <View>
      <Button
        title="Create user"
        type="outline"
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: "black", marginHorizontal: 20 }}
        onPress={() => router.push("/create-user")}
      />
      {error && <Text>{error}</Text>}
      {users && <UserTable users={users} />}
    </View>
  );
};
