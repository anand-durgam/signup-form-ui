import { Box, Button, TextField, Typography } from "@mui/material";

export const ContainerBox = (props) => {
  return <Box {...props}>{props.children}</Box>;
};

export const Text = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};

export const InputField = (props) => {
  return <TextField {...props}>{props.children}</TextField>;
};

export const SubmitButton = (props) => {
  return <Button {...props}>{props.children}</Button>;
};
