import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  MouseSensor,
  TouchSensor,
  closestCorners,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { cloneDeep } from 'lodash';
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

  const findListByCardId = (cardId: string) => listOrdered.find((e) => e.cards.map((c) => c._id)?.includes(cardId));

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id);
    setActiveItem(active?.data.current);
  };

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over || !activeId || !activeItem.listId) return;

    const activeList = findListByCardId(active.id as string);
    const overList = findListByCardId(over.id as string);

    if (!activeList || !overList) return;

    if (activeList._id !== overList._id) {
      setListOrdered((prev) => {
        const overCardIndex = overList.cards.findIndex((c) => c._id === over.id);

        const isBelowOverItem =
          active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;

        const newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overList.cards.length + 1;

        const cloneLists = cloneDeep(prev);
        const newActiveList = cloneLists.find((c) => c._id === activeList._id);
        const newOverList = cloneLists.find((c) => c._id === overList._id);

        if (newActiveList) {
          newActiveList.cards = newActiveList.cards.filter((c) => c._id !== active.id);
          newActiveList.cardOrderIds = newActiveList.cards.map((c) => c._id);
        }

        if (newOverList) {
          newOverList.cards = newOverList.cards.filter((c) => c._id !== active.id);
          newOverList.cards = newOverList.cards.toSpliced(newCardIndex, 0, active.data.current as Card);
          newOverList.cardOrderIds = newOverList.cards.map((c) => c._id);
        }

        return cloneLists;
      });
    }
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) {
      setActiveId(null);
      setActiveItem(null);
      return;
    }

    if (active.data.current?.listId) {
      console.log('Drag Card is active');
      return;
    }

    if (active.id !== over.id) {
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
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
      </BoardContentWrapper>
      {createPortal(
        <DragOverlay dropAnimation={dropAnimation}>
          {activeId ? activeItem.listId ? <Card data={activeItem} /> : <Column data={activeItem} /> : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}

export default BoardContent;
