import {
  createMuiTheme,
} from '@material-ui/core';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#262D31',
      paper: '#131C21',
      topBar: '#2A2F32',
      dark: '#0D1418',
    },
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#e91e63'
    },
  },
  typography
});

export default theme;
