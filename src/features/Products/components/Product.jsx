import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

function Product({product}) {
  return (
    <div>
      <Box padding={1}>
        <Skeleton variant="rect" width="100%" height={118} />
        <Typography variant='body2'>{product.name}</Typography>
        <Typography variant='body2'>
        {product.salePrice}- {product.promotionPercent}</Typography>
      </Box>
    </div>
  );
}

Product.propTypes = {
    product: PropTypes.object,
};

export default Product;
