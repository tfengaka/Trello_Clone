import { alpha, useColorScheme } from '@mui/material/styles';

import ContrastIcon from '@mui/icons-material/Contrast';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import IconButtonMenu from '~/components/IconButtonMenu';
import { THEMEMODES } from '~/utils/constants';

function DarkModeButton() {
  const { mode, setMode } = useColorScheme();

  return (
    <Box
      sx={{
        filter: (theme) =>
          theme.palette.mode === 'dark'
            ? 'brightness(0) saturate(100%) invert(66%) sepia(25%) saturate(225%) hue-rotate(170deg) brightness(101%) contrast(85%)'
            : 'unset',
      }}
    >
      <Tooltip title="Theme">
        <IconButtonMenu
          icon={<ContrastIcon fontSize="medium" />}
          subheaderTitle="Theme"
          sx={{
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
          menuSx={{
            '& .MuiPopover-paper': {
              width: '304px',
            },
          }}
        >
          {THEMEMODES.map((item) => (
            <ListItemButton
              key={item.value}
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
                <Typography
                  fontSize={14}
                  textAlign="center"
                  textTransform="initial"
                  fontWeight={500}
                  color={mode === item.value ? 'inherit' : 'text.secondary'}
                >
                  {item.label}
                </Typography>
              </Stack>
            </ListItemButton>
          ))}
        </IconButtonMenu>
      </Tooltip>
    </Box>
  );
}

export default DarkModeButton;
