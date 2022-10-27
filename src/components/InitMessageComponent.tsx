import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface MyTxt {
    text1: string
}

export class InitMessageComponent extends Component < MyTxt > {

    constructor(props: any){
        super(props);
    }

    render(){
        return(
            <View style={ styles.container }>
                <Text style={styles.text}> {this.props.text1} </Text>
            </View>
        )
    }
    
}

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
