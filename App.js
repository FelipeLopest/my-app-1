import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import CardContato from './components/CardContato';
import contatos from './data/contatos.json';
import personagem from './assets/personagem.json';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Personagem individual */}
      <CardContato
        id={personagem.id}
        name={personagem.name}
        email={personagem.email}
        phone={personagem.phone}
        foto={personagem.foto}
      />  

      {/* Lista de contatos */}
      {contatos.map((personagem) => (
        <CardContato
          key={personagem.id}
          id={personagem.id}
          name={personagem.name}
          email={personagem.email}
          phone={personagem.phone}
          foto={personagem.foto}
        />
      ))}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
