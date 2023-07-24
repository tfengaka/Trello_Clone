import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Box, InputAdornment, OutlinedInput, styled } from '@mui/material';

const SearchBoxInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(34, 39, 43, 0.1)',
  position: 'relative',
  color: '#fff',
  width: '240px',
  borderRadius: '5px',
  transition: theme.transitions.create(['width', 'background-color']),
  '&.Mui-focused': {
    width: '480px',
    color: theme.palette.mode === 'light' ? '#44546f' : '#b6c2cf',
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(255, 255, 255)' : 'rgba(34, 39, 43, 0.1)',
    transition: theme.transitions.create(['width', 'background-color']),
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: theme.palette.mode === 'light' ? 'rgb(96, 162, 255)' : 'rgb(182, 194, 207)',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255,0.25)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: '1px solid rgba(255, 255, 255,0.25)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transition: theme.transitions.create(['border-color', 'background-color']),
  },
  '& input::placeholder': {
    opacity: 1,
  },
  '& .MuiOutlinedInput-input': {
    fontSize: 14,
    fontWeight: 400,
    padding: '6px 0',
  },
}));

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
