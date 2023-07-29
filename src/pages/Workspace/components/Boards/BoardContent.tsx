import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { BoardContentWrapper } from '~/theme/styled';
import { mapOrderList } from '~/utils/formatter';
import Column from '../Columns';

interface Props {
  data: BoardContent;
}

function BoardContent({ data: { listData, listOrderIds } }: Props) {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 25,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 250,
      },
    })
  );

  const [listOrdered, setListOrdered] = useState<Array<List>>([]);
  useEffect(() => {
    setListOrdered(mapOrderList(listData, listOrderIds, '_id'));
  }, [listData, listOrderIds]);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      console.log('Drag event');
      const oldIndex = listOrderIds.indexOf(active.id.toString());
      const newIndex = listOrderIds.indexOf(over.id.toString());

      const resultListData = arrayMove(listOrdered, oldIndex, newIndex);

      // * Call API drag end
      // const resultlistOrderIds = arrayMove(listOrderIds, oldIndex, newIndex);

      setListOrdered(resultListData);
    }
  };

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <BoardContentWrapper>
        <SortableContext items={listOrderIds} strategy={horizontalListSortingStrategy}>
          {listOrdered.length && listOrdered.map((list) => <Column key={list._id} data={list} />)}
        </SortableContext>
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
    </DndContext>
  );
}

export default BoardContent;
