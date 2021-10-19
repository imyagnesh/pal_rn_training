import React, {forwardRef, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../../assets/icons/visibility_off.svg';
import {BorderlessButton} from 'react-native-gesture-handler';

const Input = forwardRef(({secureTextEntry, ...props}, ref) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const iconProps = {
    height: 24,
    width: 24,
    fill: 'royalblue',
  };
  return (
    <View
      style={{
        margin: 10,
      }}>
      <TextInput
        ref={ref}
        style={styles.input}
        returnKeyType="go"
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        {...props}
      />
      {!!secureTextEntry && (
        <BorderlessButton
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 44,
            zIndex: 10,
            paddingHorizontal: 8,
            justifyContent: 'center',
          }}
          onPress={() => setisPasswordVisible(val => !val)}>
          {isPasswordVisible ? (
            <VisibilityIcon {...iconProps} />
          ) : (
            <VisibilityOffIcon {...iconProps} />
          )}
        </BorderlessButton>
      )}
    </View>
  );
});

export default Input;
