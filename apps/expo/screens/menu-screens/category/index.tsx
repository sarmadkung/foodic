import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ImageSourcePropType,
  View,
} from "react-native";
import { MotiView } from "moti";
import { RectButton } from "react-native-gesture-handler";
import { TextField, Text, Container } from "ui";
import { Ionicons } from "@expo/vector-icons";
interface Category {
  id: number;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

interface PopularItem {
  id: number;
  name: string;
  category: string;
  image: ImageSourcePropType;
}

interface CategoryScreenProps {
  categories: Category[];
  popularItems: PopularItem[];
}

export const Category: React.FC<CategoryScreenProps> = ({
  categories,
  popularItems,
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(categories);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = categories.filter((category) =>
      category.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleCategoryPress = (category: Category) => {
    Alert.alert(`Category Pressed: ${category.title}`);
  };

  const handlePopularItemPress = (item: PopularItem) => {
    Alert.alert(`Popular Item Pressed: ${item.name}`);
  };

  return (
    <Container
      style={{
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        margin: 10,
      }}
    >
      <MotiView
        style={styles.searchInputContainer}
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <View style={styles.container}>
          <Image
            alt="img"
            source={require("../../../assets/dish.jpg")} // Replace with your image path
            style={styles.image}
          />
          <View style={styles.overlay}>
            <TouchableOpacity style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Leaf & Loof</Text>
            <TouchableOpacity style={styles.navButton}>
              <Ionicons name="menu-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <TextField
          placeholder="Search Categories..."
          value={searchText}
          variant="solid"
          onChangeText={handleSearch}
        />
      </MotiView>
      <View>
        {/* Popular Items */}
        <Text style={styles.categoriesHeader}>
          Popular Items <span style={styles.span}></span>
        </Text>
        <FlatList
          data={popularItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MotiView
              style={styles.popularItem}
              from={{ opacity: 0, translateX: -100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "timing", duration: 500 }}
            >
              <TouchableOpacity
                style={{ margin: 5 }}
                onPress={() => handlePopularItemPress(item)}
              >
                <Image
                  alt="img"
                  source={item.image}
                  style={styles.popularItemImage}
                />
                <Text variant="body">{item.name}</Text>
              </TouchableOpacity>
            </MotiView>
          )}
          initialNumToRender={3}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        {/* Category List */}
        <Text style={styles.categoriesHeader}>Categories</Text>
        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCategoryPress(item)}>
              <RectButton style={styles.categoryItem}>
                <MotiView
                  style={styles.categoryItemImageContainer}
                  from={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "timing", duration: 500 }}
                >
                  <Image
                    alt="img"
                    source={item.image}
                    style={styles.categoryItemImage}
                  />
                </MotiView>
                <Text
                  style={{ color: "#000000" }}
                  variant="body"
                  colorVariant="body"
                >
                  {item.title}
                </Text>
                <Text variant="caption" style={{ color: "#000000" }}>
                  {item.subtitle}
                </Text>
              </RectButton>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    marginBottom: 16,
  },

  popularItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  popularItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
  popularItemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categoriesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 15,
  },
  categoryItem: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
    marginBottom: 8,
  },
  categoryItemImageContainer: {
    borderRadius: 40,
    marginBottom: 8,
  },
  categoryItemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  container: {
    position: "relative",
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  backButton: {
    padding: 5,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  navButton: {
    padding: 5,
  },
  span: {
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
