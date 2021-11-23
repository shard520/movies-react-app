import { Button, Typography } from '@mui/material';

const Home = ({ user, handleLogOut, handleFetchMovies }) => {
  return (
    <div>
      {user && (
        <div>
          <Typography variant="h1" component="div" sx={{ m: 2 }}>
            Hello {user.username}
          </Typography>
          <Button variant="contained" type="button" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      )}

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>

      <Button variant="outlined" type="button" onClick={handleFetchMovies}>
        View a list of all movies
      </Button>
    </div>
  );
};

export default Home;
