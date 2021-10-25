import React from 'react';
import {View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withDecay,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';
import {CARD_HEIGHT, CARD_WIDTH} from './cartdUtils';
import Card from './Card';

const Gesture = ({width, height}) => {
  const boundX = width - CARD_WIDTH;
  const boundY = height - CARD_HEIGHT;
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: event => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX],
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY],
      });
    },
  });

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler {...{onGestureEvent}}>
        <Animated.View {...{style}}>
          <Card card={0} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Gesture;
