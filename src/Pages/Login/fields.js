import {createRef} from 'react';
import Checkbox from '../../components/Checkbox';

import Input from '../../components/Input';

const passwordInput = createRef();

export const loginFields = [
  {
    name: 'username',
    component: Input,
    placeholder: 'Username',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    autoCapitalize: 'none',
    autoComplete: 'email',
    textContentType: 'emailAddress',
    onSubmitEditing: () => {
      passwordInput.current.focus();
    },
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: passwordInput,
    name: 'password',
    component: Input,
    placeholder: 'Password',
    secureTextEntry: true,
    returnKeyType: 'go',
    autoComplete: 'password',
    textContentType: 'password',
  },
  {
    name: 'rememberMe',
    component: Checkbox,
  },
];

export const loginInitValues = {
  username: '',
  password: '',
};
