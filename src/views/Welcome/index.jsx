import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

const Wlcome = props => {
  return (
    <section {...props}>
      <Paper variant="elevation">
        <Box
          p={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          style={{ textAlign: 'center' }}
        >
          <Typography variant="h1" color="textPrimary">
            Hello, I'am <strong>Saiful Akbar</strong>, an WEB Developer
          </Typography>

          <Box mt={10}>
            <Typography variant="h3" color="textSecondary">
              Welcome to my personal website.
            </Typography>
          </Box>
        </Box>
      </Paper>
    </section>
  );
};

export default Wlcome;
