import React from 'react';
import {  Text, View, FlatList } from 'react-native';
import UserData from './components/UserData';

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
      <FlatList
      data={users}
      renderItem={({item})=>
      <UserData name={item.name} id={item.id}/>
      
      } />
    
    </View>
  );
};



export default App;
