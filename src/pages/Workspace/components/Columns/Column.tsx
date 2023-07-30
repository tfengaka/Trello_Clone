import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ColumnStyled, ColumnWrapper } from '~/theme/styled';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import ColumnBody from './ColumnBody';

interface Props {
  data: List;
}

function Column({ data }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: data._id, data });

  const dndListStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 'inherit',
  };
  return (
    <ColumnWrapper ref={setNodeRef} style={dndListStyle} {...attributes}>
      <ColumnStyled {...listeners}>
        <ColumnHeader title={data.title} />
        <ColumnBody data={{ cardOrderIds: data.cardOrderIds, cards: data.cards }} />
        <ColumnFooter />
      </ColumnStyled>
    </ColumnWrapper>
  );
}

export default Column;
