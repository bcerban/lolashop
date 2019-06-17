import { AsyncStorage } from 'react-native';

const TOKEN = 'token';

export const getToken = async () => {
    try {
        return await AsyncStorage.getItem(TOKEN);
    } catch (error) {
        console.log(error.message);
    }
}
    
export const saveToken = async (token) => {
    try {
        await AsyncStorage.setItem(TOKEN, token);
        return getToken();
    } catch (error) {
        console.log(error.message);
    }
}

export const clearSession = async () => {
    try {
        await AsyncStorage.removeItem(TOKEN);
        return 'ok';
    } catch (error) {
        console.log(error.message);
    }
}