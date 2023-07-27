import { Button, styled } from '@mui/material';
import Box from '@mui/material/Box';
import Column from '../Columns';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const BoardContentWrapper = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  mb: '8px',
  ml: '12px',
  paddingBottom: '8px',
  overflowX: 'auto',
  overflowY: 'hidden',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    width: '12px',
    height: '12px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#00000033',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#ffffffb2',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-button': {
    display: 'block',
    height: '4px',
    width: '4px',
  },
}));

function BoardContent() {
  return (
    <BoardContentWrapper>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Column key={i} />
        ))}

      <Button
        size="small"
        startIcon={<AddRoundedIcon fontSize="medium" />}
        sx={{
          fontSize: 14,
          lineHeight: '20px',
          width: '272px',
          backgroundColor: 'rgba(255, 255, 255, 0.239)',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'start',
          borderRadius: '8px',
          cursor: 'pointer',
          padding: '12px 16px',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        }}
      >
        Add another list
      </Button>
    </BoardContentWrapper>
  );
}

export default BoardContent;
