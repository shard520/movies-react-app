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

      <AddMovieForm
        handleAddMovie={handleAddMovie}
        actors={actors}
        setActors={setActors}
      />

      <LoadingSpinner isLoading={isLoading} />
    </div>
  );
};

export default AddMovie;
