import React, { useState, useContext } from "react";
import { ActivityIndicator, SafeAreaView, FlatList } from "react-native";
import { PeopleContext } from "../context/People";
import MainContainer from "../components/MainContainer";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Card from "../components/Card";

const Main = () => {
  const [search, setSearch] = useState("");

  const {
    state: { loading, peoples },
    action: { searchPeople }
  } = useContext(PeopleContext);

  const handleOnPress = () => {
    searchPeople(search);
    // props.navigation.navigate("PersonDetail");
  };

  return (
    <MainContainer>
      <SearchBar
        placeholder="Digite o nome do personagem..."
        value={search}
        onChangeText={text => setSearch(text)}
      />
      <Button onPress={handleOnPress} name={"Pesquisar"} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#fff"
          style={{ height: "90%" }}
        />
      ) : (
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 11
          }}
        >
          <FlatList
            data={peoples}
            renderItem={({ item }) => <Card person={item} />}
            keyExtractor={item => item.name}
            ListEmptyComponent={() => <React.Fragment />}
          />
        </SafeAreaView>
      )}
    </MainContainer>
  );
};

export default Main;
