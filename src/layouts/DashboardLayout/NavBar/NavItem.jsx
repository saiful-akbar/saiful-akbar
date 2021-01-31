import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  makeStyles,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
    borderRadius: '0 50px 50px 0'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    color: theme.palette.text.secondary,
    marginRight: 'auto'
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
    backgroundColor: theme.palette.primary.dark,
    color: '#FFF'
  }
}));

const NavItem = ({ className, icon: Icon, title, onClickMenu, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      <ListItem
        button
        onClick={onClickMenu}
        className={classes.button}
        {...rest}
      >
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {Icon && <Icon size="20" />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.title}>{title}</ListItemText>
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
