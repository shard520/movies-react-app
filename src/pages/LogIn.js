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
