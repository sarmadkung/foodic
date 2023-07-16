// YourScreenComponent.tsx

import React from "react";
import { View, StyleSheet } from "react-native";
import { PaymentComponent } from "../../components/compound/payment"; // Update the path to the actual location of the component

export const BillScreen: React.FC = () => {
  const orderItems = [
    { name: "Pizza", quantity: 2, price: 10 },
    { name: "Burger", quantity: 1, price: 8 },
    // Add more order items as needed
  ];

  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const taxes = subtotal * 0.1; // Assuming 10% tax rate
  const total = subtotal + taxes;

  const handlePaymentPress = () => {
    // Add your logic for handling the payment here
    // For example, you can navigate to a payment gateway or trigger a payment process.
    console.log("Payment initiated!");
  };

  return (
    <View style={styles.container}>
      <PaymentComponent
        orderItems={orderItems}
        subtotal={subtotal}
        taxes={taxes}
        total={total}
        onPaymentPress={handlePaymentPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});