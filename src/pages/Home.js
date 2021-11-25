import { Button, Typography } from '@mui/material';
import CardDeck from '../components/CardDeck';
import Greeting from '../components/Greeting';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = ({ user, handleFetchMovies, data, isLoading }) => {
  return (
    <div>
      <Greeting user={user} />

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>

      <Button
        variant="contained"
        type="button"
        onClick={handleFetchMovies}
        sx={{ p: 2 }}
      >
        View a list of all movies
      </Button>

      <LoadingSpinner isLoading={isLoading} />

      <CardDeck data={data} />
    </div>
  );
};

export default Home;
