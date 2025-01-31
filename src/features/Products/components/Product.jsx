import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';


function Product({ product }) {
  const thumbnailUrl = product.thumbnail
  ? `${STATIC_HOST}${product.thumbnail?.url}`
  : THUMBNAIL_PLACEHOLDER;
  return (
    <div>
      <Box padding={1}>
        <Box padding={1} minHeight="215px">
          <img
            src={thumbnailUrl}   
            width="100%"
            alt={product.name}
          />
        </Box>
        <Box pl={1}>
        <Typography variant="body2">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? `-${product.promotionPercent}%`: ''}
        </Typography>
        </Box>
      </Box>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
