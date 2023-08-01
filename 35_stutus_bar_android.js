import React,{useEffect,useState} from 'react';
import { Button, Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable } from 'react-native';


const App = () => {

  const [hide,setHide] = useState(false)
 const [barStyle,setBarStyle] = useState('dark-content')
  return (
    <View style={styles.container}>
     <StatusBar
     backgroundColor='orange'
     barStyle={barStyle}
     hidden={hide}
     />
      <Button title="Toggle Statusbar" onPress={()=>setHide(!hide)}></Button>
      <Button title="Update Style" onPress={()=>setBarStyle('default')}></Button>
    
    </View>
  );

}

const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
}
})


export default App;
