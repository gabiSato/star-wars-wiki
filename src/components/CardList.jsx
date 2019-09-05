import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CardSection from './CardSection';
import Link from './Link';

//Faz a listagem de itens e chama o componente Link
const CardList = () => (
    <View>
        <CardSection>
            <Text style={styles.title}>{props.title}</Text>
        </CardSection>
        <CardSection>
            {props.children}
        </CardSection>
    </View>
);

const styles = StyleSheet.create({
    title: {
        color: '#F2CB06',
        fontWeight: 'bold'
    }
});

export default CardList;