import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ImageSourcePropType,
  View,
  ImageBackground,
} from "react-native";
import { MotiView } from "moti";
import { Header } from "../../../components/base/header";
import { TextField, Text, Container, SlickSlider } from "ui";
import { router } from "expo-router";

interface Category {
  _id: string;
  count: number;
}

interface PopularItem {
  id: number;
  name: string;
  category: string;
  image: ImageSourcePropType;
}

interface CategoryScreenProps {
  categories: Category[];
}

export const Category: React.FC<CategoryScreenProps> = ({ categories }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredCategories, setFilteredCategories] =
    useState<Category[]>(categories);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = categories.filter((category) =>
      category.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  const handleCategoryPress = (category: Category) => {
    console.log(`Category Pressed: ${category}`);
    router.push(`/dishes/${category}`);
  };

  const handlePopularItemPress = (item: PopularItem) => {
    Alert.alert(`Popular Item Pressed: ${item.name}`);
  };
  const handleSlidePress = () => {
    alert("slide");
  };

  const slides = [
    {
      text: "Item 1",
      image: require("../../../assets/dish.jpg"),
      onPress: () => handleSlidePress(), // Provide an onPress function
    },
    {
      text: "Item 2",
      image: require("../../../assets/dish.jpg"),
      onPress: () => handleSlidePress(), // Provide an onPress function
    },
    {
      text: "Item 3",
      image: require("../../../assets/dish.jpg"),
      onPress: () => handleSlidePress(), // Provide an onPress function
    },
    {
      text: "Item 4",
      image: require("../../../assets/dish.jpg"),
      onPress: () => handleSlidePress(), // Provide an onPress function
    },
    {
      text: "Item 5",
      image: require("../../../assets/dish.jpg"),
      onPress: () => handleSlidePress(), // Provide an onPress function
    },
    // Add more slides as needed
  ];

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
      <Header />
      <View>
        <Text style={styles.categoriesHeader}>Popular Items</Text>
        <View style={styles.slideContainer}>
          /
          <SlickSlider slides={slides} />
        </View>
        <Text style={styles.categoriesHeader}>Categories</Text>
        <TextField
          style={{ width: "100%", marginBottom: 8 }}
          placeholder="Search Categories..."
          value={searchText}
          variant="solid"
          onChangeText={handleSearch}
        />
        <FlatList
          data={categories}
          keyExtractor={(data) => data?._id}
          renderItem={({ item }: any) => (
            <View>
              <TouchableOpacity onPress={() => handleCategoryPress(item?._id)}>
                <ImageBackground
                  source={require("../../../assets/dish.jpg")}
                  style={styles.categoryItem}
                  imageStyle={styles.imageBackground}
                >
                  <View style={styles.overlay} />
                  <MotiView
                    style={styles.categoryItemImageContainer}
                    from={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "timing", duration: 500 }}
                  >
                    <Text style={styles.categoryText}>{item?._id}</Text>
                    <Text style={{ marginTop: 3 }} variant="body">
                      Food items: {item?.count}
                    </Text>
                  </MotiView>
                </ImageBackground>
              </TouchableOpacity>
            </View>
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
  imageBackground: {
    width: "100%",
    height: "100%",
  },
  categoryText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  },
  categoriesHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 15,
  },
  categoryItem: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    height: 130,
    overflow: "hidden",
  },
  categoryItemImageContainer: {
    flex: 1,
    justifyContent: "center", // Vertically center the text
    alignItems: "center",
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
  slideContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
