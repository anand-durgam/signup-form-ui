import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SnackbarMessage from "../SnackbarMessage";
import formConfig from "../../utils/formConfig";
import TextInput from "../TextInput";
import { ContainerBox, SubmitButton, Text } from "../MUIComponents";
import "./SignupFormRe.css";

const SignupForm = () => {
  const { register, control, handleSubmit, setValue, formState, reset } =
    useForm({
      defaultValues: {
        email: "",
        name: "",
        country: "",
        age: "",
        password: "",
      },
    });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  const onBlurHandler = (fieldName, value) => {
    setValue(fieldName, value, true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    showSnackbar("Form submitted successfully", "success");
    reset();
  };

  return (
    <ContainerBox
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 3,
        borderRadius: 5,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Text variant="h5">Signup Form</Text>

      {formConfig.map((fieldConfig) => (
        <TextInput
          key={fieldConfig.name}
          register={register}
          validation={fieldConfig.validation}
          control={control}
          name={fieldConfig.name}
          label={fieldConfig.label}
          type={fieldConfig.type}
          onBlur={(value) => onBlurHandler(fieldConfig.name, value)}
          error={formState.errors?.[fieldConfig.name]}
          helperText={formState.errors?.[fieldConfig.name]?.message}
        />
      ))}

      <SubmitButton
        type="submit"
        variant="contained"
        color="primary"
        disabled={!formState.isValid}
      >
        Submit
      </SubmitButton>

      <SnackbarMessage
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </ContainerBox>
  );
};

export default SignupForm;
