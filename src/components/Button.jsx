import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    const { button, text } = styles;
    const { onPress, name } = props;

    return (
        <TouchableOpacity
            onPress={onPress} 
            style={button}
        >
            <Text style={text}>{name}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        height: 40,
        width: '90%',
        marginTop: 11,
        borderRadius: 15,
        backgroundColor: '#F2CB06',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold'
    }
});

export default Button;