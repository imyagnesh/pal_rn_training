import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../../assets/icons/visibility_off.svg';
import {BorderlessButton} from 'react-native-gesture-handler';
import Typography from '../Typography';

const Input = ({
  field: {name, value},
  form: {touched, errors, handleBlur, handleChange},
  secureTextEntry,
  innerRef,
  ...props
}) => {
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
        ref={innerRef}
        name={name}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        style={[styles.input]}
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
      {!!touched[name] && errors[name] && (
        <Typography variant="helperText" style={{color: 'red'}}>
          {errors[name]}
        </Typography>
      )}
    </View>
  );
};

export default Input;
