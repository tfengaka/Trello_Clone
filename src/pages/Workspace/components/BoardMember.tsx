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
            <Avatar
              key={index}
              alt="Remy Sharp"
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/355682788_1050384169674738_8794802630622808023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6UVWZ_VQmOMAX_hjUqc&_nc_oc=AQmif15HM7QdgWNMOQnGuQSMjZE69MG0aIApXb-FHfhbDSNJyyJCgMr7l4g82jq9Bp4&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfATndvpzWdqLO2gmzKSCEFtH_FgWbgedgfCKGk2d-qYAg&oe=64BC92D0"
            />
          ))}
      </AvatarGroup>
    </Box>
  );
}

export default BoardMember;
