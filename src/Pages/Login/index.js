import React, {useEffect, useRef, useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Typography from '../../components/Typography';
import {loginFields, loginInitValues} from './fields';
import Form from '../../components/Form';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Button from '../../components/Button';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const Login = () => {
  const passwordInput = useRef(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const opacity = useSharedValue(1);

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener('keyboardWillShow', () => {
      setIsKeyboardVisible(true);
      opacity.value = 0;
    });
    const keyboardWillHide = Keyboard.addListener('keyboardWillHide', () => {
      setIsKeyboardVisible(false);
      opacity.value = 1;
    });
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
      opacity.value = 0;
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
      opacity.value = 1;
    });
    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
      keyboardDidShow.remove();
      keyboardDidHide.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
    };
  });

  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../../assets/images/backgroundImage/background-image.jpg')}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <StatusBar hidden />
        {/* <Animated.View
          style={[
            {
              height: 100,
              width: 100,
              backgroundColor: 'red',
              borderRadius: 50,
            },
            animatedStyle,
          ]}></Animated.View>
        <Button
          title="Move Ball"
          onPress={() => {
            translateX.value = 200;
          }}
        /> */}
        <View style={{flex: 1, justifyContent: 'center', opacity: 1}}>
          <AnimatedFastImage
            source={{
              uri: 'https://reactjs.org/logo-og.png',
              priority: FastImage.priority.high,
            }}
            style={[
              {
                height: 100,
                aspectRatio: 2 / 2,
                alignSelf: 'center',
              },
              animatedStyle,
            ]}
            resizeMode="cover"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <Typography variant="h1" style={{textAlign: 'center'}}>
            Login
          </Typography>
          <Form
            initialValues={loginInitValues}
            onSubmit={values => {
              console.warn(values);
            }}
            fields={loginFields}
            btnProps={{title: 'Login'}}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
