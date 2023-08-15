import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "Appetizer", value: "Appetizer" },
  { label: "MainCourse", value: "MainCourse" },
  { label: "Dessert", value: "Dessert" },
  { label: "Side", value: "Side" },
];

const MultiSelectComponent = ({ handleDropdownSelect, userRole }: any) => {
  const [selected, setSelected] = useState<any>([]);

  const handleDropdownChange = useCallback(
    (e: any) => {
      setSelected(e);
      handleDropdownSelect(e);
    },
    [handleDropdownSelect]
  );

  useEffect(() => {
    if (userRole) {
      setSelected(userRole);
    }
  }, [userRole]);
  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        search
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select type"
        searchPlaceholder="Search..."
        value={selected}
        onChange={handleDropdownChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="white"
            name="Safety"
            size={20}
          />
        )}
        selectedStyle={styles.selectedStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 1 },
  dropdown: {
    height: 35,
    width:250,
    backgroundColor: "white",
    borderBottomColor: "orange",
    borderBottomWidth: 0.5,
    borderRadius: 8,
    padding:8
  },
  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 10,
    height: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    borderRadius: 12,
  },
});

export default MultiSelectComponent;
