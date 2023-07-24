import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function WorkspaceLayout() {
  return (
    <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }} disableGutters maxWidth={false}>
      <NavBar />
      <Stack
        direction="row"
        alignItems="start"
        sx={{
          flex: 1,
        }}
      >
        {/* <Box>Workspace Nav</Box> */}
        <Outlet />
      </Stack>
    </Container>
  );
}

export default WorkspaceLayout;
