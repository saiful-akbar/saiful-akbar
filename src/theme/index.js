import { createMuiTheme, colors } from '@material-ui/core';
import typography from './typography';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#262D31',
      paper: '#131C21',
      dark: '#0D1418'
    },
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#f50057'
    }
  },
  typography
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      dark: '#FFFFFF'
    },
    primary: {
      main: '#2196f3'
    },
    secondary: {
      main: '#f50057'
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
  typography
});
