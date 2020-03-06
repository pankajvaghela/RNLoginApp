import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';

export default class SocialLoginButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin() {
    const { username, password } = this.state;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.socialbtn, styles.fbBtn]} onPress={this.onLogin.bind(this)}>
          Login with Facebook
        </Text>
        <Text style={[styles.socialbtn, styles.gBtn]} onPress={this.onLogin.bind(this)}>
          Login with Google
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#000',
    paddingVertical:20
    // backgroundColor: "#8ff"
  },
  socialbtn: {
    padding: 8,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(192,192,192)',
    marginBottom: 10,
    marginHorizontal: 10,
    color: "#fff"
  },
  fbBtn : {
    backgroundColor : "#507cc0",
  },
  gBtn : {
    backgroundColor : "#4185f4",

  }
});
