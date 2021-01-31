import React from 'react';
import Page from 'src/components/Page';
import { Typography, Divider, Box, Grid } from '@material-ui/core';
import Profile from './Profile';
import Education from './Education';
import Skill from './Skill';

const About = () => {
  return (
    <Page id="about">
      <Typography noWrap gutterBottom variant="h3" color="textSecondary">
        # About Me
      </Typography>

      <Divider />

      <Box p={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item md={6} xs={12}>
            <Profile />
          </Grid>

          <Grid item md={6} xs={12}>
            <Education />
          </Grid>

          <Grid item xs={12}>
            <Skill />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default About;
