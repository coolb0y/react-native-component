import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {


  return (
  <WebView source={{uri:"https://reactnative.dev"}} />
  );

}




export default App;
