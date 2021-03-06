import React from 'react';
import {
  Divider,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import EventIcon from '@material-ui/icons/Event';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.dark
  },
  content: {
    height: 600,
    overflow: 'auto'
  },
  icon: {
    backgroundColor: theme.palette.primary.dark,
    color: '#FFF'
  }
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title="Profile" />

      <CardContent className={classes.content}>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="Saiful Akbar" secondary="Name" />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <EventIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="April 13th 1996" secondary="Date of birth" />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <PhoneAndroidIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary="+62 813-8904-8009" secondary="Phone" />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <WhatsAppIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="+62 878-7104-4105"
              secondary="WhatsApp only"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="saifulakbar.job@gmail.com"
              secondary="Email"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <PublicIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="saiful-akbar13.web.app"
              secondary="Website"
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.icon}>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="Kota Tangerang Selatan, Indonesia"
              secondary="Address"
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default Profile;
