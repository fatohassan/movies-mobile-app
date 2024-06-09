import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MoviesList() {
  const [movie, setMovie] = React.useState([]);
  const navigation = useNavigation();
  // const handlePress = () => {
  //   navigation.navigate('Movie-Item')
  // };

  React.useEffect(() => {
    getMoviesFromApiAsync(), [];
  });

  const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=300d2fb47e3f5f8d5e569ce27884acdc",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMovie(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerSep}>Now playing</Text>
      <FlatList
        data={movie}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate("Movie-Item", item)}
          >
            <Image
              style={{ width: "100%", height: 100 }}
              source={{
                uri: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
              }}
              resizeMode={"contain"}
            />
            <View>
              <Text style={{ color: "#FAFAFA" }}>{item.original_title}</Text>
              <Text style={{ color: "#777777" }}>{item.release_date}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.movieContainer}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 10,
  },
  movieItem: {
    paddingVertical: 5,
    margin: 5,
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 3 - 20,
  },
  movieContainer: {
    padding: 5,
    // flexDirection: "row",
    // flexWrap: "wrap",
  },
  headerSep: {
    borderBottomWidth: 2,
    borderColor: "blue",
    fontSize: 20,
    color: "#FAFAFA",
    padding: 5,
  },
});

export default MoviesList;
