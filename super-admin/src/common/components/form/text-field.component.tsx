import React from 'react';
import { useField } from 'formik';
import MuiTextField, { TextFieldProps } from '@material-ui/core/TextField';

export const TextFieldComponent: React.FunctionComponent<TextFieldProps> = (props) => {
  const [field, meta] = useField(props.name);
  const hasError = Boolean(meta && meta.touched && meta.error);

  return (
    <MuiTextField
      {...props}
      name={props.name ?? field.name}
      onChange={props.onChange ?? field.onChange}
      onBlur={props.onBlur ?? field.onBlur}
      value={props.value ?? field.value}
      error={hasError}
      helperText={hasError ? meta.error : ''}
      fullWidth={true}
      margin='none'
    />
  );
};
