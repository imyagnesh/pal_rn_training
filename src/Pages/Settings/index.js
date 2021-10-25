import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {BorderlessButton} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import ImagePicker from '../../ImagePicker';

const Settings = ({products, cart}) => {
  const imagePickerRef = useRef(null);

  console.warn(products.loading);

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

const mapStateToProps = ({products, cart}) => {
  return {
    products,
    cart,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
