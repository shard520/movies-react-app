import { Button, Typography } from '@mui/material';
import AddMovieForm from '../components/AddMovieForm';
import LoadingSpinner from '../components/LoadingSpinner';

const AddMovie = ({
  user,
  handleLogOut,
  handleAddMovie,
  data,
  isLoading,
  actors,
  setActors,
  genres,
  setGenres,
}) => {
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
