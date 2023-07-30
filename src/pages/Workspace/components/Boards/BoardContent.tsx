import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  MouseSensor,
  TouchSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';

import { BoardContentWrapper } from '~/theme/styled';
import { mapOrderList } from '~/utils/formatter';
import Card from '../Cards';
import Column from '../Columns';

interface Props {
  data: BoardContent;
}

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.5',
      },
    },
  }),
};

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

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [activeItem, setActiveItem] = useState<any>(null);

  useEffect(() => {
    setListOrdered(mapOrderList(listData, listOrderIds, '_id'));
  }, [listData, listOrderIds]);

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id);
    setActiveItem(active?.data.current);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveId(null);
      setActiveItem(null);
      return;
    }
    if (active.id !== over.id) {
      console.log('Drag event');
      const oldIndex = listOrderIds.indexOf(active.id.toString());
      const newIndex = listOrderIds.indexOf(over.id.toString());

      const resultListData = arrayMove(listOrdered, oldIndex, newIndex);

      // * Call API drag end
      // const resultlistOrderIds = arrayMove(listOrderIds, oldIndex, newIndex);
      setListOrdered(resultListData);

      // Reset Active Data
      setActiveId(null);
      setActiveItem(null);
      return;
    }
  };

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <BoardContentWrapper>
        <SortableContext items={listOrderIds} strategy={horizontalListSortingStrategy}>
          {listOrdered.length && listOrdered.map((list) => <Column key={list._id} data={list} />)}

          {/* //Todo: Custom panel add new column */}
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
              marginLeft: '6px',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Add another list
          </Button>
        </SortableContext>
        {createPortal(
          <DragOverlay dropAnimation={dropAnimation}>
            {!activeId && null}
            {activeId && (activeItem.listId ? <Card data={activeItem} /> : <Column data={activeItem} />)}
          </DragOverlay>,
          document.body
        )}
      </BoardContentWrapper>
    </DndContext>
  );
}

export default BoardContent;
