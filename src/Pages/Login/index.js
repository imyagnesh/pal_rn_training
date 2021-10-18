import React from 'react';
import {
  Image,
  ImageBackground,
  PixelRatio,
  View,
  StatusBar,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Typography from '../../components/Typography';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Login = () => {
  const {top} = useSafeAreaInsets();
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/backgroundImage/background-image.jpg')}>
      <StatusBar hidden />
      <FastImage
        source={{
          uri: 'https://reactjs.org/logo-og.png',
          priority: FastImage.priority.high,
        }}
        style={{
          height: 100,
          aspectRatio: 2 / 2,
          marginTop: top + 10,
          alignSelf: 'center',
        }}
        resizeMode="cover"
      />
      {/* <FastImage
        source={{
          uri: 'https://res.cloudinary.com/dnxzgxivo/image/upload/f_auto,h_520/v1594972531/IMG_3191_removebg_761a268743.png',
          priority: FastImage.priority.low,
        }}
        style={{
          height: 200,
        }}
        resizeMode="cover"
      /> */}
      <Typography variant="h1" style={{textAlign: 'center'}}>
        Login
      </Typography>
    </ImageBackground>
  );
};

export default Login;
