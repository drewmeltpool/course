import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from 'yup';
import {EMAIL_REGEX} from "../../utils/helpers";

const formValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, "less then 3 characters")
    .matches(EMAIL_REGEX, 'incorrect email')
    .required('this field is required'),
  password: yup
    .string()
    .min(5, 'less then 5 characters')
    .required('this field is required'),
  confirmPassword: yup
    .string()
    .min(5, 'less then 5 characters')
    .required('this field is required')
});

const FormikForm = () => {
  const handleSubmit = (values, {setSubmitting, setErrors}) => {
    if(values.password !== values.confirmPassword) {
      setErrors({confirmPassword: 'passwords do not matche'})
    }
    console.log(values);
    setTimeout(() => setSubmitting(false), 2000)
  };

  return (
    <Formik
      initialValues={{
        email: 'gogi@go.com',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      {
        ({isSubmitting, isValid, errors, touched}) => (<Form>
          <Field name='email' type='email'/>
          {touched.email && errors.email && <ErrorMessage name='email'/>}

          <Field name='password' type='password'/>
          {touched.password && errors.password && <ErrorMessage name='password'/>}

          <Field name='confirmPassword' type='password'/>
          {touched.confirmPassword && errors.confirmPassword && <ErrorMessage name='confirmPassword'/>}

          <Field type='submit' value='sign in' disabled={!isValid || isSubmitting}/>
        </Form>)
      }
    </Formik>
  );
};

export default FormikForm;