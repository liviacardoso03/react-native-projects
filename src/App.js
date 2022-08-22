import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ParImpar from './components/ParImpar';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
// import Contador from './components/Contador';
// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Button from './components/Button';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
//import MinMax from './components/MinMax';
// import Primeiro from './components/Primeiro';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <SafeAreaView style={style.App}>
    <ParImpar num={3} />
    {/* <Diferenciar /> */}
    {/* <ContadorV2 /> */}
    {/* <Pai /> */}
    {/* <Contador /> */}
    {/*
    <Pai />
    <Contador />
    <Button />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"
    />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <Aleatorio min={10} max={60} />
    <MinMax min="3" max="20" />
    <MinMax min="1" max="94" />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
    */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
