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
        distance: 15,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 250,
      },
    })
  );

  const [listOrdered, setListOrdered] = useState<Array<List>>([]);
  const [activeListId, setActiveListId] = useState<UniqueIdentifier | null>(null);
  const [activeItem, setActiveItem] = useState<any>(null);

  useEffect(() => {
    setListOrdered(mapOrderList(listData, listOrderIds, '_id'));
  }, [listData, listOrderIds]);

  const findListByCardId = (cardId: string) => listOrdered.find((e) => e.cards.map((c) => c._id)?.includes(cardId));

  const handleDragCardToDiffList = (activeList: List, overList: List, { active, over }: DragEndEvent | DragOverEvent) =>
    setListOrdered((prev) => {
      if (!over) return prev;

      const overCardIndex = overList.cards.findIndex((c) => c._id === over.id);

      const isBelowOverItem =
        active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

      const modifier = isBelowOverItem ? 1 : 0;

      const newIndex = overCardIndex >= 0 ? overCardIndex + modifier : overList.cards.length + 1;

      const cloneLists = cloneDeep(prev);
      const newActiveList = cloneLists.find((c) => c._id === activeList._id);
      const newOverList = cloneLists.find((c) => c._id === overList._id);

      if (newActiveList) {
        newActiveList.cards = newActiveList.cards.filter((c) => c._id !== active.id);
        newActiveList.cardOrderIds = newActiveList.cards.map((c) => c._id);
      }

      if (newOverList) {
        newOverList.cards = newOverList.cards.filter((c) => c._id !== active.id);
        newOverList.cards = [
          ...newOverList.cards.slice(0, newIndex),
          active.data.current as Card,
          ...newOverList.cards.slice(newIndex),
        ];
        newOverList.cardOrderIds = newOverList.cards.map((c) => c._id);
      }

      return cloneLists;
    });

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveListId(active.data.current?.listId ? active.data.current.listId : active.data.current?._id);
    setActiveItem(active?.data.current);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over || !activeItem.listId) return;

    const activeList = findListByCardId(active.id as string);
    const overList = findListByCardId(over.id as string);

    if (!activeList || !overList) return;

    if (activeList._id !== overList._id) {
      handleDragCardToDiffList(activeList, overList, event);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) {
      setActiveListId(null);
      setActiveItem(null);
      return;
    }

    if (activeItem?.listId) {
      const activeList = listData.find((item) => item._id === activeListId);
      const overList = findListByCardId(over.id as string);

      if (!activeList || !overList) return;

      if (activeListId !== overList._id) {
        console.log('Drag card to other list');
        handleDragCardToDiffList(activeList, overList, event);
      } else {
        const oldCardIndex = activeList.cardOrderIds.indexOf(activeItem._id);
        const newCardIndex = overList.cardOrderIds.indexOf(over.id.toString());

        const resultCardsData = arrayMove(activeList.cards, oldCardIndex, newCardIndex);

        setListOrdered((prev) => {
          const cloneLists = cloneDeep(prev);
          const targetList = cloneLists.find((c) => c._id === overList._id);
          if (targetList) {
            targetList.cards = resultCardsData;
            targetList.cardOrderIds = targetList.cards.map((c) => c._id);
          }

          return cloneLists;
        });
      }
    } else {
      if (active.id !== over.id) {
        const oldListIndex = listOrderIds.indexOf(active.id.toString());
        const newListIndex = listOrderIds.indexOf(over.id.toString());

        const resultListData = arrayMove(listOrdered, oldListIndex, newListIndex);

        // * Call API drag end
        // const resultlistOrderIds = arrayMove(listOrderIds, oldIndex, newIndex);
        setListOrdered(resultListData);
      }
    }

    // Reset Active Data
    setActiveListId(null);
    setActiveItem(null);
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
          {activeItem ? activeItem.listId ? <Card data={activeItem} /> : <Column data={activeItem} /> : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
}

export default BoardContent;
