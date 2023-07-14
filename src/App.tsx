import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { useColorScheme } from '@mui/material/styles';
import { SystemMode } from './types';

const modes = [
  {
    label: 'Light Mode',
    value: 'light',
    icon: <LightModeIcon fontSize="small" />,
  },
  {
    label: 'Dark Mode',
    value: 'dark',
    icon: <DarkModeOutlinedIcon fontSize="small" />,
  },
  {
    label: 'System Preferences',
    value: 'system',
    icon: <SettingsBrightnessOutlinedIcon fontSize="small" />,
  },
];

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};

function ModeSelect() {
  const { mode, setMode } = useColorScheme();
  return (
    <Box>
      <Select
        variant="standard"
        MenuProps={MenuProps}
        value={mode}
        onChange={(e) => setMode(e.target.value as SystemMode)}
        IconComponent={ExpandMoreRoundedIcon}
      >
        {modes.map((mode) => (
          <MenuItem key={mode.value} value={mode.value}>
            <Stack direction="row" columnGap={0.75} alignItems="center">
              {mode.icon}
              <Typography fontSize={15} fontWeight={500}>
                {mode.label}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <div>
      <ModeToggle />
      <ModeSelect />
      <p>Hello World</p>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
