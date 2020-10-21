import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { Context as AuthCotext } from '../context/AuthContext';


const AccountScreen = () => {
    const { signout } = useContext(AuthCotext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }} >
            <Text>AccountScreen</Text>
            <Button title="Sign Out" onPress={signout} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default AccountScreen;