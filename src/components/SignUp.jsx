import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { StyleSheet, View, Button } from 'react-native';
import useSignIn from './../hooks/useSignIn';
import useSignUp from './../hooks/useUser';
import { useHistory } from "react-router-native";

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
    //lineHeight: 6,
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
    //lineHeight: 6,
    flexDirection: 'row',
    padding: 20,
    //top: 20,
    marginTop: 50
    /*  width: '90%',
     marginTop: 50 */
  },
  buttonStyle: {
    backgroundColor: 'blue',
    color: 'white',
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
});

export const SignUpContainer = ({ onSubmit, errors }) => {
  return (
    <Form>
      <View style={styles.container}>
        <View style={errors.username ? styles.textStyleError : styles.textStyle} >
          <FormikTextInput name='username' placeholder='username' testID='usernameSignIn' />
        </View>
        <View style={errors.password ? styles.textStyleError : styles.textStyle}>
          <FormikTextInput name='password' placeholder='password' secureTextEntry={true} testID='passwordSignUp' />

          <View>
            {/* <ErrorMessage errorValue={touched.password && errors.password} /> */}
          </View>
        </View>

        <View style={errors.password ? styles.textStyleError : styles.textStyle}>
          <FormikTextInput name='confirm' placeholder='confirm password' secureTextEntry={true} testID='passwordConfirm' />

          <View>
            {/* <ErrorMessage errorValue={touched.password && errors.password} /> */}
          </View>
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Submit" onPress={onSubmit} testID='submitSignIn' />
        </View>
      </View>
    </Form>
  );
};

const SignUp = () => {
  const [signIn] = useSignIn(); //get a token
  const [signUp] = useSignUp();
  let history = useHistory();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .max(30)
      .required('Username is required'),

    password: yup
      .string()
      .min(5, {message: 'Minimun characters 5'})
      .max(50, {message: 'Maximun characters 50'})
      .required('Pasword is required'),

    confirm: yup
      .string()
      .required('Pasword confirm is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),

  });

  const initialValues = {
    username: '',
    password: '',
    confirm: '',
  };

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log('onSubmit');
    try {
       const data = await signUp({ username, password });
       const data2 = await signIn({ username, password });
      /*console.log('data:', data);
      console.log('data2:', data2);
       */
      history.push("/");

    } catch (e) {
      console.log('error:', e);
    }

  };

  return (

    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit, errors
      }) => (<SignUpContainer onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};

export default SignUp;