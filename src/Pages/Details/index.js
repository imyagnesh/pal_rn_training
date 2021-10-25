import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import RNVideo from 'react-native-video';
import Button from '../../components/Button';

const Details = () => {
  const videoRef = useRef();
  const [paused, setPaused] = useState(true);
  return (
    <View>
      <RNVideo
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 200,
          flex: 1,
          ...StyleSheet.absoluteFill,
        }}
        paused={paused}
        resizeMode="cover"
      />
      <Button
        title="Play"
        onPress={() => {
          setPaused(false);
        }}
      />
      <Button
        title="Pause"
        onPress={() => {
          setPaused(true);
        }}
      />
      <Button
        title="FullScreem"
        onPress={() => {
          videoRef.current.presentFullscreenPlayer();
        }}
      />
    </View>
  );
};

export default Details;
