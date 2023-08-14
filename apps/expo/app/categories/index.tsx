import { Category } from "../../screens/menu-screens/category";
import React from 'react';
import { View, StyleSheet } from 'react-native';
export default function Page() {
  const categories = [
    { id: 1, title: 'Appetizers', subtitle: 'Tasty appetizers', image: require("../../assets/dish.jpg") },
    { id: 2, title: 'Main Course', subtitle: 'Delicious main course dishes', image: require("../../assets/dish.jpg") },
    { id: 3, title: 'Desserts', subtitle: 'Sweet desserts', image: require("../../assets/dish.jpg") },
    // Add more categories as needed
  ];

  const popularItems = [
    { id: 1, name: 'Item 1', category: 'Main Course', image: require("../../assets/dish.jpg") },
    { id: 2, name: 'Item 2', category: 'Appetizers', image: require("../../assets/dish.jpg") },
    { id: 3, name: 'Item 3', category: 'Appetizers', image: require("../../assets/dish.jpg") },
    { id: 4, name: 'Item 4', category: 'Appetizers', image: require("../../assets/dish.jpg") },

    // Add more popular items as needed
  ];
  return (
    <View style={styles.container}>
      <Category categories={categories} popularItems={popularItems} />
      {/* Rest of your app */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
});
