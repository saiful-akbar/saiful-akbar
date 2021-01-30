import React, { useState } from 'react';
import { makeStyles, Container, CssBaseline, Hidden } from '@material-ui/core';
import Welcome from 'src/views/Welcome';
import NavBar from './NavBar';
import TopBar from './TopBar';
import BottomAppBar from './BottomBar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    width: '100%'
  },
  wrapper: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  content: {
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    height: '100%'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <Hidden xsDown>
          <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />

          <NavBar
            onMobileClose={() => setMobileNavOpen(false)}
            openMobile={isMobileNavOpen}
          />
        </Hidden>

        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Container>
              <Welcome />
            </Container>
          </div>
        </div>

        <Hidden smUp>
          <BottomAppBar />
        </Hidden>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
