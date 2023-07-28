import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { SearchBoxInput } from '~/theme/styled';

function SearchBox() {
  return (
    <Box
      sx={{
        filter: (theme) =>
          theme.palette.mode === 'dark'
            ? 'brightness(0) saturate(100%) invert(66%) sepia(25%) saturate(225%) hue-rotate(170deg) brightness(101%) contrast(85%)'
            : 'unset',
      }}
    >
      <SearchBoxInput
        placeholder="Search..."
        startAdornment={
          <InputAdornment
            position="start"
            sx={{
              color: 'inherit',
            }}
          >
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </Box>
  );
}

export default SearchBox;
