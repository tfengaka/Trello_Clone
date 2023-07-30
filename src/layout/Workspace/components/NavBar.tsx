import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

import Account from './Account';
import CreateBoard from './CreateBoard';
import DarkModeButton from './DarkModeButton';
import Notification from './Notification';
import RecentBoards from './RecentBoards';
import SearchBox from './SearchBox';
import StarredBoard from './StarredBoard';
import Templates from './Templates';
import WorkspaceSwitch from './WorkspaceSwitch';

import { AppBarStyled } from '~/theme/styled';

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
          <Button
            LinkComponent={RouterLink}
            variant="text"
            href="/"
            sx={{
              textDecoration: 'none',
              position: 'relative',
              height: '32px',
              width: '96px',
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
