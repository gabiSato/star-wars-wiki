import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { NavigationScreenProps } from 'react-navigation';
import axios from 'axios';

//Mostra o item da lista e faz ele funcionar como um link
//possui um método que é chamado quando se clica no item
//esse método cria um http request e carrega dados sobre o item em específico
//depois retorna esses dados para a tela de detalhes do item selecionado

//os dados que deveriam retornar a tela estão com erro de tipo indefinido

class Link extends Component {

    openLink = async () => {
        const response = await axios.get(this.props.item.toString());        
        const result = response.data;

        if( this.props.itemClass.toLowerCase() == "film" ) {
            return this.props.navigation.navigate("FilmDetail", { result });
        }
        if( this.props.itemClass.toLowerCase() == "starship" ) {
            return this.props.navigation.navigate("StarshipDetail", { result });
        }
        if( this.props.itemClass.toLowerCase() == "vehicle" ){
            return this.props.navigation.navigate("VehicleDetail", { result })
        }
        return; 
    };

    render() {
        return(
            <TouchableOpacity onPress={this.openLink}>
                <Text style={styles.list}>{this.props.item}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = {
    list: {
        color: '#F2CB06'
    }
};

export default withNavigation(Link);