import {
  Box,
  createTheme,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  ThemeProvider,
} from '@mui/material';
import { HighlightOff } from '@mui/icons-material/';

const theme = createTheme({
  palette: {
    text: {
      disabled: 'text.main',
    },
  },
});

const AddItemsListItem = ({ item, deleteItem, buttonLabel }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: 1 }}>
        <FormControl variant="outlined" sx={{ width: '80%' }}>
          <OutlinedInput
            sx={{
              width: '100%',
            }}
            disabled={true}
            value={item}
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={deleteItem} aria-label={buttonLabel}>
                  <HighlightOff sx={{ fontSize: 30 }} />
                </IconButton>
              </InputAdornment>
            }
          ></OutlinedInput>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default AddItemsListItem;
