import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';

import DarkModeButton from './DarkModeButton';

import { SIZE } from '~/utils/constants';
import { Avatar } from '@mui/material';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  width: '100%',
  height: SIZE.NavBarH,
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha('#fff', 0.15)}`,
  backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.background.paper,
}));

function NavBar() {
  return (
    <AppBarStyled position="static">
      <Stack direction="row" alignItems="center" justifyContent="space-between" px={2} height={48}>
        <Box></Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <DarkModeButton />
          <Avatar sx={{ width: 24, height: 24 }} />
        </Stack>
      </Stack>
    </AppBarStyled>
  );
}

export default NavBar;
