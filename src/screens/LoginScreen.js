import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import HeroComponent from '../components/HeroComponent';
import TitleComponent from '../components/TitleComponent';
import AuthComponent from '../components/auth/AuthComponent';

var vWidth = Dimensions.get('window').width; //full width
var vHeight = Dimensions.get('window').height; //full height

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <HeroComponent />
      <TitleComponent />     
      <AuthComponent />
    </View>
  );
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
