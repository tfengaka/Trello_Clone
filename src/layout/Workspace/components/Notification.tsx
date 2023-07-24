import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import MenuPopover from '~/components/MenuPopover';

function Notification() {
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);
  const haveNotifications = false;
  return (
    <Box>
      <Tooltip title="Notification">
        <IconButton onClick={(e) => setOpenPopper(e.currentTarget)} color="inherit">
          <Badge variant="dot" color="error">
            <NotificationsRoundedIcon
              fontSize="medium"
              sx={{
                filter: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) saturate(100%) invert(66%) sepia(25%) saturate(225%) hue-rotate(170deg) brightness(101%) contrast(85%)'
                    : 'unset',
              }}
            />
          </Badge>
        </IconButton>
      </Tooltip>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        position="center"
        onClose={() => setOpenPopper(null)}
        sx={{
          '& .MuiPopover-paper': {
            width: '432px',
          },
        }}
      >
        <List
          disablePadding
          subheader={
            <ListSubheader
              disableSticky
              sx={{
                margin: '12px 5px 0',
                paddingBottom: '10px',
                position: 'relative',
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
              }}
            >
              <Typography fontSize={20} textTransform="initial" fontWeight={600} color="text.primary">
                Notifications
              </Typography>
            </ListSubheader>
          }
        >
          {haveNotifications ? (
            <ListItem>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="subtitle2" fontWeight={600} color="text.primaryChannel">
                  1 new message
                </Typography>
                <Typography variant="caption" fontWeight={400} color="text.secondaryChannel">
                  10 minutes ago
                </Typography>
              </Stack>
            </ListItem>
          ) : (
            <Stack alignItems="center" justifyContent="center" minHeight={285}>
              <img src="/noti-empty.svg" alt="taco" style={{ marginBottom: '24px' }} />
              <Typography textAlign="center" variant="h3" fontSize={20} fontWeight={500} mb={3}>
                No unread notifications
              </Typography>
            </Stack>
          )}
        </List>
      </MenuPopover>
    </Box>
  );
}

export default Notification;
