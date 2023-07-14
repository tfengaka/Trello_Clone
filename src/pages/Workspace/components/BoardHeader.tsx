import { Box } from '@mui/material';
import { SIZE } from '~/utils/constants';

function BoardHeader() {
  return (
    <Box
      sx={{
        width: '100%',
        height: SIZE.BoardHeaderH,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
      }}
    >
      Board Header
    </Box>
  );
}

export default BoardHeader;
