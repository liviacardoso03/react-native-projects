import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Estilo from './style';

export default ({num = 0}) => {
  if (num % 2 === 0) {
    return (
      <SafeAreaView>
        <Text style={Estilo.fontG}>O resultado é: </Text>
        <Text style={Estilo.fontG}>Par</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Text style={Estilo.fontG}>O resultado é: </Text>
        <Text style={Estilo.fontG}>Ímpar</Text>
      </SafeAreaView>
    );
  }
};
