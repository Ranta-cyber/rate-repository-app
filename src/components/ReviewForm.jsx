import React from 'react';
import FormikTextInput from './FormikTextInput';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { StyleSheet, View, Button } from 'react-native';
import useReview from './../hooks/useReview';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    alignContent: 'space-between',
    height: 550,
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
    justifyContent: 'flex-start',
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
    marginTop: 50,
    width: 300,
    justifyContent: 'flex-start',
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

const ReviewFormContainer = ({ onSubmit, errors }) => {

  return (
    <Form>
      <View style={styles.container}>
        <View style={errors.username ? styles.textStyleError : styles.textStyle} > 
          <FormikTextInput name='username' placeholder='Repository owner name' testID='usernameReviewForm' />
         </View> 
        <View style={errors.reponame ? styles.textStyleError : styles.textStyle}>
          <FormikTextInput name='reponame' placeholder='Repository name' testID='reponameReviewForm' />
        </View>
        <View style={errors.rating ? styles.textStyleError : styles.textStyle}>
          <FormikTextInput name='rating' placeholder='Rating between 0 and 100' testID='ratingReviewForm' />
        </View>
        <View style={errors.reviewText ? styles.textStyleError : styles.textStyle}>
          <FormikTextInput multiline='true' name='reviewText' placeholder='Review' testID='reviewTextReviewForm' />
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Create a review" onPress={onSubmit} testID='submitReviewForm' />
        </View>
      </View>
    </Form>
  );

};

const ReviewForm = () => {
  const [addReview] = useReview(); 
  let history = useHistory();

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),

    reponame: yup
      .string()
      .required('Repository name is required'),

    rating: yup
      .number()
      .required('Rating is required')
      .min(0,'Rating must be between 0 and 100')
      .max(100,'Rating must be between 0 and 100'),

    reviewText: yup
      .mixed(),

  });

  const initialValues = {
    username: '',
    reponame: '',
    rating: '',
    reviewText: ''
  };

  const onSubmit = async (values) => {
    const { username, reponame, rating, reviewText } = values;
    console.log('onSubmit');
    try {
      const data = await addReview({ username, reponame, rating, reviewText });
      console.log('data:', data);
      history.push(`/repository/${data.data.createReview.repositoryId}`);

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
      }) => (<ReviewFormContainer onSubmit={handleSubmit} errors={errors} />
      )}
    </Formik>
  );
};

export default ReviewForm;