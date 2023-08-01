
import React,{useState} from 'react';

import {
  Button,
  Text,TextInput,
  View,StyleSheet 
} from 'react-native';


const App = () => {
 const [name,setName]=useState('');

  return ( 
    <View>
     
      <Text style={{fontSize:30}}>Props in React js</Text>
      <Text style={{fontSize:30}}>Your Name is:{name}</Text>
      <TextInput
      style={{fontSize:18,color:'blue',borderWidth:2,borderColor:'blue',margin:10,padding:10,borderRadius:10}}
      placeholder="Enter Your Name" value={name} onChangeText={(text)=>setName(text)}/>
    <Button title='Clear Input Value' onPress={()=>setName('')} />
    </View>
  );
};




export default App;
