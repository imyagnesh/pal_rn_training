import {PureComponent} from 'react';
import {ActionSheetIOS} from 'react-native';
import ImagePickerHOC from './ImagePickerHOC';

class ImagePicker extends PureComponent {
  toggleImagePicker() {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Take Photo', 'Choose From Library'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      buttonIndex => {
        const {selectCamera, selectMedia} = this.props;
        if (buttonIndex === 1) {
          selectCamera();
        }
        if (buttonIndex === 2) {
          selectMedia();
        }
      },
    );
  }

  render() {
    return null;
  }
}

export default ImagePickerHOC(ImagePicker);
