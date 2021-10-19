import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Typography from '../Typography';
import styles from './styles';

const Button = ({title, btnStyle, textStyle, ...props}) => {
  return (
    <RectButton style={[styles.btn, btnStyle]} {...props}>
      <View accessible accessibilityRole="button">
        <Typography variant="btn" style={[{color: '#fff'}, textStyle]}>
          {title.toUpperCase()}
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;
