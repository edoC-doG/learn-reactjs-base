import React from 'react'
import { Switch } from 'react-router-dom/cjs/react-router-dom';
import { Route, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';
import { Box } from '@material-ui/core';

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
         <Route path={match.path} exact component={ListPage}/>
      </Switch>
    </Box>
  )
}

ProductFeature.propTypes = {}

export default ProductFeature
