import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }} >
            <View style={styles.containerStyle}>
                <NavigationEvents onWillFocus={clearErrorMessage} />
                <AuthForm
                    headerText='Sign In for Tracker'
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign In"
                    onSubmit={signin}
                />
                <NavLink
                    routName='Signup'
                    text="Don't have an account? Go back to sign up."
                />
            </View>

        </SafeAreaView>
    );
};

SigninScreen.navigationOptions = () => {
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



export default SigninScreen;