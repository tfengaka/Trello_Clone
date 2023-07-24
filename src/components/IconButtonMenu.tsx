import { useState } from 'react';
import { SxProps } from '@mui/material';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';

import MenuPopover from './MenuPopover';

interface Props {
  icon: React.ReactNode;
  subheaderTitle?: string;
  sx?: SxProps;
  menuSx?: SxProps;
  children: React.ReactNode;
}

function IconButtonMenu({ icon, subheaderTitle, sx, menuSx, children }: Props) {
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);
  return (
    <Box>
      <IconButton
        sx={{
          borderRadius: '4px',
          backgroundColor: (theme) =>
            openPopper ? (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)') : 'transparent',
          ...sx,
        }}
        color="inherit"
        onClick={(e) => setOpenPopper(e.currentTarget)}
      >
        {icon}
      </IconButton>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        position="left"
        onClose={() => setOpenPopper(null)}
        sx={menuSx}
      >
        <List
          component="div"
          subheader={
            subheaderTitle && (
              <ListSubheader component="div" disableGutters sx={{ p: 2, position: 'relative' }}>
                <Typography
                  fontSize={14}
                  textAlign="center"
                  textTransform="initial"
                  fontWeight={500}
                  color="text.secondary"
                >
                  {subheaderTitle}
                </Typography>
                <IconButton
                  sx={{ position: 'absolute', top: 8, right: 8, borderRadius: 2, p: 0.5 }}
                  onClick={() => setOpenPopper(null)}
                  color="inherit"
                >
                  <CloseRoundedIcon sx={{ width: '20px', height: '20px' }} />
                </IconButton>
              </ListSubheader>
            )
          }
        >
          {children}
        </List>
      </MenuPopover>
    </Box>
  );
}

export default IconButtonMenu;
