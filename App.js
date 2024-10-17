import { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularVantagem = () => {

    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (isNaN(precoAlcool) || isNaN(precoGasolina) || precoAlcool <= 0 || precoGasolina <= 0) {
      alert('Insira valores válidos.');
      return;
    }
    
    const div = precoAlcool / precoGasolina;

    if (div < 0.7) {
        setResultado('Abasteça com Álcool');
    } 
    else {
        setResultado('Abasteça com Gasolina');
    }
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Comparação de Combustivel</Text>

      <TextInput
        style={styles.input}
        placeholder="Preço do Álcool (R$)"
        keyboardType="numeric"
        value={alcool}
        onChangeText={(text) => setAlcool(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço da Gasolina (R$)"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={(text) => setGasolina(text)}
      />

      <Button title="Calcular" onPress={calcularVantagem} />

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}

      <Image source={require('./assets/gas.png')} style={styles.image}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#f3b61f'
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    width: '80%',
    marginBottom: 16,
  },

  result: {
    marginTop: 20,
    fontSize: 20,
    color: '#000',
  },

  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});