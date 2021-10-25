import {Dimensions} from 'react-native';

const {width: screenWidth} = Dimensions.get('screen');

const ratio = 228 / 362;
export const CARD_WIDTH = screenWidth * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
