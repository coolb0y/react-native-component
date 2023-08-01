import React,{useEffect,useState} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';
import axios from 'axios';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const App = () => {
 
  const [data,setData]=useState([])

  const getAPIData = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if(result){
      setData(result);
      
    }
  }

  const deleteUser = async (id)=>{
    const url = "http://10.0.2.2:3000/users/"+id;
    let result = await fetch(url,{
      method:'DELETE'
    });

    result = await result.json();
    console.warn(result);
    if(result){
      console.warn('deleted');
      getAPIData();
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
          <View style={{flex:1}}> <Button title='Delete' onPress={()=>deleteUser(item.id)} ></Button></View>
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
