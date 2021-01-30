import React, { useState } from 'react';
import { makeStyles, Container, CssBaseline, Grid } from '@material-ui/core';
import Welcome from 'src/views/Welcome';
import NavBar from './NavBar';
import TopBar from './TopBar';
import Portofolio from 'src/views/Portofolio';
import About from 'src/views/About';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    width: '100%'
  },
  wrapper: {
    paddingTop: 50,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  content: {
    height: '100%',
    paddingBottom: theme.spacing(3)
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />

        <NavBar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />

        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Welcome id="welcome" />

            <Container>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Portofolio />
                </Grid>
                <Grid item xs={12}>
                  <About />
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
