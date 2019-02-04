import React from  'react';
import { TouchableOpacity, Text } from 'react-native';

const Link = ({ item }) => (
    <TouchableOpacity >
        <Text style={styles.link}>{item}</Text>
    </TouchableOpacity>
);

const styles = {
    link: {
        color: '#F2CB06'
    }
};

export default Link;