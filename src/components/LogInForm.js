import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';

const LogInForm = ({
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleLogInSubmit,
}) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="form" onSubmit={handleLogInSubmit}>
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
          Log In
        </Button>
      </form>
    </Container>
  );
};

export default LogInForm;
