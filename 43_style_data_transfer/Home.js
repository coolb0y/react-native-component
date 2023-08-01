import { View, Text } from 'react-native';


const Home  = (props) => {
    console.warn(props.route.params)
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:20}}>Name:{props.route.params.name}</Text>
        <Text style={{fontSize:20}}>age:{props.route.params.age}</Text>
        <Text style={{fontSize:20}}>Home Page</Text>
      </View>
    )
}

export default Home;