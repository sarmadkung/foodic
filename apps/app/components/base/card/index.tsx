import { Card } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Icon } from "@rneui/themed";

type CardsComponentsProps = {};
const Cards: React.FunctionComponent<CardsComponentsProps> = ({
  category, handleCategorySelect
}: any) => {
    const handleCategory = useCallback(
        (e: any) => {
          handleCategorySelect(e);
        },
        [handleCategorySelect]
      );
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {category?.map((item: any) => (
            <Card key={item?.category} >
              <Card.Title>{item?.category}</Card.Title>
              <Card.Divider />
                  <Card.Image
                      onPress={ () => handleCategory(item?.category)}
                style={{ padding: 0 }}
                source={{
                  uri: "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                }}
              />
            </Card>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: "row",
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Cards;
