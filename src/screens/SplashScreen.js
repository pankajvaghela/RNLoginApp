import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, KeyboardAvoidingView  } from 'react-native';
import BasicLayout from './BasicLayout';

export default class SplashScreen extends React.Component {
    render(){
        return (
            <BasicLayout>
                <View>
                    <Text>Loading</Text>
                </View>
            </BasicLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});
