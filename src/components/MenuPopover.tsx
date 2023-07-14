import Popover from '@mui/material/Popover';
import { SxProps, styled } from '@mui/material/styles';
import React from 'react';

interface Props {
  open: boolean;
  anchorEl: any;
  children: React.ReactNode;
  sx?: SxProps;
  onClose: () => void;
}

const PopoverStyled = styled(Popover)(({ theme }) => ({
  '& .MuiPopover-paper': {
    minWidth: '250px',
    backgroundColor: theme.palette.background.paper,
    mr: 5,
  },
}));

function MenuPopover({ open, sx, children, ...other }: Props) {
  return (
    <PopoverStyled
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      sx={sx}
      {...other}
    >
      {children}
    </PopoverStyled>
  );
}

export default MenuPopover;
