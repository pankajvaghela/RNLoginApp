import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import BasicLayout from './BasicLayout';
import { getUser, getProvider, logout } from '../controllers/auth/LoginController';

export default class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            user : {},
            isLoading: false
        }
    }

    componentDidMount(){
        getUser().then((res) => {
            this.setState((state)=>({
                user : JSON.parse(res)
            }));
        })
        getProvider().then((res) => {
            this.setState((state)=>({
                ...state,
                provider : JSON.parse(res)
            }));
        })
    }

    onLogout(){
        logout();
    }

    render(){
        return (
            <BasicLayout>
                <View>
                    <Text style={[styles.mb]}>You are Logged in</Text>
                    
                    <View style={[styles.mb]}>
                        {!!this.state.provider &&(<Text>Provider : {this.state.provider} </Text>)}
                        {!!this.state.user.email &&(<Text>Email : {this.state.user.email} </Text>)}
                    </View>

                    <View>
                        <TouchableNativeFeedback 
                            onPress={this.onLogout.bind(this)}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                                <View style={[styles.logoutBtn]} >
                                    <Text style={styles.logoutBtnText} >Logout</Text>
                                    { this.state.isLoading && <ActivityIndicator size="small" color="#fff" style={{marginLeft:10}}/> }
                                </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </BasicLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    mb:{
        marginBottom:20
    },
    logoutBtn: {
        flexDirection: "row",
        justifyContent:"center",
        backgroundColor: "#4B178B",
        margin:10,
        padding:10,
        paddingHorizontal:30,
        borderRadius:3
    },
        logoutBtnText:{
        color:"white",
        marginRight: 0
    }
});
