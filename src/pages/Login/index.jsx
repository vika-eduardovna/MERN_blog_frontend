import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import s from "./Login.module.scss";

export const Login = () => {
  return (
    <Paper classes={{ root: s.root }}>
      <Typography classes={{ root: s.title }} variant="h5">
        Log in
      </Typography>
      <TextField
        className={s.field}
        label="E-Mail"
        error
        helperText="Email is uncorrect"
        fullWidth
      />
      <TextField className={s.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Log in
      </Button>
    </Paper>
  );
};
