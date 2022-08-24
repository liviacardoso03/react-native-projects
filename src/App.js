import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Quadrado from './components/layout/Quadrado';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import UsuarioLogado from './components/UsuarioLogado';
// import Família from './components/relacao/Família';
// import Membro from './components/relacao/Membro';
// import ParImpar from './components/ParImpar';
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
    <Quadrado />
    <Quadrado cor="#F00" />
    <Quadrado cor="#0F0" />
    {/* <DigiteSeuNome /> */}
    {/* <ListaProdutosV2 /> */}
    {/* <ListaProdutos /> */}
    {/* <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gmail.com'}} />
    <UsuarioLogado usuario={{nome: 'Ana'}} />
    <UsuarioLogado usuario={{email: 'carlos@empresa.com'}} /> */}
    {/* <Família>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Família>

    <Família>
      <Membro nome="Ana" sobrenome="Silva" />
      <Membro nome="Júlia" sobrenome="Silva" />
      <Membro nome="Gui" sobrenome="Silva" />
      <Membro nome="Rebeca" sobrenome="Silva" />
    </Família> */}
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
