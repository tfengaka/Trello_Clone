import { ColumnBodyStyled, ColumnStyled, ColumnWrapper } from '~/theme/styled';
import ColumnFooter from './ColumnFooter';
import ColumnHeader from './ColumnHeader';
import Card from '../Cards';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Props {
  data: List;
}

function Column({ data }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: data._id, data });

  const dndListStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
  };
  return (
    <ColumnWrapper>
      <ColumnStyled ref={setNodeRef} style={dndListStyle} {...attributes} {...listeners}>
        <ColumnHeader title={data.title} />
        <ColumnBodyStyled>
          {data.cards.length > 0 && data.cards.map((card) => <Card key={card._id} cardData={card} />)}
        </ColumnBodyStyled>
        <ColumnFooter />
      </ColumnStyled>
    </ColumnWrapper>
  );
}

export default Column;
