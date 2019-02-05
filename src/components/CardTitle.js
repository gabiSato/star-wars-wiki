import React from 'react';
import { Text } from 'react-native';

import CardSection from './CardSection';


const CardTitle = ({ title }) => (
    <CardSection>
        <Text style={styles.title}>{title}</Text>
    </CardSection>
);

const styles = {
    title: {
        color: '#F2CB06',
        fontWeight: 'bold',
        fontSize: 15
    }
};

export default CardTitle;