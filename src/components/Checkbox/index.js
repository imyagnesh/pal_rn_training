import React, {useState} from 'react';
import {View} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';
import CheckBoxIcon from '../../../assets/icons/check_box.svg';
import CheckBoxOutlineIcon from '../../../assets/icons/check_box_outline.svg';
import Typography from '../Typography';

const Checkbox = ({
  field: {name, value},
  form: {setFieldValue},
  text,
  containerStyle,
}) => {
  const [isChecked, setIsChecked] = useState(value);
  return (
    <View
      style={[
        {flexDirection: 'row', alignItems: 'center', margin: 10},
        containerStyle,
      ]}>
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
      {!!text && (
        <Typography variant="body1" style={{paddingLeft: 10}}>
          {text}
        </Typography>
      )}
    </View>
  );
};

export default Checkbox;
