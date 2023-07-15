import { alpha, useColorScheme } from '@mui/material/styles';
import { Fragment, useState } from 'react';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ContrastIcon from '@mui/icons-material/Contrast';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import { THEMEMODES } from '~/utils/constants';
import MenuPopover from './MenuPopover';

function DarkModeButton() {
  const { mode, setMode } = useColorScheme();
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);

  return (
    <Fragment>
      <Tooltip title="Theme">
        <IconButton onClick={(e) => setOpenPopper(e.currentTarget)} color="inherit">
          <ContrastIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <MenuPopover open={!!openPopper} anchorEl={openPopper} onClose={() => setOpenPopper(null)}>
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ p: 2, position: 'relative' }}>
              <Typography
                fontSize={14}
                textAlign="center"
                textTransform="initial"
                fontWeight={500}
                color="text.primary"
              >
                Theme
              </Typography>
              <IconButton
                sx={{ position: 'absolute', top: 10, right: 8, borderRadius: 2, p: 0.5 }}
                onClick={() => setOpenPopper(null)}
              >
                <CloseRoundedIcon sx={{ width: '20px', height: '20px' }} />
              </IconButton>
            </ListSubheader>
          }
        >
          {THEMEMODES.map((item) => (
            <ListItemButton
              onClick={() => setMode(item.value)}
              sx={{
                color: mode === item.value ? 'primary.main' : 'text.primary',
                backgroundColor: (theme) => (mode === item.value ? alpha(theme.palette.primary.main, 0.1) : 'inherit'),
                '&:hover': {
                  backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Radio checked={mode === item.value} value={item.value} size="small" />
                <Box sx={{ width: '64px', height: '48px' }}>
                  <img
                    src={item.icon}
                    alt={item.value}
                    style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }}
                  />
                </Box>
                <Typography fontSize={14} textAlign="center" textTransform="initial" fontWeight={500}>
                  {item.label}
                </Typography>
              </Stack>
            </ListItemButton>
          ))}
        </List>
      </MenuPopover>
    </Fragment>
  );
}

export default DarkModeButton;
