import React, {useState} from 'react';
import {View, Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DateSelector = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateSelector;
