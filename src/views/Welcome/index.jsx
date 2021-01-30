import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: 'url(/static/images/landing.png)',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    marginBottom: theme.spacing(10)
  },
  box: {
    padding: theme.spacing(15, 5)
  }
}));

const Wlcome = props => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...props}>
      <Box
        className={classes.box}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Typography variant="h1" color="textPrimary">
          Hello, I'am <strong>Saiful Akbar</strong>.
        </Typography>
        <br />
        <Typography variant="h3" color="textPrimary">
          WEB Developer
        </Typography>

        <Box mt={7}>
          <Typography variant="h3" color="textSecondary">
            Welcome to my personal website.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Wlcome;
