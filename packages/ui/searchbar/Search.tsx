import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder: string;
  onSearch: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

