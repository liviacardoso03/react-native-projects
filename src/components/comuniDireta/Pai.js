import React from 'react';
import Filho from './Filho';

import Button from 'react-native';

export default props => {
  let x = 13;
  let y = 100;
  return (
    <Button onPress={console.warn('Chegou aqui')} />

    // <>
    //   <Filho a={x} b={y} />
    //   <Filho a={x + 100} b={y + 200} />
    // </>
  );
};
