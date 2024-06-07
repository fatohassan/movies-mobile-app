import React from "react";
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

const persons = [
  {
    id: "1",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Earnest Green",
  },
  {
    id: "2",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Winston Orn",
  },
  {
    id: "3",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Carlton Collins",
  },
  {
    id: "4",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Malcolm Labadie",
  },
  {
    id: "5",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Michelle Dare",
  },
  {
    id: "6",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Carlton Zieme",
  },
  {
    id: "7",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Jessie Dickinson",
  },
  {
    id: "8",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Julian Gulgowski",
  },
  {
    id: "9",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Ellen Veum",
  },
  {
    id: "10",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Lorena Rice",
  },

  {
    id: "11",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Carlton Zieme",
  },
  {
    id: "12",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Jessie Dickinson",
  },
  {
    id: "13",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Julian Gulgowski",
  },
  {
    id: "14",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Ellen Veum",
  },
  {
    id: "15",
    date: "01-02-2024",
    img: "../app/assets/favicon.png",
    name: "Lorena Rice",
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
            <View>
            <Text>{item.name}</Text>
            <Text>{item.date}</Text>
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
    backgroundColor: 'grey',
    padding: 10,
  },
  movieItem: {
    paddingVertical: 5,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: (Dimensions.get('window').width /3) - 20,
    backgroundColor: 'red',
    
  },
  movieContainer: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
    
  },
  headerSep: {
    borderBottomWidth: 1,
    fontSize: 20
  },
});

export default MoviesList;
