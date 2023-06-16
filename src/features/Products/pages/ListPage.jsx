import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductsList from '../components/ProductsList';

const useStyle = makeStyles((theme) => ({
  root: {},
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  const classes = useStyle();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    (async()=> {
      try {
        const {data} = await productApi.getAll({_page: 1, _limit: 10});
        setProductList(data)
      } catch (error) {
        console.log('failed to fetch product list', error)
      }
      setLoading(false);
    })();
  }, [])
  return (  
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList/> : <ProductsList data={productList}/> }</Paper> 
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
