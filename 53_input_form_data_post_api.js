import React,{useEffect,useState} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';


const App = () => {
 
 // const [data,setData] = useState([]);
 const [name,setName] = useState('');
 const [age,setAge] = useState(0);
 const [email,setEmail] = useState('');

 const saveData = async () =>{
  console.warn(name,age,email)
  const url = "http://10.0.2.2:3000/users";
  let result = await fetch(url,{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      age:age,
      email:email
    })
  })
  result = await result.json();
  console.warn(result)

 }

  return (
    <View>
      <Text style={{fontSize:30}}>Call To Json Server</Text>
      <TextInput  style={styles.input} value={name} placeholder="Enter Name" onChangeText={(text)=>setName(text)}/>
      <TextInput  style={styles.input} value={age} placeholder="Enter Age" onChangeText={(text)=>setAge(text)}/>
      <TextInput  style={styles.input}  placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}/>
      <Button title="Call API" onPress={saveData} />
    </View>
  
  );
};

const styles=StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    margin:10,
  }
})

export default App;
