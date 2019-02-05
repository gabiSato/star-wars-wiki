import React from 'react';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CardTitle from '../components/CardTitle';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';

const StarshipDetail = () => {
    const starship = this.props.navigation.getParam('result', {});

    return(
        <MainContainer>
            <Card>
                <CardTitle title={starship.name} />
                <CardSection>
                    <CardDetails name={"Model"} value={starship.model} />
                    <CardDetails name={"Starship class"} value={starship.starship_class} />
                    <CardDetails name={"Manufacturer"} value={starship.manufacturer} />
                    <CardDetails name={"Cost"} value={starship.cost_in_credits} />
                    <CardDetails name={"Lenght"} value={starship.length} />
                    <CardDetails name={"Crew"} value={starship.crew} />
                    <CardDetails name={"Passengers"} value={starship.passengers} />
                    <CardDetails name={"Max atmosphering speed"} value={starship.max_atmosphere_speed} />
                    <CardDetails name={"Hyperdrive rating"} value={starship.hyperdrive_rating} />
                    <CardDetails name={"MGLT"} value={starship.MGLT} />
                    <CardDetails name={"Cargo capacity"} value={starship.cargo_capacity} />
                    <CardDetails name={"Consumables"} value={starship.consumables} />
                </CardSection>
                <CardList 
                    title={"Films"}
                    list={starship.films}
                />
                <CardList 
                    title={"Pilots"}
                    list={starship.pilots}
                />
            </Card>
        </MainContainer>
    );
};

StarshipDetail.navigationOption= () => ({
    title: "Espaço Nave",
});

export default StarshipDetail;