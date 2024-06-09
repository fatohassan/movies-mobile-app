import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MoviesList from "../../components/MoviesList";

function MoviesListView({ navigation }) {
  return (
    <View style={styles.container}>
      <MoviesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // headerContainer: {
  //   top: 10,
  //   margin: 5,
  // },
  text: {
    marginLeft: 10,
    top: 25,
    fontSize: 20,
  },
});

export default MoviesListView;
