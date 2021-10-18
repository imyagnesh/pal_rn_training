import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Login from './src/Pages/Login';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaProvider>
      <Login />
    </SafeAreaProvider>
  );
};

export default App;
