import React from 'react';
import axios from 'axios';

export const PeopleContext = React.createContext({});

export class PeopleProvider extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            people: {}
        }
    }

    searchPerson = async (text) => {
        try {
            const url = `https://swapi.co/api/people/?search=${text}`;
            const response = await axios.get(url);
            this.setState({ people: response.data.results[0] });
            console.log(this.state.people);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        const value = {
            state: { ...this.state },
            action: {
                searchPerson: this.searchPerson,
            }
        };

        return (
            <PeopleContext.Provider value={value}>
                {this.props.children}
            </PeopleContext.Provider>
        );
    }
}