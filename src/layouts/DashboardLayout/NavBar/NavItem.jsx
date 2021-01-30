import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ListItem,
  makeStyles,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%',
    borderRadius: '0 25px 25px 0'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto',
    fontWight: 500,
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  avatar: {
    width: 30,
    height: 30,
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <ListItem
        button
        className={classes.button}
        component={RouterLink}
        to={href}
        {...rest}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {Icon && (
              <Icon size="20" />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.title} primary={title} />
      </ListItem>
    </div>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;
