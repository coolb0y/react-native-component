import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';


const App = () => {


  return (
    <View >
    <Text style={{fontSize:30}}>Platform:{Platform.OS}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  text:{
    color:Platform.OS === 'ios' ? 'red' : 'blue'
  }
})


export default App;
