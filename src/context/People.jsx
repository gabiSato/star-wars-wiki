import React from "react";
import axios from "axios";

export const PeopleContext = React.createContext({});

export class PeopleProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      peoples: [],
      loading: false
    };
  }

  searchPeople = text => {
    const url = `https://swapi.co/api/people/?search=${text}`;

    this.setState(
      {
        loading: true
      },
      async () => {
        try {
          const { status, data } = await axios.get(url);
          if (status === 200) {
            this.setState({
              peoples: data.results,
              loading: false
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  getAtribute = (key, atribute) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        try {
          const response = await axios.get(atribute);
          if (response.status === 200) {
            const people = this.state.people;
            people[key].push(response.data.data);
            this.setState({ people, loading: false });
          }
        } catch (error) {
          console.log(error);
        }
      }
    );
  };

  render() {
    const value = {
      state: { ...this.state },
      action: {
        searchPeople: this.searchPeople
      }
    };

    return (
      <PeopleContext.Provider value={value}>
        {this.props.children}
      </PeopleContext.Provider>
    );
  }
}
