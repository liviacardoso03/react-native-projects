import React from 'react';
import {Platform, SafeAreaView, Text} from 'react-native';
import Estilo from './style';

export default _ => {
  if (Platform.OS === 'android') {
    return <Text style={Estilo.fontG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Estilo.fontG}>iOS</Text>;
  } else {
    return <Text style={Estilo.fontG}>Eita!!</Text>;
  }
};
