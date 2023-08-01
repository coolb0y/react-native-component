import React,{useEffect,useState} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
 
  const [data,setData]=useState([])

  const getAPIData = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if(result){
      setData(result)
    }
  }



  useEffect(()=>{
    getAPIData();
  },[])

  return (
    <View style={styles.container}>
   {
    data.length?
    data.map((item)=>{
      return (
        <View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>{item.name}</Text></View>
          <View style={{flex:1}}><Text>{item.age}</Text></View>
          <View style={{flex:1}}> <Button title='Delete' ></Button></View>
          <View style={{flex:1}}> <Button title='Edit' ></Button></View>
        </View>
      )
    }):null
   }
    </View>
  
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  dataWrapper:{
  
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'lightgrey',
    margin:10,
    padding:5
  }
})

export default App;
