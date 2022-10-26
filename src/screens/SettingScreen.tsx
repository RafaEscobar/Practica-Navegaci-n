import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const SettingScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.text }>Screen Settings...</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }

});
