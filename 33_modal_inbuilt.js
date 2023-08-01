import React,{useEffect,useState} from 'react';
import { Button, Text, View,ActivityIndicator,StyleSheet,Modal } from 'react-native';


const App = () => {

  const [showModal,setShowModal] = useState(false);

  

  return (
    <View style={styles.main}>
      <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      >
        <View style={styles.centredView}>
          <View style={styles.modalView}> 
            <Text style={styles.modalText}>Modal Code Step By Step</Text>
            <Button title="Close Modal" onPress={()=>setShowModal(false)}/>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
      <Button title="Show Modal" onPress={()=>setShowModal(true)} />
      </View>
      </View>
  );

}


const styles = StyleSheet.create({
  main:{
    flex:1,
    
  },
  buttonView:{
    flex:1,
    justifyContent:'flex-end',
  },
  centredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView:{
    backgroundColor:'white',
    padding:20,
    borderRadius:20,
    shadowColor:'black',
    elevation:10
  },
  modalText:{
    fontSize:30,
    marginBottom:20,
  },
 

})


export default App;
