import React from 'react';
import { Grid, Typography, Divider, Box } from '@material-ui/core';
import MediaCard from 'src/components/MediaCard';
import Page from 'src/components/Page';

const items = [
  {
    image: '/static/images/portofolio/sm-inventory.png',
    title: 'Slow Motor Inventory',
    description:
      'Web application to manage spare parts inventory data at slow motor repair shop.'
  },
  {
    image: '/static/images/portofolio/scooter-ws.png',
    title: 'Scooter Work Shop',
    description:
      'A web application for managing goods data, from purchasing goods, sales, stock data and transaction reports & stock reports and so on.'
  }
];

const Portofolio = () => {
  return (
    <Page id="portofolio">
      <Typography noWrap gutterBottom variant="h3" color="textSecondary">
        # Portofolio
      </Typography>

      <Divider />

      <Box p={2}>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="flex-start"
          spacing={3}
        >
          {items.map((item, key) => (
            <Grid item md={4} sm={6} xs={12} key={key}>
              <MediaCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default Portofolio;
