// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardAnime from './components/CardAnime';
import animes from './data/animes.json';
import { Directions } from 'react-native-gesture-handler';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {
        animes.map((anime) => (
          <CardAnime
            key={anime.id}
            id={anime.id}
            title={anime.title}
            genre={anime.genre}
            episodes={anime.episodes}
            rating={anime.rating}
            image={anime.image}
          />
        ))
      }
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
});