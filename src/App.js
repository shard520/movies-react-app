import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import {
  getUser,
  fetchSignUp,
  fetchLogIn,
  fetchMovies,
  fetchAddMovie,
  fetchUpdateUser,
} from './utils';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import NavBar from './components/NavBar';

import './App.css';
import './styles/navbar.css';
import Account from './pages/Account';

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [currentPass, setCurrentPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser(setUser, navigate, setStayLoggedIn);
    //eslint-disable-next-line
  }, []);

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchSignUp(username, email, pass, setUser);
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    navigate('/');
  };

  const handleLogInSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await fetchLogIn(email, pass, setUser, stayLoggedIn);
    setIsLoading(false);
    setEmail('');
    setPass('');
    navigate('/');
  };

  const handleLogOut = () => {
    localStorage.clear();
    setUser(null);
    navigate('/login');
  };

  const handleAccountSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    const updateObj = {
      update: { username: user.username },
      newInfo: { username, email, password: pass },
    };
    await fetchUpdateUser(updateObj, user, setUser, stayLoggedIn, currentPass);
    setIsLoading(false);
    setUsername('');
    setEmail('');
    setPass('');
    setCurrentPass('');
  };

  const handleFetchMovies = async () => {
    setIsLoading(true);
    await fetchMovies(setData);
    setIsLoading(false);
  };

  const handleAddMovie = async movie => {
    setIsLoading(true);
    await fetchAddMovie(movie, user);
    setActors([]);
    setGenres([]);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <NavBar user={user} handleLogOut={handleLogOut} />
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
              isLoading={isLoading}
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
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/account"
          element={
            <Account
              user={user}
              username={username}
              setUsername={setUsername}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
              currentPass={currentPass}
              setCurrentPass={setCurrentPass}
              handleAccountSubmit={handleAccountSubmit}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/add-movie"
          element={
            <AddMovie
              user={user}
              handleAddMovie={handleAddMovie}
              isLoading={isLoading}
              data={data}
              actors={actors}
              setActors={setActors}
              genres={genres}
              setGenres={setGenres}
            />
          }
        />

        <Route
          path="/"
          element={
            <Home
              user={user}
              handleFetchMovies={handleFetchMovies}
              isLoading={isLoading}
              data={data}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
