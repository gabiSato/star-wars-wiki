import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CardDetails = (name, value) => (
    <Text style={styles.text}>{props.name}: {props.value}</Text>
);

 const styles = StyleSheet.create({
    text: {
        color: '#F2CB06'
    }
 });

 export default CardDetails;