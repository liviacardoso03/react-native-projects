import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput} from 'react-native';
import Estilo from './style';

export default props => {
  const [nome, setNome] = useState('Teste');

  return (
    <SafeAreaView>
      <Text style={Estilo.fontG}>{nome}</Text>
      <TextInput
        style={Estilo.fontG}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={nome => setNome(nome)}
      />
    </SafeAreaView>
  );
};
