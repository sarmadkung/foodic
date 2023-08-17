import { Category } from "../../screens/menu-screens/category";
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useGet } from "../../components/hooks/useGet";
export default function Page() {
  const { data, error } = useGet("http://localhost:3005/dishes/category");

  // const popularItems = [
  //   { id: 1, name: 'Item 1', category: 'Main Course', image: require("../../assets/dish.jpg") },
  //   { id: 2, name: 'Item 2', category: 'Appetizers', image: require("../../assets/dish.jpg") },
  //   { id: 3, name: 'Item 3', category: 'Appetizers', image: require("../../assets/dish.jpg") },
  //   { id: 4, name: 'Item 4', category: 'Appetizers', image: require("../../assets/dish.jpg") },

  //   // Add more popular items as needed
  // ];
  return (
    <View style={styles.container}>
      <Category categories={data} />
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
