import React, { Component } from 'react';

import MainContainer from '../components/MainContainer';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

class Main extends Component {
  static navigationOptions = {
    title: "Star Wars Wiki",
    
  };

  state = { search: '' };

  render() {
    return (
      <MainContainer>
        <SearchBar 
          placeholder="Digite o nome do personagem..."
          value={this.state.search} 
          onChangeText={search => this.setState({ search })} 
        />
        <Button 
          onPress={this.Button} 
          name={"Pesquisar"} 
        />
      </MainContainer>
    );
  }
}

export default Main;