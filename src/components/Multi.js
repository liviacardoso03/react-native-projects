import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Estilo from './style';

function Comp() {
  return (
    <SafeAreaView>
      <Text style={Estilo.fontG}>Comp #Oficial</Text>
    </SafeAreaView>
  );
}

function Comp1() {
  return (
    <SafeAreaView>
      <Text style={Estilo.fontG}>Comp #02</Text>
    </SafeAreaView>
  );
}

function Comp2() {
  return (
    <SafeAreaView>
      <Text style={Estilo.fontG}>Comp #03</Text>
    </SafeAreaView>
  );
}

export {Comp1, Comp2};
export default Comp;
