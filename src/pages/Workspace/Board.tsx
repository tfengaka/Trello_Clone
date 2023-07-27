import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { BoardContent, BoardHeader } from './components/Boards/';

function Board() {
  return (
    <Stack
      width="100%"
      height="100%"
      sx={{
        color: '#fff',
        backgroundImage: `url(${'/background.svg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      }}
    >
      <BoardHeader />
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          mt: '12px',
          position: 'relative',
        }}
      >
        <BoardContent />
      </Box>
    </Stack>
  );
}

export default Board;
