import React from "react";
import { View, StyleSheet } from "react-native";

const MainContainer = props => (
  <View style={styles.container}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#131418",
    paddingTop: 22,
    paddingBottom: 22
  }
});

export default MainContainer;
