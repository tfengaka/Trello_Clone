import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import NavBar from '~/components/NavBar';
import BoardHeader from './pages/Workspace/components/BoardHeader';
import { Stack } from '@mui/material';
import { SIZE } from '~/utils/constants';

function App() {
  return (
    <Container sx={{ height: '100vh' }} disableGutters maxWidth={false}>
      <NavBar />
      <Stack direction="row" alignItems="start">
        {/* <Box>Workspace Nav</Box> */}
        <Box
          sx={{
            flex: 1,
          }}
        >
          <BoardHeader />
          <Box
            sx={{
              width: '100%',
              height: `calc(100vh - ${SIZE.NavBarH} - ${SIZE.BoardHeaderH})`,
            }}
          >
            Board Contents
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
