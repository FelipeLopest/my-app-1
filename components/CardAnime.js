// components/CardAnime.js
import { View, Text, Image, StyleSheet } from "react-native";

export default function CardAnime({
  id = "0",
  title = "Título desconhecido",
  genre = "Gênero não especificado",
  episodes = "?",
  rating = "N/A",
  image = null,
}) {
  return (    
    <View style={styles.card}>
      {image && (
        <Image 
          source={{ uri: image }} 
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text>Gênero: {genre}</Text>
        <Text>Episódios: {episodes}</Text>
        <Text>Avaliação: {rating}/10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
});