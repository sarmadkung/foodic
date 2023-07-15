import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export const RowImageText = ({ imageSource, title, description, price, variant }) => {
  const containerStyle = variant === 'secondary' ? styles.containerSecondary : styles.containerPrimary;
  const titleStyle = variant === 'secondary' ? styles.titleSecondary : styles.titlePrimary;
  const descriptionStyle = variant === 'secondary' ? styles.descriptionSecondary : styles.descriptionPrimary;

  return (
    <View style={[styles.container, containerStyle]}>
      <Image alt="image" source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      </View>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  containerPrimary: {
    backgroundColor: '#e1f5fe',
  },
  containerSecondary: {
    backgroundColor: '#fce4ec',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  titlePrimary: {
    color: '#000',
  },
  titleSecondary: {
    color: '#f50057',
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  descriptionPrimary: {
    color: '#333',
  },
  descriptionSecondary: {
    color: '#f50057',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f50057',
  },
});

