import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>ONEBITHEALTH</Text>
      <Text>
        Altura
      </Text>
      <TextInput placeholder='Ex: 1.75' keyboardType="numeric" />
      <Text>
        Peso
      </Text>
      <TextInput placeholder='Ex: 86.300' keyboardType="numeric" />
      <Button title='Calcular'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
