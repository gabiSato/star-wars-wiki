import React, { Component } from 'react';
import {Text } from 'react-native';

import MainContainer from './src/components/MainContainer';
import SearchBar from './src/components/SearchBar';
import Button from './src/components/Button';

class App extends Component {
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
          onPress={this.onPress} 
          name={"Pesquisar"} 
        />
      </MainContainer>
    );
  }
}

export default App;