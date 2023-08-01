import React,{useEffect,useState} from 'react';
import { Button, Text, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';


const App = () => {

 
  return (
    <View style={styles.main}>
      <Pressable
      onPress={()=>{
        console.warn("normal press")
      }}
      onLongPress={()=>{console.warn("long press")}}
      onPressIn={()=>{console.warn("press in")}}
      onPressOut={()=>{console.warn("press out")}}
      >
        <Text style={styles.pressableBtn}>Hello World</Text>
      </Pressable>
      </View>
  );

}

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
  },
  pressableBtn:{
    backgroundColor:'blue',
    color:'white',
    
    padding:10,
    justifyContent:'center',
    borderRadius:10,
    margin:10,
    textAlign:'center',
    fontSize:20,
    shadowColor:'black',
    elevation:10,
  }
})


export default App;
