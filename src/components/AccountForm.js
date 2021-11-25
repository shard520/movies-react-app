import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

import '../styles/form.css';

const AccountForm = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  currentPass,
  setCurrentPass,
  handleAccountSubmit,
  handleDeleteAccount,
}) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="form" onSubmit={handleAccountSubmit}>
        <TextField
          variant="outlined"
          label="Update Username"
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Update Email"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Update Password"
          id="password"
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Enter Current Password to Confirm"
          id="currentPassword"
          type="password"
          required={true}
          value={currentPass}
          onChange={e => setCurrentPass(e.target.value)}
        />

        <Button variant="contained" type="submit" sx={{ p: 2 }}>
          Update Account
        </Button>
        <Box sx={{ width: '100%' }}>
          <Button
            variant="contained"
            color="error"
            type="button"
            sx={{ p: 2 }}
            onClick={handleDeleteAccount}
          >
            DELETE ACCOUNT
          </Button>
          <Typography>Warning, this action cannot be undone.</Typography>
        </Box>
      </form>
    </Container>
  );
};

export default AccountForm;
