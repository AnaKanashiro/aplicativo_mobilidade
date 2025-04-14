import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo.js';

function Header() {
    return (
        <View style={styles.header}>
            <Logo />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgb(236, 241, 255)',
        width: '100%', 
        height: 130,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column', 
        top: 0,  
    },
});

export default Header;