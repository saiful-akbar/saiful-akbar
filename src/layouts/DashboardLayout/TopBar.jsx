import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  useScrollTrigger,
  Slide,
  Fab,
  Zoom
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ThemeMode from './ThemeMode';

// Komponen Elevation scroll
function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// Default props untuk komponent ElevationScroll
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

// Style untuk komponen TopBar
const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.background.dark,
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 256px)',
      marginLeft: 256
    },
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  avatar: {
    width: 60,
    height: 60
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}));

// Komponen ScrollTop
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.fab}>
        {children}
      </div>
    </Zoom>
  );
}

// Default props untuk komponent ScrollTop
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
};

// Komponen utama
const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <ElevationScroll>
        <AppBar
          className={clsx(classes.appBar, className)}
          elevation={0}
          {...rest}
        >
          <Toolbar variant="dense">
            <Hidden lgUp>
              <IconButton color="default" onClick={onMobileNavOpen}>
                <MenuIcon fontSize="small" />
              </IconButton>
            </Hidden>

            <Box flexGrow={1} />

            <ThemeMode />
          </Toolbar>
        </AppBar>
      </ElevationScroll>

      <div id="back-to-top-anchor" />

      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onMobileNavOpen: PropTypes.func
};

export default TopBar;
