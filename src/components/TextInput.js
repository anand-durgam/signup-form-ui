import React from "react";
import { Controller } from "react-hook-form";
import { InputField } from "./MUIComponents";

const TextInput = ({
  register,
  validation,
  label,
  type,
  onBlur,
  error,
  helperText,
  control,
  name,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <InputField
          {...field}
          {...register(name, validation)}
          label={label}
          type={type}
          onBlur={(e) => {
            onBlur(e.target.value);
            e.target.blur();
          }}
          fullWidth
          size="small"
          margin="normal"
          error={error}
          helperText={helperText}
          {...props}
        />
      )}
    />
  );
};

export default TextInput;
