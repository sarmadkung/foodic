import React from "react";
import { View, ScrollView, StyleSheet, ImageSourcePropType } from "react-native";
import { OrderItem } from "../order-item"; // Update the path to the actual location of the component

export interface Order {
  id: number;
  imageSource: ImageSourcePropType;
  title: string;
  quantity: number;
  price: string;
}

export const OrdersScreen: React.FC = () => {
  const orders: Order[] = [
    {
      id: 1,
      imageSource: require("../../../assets/dish.jpg"),
      title: "Pasta Carbonara",
      quantity: 2,
      price: "$20",
    },
    {
      id: 2,
      imageSource: require("../../../assets/dish.jpg"),
      title: "Margherita Pizza",
      quantity: 1,
      price: "$15",
    },
    // Add more orders as needed
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {orders.map((order) => (
          <OrderItem
            key={order.id}
            imageSource={order.imageSource}
            title={order.title}
            quantity={order.quantity}
            price={order.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
