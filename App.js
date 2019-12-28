/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Navigation from './src/Navigator';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (<Navigation/>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  }
});
