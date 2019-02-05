import React, { Component } from 'react';
import { Text, View } from 'react-native';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CardTitle from '../components/CardTitle';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';
import Link from '../components/Link';

//Tela de resultado da pesquisa de personagem, pega como parametros os dados de Main.js
class PersonDetail extends Component {
    static navigationOptions = {
        title: "Personagem",
    };

    render() {
        const person = this.props.navigation.getParam('result', {});
        const { homeworldContainer, homeworldText } = styles;

        return (
            <MainContainer>
                <Card>
                    <CardTitle title={person.name} />
                    <CardSection>
                        <CardDetails name={"Birth year"} value={person.birth_year} />
                        <CardDetails name={"Eye color"} value={person.eye_color} />
                        <CardDetails name={"Gender"} value={person.gender} />
                        <CardDetails name={"Hair color"} value={person.hair_color} />
                        <CardDetails name={"Height"} value={person.height} />
                        <CardDetails name={"Mass"} value={person.mass} />
                        <CardDetails name={"Skin color"} value={person.skin_color} />
                        <View style={homeworldContainer}>
                            <Text style={homeworldText}>Homeworld:</Text>
                            <Link item={person.homeworld} itemClass={""} />
                        </View>
                    </CardSection>
                    <CardList 
                        title={"Films"}
                        list={person.films}
                        listClass={"film"}
                    />
                    <CardList 
                        title={"Vehicles"}
                        list={person.vehicles}
                        listClass={"vehicle"}
                    />
                    <CardList 
                        title={"Starships"}
                        list={person.starships}
                        listClass={"starship"}
                    />
                </Card>
            </MainContainer>
        );
    }
}

const styles = {
    homeworldContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    homeworldText :{
        color: '#F2CB06', 
        paddingRight: 5
    }
};

export default PersonDetail;