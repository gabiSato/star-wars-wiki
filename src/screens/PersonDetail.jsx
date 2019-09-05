import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CardTitle from '../components/CardTitle';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';
import Link from '../components/Link';

function renderItem( list, listClass) {
    return list.map((item) => <Link key={item} item={item} itemClass={listClass}/>);
}

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
                    <CardList title={"Films"}>
                        {renderItem(person.films, "Films")}
                    </CardList>
                    <CardList title={"Starships"}>
                        {renderItem(person.starships, "Starships")}
                    </CardList>
                    <CardList title={"Vehicles"}>
                        {renderItem(person.vehicles, "Vehicles")}
                    </CardList>
                </Card>
            </MainContainer>
        );
    }
}

const styles = StyleSheet.create({
    homeworldContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    },
    homeworldText :{
        color: '#F2CB06', 
        paddingRight: 5
    }
});

export default PersonDetail;