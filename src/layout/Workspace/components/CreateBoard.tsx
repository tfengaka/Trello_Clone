import { Box, Button, List, ListItemButton, Stack, Typography } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from 'react';
import BoardIcon from '~/assets/BoardIcon';
import TemplateBoardIcon from '~/assets/TemplateBoardIcon';
import UserGroupIcon from '~/assets/UserGroupIcon';
import MenuPopover from '~/components/MenuPopover';

const Options = [
  {
    label: 'Create board',
    subtitle:
      'A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.',
    icon: <BoardIcon />,
  },
  {
    label: 'Start with a template',
    subtitle: 'Get started faster with a board template.',
    icon: <TemplateBoardIcon />,
  },
  {
    label: 'Create Workspace',
    subtitle:
      'A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.',
    icon: <UserGroupIcon />,
  },
];

function CreateBoard() {
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);
  return (
    <Box>
      <Button
        variant="text"
        color="inherit"
        sx={{
          px: '12px',
          py: '4px',
          fontSize: 14,
          fontWeight: 400,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
        onClick={(e) => setOpenPopper(e.currentTarget)}
      >
        Create
      </Button>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        position="left"
        onClose={() => setOpenPopper(null)}
        sx={{
          '& .MuiPopover-paper': {
            width: '304px',
          },
        }}
      >
        <List>
          {Options.map((option) => (
            <ListItemButton
              key={option.label}
              sx={{
                color: (theme) => theme.palette.text.secondary,
                '&:hover': {},
              }}
            >
              <Box>
                <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                  <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <SvgIcon sx={{ width: '20px', height: '20px' }}>{option.icon}</SvgIcon>
                  </Box>
                  <Typography fontSize={14} fontWeight={500} lineHeight="20px">
                    {option.label}
                  </Typography>
                </Stack>
                <Typography fontSize={12} fontWeight={400} lineHeight="16px" letterSpacing={0}>
                  {option.subtitle}
                </Typography>
              </Box>
            </ListItemButton>
          ))}
        </List>
      </MenuPopover>
    </Box>
  );
}

export default CreateBoard;
