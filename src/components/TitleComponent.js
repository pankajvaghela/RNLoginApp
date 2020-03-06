import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import HeroComponent from '../components/HeroComponent';
import Icon from 'react-native-ionicons';

var vWidth = Dimensions.get('window').width; //full width

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}> KYA </Text>
      <View style={styles.textBoxWraper}>
        <Text style={[styles.title, styles.textRed, styles.textBox]}> SCENE </Text>
      </View>
      <Text style={[styles.title]}> HAI </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ff220p',
    width: vWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontWeight: 700,
    fontSize: 20,
  },
  textRed: {
    color: '#D63030',
  },
  textBox: {
    backgroundColor: 'white',
    margin: -1,
    marginBottom: -2,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  textBoxWraper: {
    borderColor: '#D63030',
    borderWidth: 1,
    paddingBottom:1
  },
});
