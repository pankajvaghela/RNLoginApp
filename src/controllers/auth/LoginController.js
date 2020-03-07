import AsyncStorage from '@react-native-community/async-storage';

const IS_LOGGED_IN = "isLoggedIn";
const USER = 'user';
const PROVIDER = 'provider';

export const saveLogin = async (user, provider="email") => {
    try {
        console.log("checking if saved ... ");

        let loggedIn = await isLoggedIn();
        console.log("checking if saved ... ",loggedIn);

        if(loggedIn) {
            console.log("user already Saved. cancelling ... ");
            return ;
        }
        let data = [
            [USER,  JSON.stringify(user) ],
            [IS_LOGGED_IN, JSON.stringify(true) ],
            [PROVIDER, JSON.stringify(provider)]
        ]

        await AsyncStorage.multiSet(data, (err)=>{
            console.log(err);
        });

        console.log("Saved user");
        
        return true;
    } catch (e) {
      // saving error
    }
}

export const logout = async () => {
    await AsyncStorage.multiRemove([USER, IS_LOGGED_IN])
    console.log("Logged Out");
    return true;
} 

export const isLoggedIn = async () => {
    return await AsyncStorage.getItem(IS_LOGGED_IN, (err, res)=>{
        if(err){
            return false;
        }
        return JSON.parse(res);
    });
}

export const getUser = async () => {
    return await AsyncStorage.getItem(USER,(err, res)=>{
        if(err){
            return null;
        }
        return JSON.parse(res);
    });
}
export const getProvider = async () => {
    return  await AsyncStorage.getItem(PROVIDER, "email");
}