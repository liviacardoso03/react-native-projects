import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import Estilo from '../style';

import Produtos from './Produtos';

export default props => {
  const produtoRender = ({item: p}) => {
    return (
      <Text style={Estilo.fontM}>
        {p.id}) {p.nome} - R${p.preco}
      </Text>
    );
  };

  return (
    <>
      <Text style={Estilo.fontG}>Lista de Produtos V2</Text>
      <FlatList
        data={Produtos}
        keyExtractor={i => `${i.id}`} //Vai gerar cada uma das chaves
        renderItem={produtoRender}
      />
    </>
  );
};
