import { Box } from '@mui/material';
import Column from './Column';

function BoardContent() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        mb: '8px',
        ml: '12px',
        overflowX: 'auto',
        overflowY: 'hidden',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        '&::-webkit-scrollbar': {
          width: '12px',
          height: '12px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '8px',
        },
        '&::-webkit-scrollbar-button': {
          display: 'block',
          height: '4px',
          width: '4px',
        },
      }}
    >
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <Column key={i} />
        ))}
    </Box>
  );
}

export default BoardContent;
