import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonMenu from '~/components/ButtonMenu';

function RecentBoards() {
  return (
    <ButtonMenu
      title="Recent"
      endIcon={
        <KeyboardArrowDownRoundedIcon
          sx={{
            width: '24px',
            height: '24px',
          }}
        />
      }
    >
      <ListItemButton
        sx={{
          color: 'text.primaryChannel',
          '&:hover': {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ width: '40px', height: '40px' }}>
            <img
              src="/background.svg"
              alt="background"
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
            />
          </Box>
          <Stack>
            <Typography fontSize={14} textAlign="center" textTransform="initial" fontWeight={500} color="inherit">
              Project Management
            </Typography>
            <Typography
              fontSize={12}
              textTransform="initial"
              fontWeight={400}
              sx={{
                color: (theme) => `${theme.palette.secondary}`,
              }}
            >
              Workspace
            </Typography>
          </Stack>
        </Stack>
      </ListItemButton>
    </ButtonMenu>
  );
}

export default RecentBoards;
