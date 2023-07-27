import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import { Box, IconButton, Typography, styled } from '@mui/material';
import MuiCard from '@mui/material/Card';
import Badges from './Badges';
import Label from './Label';

const CardWrapper = styled(MuiCard)(({ theme }) => ({
  display: 'block',
  position: 'relative',
  maxWidth: '300px',
  minHeight: '25px',
  scrollMargin: '8px',
  flexShrink: 0,
  borderRadius: '6px',
  background: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  boxShadow: theme.shadows[1],
  cursor: 'pointer',
  zIndex: 1,
  transition: theme.transitions.create(['border-color', 'background-color']),
  '&:hover': {
    background: theme.palette.mode === 'light' ? '#dee0e3' : '#31393e',
    borderBottomColor: theme.palette.mode === 'light' ? '#091e4224' : '#A6C5E229',
    transition: theme.transitions.create(['border-color', 'background-color']),
  },
}));

function Card() {
  return (
    <CardWrapper>
      {/* Card Actions */}
      <IconButton
        id="card-btn-edit"
        sx={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          background: (theme) =>
            theme.palette.mode === 'light' ? 'rgba(34, 39, 43, 0.05)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px',
          color: 'inherit',
          padding: '8px',
          opacity: 0.8,
          zIndex: 40,
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log('card actions');
        }}
      >
        <EditOutlinedIcon sx={{ width: '16px', height: '16px' }} />
      </IconButton>

      <Box>
        <img
          src="https://trello.com/1/cards/64b19b8a948a0c639c14d383/attachments/64b19b8a948a0c639c14d62a/previews/64b19b8a948a0c639c14d62b/download/giphy.gif"
          alt=""
          style={{ width: '100%', height: '100', objectFit: 'cover' }}
        />
      </Box>

      <Box
        sx={{
          position: 'relative',
          padding: '8px 8px 4px 12px',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '6px',
          }}
        >
          <Label />
        </Box>

        <Typography
          variant="body2"
          fontSize={14}
          lineHeight="20px"
          color="text.secondary"
          paragraph
          sx={{
            display: 'inline-block',
            whiteSpace: 'pre-line',
            margin: '0 0 4px',
            overflow: 'hidden',
          }}
        >
          {`Trello Tip: This is where assigned tasks live so that your team can see who's working on what and when it's due.`}
        </Typography>

        <Badges />
      </Box>
    </CardWrapper>
  );
}

export default Card;
