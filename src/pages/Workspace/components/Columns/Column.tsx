import { Button, IconButton, SvgIcon, alpha, styled } from '@mui/material';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import TemplateBoardIcon from '~/assets/TemplateBoardIcon';
import TargetInput from '~/components/TargetInput';
import LinkCard from '../Cards';
import ColumnActions from './ColumnActions';

const ColumnWrapper = styled(Box)(() => ({
  display: 'inline-block',
  height: '100%',
  margin: '0 6px',
  scrollMargin: '8px',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
  width: '272px',
}));

const ColumnBody = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  gap: '8px',
  margin: '0 4px',
  padding: '1px 4px 1px',
  overflowX: 'hidden',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.07)' : 'rgba(255,255,255,0.07)',
    borderRadius: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    cursor: 'pointer',
    background: alpha(theme.palette.text.secondary, 0.3),
    borderRadius: '8px',
  },
}));

function Column() {
  return (
    <ColumnWrapper>
      <Stack
        sx={{
          width: '100%',
          maxHeight: '100%',
          background: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
          color: (theme) => theme.palette.text.secondary,
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            flex: '0 0 auto',
            width: '100%',
            padding: '8px',
            paddingRight: '36px',
            backgroundColor: 'inherit',
            position: 'relative',
          }}
        >
          <TargetInput
            defaultValue="Title"
            sx={{
              '& .MuiOutlinedInput-input': {
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '16px',
              },
            }}
            onChange={(value) => console.log(value)}
          />
          {/* actions */}
          <ColumnActions />
        </Box>

        {/* Cards */}
        <ColumnBody>
          <LinkCard />
          <LinkCard />
          <LinkCard />
        </ColumnBody>

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
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
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
      </Stack>
    </ColumnWrapper>
  );
}

export default Column;
