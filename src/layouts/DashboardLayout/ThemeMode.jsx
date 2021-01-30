import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

const ThemeMode = props => {
  const cookie = new Cookies();

  const handleClick = () => {
    props.setReduxTheme(props.reduxTheme === 'dark' ? 'light' : 'dark');
    cookie.set('theme', props.reduxTheme === 'dark' ? 'light' : 'dark');
    document.querySelector('body').classList.toggle('bg-light');
  };

  return (
    <Tooltip
      title={
        props.reduxTheme === 'dark'
          ? 'Change to light mode'
          : 'Change to dark mode'
      }
    >
      <IconButton color="default" size="medium" onClick={handleClick}>
        {props.reduxTheme === 'dark' ? (
          <WbSunnyIcon fontSize="small" />
        ) : (
          <Brightness2Icon fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
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

export default connect(reduxState, reduxReducer)(ThemeMode);
