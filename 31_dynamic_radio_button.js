import React,{useEffect,useState} from 'react';
import { Button, Text, View,TouchableHighlight,TouchableOpacity, FlatList,SectionList,TextInput,StyleSheet } from 'react-native';


const App = () => {

  const skills = [
    {id:1,name:'Javascript'},
    {id:2,name:'React'},
    {id:3,name:'React Native'},
    {id:4,name:'Node'},
  ]
  const [selectedRadio,setSelectedRadio] = useState(1)

  return (
    <View style={styles.main}>
   {
      skills.map((item,index)=>{
        <TouchableOpacity onPress={()=> setSelectedRadio(item.id)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {
              selectedRadio===item.id? <View style={styles.radioBg}></View>:null
            }
           
          </View>
        <Text style={styles.radioText}>Radio1</Text>
        </View>
      </TouchableOpacity>
      })
   }
   
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
