import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';

import TraderScreen from './screens/TraderScreen';
import BuyerScreen from './screens/BuyerScreen';



export default function App() {
  return (
   <WelcomeScreen/>

  );
}

addItem=(itemName, description)=>{
  var username = this.state.userName
  db.collection("exchange_requests").add({
    "username" :userName,
    "item_name" :itemName,
    "description" :description
  })
  this.setState({
    itemName: '',
    description: ''
  })

  return Alert.Alert(
    'Item Ready To Exchange',
    '',
    [
      {text: 'OK', onPress: () =>{

        this.props.navigation.navigate('HomeScreen')
      }}
    ]
  );
}
<TouchableOpacity
        style={[styles.button,{marginTop:30}]}
        onPress={()=>{this.addItem(this.state.itemName, this.state.description)}}
        >
          <Text style={{color:'#ffff', fontSize:18, fontWeight:'bold'}}>Add Item</Text>
      </TouchableOpacity>

const TabNavigator = createBottomTabNavigator({
  Trader: {screen: TraderScreen},
  Buyer: {screen: BuyerScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Trader"){
        return(
          <Image
          source={require("./assets/trader.jpg")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Buy"){
        return(
          <Image
          source={require("./assets/buy.jpg")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});