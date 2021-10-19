import React, {useRef} from 'react';
import {
  ImageBackground,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Typography from '../../components/Typography';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Input from '../../components/Input';
import {RectButton} from 'react-native-gesture-handler';
import Button from '../../components/Button';

const Login = () => {
  const {top} = useSafeAreaInsets();
  const passwordInput = useRef(null);
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
      <Input
        placeholder="Username"
        keyboardType="email-address"
        returnKeyType="next"
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        onSubmitEditing={() => {
          passwordInput.current.focus();
        }}
      />
      <Input
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        returnKeyType="go"
        autoComplete="password"
        textContentType="password"
      />

      <Button title="Login" />

      {/* <TouchableHighlight
        onPress={() => {}}
        style={{margin: 10, borderRadius: 8}}>
        <View
          style={{
            backgroundColor: 'royalblue',
            height: 44,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography variant="btn" style={{color: '#fff'}}>
            {`Login`.toUpperCase()}
          </Typography>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {}}
        style={{margin: 10, borderRadius: 8}}>
        <View
          style={{
            backgroundColor: 'royalblue',
            height: 44,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography variant="btn" style={{color: '#fff'}}>
            {`Login`.toUpperCase()}
          </Typography>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback onPress={() => {}}>
        <View
          style={{
            backgroundColor: 'royalblue',
            height: 44,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <Typography variant="btn" style={{color: '#fff'}}>
            {`Login`.toUpperCase()}
          </Typography>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={() => {}}>
        <View
          style={{
            backgroundColor: 'royalblue',
            height: 44,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
          }}>
          <Typography variant="btn" style={{color: '#fff'}}>
            {`Login`.toUpperCase()}
          </Typography>
        </View>
      </TouchableWithoutFeedback>

      <Pressable
        onPress={() => {}}
        android_ripple={{
          color: 'red',
        }}
        style={{
          backgroundColor: 'royalblue',
          height: 44,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}>
        <Typography variant="btn" style={{color: '#fff'}}>
          {`Login`.toUpperCase()}
        </Typography>
      </Pressable> */}
      {/* <Button title="Login" /> */}
    </ImageBackground>
  );
};

export default Login;
