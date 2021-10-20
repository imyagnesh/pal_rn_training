import React from 'react';
import {ImageBackground, StatusBar, KeyboardAvoidingView} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {registerFields, registerInitValues} from './fields';
import Form from '../../components/Form';
import differenceInYears from 'date-fns/differenceInYears';
import parse from 'date-fns/parse';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../../utils/axiosInstance';

const Register = ({navigation: {navigate}}) => {
  const headerHeight = useHeaderHeight();

  const onSubmit = async (values, actions) => {
    try {
      const {confirmPassword, birthDate, ...rest} = values;
      const parsedBirthDate = parse(birthDate, Config.DATE_FORMAT, new Date());
      const data = {
        ...rest,
        age: differenceInYears(new Date(), parsedBirthDate),
      };
      const res = await axiosInstance.post('register', data);
      await AsyncStorage.setItem('@userInfo', res.data.user);
      actions.resetForm();
    } catch (error) {
      actions.setErrors({serverError: error.response.data});
    }
  };

  return (
    <ImageBackground
      style={{flex: 1, paddingTop: headerHeight + 20}}
      source={require('../../../assets/images/backgroundImage/background-image.jpg')}>
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        <StatusBar hidden />
        <Form
          initialValues={registerInitValues}
          onSubmit={onSubmit}
          fields={registerFields}
          btnProps={{title: 'Register'}}
        />
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Register;
