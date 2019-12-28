import React, { Component } from "react";
import { View,SafeAreaView, Text, ScrollView, 
  StyleSheet, KeyboardAvoidingView,TextInput,TouchableHighlight, Image } from "react-native";
import colors from "../style/color";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast, {DURATION} from 'react-native-easy-toast'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textEmail: '',
      textPassword: '',
    };
  }
  handleLogin = () =>{
    if (this.state.textEmail != '' && this.state.textPassword != '') {
    this.props.navigation.navigate('Dashboard');
    }else if (this.state.textEmail == ''){
      this.refs.toast.show('Email Harus Di Isi');
    }else if (this.state.textPassword == ''){
      this.refs.toast.show('Password Harus Di Isi');
    }else{
      this.refs.toast.show('Email dan Password Harus Di Isi');
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      <SafeAreaView style={styles.scrollViewWrapper}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.loginHeader}>Login</Text>
          <Text style={styles.labelTitle}>EMAIL ADRESS</Text>
          <TextInput 
          autoCompleteType = "email" 
          onChangeText = {textEmail => this.setState({textEmail})}
          style={styles.textInput}
          />
          <Text style={styles.labelTitle}>PASSWORD</Text>
          <TextInput 
          onChangeText = {textPassword => this.setState({textPassword})}
          style={styles.textInput}
          />
        </ScrollView>
          <View style={styles.buttonWrapper}>
            <TouchableHighlight style={[{ opacity: 0.6 }, styles.button]}
            onPress={this.handleLogin}
            >
            <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
            />
            </TouchableHighlight>
          </View>
          <Toast ref="toast"/>
      </SafeAreaView>
      
      </KeyboardAvoidingView>
      
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.green01
  },
  scrollViewWrapper: {
    marginTop: 30,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    
  },
  avoidView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex:1
   },
  loginHeader: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40,
    marginLeft:20
  },
  labelTitle: {
    marginLeft:20,
    fontWeight: "700", 
    marginBottom: 2,
    color: Colors.white
  },
  textInput:{
    borderBottomColor:colors.white,
    borderBottomWidth:1,
    marginLeft:20,
    width:350,
    marginBottom: 10,
    color:Colors.white,
    fontWeight: "500", 
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  },
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: 0
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
});