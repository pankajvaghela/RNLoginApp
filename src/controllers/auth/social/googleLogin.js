import { GoogleSignin } from 'react-native-google-signin';
import firebase from 'react-native-firebase'

// Calling this function will open Google for login.
export const googleLogin = async () => {
  try {
    // add any configuration settings here:
    await GoogleSignin.configure({
      webClientId : "374863705755-jfob7k8uifi5cbln89t8sf4qrsu8rmg7.apps.googleusercontent.com",
      androidClientId : "374863705755-n7ielk8fmecbshvplurr6ih5riv62fg5.apps.googleusercontent.com",
      forceConsentPrompt:true,
    });

    const data = await GoogleSignin.signIn();

    // create a new firebase credential with the token
    const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
    // login with credential
    const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

    return firebaseUserCredential.user;
    
  } catch (e) {
    console.error(e);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
}

export const googleLogout = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.error(error);
  }
};