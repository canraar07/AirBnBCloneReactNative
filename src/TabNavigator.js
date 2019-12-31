import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React, { Component } from "react";
import { Image } from "react-native";
import ExplormoreScreen from './Screen/ExplormoreScreen';
import InboxScreen from './Screen/InboxScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SavedScreen from './Screen/SavedScreen';
import TrifScreen from './Screen/TrifScreen';

const TabNavigator = createBottomTabNavigator({
    Explore: {
        screen: ExplormoreScreen,
        navigationOptions: {
          tabBarLabel: "TELUSURI",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./image/search.png")}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          )
        }
      },
      Saved: {
        screen: SavedScreen,
        navigationOptions: {
          tabBarLabel: "TERSIMPAN",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./image/heart.png")}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          )
        }
      },
      Trip: {
        screen: TrifScreen,
        navigationOptions: {
          tabBarLabel: "PERJALANAN",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./image/airbnb.png")}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          )
        }
      },
      Inbox: {
        screen: InboxScreen,
        navigationOptions: {
          tabBarLabel: "K.MASUK",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./image/inbox.png")}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          )
        }
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: "PROFIL",
          tabBarIcon: ({ tintColor }) => (
            <Image
              source={require("./image/user.png")}
              style={{ height: 24, width: 24, tintColor: tintColor }}
            />
          )
        }
      }, 
},{
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "grey",
    style: {
      backgroundColor: "white",
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: "black",
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});
export default createAppContainer(TabNavigator);