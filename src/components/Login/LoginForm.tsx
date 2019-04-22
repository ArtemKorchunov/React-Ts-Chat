import React from "react";
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik";
import { Button } from "antd";
import styled from 'styled-components';
import * as Yup from 'yup';

import { CustomInput as InputComponent } from "../Common/Form";

const FormStyled = styled(Form)`
  width: 100%;
  max-width: 291px;
`;

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = ({ isSubmitting }: FormikProps<FormValues>) => {
  return (
    <FormStyled>
      <Field type="email" name="email" placeholder="Email" component={InputComponent} />
      <Field type="password" name="password" placeholder="Password" component={InputComponent} />
      <Button type="primary" block disabled={isSubmitting}>
        Login
      </Button>
    </FormStyled>
  );
};

export default withFormik<{}, FormValues>({
  mapPropsToValues: () => {
    return {
      email: "",
      password: ""
    };
  },

  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(4, 'Not less than 4 symbols')
      .required('Required')
  }),

  handleSubmit: values => {
    // do submitting things
  }
})(LoginForm);
