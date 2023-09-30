import { alpha, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popover from '@mui/material/Popover';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundImage: 'none',
  width: '100%',
  height: 'auto',
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha('#fff', 0.2)}`,
  backgroundColor: theme.palette.mode === 'light' ? '#072754' : theme.palette.background.default,
  transition: 'background 0.3s ease',
  padding: '4px 8px',
}));

export const PopoverStyled = styled(Popover)(({ theme }) => ({
  marginTop: '12px',
  '& .MuiPopover-paper': {
    backgroundImage: 'none',
    minWidth: '232px',
    maxHeight: '849px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.spacing(0.5),
  },
}));

export const SearchBoxInput = styled(OutlinedInput)(({ theme }) => ({
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

export const TargetInputStyled = styled(OutlinedInput)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
    cursor: 'pointer',
  },
  '& .MuiOutlinedInput-input': {
    color: theme.palette.text.secondary,
    padding: '4px 8px',
    cursor: 'pointer',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  '&.Mui-focused:hover > .MuiOutlinedInput-notchedOutline': {
    borderColor: '#388bff',
    transition: theme.transitions.create(['border-color', 'background-color']),
  },
}));

export const BoardHeaderWrapper = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${alpha('rgba(255, 255, 255)', 0.12)}`,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(4px)',
  padding: '8px 10px 10px 8px',
}));

export const BoardContentWrapper = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  marginBottom: '8px',
  paddingLeft: '6px',
  overflowX: 'auto',
  overflowY: 'hidden',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#00000033',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ffffffb2',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-button': {
    display: 'block',
    height: '4px',
    width: '4px',
  },
}));

export const ColumnWrapper = styled(Box)(() => ({
  display: 'inline-block',
  height: '100%',
  margin: '0 6px',
  scrollMargin: '8px',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
  width: '272px',
}));

export const ColumnStyled = styled(Stack)(({ theme }) => ({
  width: '100%',
  maxHeight: '100%',
  background: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[1],
  borderRadius: '12px',
  cursor: 'pointer',
}));

export const ColumnHeaderStyled = styled(Box)(() => ({
  flex: '0 0 auto',
  width: '100%',
  padding: '8px',
  paddingRight: '36px',
  backgroundColor: 'inherit',
  position: 'relative',
  borderRadius: '12px',
}));

export const ColumnBodyStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  margin: '0 4px',
  padding: '1px 4px 1px',
  minHeight: '20px',
  overflowX: 'hidden',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.07)' : 'rgba(255,255,255,0.07)',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    cursor: 'pointer',
    background: alpha(theme.palette.text.secondary, 0.3),
    borderRadius: '8px',
  },
}));

export const CardWrapper = styled(Card)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  maxWidth: '300px',
  minHeight: '25px',
  flexShrink: 0,
  flexGrow: 0,
  borderRadius: '6px',
  background: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[1],
  transformOrigin: '0 0',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.mode === 'light' ? '#f2f3f5' : '#2b3236',
    borderBottomColor: theme.palette.mode === 'light' ? '#091e4224' : '#A6C5E229',
    '& > #card-btn-edit': {
      visibility: 'visible',
    },
  },
}));

export const AuthWrapper = styled(Box)(() => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  inset: 0,
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    inset: '-5px',
    zIndex: -1,
    backgroundImage: `url(${'/background.svg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}));

export const AuthContentWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
  borderRadius: '6px',
  backgroundColor: theme.palette.background.default,
  padding: '35px 70px',
  zIndex: 100,
  backdropFilter: 'blur(25px)',
}));
