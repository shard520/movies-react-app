import React, { useState } from 'react';
import { IconButton, Menu } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import NotLoggedInMenu from './NotLoggedInMenu';
import LoggedInMenu from './LoggedInMenu';
import { NavMenu } from './NavMenu';

const NavBar = ({ user, handleLogOut }) => {
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);
  const [navAnchorEl, setNavAnchorEl] = useState(null);
  const accountOpen = Boolean(accountAnchorEl);
  const navOpen = Boolean(navAnchorEl);

  const handleAccountMenu = event => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const handleNavMenu = event => {
    setNavAnchorEl(event.currentTarget);
  };

  const handleNavClose = () => {
    setNavAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Box sx={{ mr: 'auto' }}>
          <IconButton
            id="navButton"
            size="large"
            aria-label="navigation menu"
            aria-controls="nav-menu-appbar"
            aria-haspopup="true"
            aria-expanded={navOpen ? 'true' : undefined}
            onClick={handleNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="nav-menu-appbar"
            anchorEl={navAnchorEl}
            keepMounted
            open={navOpen}
            onClose={handleNavClose}
          >
            <NavMenu handleNavClose={handleNavClose} />
          </Menu>
        </Box>

        <Box>
          <IconButton
            id="accountButton"
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            aria-expanded={accountOpen ? 'true' : undefined}
            onClick={handleAccountMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={accountAnchorEl}
            keepMounted
            open={accountOpen}
            onClose={handleAccountClose}
          >
            {user ? (
              <LoggedInMenu
                handleAccountClose={handleAccountClose}
                handleLogOut={handleLogOut}
              />
            ) : (
              <NotLoggedInMenu handleAccountClose={handleAccountClose} />
            )}
          </Menu>
        </Box>
      </ul>
    </nav>
  );
};

export default NavBar;
