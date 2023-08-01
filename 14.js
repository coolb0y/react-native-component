
import React,{useState} from 'react';

import {
  Button,
  Text,TextInput,
  View,StyleSheet 
} from 'react-native';


const App = () => {
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');
  const [display,setDisplay]=useState(false);
  return ( 
    <View>
     
      <Text style={{fontSize:30}}>Props in React js</Text>
      <Text style={{fontSize:30}}>Your Name is:{name}</Text>
      <TextInput
      style={{fontSize:18,color:'blue',borderWidth:2,borderColor:'blue',margin:10,padding:10,borderRadius:10}}
      placeholder="Enter Your Name" value={name} onChangeText={(text)=>setName(text)}/>
      <TextInput 
      style={{fontSize:18,color:'blue',borderWidth:2,borderColor:'blue',margin:10,padding:10,borderRadius:10}}
      placeholder="Enter Your Email" value={email} onChangeText={(text)=>setEmail(text)}/>
      <TextInput
      style={{fontSize:18,color:'blue',borderWidth:2,borderColor:'blue',margin:10,padding:10,borderRadius:10}}
      placeholder="Enter Your Password" secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)}/>
      
    <Button title='View Value' onPress={()=>setDisplay(!display)} />
    <Button title="Reset Form" onPress={()=>{setName('');setEmail('');setPassword(''); setDisplay(false);}}/>
    <View> 
        {display?<View>
          <Text style={{fontSize:15}}>Your Email is:{email}</Text>
          <Text style={{fontSize:15}}>Your Password is:{password}</Text>
          <Text style={{fontSize:15}}>Your Name is:{name}</Text>
        </View>:null}
      </View>
    </View>
  );
};




export default App;
