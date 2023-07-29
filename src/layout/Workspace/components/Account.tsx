import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import MenuPopover from '~/components/MenuPopover';

function Account() {
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);
  return (
    <Box>
      <Tooltip title="Account">
        <IconButton
          onClick={(e) => setOpenPopper(e.currentTarget)}
          sx={{
            width: 32,
            height: 32,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          <Avatar
            sx={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: (theme) => `1px solid ${theme.palette.mode === 'light' ? '#ebecf0' : '#B6C2CF'}`,
            }}
            alt="avatar"
            src="/avatar.png"
          />
        </IconButton>
      </Tooltip>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        position="right"
        onClose={() => setOpenPopper(null)}
        sx={{
          '& .MuiPopover-paper': {
            width: '232px',
          },
        }}
      >
        <List
          subheader={
            <ListSubheader sx={{ p: 2, backgroundColor: 'inherit' }}>
              <Typography fontSize={11} fontWeight={600} color="text.secondary" textTransform="uppercase">
                Account
              </Typography>
            </ListSubheader>
          }
        >
          <Stack
            px={2}
            direction="row"
            alignItems="center"
            spacing={1}
            pb={2}
            sx={{
              borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            }}
          >
            <Avatar sx={{ width: 40, height: 40 }} src="/avatar.png" />
            <Stack>
              <Typography
                fontSize={14}
                lineHeight="20px"
                fontWeight={500}
                color="text.secondary"
                textTransform="capitalize"
              >
                Hòa Nguyễn Thanh
              </Typography>
              <Typography
                fontSize={12}
                lineHeight="16px"
                color="text.secondary"
                textOverflow="ellipsis"
                noWrap
                overflow="hidden"
                sx={{ width: '100%', maxWidth: '160px' }}
              >
                6051071043@st.utc2.edu.vn
              </Typography>
            </Stack>
          </Stack>
        </List>
        <List
          subheader={
            <ListSubheader sx={{ px: 2, py: 1, backgroundColor: 'inherit' }}>
              <Typography fontSize={11} fontWeight={600} textTransform="uppercase">
                Application
              </Typography>
            </ListSubheader>
          }
        >
          <ListItemButton>
            <Typography fontSize={14} lineHeight="20px" color="text.secondary">
              Profile and visibility
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography fontSize={14} lineHeight="20px" color="text.secondary">
              Activity
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItemButton>
            <Typography fontSize={14} lineHeight="20px" color="text.secondary">
              Settings
            </Typography>
          </ListItemButton>
          <ListItemButton>
            <Typography fontSize={14} lineHeight="20px" color="text.secondary">
              Help
            </Typography>
          </ListItemButton>
          <Divider
            sx={{
              my: 1,
            }}
          />
          <ListItemButton>
            <Typography fontSize={14} lineHeight="20px" color="text.secondary">
              Log out
            </Typography>
          </ListItemButton>
        </List>
      </MenuPopover>
    </Box>
  );
}

export default Account;
