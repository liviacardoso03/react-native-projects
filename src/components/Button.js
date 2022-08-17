import React from 'react';
import {Button} from 'react-native';
import Estilo from './style';

export default props => {
  function executar() {
    console.warn('Executando #01...');
  }

  return (
    <>
      <Button title="Executar #01!" onPress={executar} />
      {/* Traz a execução de uma função ao clicar no 'onPress' */}

      <Button
        title="Executar #02!"
        onPress={function () {
          //Define diretamente uma função dentro do 'onPress'
          console.warn('Executando #02...');
        }}
      />

      <Button
        title="Executar #03!"
        onPress={() => console.warn('Executando #03...')}
        //Define diretamente uma arrow function dentro do 'onPress'
      />
    </>
  );
};
