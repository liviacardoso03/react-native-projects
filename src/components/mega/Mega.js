import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../style';

export default class Mega extends Component {
  state = {
    quantNumeros: this.props.quantNumeros,
  };

  alterarQuantNumero = quant => {
    this.setState({quantNumeros: quant});
  };

  render() {
    return (
      <>
        <Text style={Estilo.fontM}>
          Gerador de Mega-Sena {this.state.quantNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="Quantidade Números"
          value={this.state.quantNumeros}
          onChangeText={this.alterarQuantNumero}
        />
      </>
    );
  }
}
