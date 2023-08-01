
import { View, Text, Button,TextInput } from 'react-native';
import React,{useState} from 'react';


const Login = (props) => {
    const [name,setName] = useState("");
    const [age,setAge] = useState(20);
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Login Screen</Text>
       <TextInput placeholder="Enter Name" value={name} onChangeText={(text)=>setName(text)} />
        <TextInput placeholder="Enter Age" value={age} onChangeText={(text)=>setAge(text)} />
        <Button title="Go to home page" 
            onPress={()=>{
            console.warn("Button Clicked")
            props.navigation.navigate("Home",{name,age})}} />
      </View>
    )
}

export default Login;