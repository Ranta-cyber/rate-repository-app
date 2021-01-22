import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik, Form, Field, useField } from 'formik';
import * as yup from 'yup';
import { StyleSheet, View, Button, Text } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    //flex: 1,
      display: 'flex',
     flexDirection: 'row',
     backgroundColor: 'white',
     alignItems: 'flex-start',
     alignContent: 'space-between',
     height: 500, 
     width: 300,
     flexWrap: 'wrap',
  },

  textStyle: {
    color: 'black',
    height: 80,
    backgroundColor: 'white',
   borderWidth: 2,
    borderRadius: 10, 
    flexGrow: 1,
    lineHeight: 6,
    flexDirection: 'row',
    padding: 20,
    //top: 20,
    marginTop: 50,
    width: 300,
    /*  width: '90%',
     marginTop: 50 */
  },
  textStyleError: {
    color: 'red',
    borderColor: 'red',
    height: 80,
    backgroundColor: 'white',
   borderWidth: 2,
    borderRadius: 10, 
    flexGrow: 1,
    lineHeight: 6,
    flexDirection: 'row',
    padding: 20,
    //top: 20,
    marginTop: 50
    /*  width: '90%',
     marginTop: 50 */
  },
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'White',
    flexGrow: 1,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20
  },
  item: {
    flexGrow: 0,
    width: 100,
    height: 100,
    top: 10
  },
  /*   scrollView: {
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
  
      },
    } */
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  
  password: yup
    .mixed()
    .required('Pasword is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

export const MyReactNativeForm = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
          <Form>
            <View style={errors.username ? styles.textStyleError : styles.textStyle} >
              <FormikTextInput name='username'
                placeholder='username'
              />

              {/* <ErrorMessage errorValue={touched.username && errors.username} /> */}
            </View>
            <View style={errors.password ? styles.textStyleError : styles.textStyle}>
              <FormikTextInput name='password'
                placeholder='password' 
                secureTextEntry={true}/>
                
                <View>
                  {/* <ErrorMessage errorValue={touched.password && errors.password} /> */}  
              </View>
            </View>
            <View  style={styles.buttonStyle}>
              <Button  type="submit" title="Submit" />
            </View>
          </Form>
        )}
      </Formik>
    </View >
  );
};

const SignIn = () => {
  return (

    <View style={styles.flexContainer}>
      <MyReactNativeForm />
    </View>

  );
};

export default SignIn;