import { SxProps } from '@mui/material/styles';
import React from 'react';
import { PopoverStyled } from '~/theme/styled';

interface Props {
  open: boolean;
  anchorEl: any;
  position: 'left' | 'right' | 'center';
  children: React.ReactNode;
  sx?: SxProps;
  onClose: () => void;
}

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
