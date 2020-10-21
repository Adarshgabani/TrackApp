import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {

    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { token: '', errorMessage: '' };
        default:
            return state;
    }
};



const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
}
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' })
}
const signup = (dispatch) => async ({ email, password }) => {
    try {
        //1. make API request 
        const response = await trackerApi.post('/signup', { email, password });
        // 2.store token
        await AsyncStorage.setItem('token', response.data.token);
        // 3.update our state
        dispatch({ type: 'signin', payload: response.data.token });
        //4. navigate to mainFlow--> TrackList
        navigate('TrackList')
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with SignUp' })
    }
};




const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList')

    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Somthing went erong with sign in'
        })

    }

};




const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');

};


export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signup, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);