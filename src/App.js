import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';

import {
  getUser,
  fetchSignUp,
  fetchLogIn,
  fetchMovies,
  fetchAddMovie,
} from './utils';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import { NavBar } from './components/NavBar';

import './App.css';
import './styles/navbar.css';

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
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
          path="/add-movie"
          element={
            <AddMovie
              user={user}
              handleLogOut={handleLogOut}
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
              handleLogOut={handleLogOut}
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
