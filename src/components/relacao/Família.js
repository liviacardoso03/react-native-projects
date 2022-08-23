import React from 'react';
import Membro from './Membro';
import {Text} from 'react-native';
import Estilo from '../style';

export default props => {
  return (
    <>
      <Text style={Estilo.fontG}>Membros da Família:</Text>
      {props.children}
    </>
  );
};
