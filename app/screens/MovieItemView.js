import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../shared/card";

function MovieItemView({ navigation, route }) {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <Text style={styles.title}>{route.params.original_title}</Text>
          <Text>{route.params.overview}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
  },
});

export default MovieItemView;
