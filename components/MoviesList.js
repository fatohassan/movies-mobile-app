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

const persons = [
  {
    title: "Kingdom of the Planet of the Apes",
    id: 1,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
  },
  {
    title: "Civil War",
    id: 2,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: 'https://image.tmdb.org/t/p/w342/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg'
  },
  {
    title: "Godzilla x Kong: The New Empire",
    id: 3,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
  },
  {
    title: "Atlas",
    id: 4,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg",
  },
  {
    title: "Tarot",
    id: 5,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/gAEUXC37vl1SnM7PXsHTF23I2vq.jpg",
  },
  {
    title: "The Fall Guy",
    id: 6,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/tSz1qsmSJon0rqjHBxXZmrotuse.jpg",
  },
  {
    title: "Boy Kills World",
    id: 7,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/25JskXmchcYwj3jHRmcPm738MpB.jpg",
  },
  {
    title: "Furiosa: A Mad Max Saga",
    id: 8,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
  },
  {
    title: "The Garfield Movie",
    id: 9,
    description: "Action",
    releaseDate: "01-01-2024",
    imageUrl: "https://image.tmdb.org/t/p/w342/p6AbOJvMQhBmffd0PIv0u8ghWeY.jpg",
  },
];

function MoviesList() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerSep}>Now playing</Text>
      <FlatList
        data={persons}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movieItem}>
              <Image
                style={{ width: '100%', height: 200, }}
                source={{
                  uri: `${item.imageUrl}`,
                }}
                resizeMode={'contain'} 
                />
                <View>
              <Text  style={{color: '#FAFAFA'}}>{item.title}</Text>
              {/* <Text>{item.description}</Text> */}
              <Text style={{color: '#777777'}}>{item.releaseDate}</Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
  },
  headerSep: {
    borderBottomWidth: 2,
    borderColor: 'blue',
    fontSize: 20,
    color: '#FAFAFA',
    padding: 5,
  },
});

export default MoviesList;
