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
        <IconButton onClick={(e) => setOpenPopper(e.currentTarget)}>
          <Avatar
            style={{ width: 24, height: 24, borderRadius: '50%' }}
            alt="avatar"
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/355682788_1050384169674738_8794802630622808023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6UVWZ_VQmOMAX_hjUqc&_nc_oc=AQmif15HM7QdgWNMOQnGuQSMjZE69MG0aIApXb-FHfhbDSNJyyJCgMr7l4g82jq9Bp4&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfATndvpzWdqLO2gmzKSCEFtH_FgWbgedgfCKGk2d-qYAg&oe=64BC92D0"
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
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/355682788_1050384169674738_8794802630622808023_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6UVWZ_VQmOMAX_hjUqc&_nc_oc=AQmif15HM7QdgWNMOQnGuQSMjZE69MG0aIApXb-FHfhbDSNJyyJCgMr7l4g82jq9Bp4&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfATndvpzWdqLO2gmzKSCEFtH_FgWbgedgfCKGk2d-qYAg&oe=64BC92D0"
            />
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
