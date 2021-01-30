import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import routes from 'src/routes';
import GlobalStyles from 'src/components/GlobalStyles';
import Cookies from 'universal-cookie';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { darkTheme, lightTheme } from 'src/theme';
import { connect } from 'react-redux';

const App = props => {
  const routing = useRoutes(routes);
  const cookie = new Cookies();
  const { reduxTheme, setReduxTheme } = props;

  // Menghapus preloader
  React.useEffect(() => {
    window.onload = () => {
      const preloader = document.getElementById('preloader');
      preloader.remove();
    };
  });

  React.useEffect(() => {
    const theme = cookie.get('theme');

    if (Boolean(theme === 'light')) {
      setReduxTheme('light');
      document.querySelector('body').classList.remove('bg-dark');
    } else {
      setReduxTheme('dark');
    }

    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={reduxTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

// Redux state
const reduxState = state => ({
  reduxTheme: state.theme
});

// Redux reducer
const reduxReducer = dispatch => ({
  setReduxTheme: value => dispatch({ type: 'SET_THEME', value: value })
});

export default connect(reduxState, reduxReducer)(App);
