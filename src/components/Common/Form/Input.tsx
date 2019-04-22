import React from "react";
import { FieldProps } from "formik";
import classnames from "classnames";

import { Input } from "antd";

const CustomInputComponet = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}: FieldProps) => (
  <div
    className={classnames({
      "has-error": touched[field.name] && errors[field.name]
    })}
  >
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="ant-form-explain">{errors[field.name]}</div>
    )}
  </div>
);

export default CustomInputComponet;