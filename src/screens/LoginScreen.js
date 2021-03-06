import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView  } from 'react-native';
import HeroComponent from '../components/HeroComponent';
import TitleComponent from '../components/TitleComponent';
import AuthComponent from '../components/auth/AuthComponent';

var vWidth = Dimensions.get('window').width; //full width

export default class LoginScreen extends React.Component {
  render(){
    return (
        <KeyboardAvoidingView  behavior='position' style={{marginBottom:0}}>
          <View style={styles.container}>
              <HeroComponent />
              <TitleComponent />     
              <AuthComponent />
          </View>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vWidth,
    flexDirection: 'column',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
