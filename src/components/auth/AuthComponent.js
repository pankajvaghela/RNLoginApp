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
        <Hr  style={ styles.separator } > OR </Hr>
        <SocialLoginButtons />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container : {
    alignItems:"stretch",
  },
  separator : {
    backgroundColor:"#fff", 
    color:"#000"
  }
});