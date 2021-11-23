import { Box } from '@mui/system';
import MovieCard from './MovieCard';

const CardDeck = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      {data &&
        data.map((movie, i) => (
          <MovieCard
            title={movie.title}
            avgRating={movie.rating}
            actors={movie.actors}
            genres={movie.genres}
            id={i}
            key={i}
            imgSrc={movie.details.poster_path}
          />
        ))}
    </Box>
  );
};

export default CardDeck;
