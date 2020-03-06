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
        <View style={[styles.textBox]}>
          <Text style={[styles.title, styles.textRed]}> SCENE </Text>
        </View>
      </View>
      <Text style={[styles.title]}> HAI </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: vWidth,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontWeight: "700",
    fontSize: 30,
  },
  textRed: {  
    color: '#D63030',
  },
  textBoxWraper: {
    borderColor: '#D63030',
    borderWidth: 6,
    backgroundColor: "#fff",
    borderBottomStartRadius: 40,
    borderTopEndRadius: 40,
  },
  textBox: {
    margin: -5,
    marginBottom: -5,
    backgroundColor: "#fff",
  },
});
