import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MoviesListView from './app/screens/MoviesListView';
import HeaderView from './app/screens/HeaderView';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderView />
      <StatusBar style="auto" />
      <MoviesListView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '20rem'
  },
});
