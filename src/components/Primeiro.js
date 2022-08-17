import React from 'react';
import {Text} from 'react-native';

import Estilo from './style';

export default () => {
  console.warn('Opa!'); //Pop-up de aviso
  return <Text style={Estilo.fontG}>Primeiro!</Text>;
};
