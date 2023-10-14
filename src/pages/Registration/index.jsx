import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

import s from './Login.module.scss';

export const Registration = () => {
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
