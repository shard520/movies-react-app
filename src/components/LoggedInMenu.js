import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';
import { Logout, ManageAccounts } from '@mui/icons-material';

const LoggedInMenu = ({ handleAccountClose, handleLogOut }) => {
  return (
    <MenuList>
      <MenuItem onClick={handleAccountClose}>
        <Link
          component={RouterLink}
          underline="none"
          to="/account"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <ManageAccounts color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>My Account</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleAccountClose();
          handleLogOut();
        }}
      >
        <Link
          underline="none"
          to="/logout"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Logout color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default LoggedInMenu;
