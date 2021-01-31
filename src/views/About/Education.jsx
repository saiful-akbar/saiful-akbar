import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark
  },
  content: {
    height: 600,
    overflow: 'auto'
  }
}));

export default function Education() {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.root}>
      <CardHeader title="My Education" />
      <CardContent className={classes.content}>
        <Timeline align="left">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2014 - 2018</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography gutterBottom variant="body1">
                Bachelor Degree / Pamulang University
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2011 - 2014</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography gutterBottom variant="body1">
                Senior High School / SMK Sasmita Jaya
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2008 - 2011</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography gutterBottom variant="body1">
                Junior High School / SMP Nusantara Plus
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography color="textSecondary">2002 - 2008</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Typography gutterBottom variant="body1">
                Elementary School / SD N Kampung Bulak 1
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </CardContent>
    </Card>
  );
}
