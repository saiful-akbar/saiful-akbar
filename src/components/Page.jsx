import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Page = forwardRef(({
  children,
  ...rest
}, ref) => {
  const classes = useStyles();

  return (
    <div
      ref={ref}
      {...rest}
    >
      <div className={classes.root}>
        {children}
      </div>
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
