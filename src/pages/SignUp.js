import { Typography } from '@mui/material';
import LoadingSpinner from '../components/LoadingSpinner';
import SignUpForm from '../components/SignUpForm';

const SignUp = ({
  username,
  setUsername,
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleSignUpSubmit,
  isLoading,
}) => {
  return (
    <div>
      <Typography variant="h1" component="div" sx={{ m: 2 }}>
        Sign Up
      </Typography>
      <LoadingSpinner isLoading={isLoading} />
      <SignUpForm
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        stayLoggedIn={stayLoggedIn}
        setStayLoggedIn={setStayLoggedIn}
        handleSignUpSubmit={handleSignUpSubmit}
      />
    </div>
  );
};

export default SignUp;
