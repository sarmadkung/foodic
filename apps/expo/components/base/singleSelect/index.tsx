import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CustomDropdown = ({ options, selectedValue, onSelect,placeholder }: any) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = (value:any) => {
    setIsDropdownOpen(false);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.selectedValue}>
          {selectedValue || placeholder} {/* Show the selected value or placeholder */}
        </Text>
        <AntDesign name={isDropdownOpen ? 'caretup' : 'caretdown'} size={18} color="black" />
      </TouchableOpacity>

      {isDropdownOpen && (
        <View style={styles.dropdownOptions}>
          {options.map((option:any) => (
            <TouchableOpacity
              key={option.value}
              style={styles.option}
              onPress={() => handleSelect(option.value)}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    height: 35,
    width:250
  },
  selectedValue: {
    flex: 1,
    marginRight: 10,
  },
  dropdownOptions: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 5,
    zIndex: 1,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});


export default CustomDropdown;
