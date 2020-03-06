import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import Hr from "azir-hr";

import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <LoginForm />
        <Hr color="#ccc" textColor="#ccc"  style={ styles.separator } > OR </Hr>
        <SocialLoginButtons style={ styles.socialBtns }/>
          <View style={[styles.flexCenter]}>
            <Text>Don't have an account?</Text>
            <Text style={{color:"#4B178B", marginLeft: 5,  textDecorationLine: "underline"}}>Signup</Text>
          </View>
          <View style={[styles.flexCenter]}>
            <Text style={{color:"#ccc", marginVertical: 10, textDecorationLine: "underline"}}>Login Later</Text>
          </View>
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container : {
    alignItems:"stretch",
  },
  separator : {
    color:"#000",
    marginVertical: 10
  },
  flexCenter: {
    flexDirection:"row", 
    justifyContent:"center"
  },
  signupSec : {
  },
  loginLater: {

  }
});