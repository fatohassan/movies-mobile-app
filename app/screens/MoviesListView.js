import React from "react";
import {
  StyleSheet,
  View,
} from "react-native";
import MoviesList from "../../components/MoviesList";

function MoviesListView() {
  return (
    <View style={styles.container}>
      <MoviesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
  },
  
});

export default MoviesListView;
