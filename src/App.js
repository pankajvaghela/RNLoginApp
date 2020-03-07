import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { isLoggedIn } from './controllers/auth/LoginController';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn : -1,
    }
  }

  componentDidMount(){
    isLoggedIn().then(res => {
        console.log("response for is logged in",res);      
        this.setState(()=>({
          isLoggedIn : res ? 1 : 0
        }))
    })
  }

  render(){    
    return (
      <NavigationContainer>
        <View style={styles.container}>        
          { (this.state.isLoggedIn === -1) && <SplashScreen />}
          { (this.state.isLoggedIn === 0) && <LoginScreen />}
          { (this.state.isLoggedIn === 1) && <HomeScreen />}
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff"
  }
});
