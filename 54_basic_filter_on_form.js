import React,{useEffect,useState} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';


const App = () => {
 
 // const [data,setData] = useState([]);
 const [name,setName] = useState('');
 const [age,setAge] = useState(0);
 const [email,setEmail] = useState('');

 const [nameError,setNameError] = useState(false);
  const [ageError,setAgeError] = useState(false);
  const [emailError,setEmailError] = useState(false);

 const saveData = async () =>{

  if(!name){
    setNameError(true);
  }
  else{
    setNameError(false);
  }

  if(!age){
    setAgeError(true);
  }
  else{
    setAgeError(false);
  }

  if(!email){
    setEmailError(true);
  }
  else{
    setEmailError(false);
  }

  if(!name || !age || !email){
    return false; 
  }

 


  console.warn(name,age,email)
  const url = "http://10.0.2.2:8000/users";
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
      {nameError?<Text style={styles.errorText}>Please Enter Name</Text>:null}
      <TextInput  style={styles.input} value={age} placeholder="Enter Age" onChangeText={(text)=>setAge(text)}/>
      {ageError?<Text style={styles.errorText}>Please Enter Age</Text>:null}
      <TextInput  style={styles.input}  placeholder="Enter Email" onChangeText={(text)=>setEmail(text)}/>
      {emailError?<Text style={styles.errorText}>Please Enter Email</Text>:null}
      <Button title="Call API" onPress={saveData} />
    </View>
  
  );
};

const styles=StyleSheet.create({
  input:{
    borderWidth:1,
    borderColor:'black',
    padding:8,
    margin:20,
    marginBottom:5
  },
  errorText:{
    color:'red',
    marginLeft:20
  }
})

export default App;
