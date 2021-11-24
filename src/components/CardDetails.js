import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Highlight } from './Highlight';

export const CardDetails = ({ avgRating, genres }) => {
  return (
    <Paper variant="outlined" sx={{ p: 1, width: '90%', textAlign: 'left' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Highlight text={'Average rating'} />
        <Typography variant="body1">{avgRating}</Typography>
      </Box>
      {genres && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <Highlight text={'Genres'} />
          {genres.map((genre, i) => (
            <Typography key={i} variant="body1">
              {genre}
            </Typography>
          ))}
        </Box>
      )}
    </Paper>
  );
};
