import { Button, Typography } from '@mui/material';
import CardDeck from '../components/CardDeck';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = ({ user, handleLogOut, handleFetchMovies, data, isLoading }) => {
  return (
    <div>
      {user && (
        <div>
          <Typography variant="h1" component="div" sx={{ m: 2 }}>
            Hello {user.username}
          </Typography>
          <Button variant="outlined" type="button" onClick={handleLogOut}>
            Log Out
          </Button>
        </div>
      )}

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>

      <Button variant="contained" type="button" onClick={handleFetchMovies}>
        View a list of all movies
      </Button>

      <LoadingSpinner isLoading={isLoading} />

      <CardDeck data={data} />
    </div>
  );
};

export default Home;
