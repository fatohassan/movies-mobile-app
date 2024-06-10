import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieItemView from "./app/screens/MovieItemView";
import MoviesListView from "./app/screens/MoviesListView";
import { Text, View } from "react-native";
// import SearchBar from "./components/SearchBar";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return (
    <View>
      <Text style={{ color: "#FAFAFA", fontWeight: "bold", fontSize: 20 }}>
        Trail
        <Text style={{ color: "#1d81e2" }}>Spot</Text>
      </Text>
      {/* <SearchBar /> */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MoviesListView}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "rgba(50, 50, 50, 0.85)",
            },
          }}
        />
        <Stack.Screen
          name="Movie-Item"
          component={MovieItemView}
          options={{
            title: "Details",
            headerTintColor: "#FAFAFA",
            headerStyle: {
              backgroundColor: "rgba(50, 50, 50, 0.85)",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
