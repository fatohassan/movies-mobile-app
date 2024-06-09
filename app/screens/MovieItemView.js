import React from "react";
import { View, Text } from "react-native";
import Card from "../../shared/card";

function MovieItemView({ navigation, route }) {
  return (
    <View>
      <Card>
        <Text>{route.params.original_title}</Text>
        <Text>{route.params.overview}</Text>
      </Card>
    </View>
  );
}

export default MovieItemView;
