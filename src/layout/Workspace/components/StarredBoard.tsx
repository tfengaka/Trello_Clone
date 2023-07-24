import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ButtonMenu from '~/components/ButtonMenu';
import FavoriteButton from '~/components/FavoriteButton';

function StarredBoard() {
  const haveStarred = true;
  return (
    <ButtonMenu
      title="Starred"
      endIcon={
        <KeyboardArrowDownRoundedIcon
          sx={{
            width: '24px',
            height: '24px',
          }}
        />
      }
    >
      {haveStarred ? (
        <ListItemButton
          sx={{
            px: 1,
            color: 'text.primaryChannel',
            '&:hover': {
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              position: 'relative',
              width: '100%',
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: '40px', height: '40px' }}>
                <img
                  src="/background.svg"
                  alt="background"
                  style={{ width: '100%', height: '100%', borderRadius: '4px', objectFit: 'cover' }}
                />
              </Box>
              <Stack>
                <Typography fontSize={14} textAlign="center" textTransform="initial" fontWeight={500} color="inherit">
                  Project Management
                </Typography>
                <Typography
                  fontSize={12}
                  textTransform="initial"
                  fontWeight={400}
                  sx={{
                    color: (theme) => `${theme.palette.secondary}`,
                  }}
                >
                  Workspace
                </Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                right: 0,
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FavoriteButton isFavorites={true} />
            </Box>
          </Stack>
        </ListItemButton>
      ) : (
        <Stack alignItems="center" spacing={1.5} p={1.5} pt={0.5}>
          <img src="/starred-empty.svg" alt="background" style={{ width: '100%', objectFit: 'contain' }} />

          <Typography
            variant="body2"
            textTransform="initial"
            fontWeight={400}
            color="text.primaryChannel"
            textAlign="center"
            maxWidth={300}
          >
            Star important boards to access them quickly and easily.
          </Typography>
        </Stack>
      )}
    </ButtonMenu>
  );
}

export default StarredBoard;
