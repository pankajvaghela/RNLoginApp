import React from 'react';
import {Text, Button, TextInput, View, StyleSheet, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import { saveLogin, getUser } from '../../controllers/auth/LoginController';

import ValidationComponent from 'react-native-form-validator';

const API_BASE = "https://reqres.in";  
const API_LOGIN = `${API_BASE}/api/login`;

export default class LoginForm extends ValidationComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLoading : false,
    };
  }
  
  async onLogin() {

    if(this.state.isLoading) return;

    try {

      const { email, password } = this.state;

      let isValid = await this.validate({
        email: {email: true},
        password: {minlength:8, required: true},
      });
      
      console.log("isValid", isValid);
      
      if(isValid){
        console.log("isValid inside");

        this.setState((pS) => ({ ...pS, isLoading : true }))

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
  
        this.setState((pS) => ({ ...pS, isLoading : false }))
        let responseJson = await response.json();
  
        console.info(responseJson);
        console.log("done logging in");
  
        let sStatus = await saveLogin({ email, token : responseJson.token}, "email");
  
        console.log("User Saved" , sStatus);        
      }
    } catch (error) {
      console.error(error);
    }
  }

  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref="email"
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder={'Email'}
          style={styles.input}
        />
          
        <TextInput
          ref="password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        
        <TouchableNativeFeedback
          onPress={this.onLogin.bind(this)}
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={[styles.loginBtn]} >
                <Text style={styles.loginBtnText} >Login</Text>
                { this.state.isLoading && <ActivityIndicator size="small" color="#fff" style={{marginLeft:10}}/> }
            </View>
        </TouchableNativeFeedback>

        <Text>
            {this.getErrorMessages()}
          </Text>
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
    flexDirection: "row",
    backgroundColor: "#4B178B",
    margin:10,
    padding:10,
    paddingHorizontal:30,
    borderRadius:3
  },
  loginBtnText:{
    color:"white",
    marginRight: 0
  }
});
