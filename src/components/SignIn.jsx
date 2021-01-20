import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';

import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    /*  display: 'flex',
     flex: 1,
     paddingTop: Constants.statusBarHeight,
     backgroundColor: 'white',     //'#ECF0F1',
     padding: 10,
     flexWrap: 'wrap',
     justifyContent: 'space-between',
     flexDirection: 'row',
     alignItems: 'flex-start',
     alignContent: 'flex-start' */
    //flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    //flexWrap: 'wrap',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    height: 500,
    //justifyContent: 'space-around',
    //padding: 50,
    //margin: 30,
  },

  textStyle: {
    color: 'black',
    height: 50,
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    flexGrow: 0,
    lineHeight: 6,
    flexDirection: 'row',
    padding: 20,
    top: 20,
    
    // fontWeight: 700,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'White',
    flexGrow: 0,
    borderWidth: 2,
    borderRadius: 10,
    top: 20
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

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  return (

    <>
      <Formik style={styles.flexContainer} initialValues={initialValues} onSubmit={onSubmit}>
        <View >
          <View >
            <FormikTextInput  style={styles.textStyle} name="username" placeholder="username" />
          </View>
          <View>
            <FormikTextInput style={styles.textStyle} name="password" placeholder="password" />
          </View>
          <View >
            <Button style={styles.buttonStyle} type="submit" title="Submit" />
          </View>
        </View>
      </Formik>
    </>

  );
};

export default SignIn;