import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import LogIn from './pages/LogIn';
import { getUser, fetchSignUp, fetchLogIn } from './utils';
import './App.css';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

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
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar__item">
            <Link to="/login">Log In</Link>
          </li>
          <li className="navbar__item">
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

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
