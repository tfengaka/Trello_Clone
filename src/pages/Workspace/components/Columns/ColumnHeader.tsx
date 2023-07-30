import { Typography } from '@mui/material';
import { ColumnHeaderStyled } from '~/theme/styled';
import ColumnActions from './ColumnActions';

interface Props {
  title: string;
}

function ColumnHeader({ title }: Props) {
  return (
    <ColumnHeaderStyled>
      {/* <TargetInput
        defaultValue={title}
        sx={{
          '& .MuiOutlinedInput-input': {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '16px',
          },
        }}
        onChange={(value) => console.log(value)}
      /> */}
      <Typography
        variant="body1"
        fontSize={14}
        fontWeight={500}
        lineHeight="16px"
        color="text.secondary"
        sx={{
          padding: '8px',
        }}
      >
        {title}
      </Typography>
      {/* actions */}
      <ColumnActions />
    </ColumnHeaderStyled>
  );
}

export default ColumnHeader;
