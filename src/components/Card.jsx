import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { getImage } from "../utils/images";

const Card = ({ person }) => {
  const id = person.url.split("/")[5];
  const imageSource = getImage(id);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.content}>
        <Text style={styles.title}>{person.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: "90%",
    minHeight: 75,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: "#5a5f73",
    flexDirection: "row"
  },
  image: {
    height: 75,
    width: 75,
    marginTop: -8,
    marginLeft: 8,
    borderRadius: 5
  },
  content: {
    width: "100%",
    padding: 11
  },
  title: {
    color: "#fff",
    fontWeight: "600"
  }
});

export default Card;
