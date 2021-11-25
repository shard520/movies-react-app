import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import EditMovieForm from '../components/EditMovieForm';
import Greeting from '../components/Greeting';
import LoadingSpinner from '../components/LoadingSpinner';

const EditMovie = ({
  user,
  handleSearchMovies,
  handleEditMovie,
  data,
  setData,
  isLoading,
  setIsLoading,
  actors,
  setActors,
  genres,
  setGenres,
}) => {
  const [query, setQuery] = useState('');

  // eslint-disable-next-line
  useEffect(() => setData(null), []);

  useEffect(() => {
    populateForm();
    // eslint-disable-next-line
  }, [data]);

  const populateForm = () => {
    console.log(data);
    if (!data) return;

    if (data[0].actors) setActors(data[0].actors);
    if (data[0].genres) setGenres(data[0].genres);
  };

  const handleSubmitSearch = async e => {
    e.preventDefault();
    setIsLoading(true);
    await handleSearchMovies({ type: 'movie', query: query });
    setQuery('');
    setIsLoading(false);
  };
  return (
    <div>
      <Greeting user={user} />

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>
      {!data && (
        <Box>
          <Typography variant="body1" component="p" sx={{ p: 1 }}>
            To edit a movie, first search by title...
          </Typography>
          <Container maxWidth="sm" sx={{ mt: 4 }}>
            <form className="form" onSubmit={handleSubmitSearch}>
              <Box
                sx={{ width: '100%', margin: 'auto', mb: 2, display: 'flex' }}
              >
                <TextField
                  variant="outlined"
                  label="Movie"
                  id="query"
                  type="text"
                  required={true}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  sx={{ width: '70%' }}
                />
                <Button
                  variant="outlined"
                  type="submit"
                  onClick={handleSubmitSearch}
                >
                  Search
                </Button>
              </Box>
            </form>
          </Container>
        </Box>
      )}

      <LoadingSpinner isLoading={isLoading} />

      {data && (
        <>
          <Typography variant="body1" component="p" sx={{ p: 1 }}>
            You are editing:{' '}
            <span style={{ fontWeight: 'bold' }}>{data[0].title}</span>
          </Typography>
          <EditMovieForm
            handleEditMovie={handleEditMovie}
            actors={actors}
            setActors={setActors}
            genres={genres}
            setGenres={setGenres}
          />
        </>
      )}
    </div>
  );
};

export default EditMovie;
