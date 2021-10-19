import React, {useState} from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import CheckBoxIcon from '../../../assets/icons/check_box.svg';
import CheckBoxOutlineIcon from '../../../assets/icons/check_box_outline.svg';

const Checkbox = ({field: {name, value}, form: {setFieldValue}}) => {
  const [isChecked, setIsChecked] = useState(value);
  return (
    <View>
      <BorderlessButton
        onPress={() => {
          setIsChecked(val => {
            setFieldValue(name, !val);
            return !val;
          });
        }}>
        {isChecked ? (
          <CheckBoxIcon height={24} width={24} fill="red" />
        ) : (
          <CheckBoxOutlineIcon height={24} width={24} fill="red" />
        )}
      </BorderlessButton>
    </View>
  );
};

export default Checkbox;
