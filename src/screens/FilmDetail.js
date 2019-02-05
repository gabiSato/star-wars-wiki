import React from 'react';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import CardSection from '../components/CardSection';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';

//erro ao receber dados: não é um objeto, tipo indefinido
const FilmDetail = () => {
    const film = this.props.navigation.getParam('result', {});
    console.log(film);
    return(
        <MainContainer>
            <Card>
                <CardTitle value={film.title} />
                <CardSection>
                    <CardDetails name={"Episode"} value={film.episode_id} />
                    <CardDetails name={"Opening crawl"} value={film.opening_crawl} />
                    <CardDetails name={"Director"} value={film.director} />
                    <CardDetails name={"Producer"} value={film.producer} />
                    <CardDetails name={"Release date"} value={film.realease_date} />
                </CardSection>
                <CardLis 
                    title={"Species"}
                    list={film.species}
                />
                <CardList 
                    title={"Starships"}
                    list={film.starships}
                />
                <CardList 
                    title={"Vehicles"}
                    list={film.vehicles}
                />
                <CardList 
                    title={"Characters"}
                    list={film.caracters}
                />
                <CardList 
                    title={"Planets"}
                    list={film.planets}
                />
        </Card>
        </MainContainer>
    );
};

FilmDetail.navigationOptions = () => ({
    title: "Filme",
});

export default FilmDetail;