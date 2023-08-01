import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Product = (props) => {
  const item = props.item;

  return (
    <View style={styles.dataWrapper} >
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ fontSize: 20 }}>{item.price}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginBottom: 5 }} />
      <Button title="Add to Cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  dataWrapper: {
    alignItems: 'center',
    margin: 7,
    marginLeft:0,
    marginRight:0,
    //borderRadius: 10,
    borderBottomColor:'orange',
    borderBottomWidth:2,
   // backgroundColor: 'lightgrey', // Add a background color to make the component visible
  },
});

export default Product;
