import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { Box } from '@mui/material';
import IconButtonMenu from '~/components/IconButtonMenu';

function ColumnActions() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        zIndex: 0,
      }}
    >
      {/* menu */}
      <IconButtonMenu
        subheaderTitle="List actions"
        icon={<MoreHorizRoundedIcon fontSize="small" />}
        sx={{
          position: 'relative',
        }}
        menuSx={{
          mt: -4.5,
        }}
      >
        Actions
      </IconButtonMenu>
    </Box>
  );
}

export default ColumnActions;
