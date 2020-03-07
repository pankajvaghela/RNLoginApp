import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
import { facebookLogin } from './social/FbLogin';
import { googleLogin } from './social/GoogleLogin';

export default class SocialLoginButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin() {
    const { username, password } = this.state;
  }

  async fbLogin(){
    let user = await facebookLogin();

    console.info(user);
  }
  async gLogin(){
    let user = await googleLogin();

    console.info(user);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.socialbtn, styles.fbBtn]} onPress={this.fbLogin.bind(this)}>
          Login with Facebook
        </Text>
        <Text style={[styles.socialbtn, styles.gBtn]} onPress={this.gLogin.bind(this)}>
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
