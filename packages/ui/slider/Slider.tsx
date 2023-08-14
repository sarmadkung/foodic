import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Slick from "react-native-slick";
import Carousel from 'react-native-snap-carousel';

interface Slide {
  text: string;
  image: number;
  onPress: () => void; // Function to be called on press
}

interface SlickSliderProps {
  slides: Slide[];
}

export const SlickSlider: React.FC<SlickSliderProps> = ({ slides }) => {
  const renderSlides = () => {
    return slides.map((slide, index) => (
      <TouchableOpacity
        key={index}
        onPress={slide.onPress}
        style={styles.slideContainer}
      >
        <Image alt="img" source={slide.image} style={styles.image} />
        <Text style={styles.text}>{slide.text}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Slick
        style={styles.slick}    
        dot={false}
        pagingEnabled={false}
        paginationStyle={styles.pagination}
        showsButtons={false} // Hide arrows
        loop={true}
        autoplay={true} // Enable auto-moving slides
        autoplayTimeout={3}
              showsPagination={false}
      >
        {renderSlides()}
      </Slick>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slick: {
    width: 300,
    height: 150, // Adjust height to accommodate text
  },
  slideContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100, // Apply circular border radius
    borderWidth: 1, // Add 1px border
    borderColor: "orange", // Border color
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  pagination: {
    bottom: -15,
  },
});
