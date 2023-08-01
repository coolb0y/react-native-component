import React, { Component } from 'react';
import { Button, Text, View, FlatList,SectionList,TextInput } from 'react-native';
import Student from './components/Student';


class App extends Component{
 constructor(){
  super();
  this.state={
    name:"ankur",
    age:20,
  }
 }

 updateName(val){
    this.setState({name:val})
 }

  render(){
    return (
      <View>
        <Text style={{fontSize:30, color:'red'}}>{this.state.name}</Text>
        <TextInput placeholder="Enter Your Name" 
        onChangeText={(text)=>this.updateName(text)}/>
        <Button title="Press me" />
        <Student name={this.state.name}/>
      </View>
    )
  }
}



export default App;
