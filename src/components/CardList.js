import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import CardSection from './CardSection';
import Link from './Link';

//Faz a listagem de itens e chama o componente Link
const CardList = ({ title, list, listClass }) => (
    <View>
        <CardSection>
            <Text style={styles.title}>{title}</Text>
        </CardSection>
        <CardSection>
            {list.map(list => (<Link key={list} item={list} itemClass={listClass} />))}
        </CardSection>
    </View>
);

const styles = {
    title: {
        color: '#F2CB06',
        fontWeight: 'bold'
    }
};

export default CardList;