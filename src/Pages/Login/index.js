import React, {useEffect} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  KeyboardAvoidingView,
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
} from 'react-native-reanimated';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const Login = ({navigation: {navigate}}) => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener('keyboardWillShow', () => {
      opacity.value = 0;
    });
    const keyboardWillHide = Keyboard.addListener('keyboardWillHide', () => {
      opacity.value = 1;
    });
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      opacity.value = 0;
    });
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
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
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
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
        <Typography
          variant="body2"
          style={{textAlign: 'center', color: '#fff', paddingVertical: 10}}>
          Don't have an account? Please{' '}
          <Typography
            onPress={() => navigate('Register')}
            variant="body1"
            style={{color: 'red'}}>
            Sign In
          </Typography>
        </Typography>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default Login;
