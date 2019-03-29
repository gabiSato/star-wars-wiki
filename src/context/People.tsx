import React from 'react';
import axios from 'axios';

interface IContext {
    state: State;
    action: {
        searchPerson(text: string): void;
    };
};

export const PeopleContext = React.createContext({} as IContext);

interface State {
    people: {},
};

export class PeopleProvider extends React.PureComponent<{}, State>{

    searchPerson = async (text: string) => {
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