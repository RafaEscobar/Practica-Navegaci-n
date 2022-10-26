import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const InfoPage = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.text }>Pagina Información....</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    }

});