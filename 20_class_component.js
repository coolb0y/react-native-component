import React, { Component } from 'react';
import { Button, Text, View, FlatList,SectionList,TextInput } from 'react-native';
import Student from './components/Student';


class App extends Component{
  fruit = ()=>{
    console.warn("Apple");
  }

  render(){
    return (
      <View>
        <Text style={{fontSize:30, color:'red'}}>React Native</Text>
        <TextInput placeholder="Enter Your Name" />
        <Button title="Press me" onPress={this.fruit}/>
        <Student />
      </View>
    )
  }
}



export default App;
