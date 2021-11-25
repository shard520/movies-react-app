import { Link as RouterLink } from 'react-router-dom';
import { Link, MenuItem } from '@mui/material';
import { Logout, ManageAccounts } from '@mui/icons-material';
import { Box } from '@mui/system';

const LoggedInMenu = ({ handleClose, handleLogOut }) => {
  return (
    <Box>
      <MenuItem onClick={handleClose}>
        <Link
          className="navbar__link"
          component={RouterLink}
          underline="none"
          to="/account"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <ManageAccounts color="primary" sx={{ mr: '1.5rem' }} />
          My Account
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleClose();
          handleLogOut();
        }}
      >
        <Link
          className="navbar__link"
          underline="none"
          to="/logout"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <Logout color="primary" sx={{ mr: '1.5rem' }} />
          Logout
        </Link>
      </MenuItem>
    </Box>
  );
};

export default LoggedInMenu;
