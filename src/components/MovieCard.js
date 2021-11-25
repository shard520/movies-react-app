import { Card, CardContent, CardMedia, Paper, Typography } from '@mui/material';
import { ActorList } from './ActorList';
import { CardDetails } from './CardDetails';

const MovieCard = ({ title, avgRating, actors, genres, imgSrc }) => {
  return (
    <Card
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ borderRadius: '5px' }}>
          <CardMedia
            component="img"
            height="100%"
            elevation={3}
            image={`https://image.tmdb.org/t/p/w200${imgSrc}`}
            alt={`${title} poster`}
            sx={{ maxWidth: '200px', borderRadius: 'inherit' }}
          />
        </Paper>
        <Typography variant="h3" sx={{ height: '3rem', mb: 3, mt: 3 }}>
          {title}
        </Typography>
        {actors && <ActorList actors={actors} />}
        <CardDetails avgRating={avgRating} genres={genres} />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
