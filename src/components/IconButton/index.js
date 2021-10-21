import React from 'react';
import {BorderlessButton} from 'react-native-gesture-handler';

const IconButton = ({icon: Icon, ...rest}) => {
  return (
    <BorderlessButton
      {...rest}
      style={{
        padding: 10,
      }}>
      <Icon height={24} width={24} fill="red" />
    </BorderlessButton>
  );
};

export default IconButton;
