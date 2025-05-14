import { View, Text } from "react-native";


export default function CardContato({
  id = "0",
  name = "Não informado",
  email = null,
  phone = "Não informado",
}) {
  return (    
    <View>
        <Text>ID: {id}</Text>
        <Text>Nome: {name}</Text>
        {email? <Text>Email: {email}</Text>:""}
        <Text>Telefone: {phone}</Text>
        <Text>----------------------------------</Text>
    </View>
  );
}
