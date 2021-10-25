import React from 'react';
import {Image} from 'react-native';
import {CARD_HEIGHT, CARD_WIDTH} from './cartdUtils';

const assets = [
  require('../../../assets/images/card1.png'),
  require('../../../assets/images/card2.png'),
  require('../../../assets/images/card3.png'),
  require('../../../assets/images/card4.png'),
  require('../../../assets/images/card5.png'),
  require('../../../assets/images/card6.png'),
];

const Card = ({card}) => {
  return (
    <>
      {assets.reverse().map(x => (
        <Image
          style={{
            width: CARD_WIDTH,
            height: CARD_HEIGHT,
            position: 'absolute',
          }}
          source={assets[x]}
        />
      ))}
    </>
  );
};

export default Card;
