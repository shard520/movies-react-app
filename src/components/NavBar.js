import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Link, Menu } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import NotLoggedInMenu from './NotLoggedInMenu';
import LoggedInMenu from './LoggedInMenu';

const NavBar = ({ user, handleLogOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        >
          Add a Movie
        </Link>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="hover"
          to="/search-movies"
          color="primary.contrastText"
          sx={{ mr: 'auto' }}
        >
          Search Movies
        </Link>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {user ? (
            <LoggedInMenu
              handleClose={handleClose}
              handleLogOut={handleLogOut}
            />
          ) : (
            <NotLoggedInMenu handleClose={handleClose} />
          )}
        </Menu>
      </ul>
    </nav>
  );
};

export default NavBar;
