import React, {useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import styles from './styles';
import VisibilityIcon from '../../../assets/icons/visibility.svg';
import VisibilityOffIcon from '../../../assets/icons/visibility_off.svg';
import CalendarIcon from '../../../assets/icons/calendar.svg';
import {BorderlessButton} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import {format, parse} from 'date-fns';
import Typography from '../Typography';
import Config from 'react-native-config';

const Input = ({
  field: {name, value},
  form: {touched, errors, handleBlur, handleChange, setFieldValue},
  secureTextEntry,
  isDatePicker,
  innerRef,
  ...props
}) => {
  const [isPasswordVisible, setisPasswordVisible] = useState(false);
  const [open, setOpen] = useState(false);
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
      {!!isDatePicker && (
        <Pressable
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 44,
            zIndex: 10,
            paddingHorizontal: 8,
            justifyContent: 'center',
          }}
          onPress={() => setOpen(true)}>
          <CalendarIcon {...iconProps} />
        </Pressable>
      )}
      {!!isDatePicker && (
        <DatePicker
          modal
          mode="date"
          open={open}
          date={
            value ? parse(value, Config.DATE_FORMAT, new Date()) : new Date()
          }
          onConfirm={date => {
            setOpen(false);
            setFieldValue(name, format(date, Config.DATE_FORMAT));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
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
