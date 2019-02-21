import React from 'react';
import { Text, StyleSheet } from 'react-native';

type Props = {
    name: string;
    value: string;
};

const CardDetails = (props: Props) => (
    <Text style={styles.text}>{props.name}: {props.value}</Text>
);

 const styles = StyleSheet.create({
    text: {
        color: '#F2CB06'
    }
 });

 export default CardDetails;