import React,{useEffect,useState,useRef} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './components/Header';
import Product from './components/Product';





const App = () => {
 
  const products =[
    {id:1,name:'Product 1',price:100,image:'https://picsum.photos/200/300'},
    {id:2,name:'Product 2',price:200,image:'https://picsum.photos/200/300'},
    {id:3,name:'Product 3',price:300,image:'https://picsum.photos/200/300'},
    {id:4,name:'Product 4',price:400,image:'https://picsum.photos/200/300'},
    {id:5,name:'Product 5',price:500,image:'https://picsum.photos/200/300'},
    
  ]

  return (
   <View style={styles.container}>
     <Header />
     <ScrollView>
      {
        products.map((item,index)=>
        <Product item={item} key={index}/>
        )
      }
      </ScrollView>
   
    </View>
  )

};



const styles=StyleSheet.create({
  container:{
   // flex:1,
    
  },
  dataWrapper:{
    flex:1,
  
    backgroundColor:'lightgrey',
    margin:10,
    padding:5,
    alignContent:"space-around",
    justifyContent:'space-around',
    borderRadius:10,
  },
  centredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView:{
    margin:20,
    backgroundColor:"#fff",
    padding:20,
    borderRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.75,
    elevation:5,


  },
  input:{
    
    borderWidth:1,
    borderColor:'skyblue',
    marginBottom:10,
  }

})

export default App;
