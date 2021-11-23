import { Typography } from '@mui/material';
import LogInForm from '../components/LogInForm';

const LogIn = ({
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleLogInSubmit,
}) => {
  return (
    <div>
      <Typography variant="h1" component="div" sx={{ m: 2 }}>
        Log In
      </Typography>
      <LogInForm
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        stayLoggedIn={stayLoggedIn}
        setStayLoggedIn={setStayLoggedIn}
        handleLogInSubmit={handleLogInSubmit}
      />
    </div>
  );
};

export default LogIn;
