//on fait un menu en react native

import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Monstre(props) {
    if(!props.visible) {
        return <View style={styles.container}></View>
    }
        
    

    return (
        <View style={styles.container}>
        <Text>Menu : </Text> 
        <Button
            //on appele la variable title
            title={props.title}
            onPress={props.close}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});