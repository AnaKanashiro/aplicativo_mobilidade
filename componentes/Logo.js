import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Logo() {
    return (
        <View style={styles.logoContainer}>
            <Text style={styles.logoText}>
                <Text style={styles.boldText}>Mobilidade</Text>Fluxo
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
    },
    logoText: {
        fontSize: 35,
        color: 'rgb(255, 255, 201)',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default Logo;