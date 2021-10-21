import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BorderlessButton} from 'react-native-gesture-handler';
import ImagePicker from '../../ImagePicker';

const Settings = () => {
  const imagePickerRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);

  return (
    <View>
      <BorderlessButton
        style={{margin: 10, alignSelf: 'center'}}
        onPress={() => {
          imagePickerRef.current.toggleImagePicker();
        }}>
        {profileImage ? (
          <FastImage
            source={{
              uri: profileImage,
            }}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
            }}
          />
        ) : (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: '#BDBDBD',
              borderRadius: 50,
            }}
          />
        )}
      </BorderlessButton>
      <ImagePicker ref={imagePickerRef} />
    </View>
  );
};

export default Settings;
