import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CardSection from './CardSection';
import Link from './Link';

type Props = {
    title: string;
    list: any;
    listClass: string;
};

//Faz a listagem de itens e chama o componente Link
const CardList = (props: Props) => (
    <View>
        <CardSection>
            <Text style={styles.title}>{props.title}</Text>
        </CardSection>
        <CardSection>
            {props.list.map(item => (<Link key={item} item={item} itemClass={props.listClass} />))}
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