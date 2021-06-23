import ListPage from '../../features/Product/Pages/ListPage';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;