import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import { AuthContentWrapper, AuthWrapper } from '~/theme/styled';

function AuthLayout() {
  return (
    <AuthWrapper>
      <Box>
        <AuthContentWrapper>
          <Outlet />
        </AuthContentWrapper>
      </Box>
    </AuthWrapper>
  );
}

export default AuthLayout;
