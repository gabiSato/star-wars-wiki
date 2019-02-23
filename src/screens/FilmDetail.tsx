import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardSection from '../components/CardSection';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';

type Props = NavigationScreenProps & {};

function renderItem( list: any ) {
    return list.map((item: any) => <Text>{item}</Text>);
}

//erro ao receber dados: não é um objeto, tipo indefinido
const FilmDetail = (props: Props) => {
    const film = props.navigation.getParam('result', {});
    console.log(film);
    return(
        <MainContainer>
            <Card>
                <CardTitle title={film.title} />
                <CardSection>
                    <CardDetails name={"Episode"} value={film.episode_id} />
                    <CardDetails name={"Opening crawl"} value={film.opening_crawl} />
                    <CardDetails name={"Director"} value={film.director} />
                    <CardDetails name={"Producer"} value={film.producer} />
                    <CardDetails name={"Release date"} value={film.realease_date} />
                </CardSection>
                <CardList title={"Species"}>
                    {renderItem(film.species)}
                </CardList>
                <CardList title={"Starships"}>
                    {renderItem(film.starships)}
                </CardList>
                <CardList title={"Vehicles"}>
                    {renderItem(film.vehicles)}
                </CardList>
                <CardList title={"Characters"}>
                    {renderItem(film.caracters)}
                </CardList>
                <CardList title={"Planets"}>
                    {renderItem(film.planets)}
                </CardList>
        </Card>
        </MainContainer>
    );
};

FilmDetail.navigationOptions = () => ({
    title: "Filme",
});

export default FilmDetail;