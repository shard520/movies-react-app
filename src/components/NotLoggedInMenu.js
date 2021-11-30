import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';
import { GroupAdd, Login } from '@mui/icons-material';

const NotLoggedInMenu = ({ handleAccountClose }) => {
  return (
    <MenuList>
      <MenuItem onClick={handleAccountClose}>
        <Link
          component={RouterLink}
          underline="none"
          to="/login"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <Login color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Log In</ListItemText>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleAccountClose}>
        <Link
          component={RouterLink}
          underline="none"
          to="/signup"
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ListItemIcon>
            <GroupAdd color="primary" sx={{ marginTop: '-3px' }} />
          </ListItemIcon>
          <ListItemText>Sign Up</ListItemText>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default NotLoggedInMenu;
