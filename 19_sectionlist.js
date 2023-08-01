import React from 'react';
import {  Text, View, FlatList,SectionList } from 'react-native';


const App = () => {
 
  const users= [
    {name:'Ankur',id:1,data:['phone','laptop','tv']},
    {name:'Ankur',id:2,data:['phone','laptop','tv'] },
    {name:'Ankur',id:3,data:['phone','laptop','tv'] },
    {name:'Ankur',id:4,data:['phone','laptop','tv'] },
    {name:'Ankur',id:5,data:['phone','laptop','tv'] },
    {name:'Ankur',id:6,data:['phone','laptop','tv'] },
    {name:'Ankur',id:7,data:['phone','laptop','tv'] },
    {name:'Ankur',id:8,data:['phone','laptop','tv'] },
    {name:'Ankur',id:9,data:['phone','laptop','tv'] },
    {name:'Ankur',id:10,data:['phone','laptop','tv'] },
    {name:'Ankur',id:11,data:['phone','laptop','tv'] },
    {name:'Ankur',id:12,data:['phone','laptop','tv'] },


  ]

  return (
    <View>
      <Text>SectionList</Text>
      <SectionList 
      sections={users}
      renderItem={({item})=>{
        return(
          <Text style={{fontSize:20,marginLeft:10}}>{item}</Text>

        )
      }}
      renderSectionHeader={({section:{name}})=>(
        <Text style={{fontSize:30,color:'red'}}>{name}</Text>
      )}
      />
    
    </View>
  );
};



export default App;
