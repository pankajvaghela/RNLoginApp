import React from 'react';
import {Text, Button, TextInput, View, StyleSheet, ActivityIndicator } from 'react-native';

import firebase from 'react-native-firebase';


const API_BASE = "https://reqres.in";  
const API_LOGIN = `${API_BASE}/api/login`;

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLoading : false,
    };
  }
  
  async onLogin() {
    const { email, password } = this.state;

    this.setState({
      isLoading : true
    })
    try {
      let response = await fetch(API_LOGIN, {
                      method: 'POST',
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        email: email,
                        password: password,
                      }),
                    });


    this.setState({
      isLoading : false
    })
      let responseJson = await response.json();
      console.info(responseJson);
    } catch (error) {
      console.error(error);
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <ActivityIndicator size="small" color="#f33" animating={this.state.isLoading}  />
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
