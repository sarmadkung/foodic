import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export interface PaymentComponentProps {
  orderItems: {
    name: string;
    quantity: number;
    price: number;
  }[];
  subtotal: number;
  taxes: number;
  total: number;
  onPaymentPress: () => void;
}

export const PaymentComponent: React.FC<PaymentComponentProps> = ({
  orderItems,
  subtotal,
  taxes,
  total,
  onPaymentPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderDetails}>
        {orderItems.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal: ${subtotal.toFixed(2)}</Text>
        <Text style={styles.taxesText}>Taxes: ${taxes.toFixed(2)}</Text>
      </View>
      <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
      <TouchableOpacity style={styles.paymentButton} onPress={onPaymentPress}>
        <Text style={styles.paymentButtonText}>Make Payment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  orderDetails: {
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    flex: 2,
  },
  itemQuantity: {
    flex: 1,
    textAlign: 'center',
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  subtotalText: {
    fontWeight: 'bold',
  },
  taxesText: {},
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
  },
  paymentButton: {
    backgroundColor: '#f50057',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
