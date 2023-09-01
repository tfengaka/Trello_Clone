import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import Routers from '~/routes';
import theme from './theme';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <CssVarsProvider theme={theme}>
    <CssBaseline />
    <Routers />
  </CssVarsProvider>
);
