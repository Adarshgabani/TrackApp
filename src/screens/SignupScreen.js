import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);


    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>

            <View style={styles.containerStyle}>
                <NavigationEvents onWillFocus={clearErrorMessage} />
                <AuthForm
                    headerText='SignUp for Tracker'
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign Up"
                    onSubmit={signup}
                />
                <NavLink
                    routName='Signin'
                    text='Already have an account? Sign In instead'
                />
            </View>
        </SafeAreaView>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: () => false,
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SignupScreen;