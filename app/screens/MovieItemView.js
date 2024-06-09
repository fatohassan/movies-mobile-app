import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../shared/card";

function MovieItemView({ route }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.title}>{route.params.original_title}</Text>
        <Text>{route.params.overview}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
  },
});

export default MovieItemView;
