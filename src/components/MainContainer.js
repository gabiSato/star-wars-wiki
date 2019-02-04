import React from 'react';
import { ImageBackground } from 'react-native';

const MainContainer = (props) => (
    <ImageBackground 
        source={require('./images/background.png')} 
        resizeMode="contain"
        style={styles.container}
    >
        {props.children}
    </ImageBackground>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000000"
    },
};

export default MainContainer;