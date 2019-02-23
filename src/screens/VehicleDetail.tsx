import React from 'react';
import { Text } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';

import MainContainer from '../components/MainContainer';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import CardTitle from '../components/CardTitle';
import CardDetails from '../components/CardDetails';
import CardList from '../components/CardList';

type Props = NavigationScreenProps & {};

function renderItem( list: any ) {
    return list.map((item: any) => <Text>{item}</Text>);
}

const VehicleDetail = (props: Props) => {
    const vehicle = props.navigation.getParam('result', {});

    return(
        <MainContainer>
            <Card>
                <CardTitle title={vehicle.name} />
                <CardSection>
                    <CardDetails name={"Model"} value={vehicle.model} />
                    <CardDetails name={"Vehicle class"} value={vehicle.vehicle_class} />
                    <CardDetails name={"Manufacturer"} value={vehicle.manufacturer} />
                    <CardDetails name={"Length"} value={vehicle.length} />
                    <CardDetails name={"Cost"} value={vehicle.cost_in_credits} />
                    <CardDetails name={"Crew"} value={vehicle.crew} />
                    <CardDetails name={"Passengers"} value={vehicle.passengers} />
                    <CardDetails name={"Max atmosphering speed"} value={vehicle.max_atmosphering_speed} />
                    <CardDetails name={"Cargo capacity"} value={vehicle.cargo_capacity} />
                    <CardDetails name={"Consumables"} value={vehicle.consumables} />
                </CardSection>
                <CardList title={"Films"}>
                    {renderItem(vehicle.films)}
                </CardList>
                <CardList title={"Pilots"}>
                    {renderItem(vehicle.pilots)}
                </CardList>
            </Card>
        </MainContainer>
    );
};

VehicleDetail.navigationOption = () => ({
    title: "Veículo",
});

export default VehicleDetail;