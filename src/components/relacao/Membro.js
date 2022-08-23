import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Estilo from '../style';

export default props => {
  return (
    <Text style={Estilo.fontG}>
      {props.nome} {props.sobrenome}
    </Text>
  );
};
