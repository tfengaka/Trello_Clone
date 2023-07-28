import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { BoardContent, BoardHeader } from './components/Boards/';

import { mockData } from '~/data/mock';

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
      <BoardHeader board={mockData.board} />
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          mt: '12px',
          position: 'relative',
        }}
      >
        <BoardContent data={{ listData: mockData.board.listData, listOrderIds: mockData.board.listOrderIds }} />
      </Box>
    </Stack>
  );
}

export default Board;
