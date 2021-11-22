import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import SignUpForm from './components/SignUpForm';
import { getUser, fetchSignUp } from './utils';

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  useEffect(() => {
    getUser(setUser);
  }, []);

  const handleSignUpSubmit = async e => {
    e.preventDefault();
    await fetchSignUp(username, email, pass, setUser);
  };

  return (
    <div className="App">
      <h1>{user ? `Welcome ${user}` : 'Enter your details to sign up'}</h1>
      {!user && (
        <SignUpForm
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          pass={pass}
          setPass={setPass}
          handleSignUpSubmit={handleSignUpSubmit}
        />
      )}
    </div>
  );
}

export default App;
