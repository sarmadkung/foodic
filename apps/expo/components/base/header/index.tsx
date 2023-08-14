import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from '@expo/vector-icons/Ionicons';

export const Header = ({ showBackIcon = true }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOpenNavBar = () => {
    // Logic to open navigation bar
  };

  return (
    <View >
      <View style={styles.headerContent}>
        {showBackIcon && (
          <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
            <Icon name="rocket" size={30} color="#900" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleOpenNavBar} style={styles.iconButton}>
          <Icon name="menu-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 60,
    width: "100%",
  },
  iconButton: {
    padding: 10,
  },
});
