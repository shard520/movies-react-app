import { Button, Container, TextField } from '@mui/material';

import '../styles/form.css';

const AccountForm = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  handleAccountSubmit,
}) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="form" onSubmit={handleAccountSubmit}>
        <TextField
          variant="outlined"
          label="Update Username"
          id="username"
          type="text"
          required={true}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Update Email"
          id="email"
          type="email"
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Update Password"
          id="password"
          type="password"
          required={true}
          value={pass}
          onChange={e => setPass(e.target.value)}
        />

        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default AccountForm;
