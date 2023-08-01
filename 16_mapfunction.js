import React, { useState } from 'react';
import { Button, Text, TextInput,ScrollView, View, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const users = [
    { name: 'Ankur', id: 1 },
    { name: 'Singh', id: 2 },
    { name: 'Golu', id: 3 },
    { name: 'Samu', id: 5 },
    { name: 'Samu', id: 6 },
    { name: 'Samu', id: 7 },
    { name: 'Samu', id: 8 },
    { name: 'Samu', id: 9 },
    { name: 'Samu', id: 10 },
    { name: 'Samu', id: 11 },
    { name: 'Samu', id: 12 },
    { name: 'Samu', id: 13 },
    { name: 'Samu', id: 14 },
    { name: 'Samu', id: 15 },
    { name: 'Samu', id: 16 },
    { name: 'Samu', id: 17 },
    { name: 'Samu', id: 18 },
    { name: 'Samu', id: 19 },
    { name: 'Samu', id: 20 },
    
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Map Function</Text>
      <ScrollView style={{marginBottom:60}}>
      {
        users.map((item) => {
          return <Text style={styles.item} key={item.id}>{item.name}</Text>
        })
      }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item:{
    fontSize:20,
    padding:10,
    color:'white',
    backgroundColor:'blue',
    margin:10,
    borderWidth:1,
    borderColor:'black',
    borderRadius:10
  }
})

export default App;
