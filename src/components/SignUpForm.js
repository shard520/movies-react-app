const SignUpForm = ({
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
    <form onSubmit={handleSignUpSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor="pass">Password:</label>
      <input
        id="pass"
        name="pass"
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <input
        name="stayLoggedIn"
        id="stayLoggedIn"
        type="checkbox"
        value={stayLoggedIn}
        onChange={() => setStayLoggedIn(prev => !prev)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
