import React,{useEffect,useState} from 'react';
import {Platform,Button, TextInput,Text,StatusBar, View,ActivityIndicator,StyleSheet,Modal,Pressable,ScrollView,FlatList } from 'react-native';
import axios from 'axios';

const App = () => {
 
  const [data,setData]=useState([])
  const [showModal,setShowModal]=useState(false);
  const [selectedUser,setSelectedUser]=useState(undefined)



  const getAPIData = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if(result){
      setData(result);
      
    }
  }

  const deleteUser = async (id)=>{
    const url = "http://10.0.2.2:3000/users/"+id;
    let result = await fetch(url,{
      method:'DELETE'
    });

    result = await result.json();
    console.warn(result);
    if(result){
      console.warn('deleted');
      getAPIData();
    }
  }

  const updateUser = (data)=>{
    setShowModal(true);
    setSelectedUser(data);
  }


  useEffect(()=>{
    getAPIData();
  },[])

 

  return (
    <View style={styles.container}>
   {
    data.length?
    data.map((item)=>{
      return (
        <View style={styles.dataWrapper}>
          <View style={{flex:1}}><Text>{item.name}</Text></View>
          <View style={{flex:1}}><Text>{item.age}</Text></View>
          <View style={{flex:1}}> <Button title='Delete' onPress={()=>deleteUser(item.id)} ></Button></View>
          <View style={{flex:1}}> <Button title='Update' onPress={()=>updateUser(item)}></Button></View>
        </View>
      )
    }):null
   }

   <Modal visible={showModal} transparent={true}>
   <UserModal setShowModal={setShowModal}  selectedUser={selectedUser}/>
   </Modal>
    </View>
  
  );
};

const UserModal = (props)=>{
  console.warn(props.selectedUser);
  return(
  <View style={styles.centredView}>
  <View style={styles.modalView}>
    <Text>Do you really want to delete +{props.selectedUser.name}</Text>
    <Button title="CLOSE" onPress={()=>props.setShowModal(false)}></Button>
  </View>
</View>)
}


const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  dataWrapper:{
  
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'lightgrey',
    margin:10,
    padding:5
  },
  centredView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView:{
    margin:20,
    backgroundColor:"#fff",
    padding:60,
    borderRadius:10,
    shadowColor:'#000',
    shadowOpacity:0.75,
    elevation:5,


  }

})

export default App;
