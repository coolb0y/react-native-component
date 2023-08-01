import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs"
const Tab = createMaterialTopTabNavigator();

const App = () => {

 

  return (
  <NavigationContainer>
   <Tab.Navigator>
    <Tab.Screen name="Login" component={Login} />
    <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  </NavigationContainer>
  );

}

const Login = ()=>{
  return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:40}}>Login</Text>
  </View>
}

const SignUp = ()=>{
  return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:40}}>SignUp</Text>
  </View>
}




export default App;
