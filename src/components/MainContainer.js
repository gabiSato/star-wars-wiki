import React from 'react';
import { View } from 'react-native';

const MainContainer = (props) => (
    <View style={styles.container}>
        { props.children }
    </View>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000"
    }
};

export default MainContainer;