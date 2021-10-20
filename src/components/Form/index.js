import {FastField, Formik} from 'formik';
import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Typography from '../Typography';

const Form = ({fields, btnProps, ...rest}) => {
  return (
    <Formik {...rest}>
      {({handleSubmit, errors}) => {
        console.warn(errors);
        return (
          <View>
            {errors.serverError && (
              <Typography
                variant="h1"
                style={{
                  color: 'red',
                  textAlign: 'center',
                }}>
                {errors.serverError}
              </Typography>
            )}
            {fields.map((x, i) => {
              let extraProps = {};
              if (i === fields.length - 1) {
                extraProps = {
                  onSubmitEditing: handleSubmit,
                };
              }
              return <FastField key={x.name} {...extraProps} {...x} />;
            })}
            <Button onPress={handleSubmit} {...btnProps} />
          </View>
        );
      }}
    </Formik>
  );
};

export default Form;
