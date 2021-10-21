import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

const Splash = ({navigation: {navigate}}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('Login');
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
