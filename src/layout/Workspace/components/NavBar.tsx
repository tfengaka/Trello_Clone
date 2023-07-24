import { alpha, styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import Account from './Account';
import CreateBoard from './CreateBoard';
import DarkModeButton from './DarkModeButton';
import Notification from './Notification';
import RecentBoards from './RecentBoards';
import SearchBox from './SearchBox';
import StarredBoard from './StarredBoard';
import Templates from './Templates';
import WorkspaceSwitch from './WorkspaceSwitch';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundImage: 'none',
  width: '100%',
  height: 'auto',
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha('#fff', 0.2)}`,
  backgroundColor: theme.palette.mode === 'light' ? '#072754' : theme.palette.background.default,
  transition: 'background 0.3s ease',
  padding: '4px 8px',
}));

function NavBar() {
  return (
    <AppBarStyled position="static">
      <Stack direction="row" alignItems="center" justifyContent="space-between" height="100%" paddingY={0.5}>
        <Stack
          direction="row"
          alignItems="center"
          height="100%"
          sx={{
            filter: (theme) =>
              theme.palette.mode === 'dark'
                ? 'brightness(0) saturate(100%) invert(66%) sepia(25%) saturate(225%) hue-rotate(170deg) brightness(101%) contrast(85%)'
                : 'unset',
          }}
        >
          <IconButton
            color="inherit"
            sx={{
              borderRadius: 1,
              p: 0.5,
              mr: 1,
            }}
          >
            <AppsRoundedIcon fontSize="medium" />
          </IconButton>
          <Button
            LinkComponent={RouterLink}
            variant="text"
            href="/"
            sx={{
              textDecoration: 'none',
              position: 'relative',
              height: '32px',
              width: '96px',
              px: 1,
              mr: 1,
              '&:hover::before': {
                backgroundImage: `url(${'/logo-animated.gif'})`,
              },
              '&:before': {
                content: '""',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${'/logo-static.gif'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              },
            }}
          />
          <Stack direction="row" alignContent="center" spacing={1}>
            <WorkspaceSwitch />
            <RecentBoards />
            <StarredBoard />
            <Templates />
            <CreateBoard />
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1.25}>
          <SearchBox />
          <Notification />
          <DarkModeButton />
          <Account />
        </Stack>
      </Stack>
    </AppBarStyled>
  );
}

export default NavBar;
