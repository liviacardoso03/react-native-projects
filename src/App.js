import React from 'react';
import {SafeAreaView} from 'react-native';

import Primeiro from './components/Primeiro';

import CompPadrao, {Comp1, Comp2} from './components/Multi';

export default () => (
  <SafeAreaView>
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro />
  </SafeAreaView>
);
