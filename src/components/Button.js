import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, name }) => {
    const { button, text } = styles;

    return (
        <TouchableOpacity
            onPress={onPress} 
            style={button}
        >
            <Text style={text}>{name}</Text>
        </TouchableOpacity>
    );
}


const styles = {
    button: {
        height: 40,
        width: '90%',
        marginTop: 11,
        borderRadius: 15,
        backgroundColor: '#A9A9A9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: '#F8F8F8'
    }
};

export default Button;