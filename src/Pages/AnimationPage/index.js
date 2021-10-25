import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Gesture from './Gesture';

const Swiper = () => {
  const [container, setContainer] = useState(null);

  return (
    <View
      onLayout={({nativeEvent: {layout}}) => setContainer(layout)}
      style={{flex: 1}}>
      <Gesture {...container} />
    </View>
  );
};

export default Swiper;

// import React from 'react';
// import {View} from 'react-native';
// import FastImage from 'react-native-fast-image';
// import {
//   PanGestureHandler,
//   TapGestureHandler,
// } from 'react-native-gesture-handler';
// import Animate, {
//   useSharedValue,
//   useAnimatedStyle,
//   withSpring,
//   interpolate,
//   interpolateColor,
//   useAnimatedGestureHandler,
//   useDerivedValue,
// } from 'react-native-reanimated';
// import {mixColor} from 'react-native-redash';
// import Button from '../../components/Button';
// const AnimatedFastImage = Animate.createAnimatedComponent(FastImage);

// const AnimationPage = () => {
//   const originatedPoint = 0;
//   const x = useSharedValue(originatedPoint);
//   const y = useSharedValue(originatedPoint);
//   const pressed = useSharedValue(false);

//   const backgroundColor = useDerivedValue(() =>
//     mixColor(pressed.value, '#ff3884', '#38ffb3'),
//   );
//   //   const translateX = useSharedValue(0);

//   //   const moveBall = () => {
//   //     if (translateX.value === 0) {
//   //       translateX.value = 200;
//   //     } else {
//   //       translateX.value = 0;
//   //     }
//   //   };

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: x.value,
//         },
//         {
//           translateY: y.value,
//         },
//         {
//           scale: pressed.value ? 1.2 : 1,
//         },
//       ],
//       backgroundColor: backgroundColor.value,
//     };
//     // return {
//     //   transform: [
//     //     {
//     //       scale: pressed.value ? 1.2 : 1,
//     //     },
//     //   ],
//     //   backgroundColor: pressed.value ? 'yellow' : 'blue',
//     // };
//     // return {
//     //   transform: [
//     //     {
//     //       translateX: withSpring(translateX.value),
//     //     },
//     //     {
//     //       scale: interpolate(
//     //         translateX.value,
//     //         [0, 50, 100, 150, 200],
//     //         [1, 1, 1, 1.2, 1.4],
//     //       ),
//     //     },
//     //   ],
//     //   backgroundColor: interpolateColor(
//     //     translateX.value,
//     //     [0, 200],
//     //     ['red', 'green'],
//     //   ),
//     // };
//   });

//   const event = useAnimatedGestureHandler({
//     onStart: (event, ctx) => {
//       pressed.value = true;
//       ctx.startX = x.value;
//       ctx.startY = y.value;
//     },
//     onActive: (event, ctx) => {
//       x.value = ctx.startX + event.translationX;
//       y.value = ctx.startY + event.translationY;
//     },
//     onEnd: (event, ctx) => {
//       pressed.value = false;
//       //   x.value = withSpring(originatedPoint);
//       //   y.value = withSpring(originatedPoint);
//     },
//   });

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <PanGestureHandler onGestureEvent={event}>
//         <Animate.View
//           style={[
//             {
//               height: 100,
//               width: 100,
//               borderRadius: 50,
//               backgroundColor: 'red',
//             },
//             animatedStyle,
//           ]}
//         />
//       </PanGestureHandler>
//       {/* <AnimatedFastImage /> */}
//       {/* <TapGestureHandler onGestureEvent={event}>
//         <Animate.View
//           style={[
//             {
//               height: 100,
//               width: 100,
//               borderRadius: 50,
//             },
//             animatedStyle,
//           ]}
//         />
//       </TapGestureHandler> */}
//       {/* <Button title="Move Button" onPress={moveBall} /> */}
//     </View>
//   );
// };

// export default AnimationPage;
