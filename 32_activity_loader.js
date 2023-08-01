import React,{useEffect,useState} from 'react';
import { Button, Text, View,ActivityIndicator,StyleSheet } from 'react-native';


const App = () => {

  const [loading,setLoading] = useState(false);
  const displayLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <View style={styles.main}>
      <ActivityIndicator size={100} color="red" animating={loading} />
      <Button title="Show loader" onPress={displayLoader}/>
      </View>
  );

}


const styles = StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  radioText:{
    fontSize:20,
  },
  radio:{
    height:40,
    width:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,
    margin:10,
   
  },
  radioWrapper:{
    flexDirection:'row',
    alignItems:'center',
  },
  radioBg:{
    height:28,
    width:28,
    backgroundColor:'black',
    borderRadius:14,
    margin:4,
  }
})


export default App;
