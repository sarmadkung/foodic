import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface FoodItem {
  name: string;
  description: string;
  price: number;
}

interface TablesProps {
  tableNumber: number;
  foodItems: FoodItem[];
    time: string;
    totalPrice: number;
}

export const Tables: React.FC<TablesProps> = ({ tableNumber, foodItems, time, totalPrice }) => {

  const handlePress = () => {
   alert("pressed")
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container]}>
        <Text style={styles.tableNumber}>Table #{tableNumber}</Text>

          <>
            <View style={styles.foodItemsContainer}>
              {foodItems.map((item, index) => (
                <View key={index} style={styles.foodItem}>
                  <Text style={styles.foodItemName}>{item.name}</Text>
                  <Text style={styles.foodItemDescription}>{item.description}</Text>
                  <Text style={styles.foodItemPrice}>Price: ${item.price}</Text>
                </View>
              ))}
            </View>

                  <View style={styles.timeContainer}>
                  <Text style={styles.time}>Total price: {totalPrice}</Text>
              <Text style={styles.time}>Time: {time}</Text>
            </View>
          </>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
  },
  openContainer: {
    maxHeight: 300,
  },
  tableNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  foodItemsContainer: {
    marginBottom: 16,
  },
  foodItem: {
    marginBottom: 12,
  },
  foodItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  foodItemDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  foodItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

