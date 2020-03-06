import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin() {
    const { username, password } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.socialbtn} onPress={this.onLogin.bind(this)}>
          Login with Facebook
        </Text>
        <Text style={styles.socialbtn} onPress={this.onLogin.bind(this)}>
          Login with Google
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    placeholderTextColor: 'rgb(192,192,192)',
    color: '#000',
  },
  socialbtn: {
    padding: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(192,192,192)',
    borderWidth: 1,
    borderColor: 'rgb(192,192,192)',
    marginBottom: 10,
    marginHorizontal: 10,
  },
});
