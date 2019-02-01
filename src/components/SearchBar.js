import React from 'react';
import { View, TextInput } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder }) => {
    const { view, input } = styles;

    return(
        <View style={view}>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={input} 
            />
        </View>
    );
};

const styles = {
    view: {
        height: 40,
        width: '90%',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#ddd',
    },
    input: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 18
    }
};

export default SearchBar;