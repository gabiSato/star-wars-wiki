import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

type Props = {
    children: React.ReactNode;
};

const MainContainer = (props: Props) => (
    <ImageBackground 
        source={require('./images/background.png')} 
        style={styles.container}
    >
        {props.children}
    </ImageBackground>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000"
    },
});

export default MainContainer;