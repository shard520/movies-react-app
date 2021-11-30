import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';
import { Home, Add, Search, Edit } from '@mui/icons-material';

export const NavMenu = ({ handleNavClose }) => {
  return (
    <MenuList>
      <MenuItem onClick={handleNavClose}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Home color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>HOME</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleNavClose}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/add-movie"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Add color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Add a Movie</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleNavClose}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/search-movies"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Search color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Search Movies</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleNavClose}>
        <Link
          component={RouterLink}
          underline="hover"
          to="/edit-movie"
          color="primary"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Edit color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Edit Movie</ListItemText>
        </Link>
      </MenuItem>
    </MenuList>
  );
};
