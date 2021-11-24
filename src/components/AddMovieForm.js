import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import AddItem from './AddItem';
import AddItemsListItem from './AddItemsListItem';

const AddMovieForm = ({
  handleAddMovie,
  actors,
  setActors,
  genres,
  setGenres,
}) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [actor, setActor] = useState('');
  const [genre, setGenre] = useState('');

  const handleSetActor = e => {
    setActor(e.target.value);
  };

  const handleAddActor = () => {
    const arr = [...actors];
    arr.push(actor);
    setActors(arr);
    setActor('');
  };

  const handleDeleteActor = e => {
    const id = e.target.id;
    const items = [...actors];
    items.splice(id, 1);
    setActors(items);
  };

  const handleSetGenre = e => {
    setGenre(e.target.value);
  };

  const handleAddGenre = () => {
    const arr = [...genres];
    arr.push(genre);
    setGenres(arr);
    setGenre('');
  };

  const handleDeleteGenre = e => {
    const id = e.target.id;
    const items = [...genres];
    items.splice(id, 1);
    setGenres(items);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const movie = { title, rating, actors, genres };
    handleAddMovie(movie);
    setTitle('');
    setRating('');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Movie Title"
          id="title"
          type="text"
          required={true}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <TextField
          variant="outlined"
          label="Rating (out of 10)"
          id="rating"
          type="text"
          value={rating}
          onChange={e => setRating(e.target.value)}
        />

        <Box sx={{ width: '100%' }}>
          <AddItem
            value={actor}
            setValue={handleSetActor}
            submit={handleAddActor}
            label={'Actor'}
            buttonLabel={'add actor to list'}
            id={'addActorInput'}
          />
        </Box>
        <Box sx={{ margin: 'auto', width: '100%' }}>
          {actors &&
            actors.map((actor, i) => {
              return (
                <AddItemsListItem
                  key={i}
                  id={i}
                  item={actor}
                  deleteItem={handleDeleteActor}
                  buttonLabel={'delete actor from list'}
                />
              );
            })}
        </Box>

        <Box sx={{ width: '100%' }}>
          <AddItem
            value={genre}
            setValue={handleSetGenre}
            submit={handleAddGenre}
            label={'Genre'}
            buttonLabel={'add genre to list'}
            id={'addGenreInput'}
          />
        </Box>
        <Box sx={{ margin: 'auto', width: '100%' }}>
          {genres &&
            genres.map((genre, i) => {
              return (
                <AddItemsListItem
                  key={i}
                  id={i}
                  item={genre}
                  deleteItem={handleDeleteGenre}
                  buttonLabel={'delete genre from list'}
                />
              );
            })}
        </Box>

        <Box sx={{ width: '100%' }}>
          <Button variant="contained" type="submit">
            Add Movie
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default AddMovieForm;