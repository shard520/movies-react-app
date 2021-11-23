const Home = ({ user, handleLogOut }) => {
  return (
    <div>
      {user && (
        <div>
          <h1>Hello {user.username}</h1>
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      )}

      <p>Welcome to the movies API.</p>
    </div>
  );
};

export default Home;
