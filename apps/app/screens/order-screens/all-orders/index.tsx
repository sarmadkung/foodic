import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import supabase from "../../../config/initSupabase";
import { UserTable } from "../../../components/base/table/user-table";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { OrderTable } from "../../../components/base/table/order-table";

export const AllOrders = () => {
  const [error, setError] = useState<any>(null);
  const [orders, setOrders] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getOrders = async () => {
      const { data, error } = await supabase.from("order").select();

      if (error) {
        setError("No users found");
        console.log(error);
        setOrders(null);
      }
      if (data) {
        setOrders(data);
        setError(null);
      }
    };
    getOrders();
  }, []);

  return (
    <View>
      {error && <Text>{error}</Text>}
      {orders && <OrderTable orders={orders} />}
    </View>
  );
};
