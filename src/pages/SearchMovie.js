import {
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import CardDeck from '../components/CardDeck';
import Greeting from '../components/Greeting';
import LoadingSpinner from '../components/LoadingSpinner';

const SearchMovie = ({
  user,
  handleSearchMovies,
  data,
  setData,
  isLoading,
}) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('');

  // eslint-disable-next-line
  useEffect(() => setData(null), []);

  const options = [
    { value: 'movie', label: 'Movie' },
    { value: 'actor', label: 'Actor' },
    { value: 'genre', label: 'Genre' },
    { value: 'minRating', label: 'Min Rating' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    handleSearchMovies({ type: searchType, query: query });
    setQuery('');
    setSearchType('');
  };
  return (
    <div>
      <Greeting user={user} />

      <Typography variant="body1" component="p" sx={{ p: 1 }}>
        Welcome to the movies API.
      </Typography>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <form className="form" onSubmit={handleSubmit}>
          <Box sx={{ width: '100%', margin: 'auto', mb: 2, display: 'flex' }}>
            <TextField
              id="search"
              select
              label="select search type"
              required={true}
              value={searchType}
              onChange={e => setSearchType(e.target.value)}
              sx={{ width: '35%' }}
            >
              {options.map((option, i) => (
                <MenuItem key={i} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              variant="outlined"
              label="Search Term"
              id="query"
              type="text"
              required={true}
              value={query}
              onChange={e => setQuery(e.target.value)}
              sx={{ width: '70%' }}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{ p: 2 }}
          >
            Search
          </Button>
        </form>
      </Container>

      <LoadingSpinner isLoading={isLoading} />

      <CardDeck data={data} />
    </div>
  );
};

export default SearchMovie;
