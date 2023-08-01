import React, { useState } from 'react';
import { Button, Text, TextInput,ScrollView, View, StyleSheet, FlatList } from 'react-native';

const App = () => {
 
  const users= [
    {name:'Ankur',id:1},
    {name:'Ankur',id:2},
    {name:'Ankur',id:3},
    {name:'Ankur',id:4},
    {name:'Ankur',id:5},
    {name:'Ankur',id:6},
    {name:'Ankur',id:7},
    {name:'Ankur',id:8},
    {name:'Ankur',id:9},
    {name:'Ankur',id:10},
    {name:'Ankur',id:11},
    {name:'Ankur',id:12},
    {name:'Ankur',id:13},
    {name:'Ankur',id:14},
    {name:'Ankur',id:15},
    {name:'Ankur',id:16},
    {name:'Ankur',id:17},
    {name:'Ankur',id:18},
    {name:'Ankur',id:19},
    
    
  ]

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Map Function</Text>
      <ScrollView>
     <View style={{flex:1,flexDirection:'row',flexWrap:'wrap'}}>
      
     {
        users.map((item)=>{
          return(
            <Text style={styles.item}>{item.name}</Text>
          )
        })
     }
    
     </View>
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
   fontSize:25,
   backgroundColor:'yellow',
   color:'red',
   margin:5,
   padding:5,
   width:120,
   height:120,
   textAlignVertical:'center',
   textAlign:'center'

  }
})

export default App;
