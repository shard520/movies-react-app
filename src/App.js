import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Link as RouterLink,
  useNavigate,
} from 'react-router-dom';
import { AppBar, Link, Toolbar } from '@mui/material';

import { getUser, fetchSignUp, fetchLogIn } from './utils';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import './App.css';
import './styles/navbar.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    getUser(setUser, navigate);
    //eslint-disable-next-line
  }, []);

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    await fetchSignUp(username, email, pass, setUser);

    navigate('/');
  };

  const handleLogInSubmit = async e => {
    e.preventDefault();

    await fetchLogIn(email, pass, setUser, stayLoggedIn);

    navigate('/');
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <nav className="navbar">
            <ul className="navbar__list">
              <Link
                className="navbar__link"
                component={RouterLink}
                underline="hover"
                to="/"
                color="white"
                sx={{ mr: 'auto' }}
              >
                HOME
              </Link>
              <Link
                className="navbar__link"
                component={RouterLink}
                underline="hover"
                to="/login"
                color="white"
              >
                Log In
              </Link>
              <Link
                className="navbar__link"
                component={RouterLink}
                underline="hover"
                to="/signup"
                color="white"
              >
                Sign Up
              </Link>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              setStayLoggedIn={setStayLoggedIn}
              handleLogInSubmit={handleLogInSubmit}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              setStayLoggedIn={setStayLoggedIn}
              handleSignUpSubmit={handleSignUpSubmit}
            />
          }
        />

        <Route
          path="/"
          element={<Home user={user} handleLogOut={handleLogOut} />}
        />
      </Routes>
    </div>
  );
};

export default App;
