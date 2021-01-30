import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(10)
  }
}));

const Page = forwardRef(({ children, ...rest }, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.root} {...rest}>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
