import {createRef} from 'react';

import Input from '../../components/Input';

const lastNameInput = createRef();
const dobInput = createRef();
const emailInput = createRef();
const passwordInput = createRef();
const confirmPasswordInput = createRef();

export const registerFields = [
  {
    name: 'firstname',
    component: Input,
    placeholder: 'First Name',
    returnKeyType: 'next',
    autoComplete: 'name-given',
    textContentType: 'givenName',
    onSubmitEditing: () => {
      lastNameInput.current.focus();
    },
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: lastNameInput,
    name: 'lastname',
    component: Input,
    placeholder: 'Last Name',
    returnKeyType: 'next',
    autoComplete: 'name-family',
    textContentType: 'familyName',
    onSubmitEditing: () => {
      dobInput.current.focus();
    },
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: dobInput,
    name: 'birthDate',
    component: Input,
    placeholder: 'Birth Date',
    returnKeyType: 'next',
    autoComplete: 'birthdate-full',
    onSubmitEditing: () => {
      emailInput.current.focus();
    },
    isDatePicker: true,
    validate: value => {
      if (!value) {
        return 'Required...';
      }
      return '';
    },
  },
  {
    innerRef: emailInput,
    name: 'email',
    component: Input,
    placeholder: 'Email',
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
    returnKeyType: 'next',
    autoComplete: 'password-new',
    textContentType: 'newPassword',
    onSubmitEditing: () => {
      confirmPasswordInput.current.focus();
    },
  },
  {
    innerRef: confirmPasswordInput,
    name: 'confirmPassword',
    component: Input,
    placeholder: 'Confirm Password',
    secureTextEntry: true,
    returnKeyType: 'go',
    autoComplete: 'password-new',
    textContentType: 'newPassword',
  },
];

export const registerInitValues = {
  firstname: '',
  lastname: '',
  birthDate: '',
  email: '',
  password: '',
  confirmPassword: '',
};
