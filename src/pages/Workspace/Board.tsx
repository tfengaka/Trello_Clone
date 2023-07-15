import Box from '@mui/material/Box';

import BoardColumns from './components/BoardColumns';
import BoardHeader from './components/BoardHeader';

import { SIZE } from '~/utils/constants';

function Board() {
  return (
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
        <BoardColumns />
      </Box>
    </Box>
  );
}

export default Board;
