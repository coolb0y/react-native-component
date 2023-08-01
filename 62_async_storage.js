import React,{useEffect,useState,useRef} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
 
  const [name,setName] = useState('')

  const setData = async ()=>{
    try{
      await AsyncStorage.setItem('name','ankur singh')
    }catch(e){
      console.warn(e);
    }
  }


  const getData = async ()=>{
    try{
      const value = await AsyncStorage.getItem('name');
      setName(value);
      console.warn(value);
    }
    catch(e){
      console.warn(e);
    }
  }

  const removeData = async ()=>{
    try{
      await AsyncStorage.removeItem('name');
    }
    catch(e){
      console.warn(e);
    }
  }

  return (
   <View style={styles.container}>
   <Text>Async Storage with React Native | {name}</Text>
   <Button title='Set data' onPress={setData} />
   <Button title='Get data' onPress={getData}/>
   <Button title='Remove data' onPress={removeData}/>


    </View>
  )

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
