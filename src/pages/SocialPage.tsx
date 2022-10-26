import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const SocialPage = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.text }>Pagina de redes sociales</Text>
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

})