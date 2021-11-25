import { Link as RouterLink } from 'react-router-dom';
import { Link, MenuItem } from '@mui/material';
import { GroupAdd, Login } from '@mui/icons-material';
import { Box } from '@mui/system';

const NotLoggedInMenu = ({ handleClose }) => {
  return (
    <Box>
      <MenuItem onClick={handleClose}>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="none"
          to="/login"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Login color="primary" sx={{ mr: '1.5rem' }} />
          Log In
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="none"
          to="/signup"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <GroupAdd color="primary" sx={{ mr: '1.5rem' }} />
          Sign Up
        </Link>
      </MenuItem>
    </Box>
  );
};

export default NotLoggedInMenu;
