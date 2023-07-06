import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import supabase from "../../../config/initSupabase";
import { Button, Icon, Text } from "@rneui/themed";
import { useRouter } from "expo-router";
import { OrderItemTable } from "../../../components/base/table/order-item";

export default function OrderDetail(orderId: any) {
  const [orderItems, setOrderItems] = useState<any>();
  const router = useRouter();
  const handleEditUser = () => {
    router.push(`/edit-profile/${orderId}`);
  };
  useEffect(() => {
    const OrderId: number = parseInt(orderId?.order);
    const getOrder = async () => {
      const { data, error } = await supabase
        .from("order_items")
        .select()
        .eq("id", OrderId);
      if (error) {
        console.log(error);
      }
      if (data) {
        setOrderItems(data);
        console.log(data);
      }
    };
    getOrder();
  }, []);
  return (
    <View style={styles.container}>
          <View>
              <Text>Order detail</Text>
      {orderItems && <OrderItemTable orders={orderItems} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    marginBottom: 10,
    fontSize: 23,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 23,
    color: "#38434D",
  },
});
