import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Aleatorio from './components/Aleatorio';
//import MinMax from './components/MinMax';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <SafeAreaView style={style.App}>
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    {/* <MinMax min="3" max="20" />
    <MinMax min="1" max="94" />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
