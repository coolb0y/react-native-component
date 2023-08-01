import React,{useEffect,useState} from 'react';
import { Button, Text, View,TouchableHighlight,TouchableOpacity, FlatList,SectionList,TextInput,StyleSheet } from 'react-native';


const App = () => {

  const [selectedRadio,setSelectedRadio] = useState(1)

  return (
    <View style={styles.main}>
    <TouchableOpacity onPress={()=> setSelectedRadio(1)}>
      <View style={styles.radioWrapper}>
        <View style={styles.radio}>
          {
            selectedRadio===1? <View style={styles.radioBg}></View>:null
          }
         
        </View>
      <Text style={styles.radioText}>Radio1</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity  onPress={()=> setSelectedRadio(2)}>
      <View style={styles.radioWrapper}>
        <View style={styles.radio}>
        {
            selectedRadio===2? <View style={styles.radioBg}></View>:null
          }
          </View>
      <Text style={styles.radioText}>Radio2</Text>
      </View>
    </TouchableOpacity>

    <TouchableOpacity >
      <View style={styles.radioWrapper}>
        <View style={styles.radio}></View>
      <Text style={styles.radioText}>Radio3</Text>
      </View>
    </TouchableOpacity>
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
