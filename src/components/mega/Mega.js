import React, {Component} from 'react';
import {Button, SafeAreaView, Text, TextInput} from 'react-native';
import Estilo from '../style';

import MegaNumeros from './MegaNumeros';

export default class Mega extends Component {
  state = {
    quantNumeros: this.props.quantNumeros,
    numeros: [],
  };

  alterarQuantNumero = quant => {
    this.setState({quantNumeros: quant});
  };

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  // gerarNumeros = () => {
  //   const numeros = Array(this.setState.quantNumeros)
  //     .fill()
  //     .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
  //     .sort((a, b) => a - b);
  //   this.setState({numeros});
  // };

  //Versão Alternativa
  gerarNumeros = () => {
    const {quantNumeros} = this.state;
    const numeros = [];

    for (let i = 0; i < quantNumeros; i++) {
      numeros.push(this.gerarNumeroNaoContido(numeros));
    }

    numeros.sort((a, b) => a - b);

    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumeros num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.fontM}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade Números"
          value={this.state.quantNumeros}
          onChangeText={this.alterarQuantNumero}
        />
        <Button title="GERAR" onPress={this.gerarNumeros} />

        <SafeAreaView
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </SafeAreaView>
      </>
    );
  }
}
