import React from 'react';
import { Box, makeStyles, Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 256px)',
      marginLeft: 256
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={2} display="flex" justifyContent="center" alignItems="center">
        <Typography
          variant="h5"
          color="textSecondary"
          component={Link}
          href="/"
        >
          {'© Saiful Akbar'} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
