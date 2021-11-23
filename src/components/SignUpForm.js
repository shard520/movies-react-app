import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';

import '../styles/auth-form.css';

const SignUpForm = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleSignUpSubmit,
}) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="auth-form" onSubmit={handleSignUpSubmit}>
        <TextField
          variant="outlined"
          label="Username"
          id="username"
          type="text"
          required={true}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          id="email"
          type="email"
          required={true}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Password"
          id="password"
          type="password"
          required={true}
          value={pass}
          onChange={e => setPass(e.target.value)}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={stayLoggedIn}
                id="stayLoggedIn"
                onChange={e => setStayLoggedIn(e.target.checked)}
              />
            }
            label="Keep me logged in"
          />
        </FormGroup>
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
