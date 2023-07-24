import { Box, List, ListSubheader, styled } from '@mui/material';
import IconButtonMenu from '~/components/IconButtonMenu';

import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const ColumnWrapper = styled(Box)(() => ({
  display: 'inline-block',
  position: 'relative',
  height: 'auto',
  margin: '0 6px',
  paddingBottom: '100px',
  overflow: 'hidden',
  scrollMargin: '8px',
  verticalAlign: 'top',
  whiteSpace: 'nowrap',
  width: '272px',
}));

function Column() {
  return (
    <ColumnWrapper>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.secondary,
          boxShadow: (theme) => theme.shadows[1],
          borderRadius: '6px',
          width: '100%',
          // maxHeight: '100%',
          whiteSpace: 'nowrap',
        }}
      >
        <List
          component="div"
          subheader={
            <ListSubheader
              disableSticky
              component="div"
              sx={{
                backgroundColor: 'inherit',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  maxWidth: '100%',
                  width: '224px',
                }}
              >
                {/* // TODO: Custom Input */}
                Column Title
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: '8px',
                  zIndex: 1,
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
            </ListSubheader>
          }
        >
          {Array(32)
            .fill(0)
            .map((_, i) => (
              <Box key={i}>Card</Box>
            ))}
        </List>
      </Box>
    </ColumnWrapper>
  );
}

export default Column;
