import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const MovieCard = ({ title, avgRating, actors, genres, id, imgSrc }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardContent sx={{ flexBasis: '25%' }}>
        <Typography variant="h3">{title}</Typography>
        <CardMedia
          component="img"
          height="100%"
          width="100%"
          image={`https://image.tmdb.org/t/p/w200${imgSrc}`}
          alt={`${title} poster`}
        />
      </CardContent>
    </Card>
  );
};

export default MovieCard;
