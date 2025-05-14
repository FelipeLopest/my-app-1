import { View, Text } from "react-native";


export function Teste({titulo = 'Não informado', nome = 'Não informado'}) {
  return (    
    <View>
        <Text>Título: {titulo} |||  Nome: {nome}</Text>
    </View>
  );
}

export function Teste2({
    titulo = 'Não informado', 
    nome = 'Não informado'
}) {
  return (
    <View>
        <Text>Título 2: {titulo} |||  Nome 2: {nome}</Text>
    </View>
  );
}