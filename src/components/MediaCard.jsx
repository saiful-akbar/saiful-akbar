import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  media: {
    height: 150,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%'
  }
});

export default function MediaCard({ image, title, description, ...props }) {
  const classes = useStyles();

  return (
    <div {...props}>
      <Card elevation={5}>
        <CardMedia className={classes.media} image={image} title="Media Card" />

        <CardContent>
          <Typography noWrap gutterBottom variant="h4">
            {title}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
