import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import FavoriteButton from '~/components/FavoriteButton';
import { BoardHeaderWrapper } from '~/theme/styled';
import BoardFilter from './BoardFilter';
import BoardMember from './BoardMember';
import BoardVisible from './BoardVisible';

interface Props {
  board: BoardData;
}

function BoardHeader({ board }: Props) {
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
          {board.title}
        </Button>
        {/* Favorite Workspace */}
        <FavoriteButton isFavorites={false} onClick={() => console.log('Set Favorite')} />
        {/* workspace visible */}
        <BoardVisible visible={board.visible} />
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
