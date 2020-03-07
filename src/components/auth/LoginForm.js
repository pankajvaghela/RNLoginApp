import React from 'react';
import {Text, Button, TextInput, View, StyleSheet } from 'react-native';

import firebase from 'react-native-firebase';

firebase.auth().signInAnonymously()
  .then((user) => {
    console.log(user);
  });


export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Text
          title={'Login'}
          style={[styles.loginBtn]}
          onPress={this.onLogin.bind(this)}
        >Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    color : "#000", 
    // backgroundColor: "#4B170B",
  },
  input: {
    width:220,
    padding: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius:2,
    borderColor: 'rgb(192,192,192)',
    backgroundColor: 'rgb(247,247,247)',
    marginVertical: 10,
  },
  loginBtn: {
    backgroundColor: "#4B178B",
    color:"white",
    margin:10,
    padding:10,
    paddingHorizontal:50,
    borderRadius:3

  }
});
