import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Quadrado from './Quadrado';

export default props => {
  return (
    <SafeAreaView style={style.FlexV1}>
      <Quadrado cor="#ff801a" />
      <Quadrado cor="#50d1f6" />
      <Quadrado cor="#dd22c1" />
      <Quadrado cor="#8312ed" />
      <Quadrado cor="#36c9a7" />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'flex-start',
    // justifyContent: 'space-around',
    // justifyContent: 'space-between',
    // justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
});
