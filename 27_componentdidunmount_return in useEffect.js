import React,{useEffect,useState} from 'react';
import { Button, Text, View, FlatList,SectionList,TextInput } from 'react-native';


const App = () => {

  const [show,setShow] = useState(true);

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text style={{fontSize:30, color:'red'}}>Hello World</Text>
      <Button title="Click Me" onPress={()=>setShow(!show)} />
    {
      show?<User />:null
    }
      </View>
  );

}

const User = ()=>{

  let timer = setInterval(()=>{
    console.warn('Component Update')
  },2000)

  useEffect(()=>{
    return ()=>{
       clearInterval(timer);
      }
  })

  return(
    <View>
      <Text style={{fontSize:30,color:'green'}}>User</Text>
    </View>
  )
}

export default App;
