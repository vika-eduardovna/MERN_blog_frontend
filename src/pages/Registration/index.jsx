import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

import s from './Login.module.scss';

export const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState:
    { errors, isValid }
  } = useForm({
    defaultValues: {
      fullName: '',
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
        Sign in
      </Typography>
      <div className={s.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField className={s.field} label="Full name" fullWidth />
      <TextField className={s.field} label="E-Mail" fullWidth />
      <TextField className={s.field} label="Password" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Sign in
      </Button>
    </Paper>
  );
};
