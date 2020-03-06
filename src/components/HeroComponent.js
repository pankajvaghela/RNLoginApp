import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

var vWidth = Dimensions.get('window').width; //full width
var vHeight = Dimensions.get('window').height; //full height

var heroHeight = vHeight * 0.40;
var bgColor = '#4B178B';

var shapeSize = vWidth*2;

export default function HeroComponent() {
  return (
    <View style={styles.container} >
      <View style={styles.shape} >
        <Image style={styles.image} source={require('../assets/login_hero.svg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: vWidth,
    height: heroHeight,
    overflow: 'hidden', 
  },
  shape: {  
    backgroundColor: bgColor,
    borderRadius: shapeSize/2, 
    width: shapeSize,
    height: shapeSize,
    marginLeft: -(shapeSize/4),
    position: 'absolute',
    bottom: 0, 
    overflow: 'hidden', 
  },
  image: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  }
});
