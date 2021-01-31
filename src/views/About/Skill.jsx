import React from 'react';
import { Grid, Typography, Box, Avatar, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  header: {
    textAlign: 'center'
  },
  avatar: {
    cursor: 'pointer',
    width: 100,
    height: 100,
    marginBottom: theme.spacing(1),
    '.MuiAvatar-img': {
      width: '100px !important',
      height: '100px !important'
    },
    '&:hover': {
      opacity: '0.3'
    }
  }
}));

function SkillItem(props) {
  const classes = useStyles();

  return (
    <Box alignItems="center" display="flex" flexDirection="column" p={2}>
      <Avatar
        className={classes.avatar}
        src={props.img}
        alt={props.title}
        component={Link}
        href={props.href}
        target="_blank"
      />

      <Typography color="textPrimary" variant="h5">
        {props.title}
      </Typography>
    </Box>
  );
}

const items = [
  { img: '/static/images/skill/html.png', title: 'HTML', href: '#' },
  { img: '/static/images/skill/css.png', title: 'CSS', href: '#' },
  {
    img: '/static/images/skill/javascript.png',
    title: 'Javascript',
    href: 'https://www.javascript.com/'
  },
  {
    img: '/static/images/skill/jquery.png',
    title: 'jQuery',
    href: 'https://jquery.com/'
  },
  {
    img: '/static/images/skill/react.png',
    title: 'React JS',
    href: 'https://reactjs.org/'
  },
  {
    img: '/static/images/skill/php.png',
    title: 'PHP',
    href: 'https://www.php.net/'
  },
  {
    img: '/static/images/skill/laravel.png',
    title: 'Laravel',
    href: 'https://laravel.com/'
  },
  {
    img: '/static/images/skill/mysql.png',
    title: 'MySQL',
    href: 'https://www.mysql.com/'
  }
];

function Skill() {
  const classes = useStyles();

  return (
    <Box mt={5}>
      <Typography
        noWrap
        gutterBottom
        variant="h4"
        color="textPrimary"
        className={classes.header}
      >
        My Skill
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
        spacing={3}
      >
        {items.map((item, i) => (
          <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
            <SkillItem img={item.img} title={item.title} href={item.href} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skill;
