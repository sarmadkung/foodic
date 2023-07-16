import React from 'react';
import { View,  Text, StyleSheet,ImageSourcePropType } from 'react-native';
import { Image } from 'ui';
export interface OrderItemProps {
  imageSource: ImageSourcePropType;
  title: string;
  quantity: number;
  price: string;
}

export const OrderItem: React.FC<OrderItemProps> = ({ imageSource, title, quantity, price }) => {
  return (
    <View style={styles.container}>
      <Image alt="image" source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <Text style={styles.price}>Price: {price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quantity: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f50057',
  },
});

