import React from "react";
import {
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
      <Text style={styles.headerSep}>Now Playing</Text>
      <FlatList
        data={movie}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.movieItem}
            onPress={() => navigation.navigate("Movie-Item", item)}
          >
            <Image
              style={styles.Img}
              source={{
                uri: `https://image.tmdb.org/t/p/w1280${item.backdrop_path}`,
              }}
              resizeMode={"contain"}
            />
            <View>
              <Text style={styles.title}>{item.original_title}</Text>
              <Text style={{ color: "#777777" }}>{item.release_date}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    padding: 10,
  },
  movieItem: {
    marginVertical: 5,
    marginHorizontal: 5,
    width: "30%",
  },
  Img: {
    width: "100%",
    height: 100,
  },
  headerSep: {
    borderBottomWidth: 2,
    borderColor: "#1d81e2",
    fontSize: 20,
    color: "#FAFAFA",
    padding: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#FAFAFA",
  },
});

export default MoviesList;
