import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';


const NavLink = ({ navigation, text, routName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routName)}>
            <Spacer>
                <Text style={styles.linkStyle}>
                    {text}
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    linkStyle: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);