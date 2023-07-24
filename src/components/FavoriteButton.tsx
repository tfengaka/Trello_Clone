import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { IconButton } from '@mui/material';

interface Props {
  isFavorites: boolean;
  onClick?: () => void;
}

function FavoriteButton({ isFavorites, onClick }: Props) {
  return (
    <IconButton
      sx={{
        width: 32,
        height: 32,
        borderRadius: 1,
        color: isFavorites ? '#e2b203' : 'inherit',
        '& > *': {
          transform: isFavorites ? 'scale(1.2)' : 'scale(1)',
        },
        '&:hover': {
          color: '#e2b203',
          '& > *': {
            transform: 'scale(1.2)',
          },
        },
      }}
      onClick={onClick}
    >
      {isFavorites ? (
        <StarRateRoundedIcon color="inherit" fontSize="small" />
      ) : (
        <StarOutlineRoundedIcon color="inherit" fontSize="small" />
      )}
    </IconButton>
  );
}

export default FavoriteButton;
