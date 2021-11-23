const LogInForm = ({
  email,
  setEmail,
  pass,
  setPass,
  stayLoggedIn,
  setStayLoggedIn,
  handleLogInSubmit,
}) => {
  return (
    <form onSubmit={handleLogInSubmit}>
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
      <label htmlFor="stayLoggedIn">Keep me logged in: </label>
      <input
        name="stayLoggedIn"
        id="stayLoggedIn"
        type="checkbox"
        value={stayLoggedIn}
        onChange={() => setStayLoggedIn(prev => !prev)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogInForm;
