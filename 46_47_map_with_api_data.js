import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
const Tab = createMaterialTopTabNavigator();

const App = () => {

 

  return (
  <NavigationContainer>
   <Tab.Navigator>
   
    <Tab.Screen name="SignUp" component={SignUp} />
    <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  </NavigationContainer>
  );

}

const Post = () => {
  const [data, setData] = useState(undefined);

  const getAPIData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const tempdata = await response.json();
    setData(tempdata);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
      {data &&
        data.map((item) => (
          <View key={item.id} style={{padding:10,borderBottomColor:"#ccc",borderBottomWidth:1}}>
            <Text style={{ fontSize: 20,backgroundColor:"#ddd" }}>{item.id}</Text>
            <Text style={{ fontSize: 20 }}>{item.title}</Text>
            <Text style={{ fontSize: 20 }}>{item.body}</Text>
          </View>
        ))}
    </View>
    </ScrollView>
  );
};


const SignUp = ()=>{
  return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:40}}>SignUp</Text>
  </View>
}




export default App;
