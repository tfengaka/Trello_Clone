import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import Column from '../Columns';
import { BoardContentWrapper } from '~/theme/styled';
import { useMemo } from 'react';
import { mapOrderList } from '~/utils/formatter';

interface Props {
  data: BoardContent;
}

function BoardContent({ data }: Props) {
  const listOrdered = useMemo(() => mapOrderList(data.listData, data.listOrderIds, '_id'), [data]);

  return (
    <BoardContentWrapper>
      {listOrdered.length && listOrdered.map((list) => <Column key={list._id} data={list} />)}
      <Button
        size="small"
        startIcon={<AddRoundedIcon fontSize="medium" />}
        sx={{
          fontSize: 14,
          lineHeight: '20px',
          width: '272px',
          backgroundColor: 'rgba(255, 255, 255, 0.239)',
          color: '#fff',
          alignItems: 'center',
          justifyContent: 'start',
          borderRadius: '8px',
          cursor: 'pointer',
          padding: '12px 16px',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        }}
      >
        Add another list
      </Button>
    </BoardContentWrapper>
  );
}

export default BoardContent;
