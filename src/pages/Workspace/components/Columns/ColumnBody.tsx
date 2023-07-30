import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { ColumnBodyStyled } from '~/theme/styled';
import Card from '../Cards/Card';
interface Props {
  data: ListContent;
}

function ColumnBody({ data: { cards, cardOrderIds } }: Props) {
  return (
    <ColumnBodyStyled>
      <SortableContext strategy={verticalListSortingStrategy} items={cardOrderIds}>
        {cards.length > 0 && cards.map((card) => <Card key={card._id} data={card} />)}
      </SortableContext>
    </ColumnBodyStyled>
  );
}

export default ColumnBody;
