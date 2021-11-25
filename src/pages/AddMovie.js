import { Typography } from '@mui/material';
import AddMovieForm from '../components/AddMovieForm';
import Greeting from '../components/Greeting';
import LoadingSpinner from '../components/LoadingSpinner';

const AddMovie = ({
  user,
  handleAddMovie,
  isLoading,
  actors,
  setActors,
  genres,
  setGenres,
}) => {
  return (
    <div>
      <Greeting user={user} />

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>

      <LoadingSpinner isLoading={isLoading} />

      <AddMovieForm
        handleAddMovie={handleAddMovie}
        actors={actors}
        setActors={setActors}
        genres={genres}
        setGenres={setGenres}
      />
    </div>
  );
};

export default AddMovie;
