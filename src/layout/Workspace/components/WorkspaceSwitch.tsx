import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonMenu from '~/components/ButtonMenu';
function WorkspaceSwitch() {
  return (
    <ButtonMenu
      title="Workspace"
      endIcon={
        <KeyboardArrowDownRoundedIcon
          sx={{
            width: '24px',
            height: '24px',
          }}
        />
      }
    >
      <Typography fontSize={12} textTransform="initial" fontWeight={500} color="text.secondary" px={2} mb={1}>
        Current Workspace
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1} px={2} py={1} mb={1}>
        <Box sx={{ width: '40px', height: '40px' }}>
          <img
            src="/background.svg"
            alt="background"
            style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
          />
        </Box>
        <Typography fontSize={14} textTransform="initial" fontWeight={500} color="text.primary">
          Project Management
        </Typography>
      </Stack>

      <Typography fontSize={12} textTransform="initial" fontWeight={500} color="text.secondary" px={2} mb={1}>
        Your Workspaces
      </Typography>

      <ListItemButton
        sx={{
          color: 'text.primary',
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
          <Typography fontSize={14} textTransform="initial" fontWeight={500} color="inherit">
            Project Management
          </Typography>
        </Stack>
      </ListItemButton>
    </ButtonMenu>
  );
}

export default WorkspaceSwitch;
