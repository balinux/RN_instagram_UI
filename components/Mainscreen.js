import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import { StackNavigator , TabNavigator, TabBarBottom} from 'react-navigation';

// import file tab navigator
import HomeTab from './appTabNavigator/HomeTab';
import SearchTab from './appTabNavigator/SearchTab';
import AddMediaTab from './appTabNavigator/AddMediaTab';
import LikeTab from './appTabNavigator/LikeTab';
import ProfileTab from './appTabNavigator/ProfileTab';

export default class Mainscreen extends React.Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft:10}}/>,
        headerTitle: 'Mainscreen',
        headerRight: <Icon name="ios-send-outline" style={{ paddingRight:10}}/>
    }

  render() {
    return (
        <AppTabNavigation/>
    );
  }
}

const AppTabNavigation = TabNavigator({
    HomeTab: {
        screen:HomeTab
    },
    SearchTab: {
        screen:SearchTab
    },
    AddMediaTab: {
        screen:AddMediaTab
    },
    LikeTab: {
        screen:LikeTab
    },
    ProfileTab: {
        screen:ProfileTab
    },
},
{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel:false,
        showIcon:true,
        style: {
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
      },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
