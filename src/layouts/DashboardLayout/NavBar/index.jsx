import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  IconButton,
  Link,
  Tooltip
} from '@material-ui/core';
import {
  Grid as GridIcon,
  Home as HomeIcon,
  User as UserIcon,
  Mail as MailIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  Instagram as InstagramIcon
} from 'react-feather';
import NavItem from './NavItem';

const items = [
  {
    icon: HomeIcon,
    title: 'Welcome',
    id: 'welcome'
  },
  {
    icon: GridIcon,
    title: 'Portofolio',
    id: 'portofolio'
  },
  {
    icon: UserIcon,
    title: 'About Me',
    id: 'about'
  },
  {
    icon: MailIcon,
    title: 'Contact',
    id: 'contact'
  }
];

const useStyles = makeStyles(theme => ({
  mobileDrawer: {
    backgroundColor: theme.palette.background.dark,
    width: 256,
    overflowX: 'hidden'
  },
  desktopDrawer: {
    backgroundColor: theme.palette.background.dark,
    width: 256,
    height: '100%',
    borderRight: 'none',
    overflowX: 'hidden'
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing(1)
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const handleClickMenu = (event, value) => {
    const el = document.getElementById(value);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    setTimeout(() => {
      onMobileClose();
    }, 1000);
  };

  const content = (
    <Box height="100%" display="flex" flexDirection="column">
      <Box alignItems="center" display="flex" flexDirection="column" p={2}>
        <Avatar
          className={classes.avatar}
          src="/static/images/avatars/saiful-akbar.jpg"
          alt="Avatar"
        />

        <Typography color="textPrimary" variant="h5">
          Saiful Akbar
        </Typography>

        <Typography color="textSecondary" variant="body2">
          saifulakbar.job@gmail.com
        </Typography>
      </Box>

      <Divider />

      <Box pr={2}>
        <List>
          {items.map(item => (
            <NavItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              onClickMenu={e => handleClickMenu(e, item.id)}
            />
          ))}
        </List>
      </Box>

      <Box flexGrow={1} />
      <Divider />

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        p={1}
      >
        <Tooltip title="Facebook">
          <IconButton
            color="primary"
            component={Link}
            href="https://facebook.com/ackbar.syaiful/"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Twitter">
          <IconButton
            color="primary"
            component={Link}
            href="https://twitter.com/Saiful_akbar13/"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Instagram">
          <IconButton
            color="primary"
            component={Link}
            href="https://www.instagram.com/saifulakbar13/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Github">
          <IconButton
            color="primary"
            component={Link}
            href="https://github.com/saiful-akbar/"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Mail">
          <IconButton color="primary" href="mailto:saifulakbar.job@gmail.com">
            <MailIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden mdUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>

      <Hidden smDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
