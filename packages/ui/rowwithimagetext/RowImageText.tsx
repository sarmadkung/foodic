import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const RowImageText = ({ handleOrder,imageSource,onpressDetail, title, description, price, variant,cooking_time }) => {
  const containerStyle = variant === 'secondary' ? styles.containerSecondary : styles.containerPrimary;
  const titleStyle = variant === 'secondary' ? styles.titleSecondary : styles.titlePrimary;
  const descriptionStyle = variant === 'secondary' ? styles.descriptionSecondary : styles.descriptionPrimary;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={onpressDetail}  style={[styles.container, containerStyle]}>
      <Image alt="image" source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.description, descriptionStyle]}>{description}</Text>
        <Text >{cooking_time}</Text>
          
      </View>
      </TouchableOpacity>
      </View>
      
      <Text style={styles.price}>Rs: {price}</Text>
      <TouchableOpacity onPress={handleOrder} style={styles.button}>
          <Text style={styles.buttonText}>Add to order </Text>
        </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 8,
    marginBottom: 8,
  },
  containerPrimary: {
    backgroundColor: '#e1f5fe',
  },
  containerSecondary: {
    backgroundColor: '#fce4ec',
  },
  button: {
    backgroundColor: '#f50057',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 8,
    marginHorizontal:15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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

