import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

const data = [
  { label: "Customer", value: "customer" },
  { label: "Admin", value: "admin" },
  { label: "Waiter", value: "waiter" },
  { label: "Cheef", value: "cheef" },
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
        placeholder="Select role"
        searchPlaceholder="Search..."
        value={selected}
        onChange={handleDropdownChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color="black"
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
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: "transparent",
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
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
