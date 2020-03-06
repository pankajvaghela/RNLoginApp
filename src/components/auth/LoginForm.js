import React from 'react';
import {Text, Button, TextInput, View, StyleSheet } from 'react-native';

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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color : "#000", 
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(192,192,192)',
    placeholderTextColor: 'rgb(192,192,192)',
    backgroundColor: 'rgb(247,247,247)',
    marginBottom: 10
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
