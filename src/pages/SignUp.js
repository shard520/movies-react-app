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
}) => {
  return (
    <div>
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
