import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonMenu from '~/components/ButtonMenu';

function Templates() {
  return (
    <ButtonMenu
      title="Templates"
      endIcon={
        <KeyboardArrowDownRoundedIcon
          sx={{
            width: '24px',
            height: '24px',
          }}
        />
      }
    >
      <Typography fontSize={12} textTransform="initial" fontWeight={500} color="text.secondary" px={2} mb={1}>
        Top templates
      </Typography>
      <ListItemButton
        sx={{
          color: 'text.primaryChannel',
          '&:hover': {
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box sx={{ width: '40px', height: '32px' }}>
            <img
              src="/background.svg"
              alt="background"
              style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
            />
          </Box>
          <Typography fontSize={14} textTransform="initial" fontWeight={500} color="inherit">
            Project Management
          </Typography>
        </Stack>
      </ListItemButton>

      <Box
        sx={{
          px: 2,
          py: 1,
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Button
          size="small"
          fullWidth
          variant="contained"
          href="#"
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: (theme) => (theme.palette.mode === 'light' ? '#172B4D' : '#B6C2CF'),
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#091E420F' : '#A1BDD914'),
            '&:hover': {
              backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#091E4224' : '#A6C5E229'),
            },
          }}
        >
          Explore templates
        </Button>
      </Box>
    </ButtonMenu>
  );
}

export default Templates;
