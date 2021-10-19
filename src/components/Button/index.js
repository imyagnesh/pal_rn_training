import React from 'react';
import {View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import Typography from '../Typography';
import styles from './styles';

const Button = ({title, btnStyle, textStyle, ...props}) => {
  return (
    <RectButton style={[styles.btn, btnStyle]} {...props}>
      <View accessible accessibilityRole="button">
        <Typography variant="btn" style={[{color: '#fff'}, textStyle]}>
          {title.toUpperCase()}
        </Typography>
      </View>
    </RectButton>
  );
};

export default Button;

{
  /* <TouchableHighlight
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
      </Pressable> */
}
{
  /* <Button title="Login" /> */
}
