import React, {PureComponent} from 'react';
import {View} from 'react-native';
import Typography from '../components/Typography';
import Modal from 'react-native-modal';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ImagePickerHOC from './ImagePickerHOC';

class ImagePicker extends PureComponent {
  state = {
    open: false,
  };

  toggleImagePicker = () => {
    this.setState(({open}) => ({open: !open}));
  };

  render() {
    const {open} = this.state;
    const {selectCamera, selectMedia} = this.props;
    return (
      <Modal isVisible={open}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{backgroundColor: '#fff'}}>
            <View style={{padding: 10}}>
              <Typography variant="body1" style={{color: 'red'}}>
                Select Profile Image
              </Typography>
            </View>
            <Pressable style={{padding: 10}} onPress={selectCamera}>
              <Typography variant="body1">Select From Camera...</Typography>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={selectMedia}>
              <Typography variant="body1">Select From Library...</Typography>
            </Pressable>
            <Pressable style={{padding: 10}} onPress={this.toggleImagePicker}>
              <Typography variant="body1">Cancel</Typography>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ImagePickerHOC(ImagePicker);
