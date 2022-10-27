import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const InitMessageComponent = ({ text1 }:any) => (
        <View style={ styles.container }>
            <Text style={styles.text}> {text1} </Text>
        </View>
)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    }

});
