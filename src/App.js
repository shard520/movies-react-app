import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import { getUser, fetchSignUp, fetchLogIn, fetchMovies } from './utils';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';

import './App.css';
import './styles/navbar.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();

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

  const handleFetchMovies = async () => {
    await fetchMovies(setData);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <NavBar />
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
          element={
            <Home
              user={user}
              handleLogOut={handleLogOut}
              handleFetchMovies={handleFetchMovies}
              data={data}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
