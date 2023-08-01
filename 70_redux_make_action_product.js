import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import {useDispatch} from 'react-redux';
import { addToCart } from './redux/action';


const Product = (props) => {
  const item = props.item;

 const handleAddToCard =()=>{
    const dispatch = useDispatch();
    dispatch(addToCart(item));
 }

  return (
    <View style={styles.dataWrapper} >
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ fontSize: 20 }}>{item.price}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginBottom: 5 }} />
      <Button title="Add to Cart" onPress={()=>handleAddToCard(item)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  dataWrapper: {
    alignItems: 'center',
    margin: 7,
    padding:5,
    marginLeft:0,
    marginRight:0,
    //borderRadius: 10,
    borderBottomColor:'orange',
    borderBottomWidth:2,
   // backgroundColor: 'lightgrey', // Add a background color to make the component visible
  },
});

export default Product;
