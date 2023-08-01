import React,{useEffect,useState} from 'react';
import {Platform,Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';


const App = () => {

  const [modalVisible,setModalVisible] = useState(false);

  return (
  <View style={styles.container}>
    {
      modalVisible &&  ( <View style={styles.modal}>
      <View style={styles.body}>
        <Text>Modal</Text>
        <Button title="Close"/>
      </View>
    </View> )
    }
   
    <Button title="Click me" onPress={()=>setModalVisible(!modalVisible)} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal:{
    flex:1,
    backgroundColor:'rgba(50,50,50,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  body:{
    backgroundColor:'white',
    height:200,
    width:200,
    padding:20,
    borderRadius:10,
    justifyContent:'flex-end'
  }
})


export default App;
