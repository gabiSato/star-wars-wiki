import React from 'react';
import { View, Text } from 'react-native';

const PersonDetail = ({ navigation }) => (
    <View>
        <Text>Nome: {navigation.state.params.result.name}</Text>
    </View>
);

PersonDetail.navigationOptions = () => ({
    title: "Personagem",
});

export default PersonDetail;