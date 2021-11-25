import { Typography } from '@mui/material';

const Greeting = ({ user }) => {
  return (
    user && (
      <div>
        <Typography variant="h1" component="div" sx={{ m: 2 }}>
          Hello {user.username}
        </Typography>
      </div>
    )
  );
};

export default Greeting;
