import React from 'react';
/* import FormikTextInput from './FormikTextInput';
import { Formik, useField } from 'formik'; */

import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black',     //'#ECF0F1',
    padding: 30,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    alignContent: 'flex-start'
  },

  textStyle: {
    color: 'black',
    width: 100,
    height: 50,
   // fontWeight: 700,
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

/* const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
}; */

const SignIn = () => {
  return(
    <View style={styles.flexContainer}>
      <Text style={styles.textStyle}>The sign in view</Text>
    </View>
  );
}; 
 /*  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      </Formik>

      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
    </>*/

export default SignIn;