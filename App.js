import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';

// import file component
import Mainscreen from './components/Mainscreen' 

export default class App extends React.Component {
  render() {
    return (
      <AppStackNAvigator />
    );  
  }
}

// const mainNavigation = StackNavigator({
//   main: {
//     screen: Mainscreen
//   }
// })

const AppStackNAvigator = StackNavigator({
  main: {
    screen: Mainscreen
  }  
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
