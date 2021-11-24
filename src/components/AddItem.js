import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material/';
import { Box } from '@mui/system';

const AddItem = ({ label, value, setValue, submit, buttonLabel }) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <FormControl variant="outlined" sx={{ width: '100%' }}>
        <InputLabel htmlFor="addActorInput">{label}</InputLabel>
        <OutlinedInput
          id="addActorInput"
          label={label}
          value={value}
          onChange={e => setValue(e)}
          type="text"
          sx={{
            width: '100%',
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={submit} aria-label={buttonLabel}>
                <AddCircleOutline color="primary" sx={{ fontSize: 30 }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
};

export default AddItem;
