import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Card, CardItem, Thumbnail, Body, Left, Right, Icon, Button } from 'native-base';
// You can import from local files
// import CardComponent from '../CardComponent';
// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

export default class CardComponent extends Component {

  render() {

    const images = {
        "1":require('../assets/rn.jpg'),
        "2":require('../assets/vue.png'),
        "3":require('../assets/angular.png')        
    }

    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail
                        source={require('../assets/firebase.png')}
                    />
                    <Body>
                        <Text>Balinux</Text>
                        <Text style={{fontSize:10}}>Texas</Text>
                    </Body>
                </Left>
            </CardItem>

            <CardItem>
                <Image
                source={images[this.props.imagesource]}
                style={{width:200, height:200, flex:1}}
                />
            </CardItem>

            <CardItem style={{height:20}}>
                <Left style={{height:45}}>
                    <Button transparent><Icon name="ios-heart-outline" style={{color:"black", fontSize:25}}/></Button>
                    <Button transparent><Icon name="ios-chatbubbles-outline" style={{color:"black", fontSize:25}}/></Button>
                    <Button transparent><Icon name="ios-send-outline" style={{color:"black", fontSize:25}}/></Button>
                </Left>
                <Right>
                <Button transparent><Icon name="ios-bookmark-outline" style={{color:"black", fontSize:25}}/></Button>
              </Right>
            </CardItem>

            <CardItem style={{height:20}}>
                <Text>100 Likes</Text>      
            </CardItem>

            <CardItem>
                  <Body>
                      <Text><Text style={{fontWeight:"900"}}>Balinux </Text>NativeBase is made from effective building blocks referred to as components. The Components are constructed in pure React Native platform along with some JavaScript functionality with rich set of customisable properties. These components allow you to quickly build the perfect interface.</Text>
                  </Body>
            </CardItem>            
        </Card> 
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
