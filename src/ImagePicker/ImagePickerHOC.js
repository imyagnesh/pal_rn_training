import React, {PureComponent} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default WrappedComponent => {
  class HocComponent extends PureComponent {
    state = {
      profileImage: null,
    };

    setImage = res => {
      if (res?.assets[0]?.uri) {
        this.setState({profileImage: res?.assets[0]?.uri});
      }
    };

    selectCamera = () => {
      launchCamera(
        {
          cameraType: 'front',
          mediaType: 'photo',
        },
        this.setImage,
      );
    };

    selectMedia = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          selectionLimit: 1,
        },
        this.setImage,
      );
    };

    render() {
      const {forwardedRef, ...rest} = this.props;
      return (
        <WrappedComponent
          ref={forwardedRef}
          {...rest}
          {...this.state}
          selectCamera={this.selectCamera}
          selectMedia={this.selectMedia}
        />
      );
    }
  }
  return React.forwardRef((props, ref) => {
    return <HocComponent {...props} forwardedRef={ref} />;
  });
};
