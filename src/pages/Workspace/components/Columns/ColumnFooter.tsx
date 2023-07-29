import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';

import TemplateBoardIcon from '~/assets/TemplateBoardIcon';

function ColumnFooter() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.5} pl={1} py={1} pr={0.5}>
      <Button
        fullWidth
        size="small"
        startIcon={<AddRoundedIcon fontSize="small" />}
        sx={{
          fontSize: 14,
          lineHeight: '20px',
          color: (theme) => theme.palette.text.secondary,
          alignItems: 'center',
          justifyContent: 'start',
          borderRadius: '6px',
          '&:hover': {
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'),
          },
        }}
      >
        Add a card
      </Button>
      <IconButton sx={{ padding: '6px', borderRadius: '6px' }} color="inherit">
        <SvgIcon
          sx={{
            width: '16px',
            height: '16px',
          }}
        >
          <TemplateBoardIcon />
        </SvgIcon>
      </IconButton>
    </Stack>
  );
}

export default ColumnFooter;
