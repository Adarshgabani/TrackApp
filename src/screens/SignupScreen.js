import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(state);
    return (
        <View style={styles.containerStyle}>
            <Spacer>
                <Text h3>SignUp for Tracker</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />

            <Input
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            {state.errorMessage ? <Text style={styles.errorMessageStyle}>{state.errorMessage}</Text> : null}
            <Spacer>
                <Button title="SignUp" onPress={() => signup({ email, password })} />
            </Spacer>
        </View>
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
    },
    errorMessageStyle: {
        color: 'red',
        fontSize: 16,
        marginLeft: 10,
        marginBottom: 15
    }
});

export default SignupScreen;