import React, { Component } from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import { Constants } from 'expo';
import { Icon, Container, Content } from 'native-base';
// You can import from local files
// import CardComponent from '../CardComponent';
// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class ProfileTab extends Component {
  
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person" style={{ color:tintColor}}/>
      )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    //   <Container>
    //     <Content>
    //       <CardComponent imageSource= "2"/>
    //       <CardComponent imageSource= "1"/>
    //       <CardComponent imageSource= "3"/>
    //     </Content>
    //   </Container>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
