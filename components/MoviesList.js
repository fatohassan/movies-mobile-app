import React from "react";
import { ScrollView, StyleSheet, View, Image, Text, TouchableWithoutFeedback } from "react-native";

function MoviesList(props) {
  return (
    <ScrollView style={styles.logo}>
      <Text style={{ fontSize: 20, margin: 4 }}>Now Playing</Text>
      <View style={styles.movieContainer}>
        <View>
          <TouchableWithoutFeedback>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
      </View>
      <Text style={{ fontSize: 20, margin: 4 }}>Popular</Text>
      <View style={styles.movieContainer}>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
      </View>
      <Text style={{ fontSize: 20, margin: 4 }}>Up Coming</Text>
      <View style={styles.movieContainer}>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => console.log("TAPPED")}>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Image source={require("../app/assets/favicon.png")} />
          </TouchableWithoutFeedback>
          <Text>Movie one</Text>
          <Text>2024-05-08</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "grey",
  },
  movieContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 15,
  },
});

export default MoviesList;
