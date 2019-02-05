import React from 'react';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CardTitle from '../components/CardTitle';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';


const VehicleDetail = () => {
    const vehicle = this.props.navigation.getParam('result', {});

    return(
        <MainContainer>
            <Card>
                <CardTitle title={vehicle.name} />
                <CardSection>
                    <CardDetails name={"Model"} value={vehicle.model} />
                    <CardDetails name={"Vehicle class"} value={vehicle.vehicle_class} />
                    <CardDetails name={"Manufacturer"} value={vehicle.manufacturer} />
                    <CardDetails name={"Length"} value={vehicle.length} />
                    <CardDetails name={"Cost"} value={vehicle_cost_in_credits} />
                    <CardDetails name={"Crew"} value={vehicle.crew} />
                    <CardDetails name={"Passengers"} value={vehicle.passengers} />
                    <CardDetails name={"Max atmosphering speed"} value={vehicle.max_atmosphering_speed} />
                    <CardDetails name={"Cargo capacity"} value={vehicle.cargo_capacity} />
                    <CardDetails name={"Consumables"} value={vehicle.consumables} />
                </CardSection>
                <CardList 
                    title={"Films"}
                    list={vehicle.films}
                />
                <CardList 
                    title={"Pilots"}
                    list={vehicle.pilots}
                />
            </Card>
        </MainContainer>
    );
};

VehicleDetail.navigationOption = () => ({
    title: "Veículo",
});

export default VehicleDetail;