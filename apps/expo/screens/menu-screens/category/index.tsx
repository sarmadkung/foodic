import { TouchableOpacity, View, StyleSheet,Text } from "react-native";
import { Box, Container, Row, Spacer } from "ui";
import { useTheme } from '../../../components/theme';

export const Category = () => {
  const { theme, toggleTheme } = useTheme();
  const handlePress = () => {
    alert("im presed");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#000000' : '#FFFFFF',
    },
    text: {
      color: theme === 'dark' ? '#FFFFFF' : '#000000',
      fontSize: 18,
    },
    toggleButton: {
      padding: 10,
      backgroundColor: theme === 'dark' ? '#2196F3' : '#FF9800',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, this is the application content.</Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
    // <Container style={{padding:10}}>
    //   <Row >
    //     <Box
    //       imageSource={require("../../../assets/dish.jpg")}
    //       title="Box Title"
    //       description="Box Description"
    //       onPress={handlePress}
    //       style={{margin:10}}
    //     />
    //     <Spacer variant="medium" />
    //     <Box
    //       imageSource={require("../../../assets/dish.jpg")}
    //       title="Box Title"
    //       description="Box Description"
    //       onPress={handlePress}
    //       style={{margin:10}}

    //     />
    //     <Box
    //       imageSource={require("../../../assets/dish.jpg")}
    //       title="Box Title"
    //       description="Box Description"
    //       onPress={handlePress}
    //       style={{margin:10}}
    //     />
    //   </Row>
    // </Container>
  );
};
