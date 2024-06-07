import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MoviesListView from './app/screens/MoviesListView';
import HeaderView from './app/screens/HeaderView';
import MovieItemView from './app/screens/MovieItemView';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderView />
      <StatusBar style="auto" />
      <MoviesListView />
      {/* <NavigationContainer>
        <MovieItemView />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(50, 50, 50, 0.85)',
    margin: '20rem',
  },
});
