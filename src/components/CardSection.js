import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.cardSection}>
        {props.children}
    </View>
);

const styles = {
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
};

export default CardSection;