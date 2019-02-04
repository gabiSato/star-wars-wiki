import React from 'react';
import { Text, View } from 'react-native';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import Link from '../components/Link';

const PersonDetail = ({ navigation }) => {
    const { name, title, text, homeworldContainer, homeworldText } = styles;
    return (
        <MainContainer>
            <Card>
                <CardSection>
                    <Text style={name}>{navigation.state.params.result.name}</Text>
                </CardSection>
                <CardSection>
                    <Text style={text}>Birth year: {navigation.state.params.result.birth_year}</Text>
                    <Text style={text}>Eye color: {navigation.state.params.result.eye_color}</Text>
                    <Text style={text}>Gender: {navigation.state.params.result.gender}</Text>
                    <Text style={text}>Hair color: {navigation.state.params.result.hair_color}</Text>
                    <Text style={text}>Height: {navigation.state.params.result.height}</Text>
                    <Text style={text}>Mass: {navigation.state.params.result.mass}</Text>
                    <Text style={text}>Skin color: {navigation.state.params.result.skin_color}</Text>
                    <View style={homeworldContainer}>
                        <Text style={homeworldText}>Homeworld:</Text>
                        <Link item={navigation.state.params.result.homeworld} />
                    </View>
                </CardSection>
                <CardSection>
                    <Text style={title}>Films</Text>
                </CardSection>
                <CardSection>
                    {navigation.state.params.result.films.map(film => (<Link key={film} item={film}/>))}
                </CardSection>
                <CardSection>
                    <Text style={title}>Vehicles</Text>
                </CardSection>
                <CardSection>
                    {navigation.state.params.result.vehicles.map(vehicle => (<Link key={vehicle} item={vehicle}/>))}
                </CardSection>
                <CardSection>
                    <Text style={title}>Starships</Text>
                </CardSection>
                <CardSection>
                    {navigation.state.params.result.starships.map(starship => (<Link key={starship} item={starship}/>))}
                </CardSection>
            </Card>
        </MainContainer>
    );
};

PersonDetail.navigationOptions = () => ({
    title: "Personagem",
});

const styles = {
    name: {
        color: '#F2CB06',
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        color: '#F2CB06',
        fontWeight: 'bold'
    },
    text: {
        color: '#F2CB06'
    },
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