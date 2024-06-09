// import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieItemView from "./app/screens/MovieItemView";
import MoviesListView from "./app/screens/MoviesListView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MoviesListView}
          options={{
            title: "TrailSpot",
          }}
        />
        <Stack.Screen
          name="Movie-Item"
          component={MovieItemView}
          options={{ title: "Review Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(50, 50, 50, 0.85)",
//     margin: "20rem",
//   },
// });
