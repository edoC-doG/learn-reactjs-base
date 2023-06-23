import { Box, Container, Grid, Paper, makeStyles } from '@material-ui/core';
import productApi from 'api/productApi';
import React, { useMemo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductsList from '../components/ProductsList';
import { Pagination } from '@material-ui/lab';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';
import FilterViewer from '../components/FilterViewer';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';

const useStyle = makeStyles((theme) => ({
  root: {
    paddingBottom: '20px',
  },
  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
  },
}));

function ListPage(props) {
  const classes = useStyle();
  //lay filters thanh url Params

// voi location moi khi URL co thay doi gi do , la no se tra ve 1 obj location moi,
//nma tk history no van la nhu cu, nma thay doi gia tri history ben trong ( ben trong history co location va tk locatin do co thay doi) Nma Obj cua tk history la k thay doi
  const history = useHistory();
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params =  queryString.parse(location.search)
    return {
      ...params,
    _page: Number.parseInt(params._page) || 1,
    _limit: Number.parseInt(params._limit) || 9,
    _sort: params._sort || 'salePrice:ASC',
    isPromotion: params.isPromotion === 'true',
    isFreeShip: params.isFreeShip === 'true',
    }
  }, [location.search])

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _page: Number.parseInt(queryParams._page) || 1,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _sort: queryParams._sort || 'salePrice:ASC',
  // });
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  // useEffect(() => {
  //   // moi khi filter se chuyen filter thanh 1 object
  //   history.push({
  //     pathname: history.location.pathname,
  //     search: queryString.stringify(filters),
  //   });
  // }, [history, filters]);

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('failed to fetch product list', error);
      }
      setLoading(false);
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _page: page,
    // }));
    const filters = {
      ...queryParams,
      _page: page
    }

    history.push({
          pathname: history.location.pathname,
          search: queryString.stringify(filters),
        });
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((prevFilters) => ({
    //   ...prevFilters,
    //   _sort: newSortValue,
    // }));
    const filters = {
      ...queryParams,
      _sort: newSortValue
    }

    history.push({
          pathname: history.location.pathname,
          search: queryString.stringify(filters),
        });
  };
  const handleFilterChange = (newFilters) => {
    // setFilters((prevFilters) => ({ 
    //   ...prevFilters,
    //   ...newFilters,
    // }));
    const filters = {
      ...queryParams,
      ...newFilters
    }

    history.push({
          pathname: history.location.pathname,
          search: queryString.stringify(filters),
        });
  };

  const setNewFilters = (newFilters) => {
    // setFilters(newFilters);
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    });
  };

  return (
    <Box>
      <Container className={classes.root}>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilter filters={queryParams} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={queryParams._sort} onChange={handleSortChange} />
              <FilterViewer filters={queryParams} onChange={setNewFilters} />
              {loading ? <ProductSkeletonList /> : <ProductsList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                ></Pagination>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

ListPage.propTypes = {};

export default ListPage;
