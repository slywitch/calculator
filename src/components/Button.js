import React from 'react'
<<<<<<< HEAD
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const style = StyleSheet.create ({
=======
import { 
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native'

const styles = StyleSheet.create({
>>>>>>> 326c457784c67841d6d03a865abc11245f729ab4
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
<<<<<<< HEAD
=======
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
>>>>>>> 326c457784c67841d6d03a865abc11245f729ab4
    }
})

export default props => {
<<<<<<< HEAD
    return(
        <TouchableHighlight onPress={props.onClick}></TouchableHighlight>
=======
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick( props.label )}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
>>>>>>> 326c457784c67841d6d03a865abc11245f729ab4
    )
}