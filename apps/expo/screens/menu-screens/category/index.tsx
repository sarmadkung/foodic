import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ImageSourcePropType,
} from "react-native";
import { usePost,  } from "../../../components/hooks/usePost";
import { useDelete } from "../../../components/hooks/useDelete";
import { usePut,PutRequestData } from "../../../components/hooks/usePut";
import { MotiView } from "moti";
import { RectButton } from "react-native-gesture-handler";
import { useGet, HeadersObject } from "../../../components/hooks/useGet";

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
  const headers: HeadersObject = {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Custom-Header": "Custom-Value",
    // Add any other headers you need for your specific use case
  };

  // usePost
  const { data:postData, error:postError, isLoading:postLoading, isValidating:postvalid } = usePost<CategoryScreenProps, Error>(
    '/api/data',
    headers
  );


// useGet
  const { data, error, isLoading, isValidating } = useGet<CategoryScreenProps>(
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    headers
  );

  // useDelete
const resourceId = 1
  const url = `/api/resource/${resourceId}`;
  const { isDeleting, deleteResource } = useDelete(url);
  const handleDelete = () => {
    // Call the deleteResource function to initiate the delete request.
    deleteResource();
  };
  <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
  </button>
  

  // usePut
  const url2 = `/api/resource/${resourceId}`;
  const [formData, setFormData] = useState<PutRequestData>({});

  const { isUpdating, updateResource } = usePut(url2);

  const handleUpdate = () => {
    // Call the updateResource function to initiate the PUT request.
    updateResource(formData);
  };

  <button onClick={handleUpdate} disabled={isUpdating}>
  {isUpdating ? 'Updating...' : 'Update'}
</button>

  console.log(data)
  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }




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
    <View style={styles.container}>
      {/* Search Bar */}
      <MotiView
        style={styles.searchInputContainer}
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <TextInput
          style={styles.searchInput}
          placeholder="Search Categories..."
          value={searchText}
          onChangeText={handleSearch}
        />
      </MotiView>

      {/* Popular Items */}
      <Text style={styles.popularHeader}>Popular Items</Text>
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
            <TouchableOpacity onPress={() => handlePopularItemPress(item)}>
              <Image
                alt="img"
                source={item.image}
                style={styles.popularItemImage}
              />
              <Text style={styles.popularItemText}>{item.name}</Text>
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
              <Text style={styles.categoryItemTitle}>{item.title}</Text>
              <Text style={styles.categoryItemSubtitle}>{item.subtitle}</Text>
            </RectButton>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInputContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  popularHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
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
    marginBottom: 8,
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
  categoryItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  categoryItemSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  categoryItemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
