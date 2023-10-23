import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import s from './Header.module.scss';


export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      dispatch(logout())
    }
  };

  return (
    <div className={s.root}>
      <Container maxWidth="lg">
        <div className={s.inner}>
          <Link className={s.logo} to="/">
            <div>MERN BLOG</div>
          </Link>
          <div className={s.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Create an article</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Log out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Sign in</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
