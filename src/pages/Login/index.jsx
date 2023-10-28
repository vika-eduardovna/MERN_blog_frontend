import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import s from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState:
    { errors, isValid }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) return alert('Authorization failed');
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }

  };

  useEffect(() => {

  }, [])

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Paper classes={{ root: s.root }}>
      <Typography classes={{ root: s.title }} variant="h5">
        Log in
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={s.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Enter your email' })}
          fullWidth
        />
        <TextField
          className={s.field}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter your password' })}
          fullWidth />
        <Button
          disabled={!isValid}
          type="submit"
          size="large"
          variant="contained"
          fullWidth>
          Log in
        </Button>
      </form>
    </Paper>
  );
};
