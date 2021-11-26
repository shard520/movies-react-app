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
  fetchDeleteAccount,
  fetchSearchMovie,
  fetchEditMovie,
  fetchDeleteMovie,
} from './utils';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import NavBar from './components/NavBar';

import './App.css';
import './styles/navbar.css';
import './styles/form.css';
import Account from './pages/Account';
import SearchMovie from './pages/SearchMovie';
import EditMovie from './pages/EditMovie';

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

  const handleDeleteAccount = async () => {
    setIsLoading(true);
    await fetchDeleteAccount(user);
    setIsLoading(false);
    navigate('/signup');
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

  const handleSearchMovies = async search => {
    if (!search.type || !search.query) return;

    setIsLoading(true);
    await fetchSearchMovie(search, setData);
    setIsLoading(false);
  };

  const handleEditMovie = async updateObj => {
    setIsLoading(true);
    await fetchEditMovie(updateObj, user.token);
    setIsLoading(false);
  };

  const handleDeleteMovie = async query => {
    setIsLoading(true);
    await fetchDeleteMovie({ title: query }, user);
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
              handleDeleteAccount={handleDeleteAccount}
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
              actors={actors}
              setActors={setActors}
              genres={genres}
              setGenres={setGenres}
            />
          }
        />
        <Route
          path="/search-movies"
          element={
            <SearchMovie
              user={user}
              handleSearchMovies={handleSearchMovies}
              isLoading={isLoading}
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="/edit-movie"
          element={
            <EditMovie
              user={user}
              handleSearchMovies={handleSearchMovies}
              handleEditMovie={handleEditMovie}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              data={data}
              setData={setData}
              actors={actors}
              setActors={setActors}
              genres={genres}
              setGenres={setGenres}
              handleDeleteMovie={handleDeleteMovie}
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
              setData={setData}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
