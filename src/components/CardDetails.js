import React from 'react';
import { Text } from 'react-native';

const CardDetails = ({ name, value }) => (
    <Text style={styles.text}>{name}: {value}</Text>
);

 const styles = {
    text: {
        color: '#F2CB06'
    }
 };

 export default CardDetails;