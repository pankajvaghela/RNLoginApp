import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView  } from 'react-native';
import HeroComponent from '../components/HeroComponent';
import TitleComponent from '../components/TitleComponent';

var vWidth = Dimensions.get('window').width; //full width

export default class BasicLayout extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <HeroComponent />
                <TitleComponent />     
                {this.props.children}
            </View>
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
