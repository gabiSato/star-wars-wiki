import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
    children: React.ReactNode;
};

const CardSection = (props: Props) => (
    <View style={styles.cardSection}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    cardSection: {
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: '#F2CB06',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10
    }
});

export default CardSection;