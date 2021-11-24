import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="hover"
          to="/"
          color="primary.contrastText"
        >
          HOME
        </Link>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="hover"
          to="/add-movie"
          color="primary.contrastText"
          sx={{ mr: 'auto' }}
        >
          Add a Movie
        </Link>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="hover"
          to="/login"
          color="primary.contrastText"
        >
          Log In
        </Link>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="hover"
          to="/signup"
          color="primary.contrastText"
        >
          Sign Up
        </Link>
      </ul>
    </nav>
  );
};
