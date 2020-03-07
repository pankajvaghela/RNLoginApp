import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventBus from 'react-native-event-bus';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import { isLoggedIn, E_LOGIN, E_LOGOUT } from './controllers/auth/LoginController';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isLoggedIn : -1,
    }
    this.checkLoginStatus = this.checkLoginStatus.bind(this)
  }

  componentDidMount(){
    this.checkLoginStatus()

    EventBus.getInstance().addListener(E_LOGIN, this.loginlistener = data => {
      this.checkLoginStatus();
    })

    EventBus.getInstance().addListener(E_LOGOUT, this.logoutlistener = data => {
      console.log(data);  
      this.checkLoginStatus();
    })
  }


componentWillUnmount() {
  EventBus.getInstance().removeListener(this.loginlistener);
  EventBus.getInstance().removeListener(this.logoutlistener);
}

  checkLoginStatus(){
    isLoggedIn().then(res => {
        console.log("response for is logged in",res);      
        this.setState(()=>({
          isLoggedIn : res ? 1 : 0
        }))
    })
  }

  render(){    
    return (
      <View style={styles.container}>        
        { (this.state.isLoggedIn === -1) && <SplashScreen />}
        { (this.state.isLoggedIn === 0) && <LoginScreen />}
        { (this.state.isLoggedIn === 1) && <HomeScreen />}
      </View>
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
