import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import { Box, Typography } from '@mui/material';

function Badges() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          backgroundColor: '#1f845a',
          color: '#fff',
          borderRadius: '4px',
          padding: '2px 6px',
        }}
      >
        <AccessTimeOutlinedIcon sx={{ width: '14px', height: '14px' }} />
        <Typography fontSize={12} fontWeight={400} lineHeight="20px" noWrap>
          Jul 28
        </Typography>
      </Box>
      <SubjectRoundedIcon color="inherit" fontSize="small" />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}
      >
        <AttachFileRoundedIcon color="inherit" sx={{ width: '16px', height: '16px' }} />
        <Typography fontSize={12} fontWeight={500} noWrap color="text.secondary">
          1
        </Typography>
      </Box>
    </Box>
  );
}

export default Badges;
