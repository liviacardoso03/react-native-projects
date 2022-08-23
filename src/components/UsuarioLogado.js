import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Estilo from './style';
import If from './If';

export default props => {
  const usuario = props.usuario || {};

  return (
    <>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text style={Estilo.fontG}>Usuário Logado:</Text>
        <Text style={Estilo.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </>
  );
};