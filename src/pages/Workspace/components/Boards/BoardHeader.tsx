import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { Box, Button, Divider, Stack, alpha, styled } from '@mui/material';
import FavoriteButton from '~/components/FavoriteButton';
import BoardFilter from './BoardFilter';
import BoardMember from './BoardMember';
import BoardVisible from './BoardVisible';

const BoardHeaderWrapper = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${alpha('rgba(255, 255, 255)', 0.12)}`,
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(4px)',
  padding: '8px 10px 10px 16px',
}));

function BoardHeader() {
  return (
    <BoardHeaderWrapper>
      {/* TODO: Customize Input for Board rename and column rename */}
      <Stack direction="row" alignItems="center" spacing={1}>
        <Button
          size="small"
          color="inherit"
          sx={{
            px: 1,
            fontSize: 18,
            fontWeight: 600,
            lineHeight: '32px',
          }}
        >
          {'Project Management'}
        </Button>
        {/* Favorite Workspace */}
        <FavoriteButton isFavorites={false} onClick={() => console.log('Set Favorite')} />
        {/* workspace visible */}
        <BoardVisible />
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* Calendar */}
        <Button
          size="small"
          startIcon={<CalendarMonthOutlinedIcon fontSize="small" />}
          sx={{
            px: 1.5,
            fontSize: 14,
            fontWeight: 400,
          }}
          color="inherit"
        >
          Calendar Power-Up
        </Button>

        {/* Filter */}
        <BoardFilter />
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            marginTop: '8px !important',
            marginBottom: '8px !important',
            borderColor: 'rgba(255,255,255,0.25)',
          }}
        />
        <BoardMember />
      </Stack>
    </BoardHeaderWrapper>
  );
}

export default BoardHeader;
