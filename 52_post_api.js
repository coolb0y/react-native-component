import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';


const App = () => {
 
 // const [data,setData] = useState([]);

  const saveAPIData = async () => {
    const data = {
      name:"ankur",
      age:25,
      email:"ankur@gmail.com"

    }
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url,{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(data)
    });
    result = await result.json();
    console.warn(result);
  }

 

  return (
    <View>
      <Text style={{fontSize:30}}>Call To Json Server</Text>
      <Button title="Call API" onPress={saveAPIData} />
    </View>
  
  );
};


export default App;
