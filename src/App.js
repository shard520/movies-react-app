import React, { useEffect, useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import { getUser } from './utils/getUser';

function App() {
  const [user, setUser] = useState();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    getUser(setUser);
  }, []);

  const handleSignUpSubmit = e => {
    e.preventDefault();

    const userInfo = { username, email, pass };
    setUser(userInfo);

    localStorage.setItem('user', JSON.stringify(userInfo));
  };

  return (
    <div className="App">
      <h1>
        {user ? `Welcome ${user.username}` : 'Enter your details to sign up'}
      </h1>
      {!user && (
        <SignUp
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
