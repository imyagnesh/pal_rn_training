import React from 'react';
import PropTypes from 'prop-types';
import {Text, useColorScheme} from 'react-native';
import styles from './styles';

const Typography = ({variant, style, ...rest}) => {
  const colorScheme = useColorScheme();
  return (
    <Text
      maxFontSizeMultiplier={1.5}
      minimumFontScale={0.01}
      style={[
        styles[variant],
        {
          color: colorScheme === 'dark' ? '#fff' : '#000',
        },
        style,
      ]}
      {...rest}></Text>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'body1']).isRequired,
  style: Text.propTypes.style,
};

export default Typography;
