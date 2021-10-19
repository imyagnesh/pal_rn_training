import {Field, Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import Button from '../Button';

const Form = ({fields, btnProps, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit}) => (
        <View>
          {fields.map((x, i) => {
            let extraProps = {};
            if (i === fields.length - 1) {
              extraProps = {
                onSubmitEditing: handleSubmit,
              };
            }
            return <Field key={x.name} {...extraProps} {...x} />;
          })}
          <Button onPress={handleSubmit} {...btnProps} />
        </View>
      )}
    </Formik>
  );
};

export default Form;
