import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home"
import Login from "./components/Login"

const Stack = createNativeStackNavigator();

const App = () => {

 

  return (
  <NavigationContainer>
    <Stack.Navigator
    screenOptions={{
      title:"User Login",
      headerStyle:{
      backgroundColor:'skyblue',
      
      },
      headerTintColor:'white',
      headerTitleStyle:{
       fontSize:25,
      
      }}}
    >
    <Stack.Screen name="Login" component={Login} 
    options={{
     // headerTitle:()=><Text>This is new</Text>,
     // headerLeft:()=><Header />,
      headerRight:()=><Header />,
      title:"User Login",
      headerStyle:{
      backgroundColor:'skyblue',
      
      },
      headerTintColor:'white',
      headerTitleStyle:{
       fontSize:25,
      
      }
    }}
     />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
  );

}

const Header = () => {
  return(
    <Button title="Header Button" />
  )
}





export default App;
