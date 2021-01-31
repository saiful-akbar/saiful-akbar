import React from 'react';
import Page from 'src/components/Page';
import {
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'auto'
  },
  icon: {
    height: 45,
    width: 45,
    backgroundColor: theme.palette.secondary.dark,
    color: '#FFF'
  }
}));

function Contact() {
  const classes = useStyles();

  return (
    <Page id="contact">
      <Typography noWrap gutterBottom variant="h3" color="textSecondary">
        # Contact
      </Typography>

      <Divider />

      <Box p={2} className={classes.root}>
        <List>
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
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>

            <ListItemText
              primary="Kota Tangerang Selatan, Indonesia"
              secondary="Address"
            />
          </ListItem>
        </List>
      </Box>
    </Page>
  );
}

export default Contact;
