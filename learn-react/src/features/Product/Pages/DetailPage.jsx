import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Paper, Grid } from '@material-ui/core';

DetailPage.propTypes = {};

function DetailPage(props) {
   return (
      <div>
         <Box>
            <Container>
               <Paper elevation={0}>
                  <Grid container>
                     <Grid item></Grid>
                     <Grid item></Grid>
                  </Grid>
               </Paper>
            </Container>
         </Box>
      </div>
   );
}

export default DetailPage;
