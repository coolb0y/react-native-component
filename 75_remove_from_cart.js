import React, { useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import { addToCart,removeFromCart } from './redux/action';


const Product = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.reducer);
  const [isAdded,setIsAdded] = React.useState(false);


 const handleAddToCard =()=>{ 
    dispatch(addToCart(item));
 }

 const handleRemoveFromCart =()=>{
    setIsAdded(false);
    dispatch(removeFromCart(item.name));
 }

 useEffect(()=>{

  if(cartItems && cartItems.length){

    cartItems.forEach((element) => {
      if(element.name === item.name){
        setIsAdded(true);
      }
    })
  }

 },[cartItems])

  return (
    <View style={styles.dataWrapper} >
      <Text style={{ fontSize: 20 }}>{item.name}</Text>
      <Text style={{ fontSize: 20 }}>{item.price}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100, marginBottom: 5 }} />
      {
        isAdded ? <Button title="Remove from Cart" onPress={()=>handleRemoveFromCart(item)}/>
        : <Button title="Add to Cart" onPress={()=>handleAddToCard(item)}/> 
      }
     
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
