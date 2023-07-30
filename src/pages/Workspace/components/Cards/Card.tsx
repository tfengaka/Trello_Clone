import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { CardWrapper } from '~/theme/styled';
import Badges from './Badges';
import Label from './Label';

interface Props {
  data: Card;
}

function Card({ data }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: data._id, data });

  const dndCardStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 'inherit',
  };

  return (
    <CardWrapper ref={setNodeRef} style={dndCardStyle} {...attributes} {...listeners}>
      {/* Card Actions */}
      <IconButton
        id="card-btn-edit"
        sx={{
          position: 'absolute',
          top: '2px',
          right: '2px',
          background: (theme) =>
            theme.palette.mode === 'light' ? 'rgba(34, 39, 43, 0.05)' : 'rgba(255, 255, 255, 0.05)',
          borderRadius: '4px',
          color: 'inherit',
          padding: '6px',
          opacity: 0.8,
          visibility: 'hidden',
          zIndex: 40,
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log('card actions');
        }}
      >
        <ModeOutlinedIcon fontSize="small" />
      </IconButton>

      {data.coverImage && (
        <Box>
          <img src={data.coverImage} alt="" style={{ width: '100%', height: '100', objectFit: 'cover' }} />
        </Box>
      )}

      <Box
        sx={{
          position: 'relative',
          padding: '8px 8px 4px 12px',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '6px',
          }}
        >
          <Label />
        </Box>

        <Typography
          variant="body2"
          fontSize={14}
          lineHeight="20px"
          color="text.secondary"
          paragraph
          sx={{
            display: 'inline-block',
            whiteSpace: 'pre-line',
            margin: '0 0 4px',
            overflow: 'hidden',
          }}
        >
          {data.title}
        </Typography>

        <Badges />
      </Box>
    </CardWrapper>
  );
}

export default Card;
