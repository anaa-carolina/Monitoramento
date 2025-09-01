import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  const [energia, setEnergia] = useState('');
  const [sono, setSono] = useState('');
  const [estresse, setEstresse] = useState('');
  const [sugestao, setSugestao] = useState('');

  const gerarSugestao = () => {
    const energiaNum = parseInt(energia);
    const sonoNum = parseInt(sono);
    const estresseNum = parseInt(estresse);

    if (
      isNaN(energiaNum) ||
      isNaN(sonoNum) ||
      isNaN(estresseNum) ||
      energiaNum < 1 ||
      energiaNum > 10 ||
      sonoNum < 1 ||
      sonoNum > 10 ||
      estresseNum < 1 ||
      estresseNum > 10
    ) {
      setSugestao('Por favor, insira valores entre 1 e 10 para todos os campos.');
      return;
    }

    if (energiaNum < 4 && sonoNum < 5) {
      setSugestao('Tente dormir mais cedo hoje e evite telas antes de dormir.');
    } else if (estresseNum > 7) {
      setSugestao('Faça uma pausa, respire fundo ou experimente meditação guiada.');
    } else if (energiaNum > 7 && sonoNum > 7 && estresseNum < 4) {
      setSugestao('Você está indo muito bem. Continue com seus hábitos saudáveis.');
    } else {
      setSugestao('Mantenha uma rotina equilibrada e cuide da sua alimentação.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Monitoramento de Saúde</Text>
      <Text style={styles.subtitle}>Avalie seu bem-estar de hoje (1 a 10)</Text>

      <TextInput
        style={styles.input}
        placeholder="Nível de energia"
        keyboardType="numeric"
        value={energia}
        onChangeText={setEnergia}
      />

      <TextInput
        style={styles.input}
        placeholder="Qualidade do sono"
        keyboardType="numeric"
        value={sono}
        onChangeText={setSono}
      />

      <TextInput
        style={styles.input}
        placeholder="Nível de estresse"
        keyboardType="numeric"
        value={estresse}
        onChangeText={setEstresse}
      />

      <TouchableOpacity style={styles.botao} onPress={gerarSugestao}>
        <Text style={styles.botaoTexto}>Ver Sugestão</Text>
      </TouchableOpacity>

      {sugestao !== '' && <Text style={styles.sugestao}>{sugestao}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#efd9faff',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 18,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#7e4c92ff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sugestao: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
  },
});
