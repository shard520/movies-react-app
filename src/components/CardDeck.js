import { Box } from '@mui/system';
import MovieCard from './MovieCard';

const CardDeck = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(325px, 1fr))',
        gridAutoRows: '1fr',
        placeItems: 'center',
        gap: '2rem',
        width: '90%',
        margin: '2rem auto',
      }}
    >
      {data &&
        data.map((movie, i) => (
          <MovieCard
            title={movie.title}
            avgRating={movie.rating}
            actors={movie.actors}
            genres={movie.genres}
            key={i}
            imgSrc={movie.details.poster_path}
          />
        ))}
    </Box>
  );
};

export default CardDeck;
