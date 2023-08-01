import React,{useEffect,useState} from 'react';
import { Button, Text, View,TouchableHighlight, FlatList,SectionList,TextInput,StyleSheet } from 'react-native';


const App = () => {


  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <Text style={[styles.button,styles.success]}>Success</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.primary]}>primary</Text>
      </TouchableHighlight>
      
      <TouchableHighlight>
        <Text style={[styles.button,styles.danger]}>danger</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={[styles.button,styles.warning]}>warning</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      </View>
  );

}

const styles = StyleSheet.create({
  main:{
    flex:1,
  },
  button:{
    backgroundColor:'#bbb',
    color:'#fff',
    fontSize:24,
    textAlign:'center',
    padding:10,
    borderRadius:10,
    margin:10,
    shadowColor:'red',
    elevation:10,
    shadowOpacity:0.5,
  },
  success:{
    backgroundColor:'green',

  },
  primary:{
    backgroundColor:'blue',
  },
  danger:{
    backgroundColor:'red',
  },
  warning:{
    backgroundColor:'orange',
  }
})



export default App;
