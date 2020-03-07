import React from 'react';
import { Text, Button, TextInput, View, StyleSheet } from 'react-native';
// import { facebookLogin } from '../../controllers/auth/social/FbLogin';
// import { googleLogin } from '../../controllers/auth/social/GoogleLogin';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import { facebookLogin } from './../../controllers/auth/social/facebookLogin';
import { googleLogin } from './../../controllers/auth/social/googleLogin';
import { saveLogin } from '../../controllers/auth/LoginController';

export default class SocialLoginButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin() {
    const { username, password } = this.state;
  }

  async fbLogin(){
    let user = await facebookLogin();

    saveLogin(user, 'facebook');
    console.info(user);
  }
  async gLogin(){
    let user = await googleLogin();

    saveLogin(user, 'google');
    console.info(user);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={[styles.socialbtn, styles.fbBtn]} onPress={this.fbLogin.bind(this)}>
          Login with Facebook
        </Text>

        <GoogleSigninButton
          style={[styles.socialbtn, styles.gBtn,{ width: 190, height: 48 }]}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.gLogin.bind(this)} />
        
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
    marginBottom: 10,
    marginHorizontal: 10,
  },
  fbBtn : {
    backgroundColor : "#3b5998",
    color:"white"
  },
  gBtn : {
  }
});
