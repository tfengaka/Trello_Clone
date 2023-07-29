import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ColumnActions from './ColumnActions';

interface Props {
  title: string;
}

function ColumnHeader({ title }: Props) {
  return (
    <Box
      sx={{
        flex: '0 0 auto',
        width: '100%',
        padding: '8px',
        paddingRight: '36px',
        backgroundColor: 'inherit',
        position: 'relative',
      }}
    >
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
    </Box>
  );
}

export default ColumnHeader;
