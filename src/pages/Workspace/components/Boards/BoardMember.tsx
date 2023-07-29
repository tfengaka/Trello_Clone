import { Box, Button, SvgIcon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import UserPlus from '~/assets/UserPlus';

function BoardMember() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Button
        variant="contained"
        size="small"
        startIcon={
          <SvgIcon fontSize="small">
            <UserPlus />
          </SvgIcon>
        }
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 500,
          background: '#ebecf0',
          color: '#172B4D',
          '&:hover': {
            background: '#fff',
          },
        }}
      >
        Share
      </Button>
      <AvatarGroup max={5}>
        {Array(10)
          .fill(1)
          .map((_, index) => (
            <Avatar key={index} alt={`Member ${index}`} src="https://picsum.photos/200/300" />
          ))}
      </AvatarGroup>
    </Box>
  );
}

export default BoardMember;
