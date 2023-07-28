import { SxProps } from '@mui/material';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import MenuPopover from './MenuPopover';

interface Props {
  title: string;
  variant?: 'text' | 'outlined' | 'contained';
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  subheaderTitle?: string;
  sx?: SxProps;
  menuSx?: SxProps;
  children: React.ReactNode;
}

function ButtonMenu({ variant, title, startIcon, endIcon, subheaderTitle, sx, menuSx, children }: Props) {
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);
  return (
    <Box>
      <Button
        variant={variant}
        color="inherit"
        sx={{
          backgroundColor: openPopper && 'rgba(255, 255, 255, 0.15)',
          fontWeight: 400,
          pl: 1.25,
          py: '3px',
          ...sx,
        }}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={(e) => setOpenPopper(e.currentTarget)}
      >
        {title}
      </Button>
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

export default ButtonMenu;
