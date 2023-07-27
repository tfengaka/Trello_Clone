import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import { Box, ListItemButton, Stack, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import UserGroupIcon from '~/assets/UserGroupIcon';
import ButtonMenu from '~/components/ButtonMenu';

const Options = [
  {
    label: 'Private',
    value: 'private',
    subtitle: 'Only board members can see and edit this board.',
    icon: <LockOutlinedIcon color="error" sx={{ width: '16px', height: '16px' }} />,
  },
  {
    label: 'Workspace',
    value: 'workspace',
    subtitle: 'All members of the WorkSpace Workspace can see and edit this board.',
    icon: (
      <SvgIcon sx={{ width: '16px', height: '16px' }}>
        <UserGroupIcon />
      </SvgIcon>
    ),
  },
  {
    label: 'Public',
    value: 'public',
    subtitle: 'Anyone on the internet can see this board. Only board members can edit.',
    icon: <PublicOutlinedIcon sx={{ width: '16px', height: '16px', color: '#61BD4F' }} />,
  },
];

function BoardVisible() {
  return (
    <ButtonMenu
      title="Workspace visible"
      startIcon={
        <SvgIcon
          sx={{
            width: 16,
            height: 16,
          }}
        >
          <UserGroupIcon />
        </SvgIcon>
      }
      subheaderTitle="Change visible"
      menuSx={{
        '& .MuiPopover-paper': {
          width: '384px',
        },
      }}
    >
      {Options.map((option) => (
        <ListItemButton
          key={option.label}
          sx={{
            color: (theme) => theme.palette.text.secondary,
            '&:hover': {},
          }}
        >
          <Box>
            <Stack direction="row" alignItems="center" spacing={0.5} mb={0.5}>
              <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>{option.icon}</Box>
              <Typography fontSize={14} fontWeight={500} lineHeight="20px">
                {option.label}
              </Typography>

              {option.value === 'workspace' && (
                <CheckRoundedIcon color="inherit" sx={{ width: '20px', height: '20px', pb: '4px' }} />
              )}
            </Stack>
            <Typography fontSize={12} fontWeight={400} lineHeight="16px" letterSpacing={0}>
              {option.subtitle}
            </Typography>
          </Box>
        </ListItemButton>
      ))}
    </ButtonMenu>
  );
}

export default BoardVisible;
