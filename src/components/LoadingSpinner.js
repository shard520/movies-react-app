import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner = ({ isLoading }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
      <CircularProgress
        size={50}
        sx={{ display: isLoading ? 'unset' : 'none' }}
      />
    </Box>
  );
};

export default LoadingSpinner;
