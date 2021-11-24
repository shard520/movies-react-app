import { Typography } from '@mui/material';

export const Highlight = ({ text }) => (
  <Typography
    variant="body1"
    sx={{
      fontSize: '0.85rem',
      bgcolor: 'primary.light',
      color: 'primary.contrastText',
      p: 1,
      m: 0.5,
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    }}
  >
    {text}
  </Typography>
);
