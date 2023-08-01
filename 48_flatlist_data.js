import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
const Tab = createMaterialTopTabNavigator();



const App = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const tempdata = await response.json();
    setData(tempdata);
    //console.warn(data)
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    
    <View style={{ flex: 1 }}>
      {
        data && <FlatList 
        data={data}
        renderItem={({item})=><View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10}}>
          <Text style={{fontSize:20,backgroundColor:"orange"}}>{item.id}</Text>
          <Text style={{fontSize:20}}>{item.title}</Text>
          <Text style={{fontSize:20}}>{item.body}</Text>
        </View>}
        />
      }
    </View>
  
  );
};



export default App;
