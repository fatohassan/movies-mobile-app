import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Card from "../../shared/card";

function MovieItemView({ route }) {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.imgView}>
          <Image
            style={styles.Img}
            source={{
              uri: `https://image.tmdb.org/t/p/w1280/${route.params.poster_path}`,
            }}
            resizeMode={"stretch"}
          />
        </View>
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
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: "#323357",
  },
  Img: {
    aspectRatio: 1,
  },
  imgView: { borderRadius: 5, borderWidth: 1 },
});

export default MovieItemView;
