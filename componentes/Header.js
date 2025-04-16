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
        backgroundColor: 'rgb(79, 160, 149))',
        width: '100%', 
        height: 120,
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'column', 
        top: 0,  
    },
});

export default Header;