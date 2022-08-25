import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Estilo from '../style';

export default ({num}) => {
  return (
    <SafeAreaView style={style.Container}>
      <Text style={[Estilo.fontG, style.Num]}>{num}</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  Container: {
    height: 70,
    width: 50,
    backgroundColor: '#000',
    margin: 5,
    borderRadius: 25,
  },

  Num: {
    color: '#FFF',
    fontSize: 25,
  },
});
