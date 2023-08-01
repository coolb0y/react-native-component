import React, { useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const users = [
    { name: 'Ankur', id: 1 },
    { name: 'Singh', id: 2 },
    { name: 'Golu', id: 3 },
    { name: 'Sam', id: 4 },
  ];

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        keyExtractor={
          (item) => item.id
        }
      />
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
