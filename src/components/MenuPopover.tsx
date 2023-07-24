import Popover from '@mui/material/Popover';
import { SxProps, styled } from '@mui/material/styles';
import React from 'react';

interface Props {
  open: boolean;
  anchorEl: any;
  position: 'left' | 'right' | 'center';
  children: React.ReactNode;
  sx?: SxProps;
  onClose: () => void;
}

const PopoverStyled = styled(Popover)(({ theme }) => ({
  marginTop: '12px',
  '& .MuiPopover-paper': {
    backgroundImage: 'none',
    minWidth: '232px',
    maxHeight: '849px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: theme.spacing(0.5),
  },
}));

function MenuPopover({ open, sx, position, children, ...other }: Props) {
  return (
    <PopoverStyled
      open={open}
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: position,
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: position,
      }}
      sx={sx}
      {...other}
    >
      {children}
    </PopoverStyled>
  );
}

export default MenuPopover;
