import React from 'react'
import PropTypes from 'prop-types'
import FiltersByCategory from './Filters/FiltersByCategory'
import { Box } from '@material-ui/core';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';


function ProductFilter({filters, onChange}) {
    const handleCategoryChange = (newCategoryId)  => {
        if(!onChange) return;
        
        const newFilters = {
            ...filters,
            category: newCategoryId,
        }
        onChange(newFilters)
    }
    const handleChange = (newPrice)  => {
        if(onChange) onChange(newPrice)
    }
  return (
    <Box>
        <FiltersByCategory onChange={handleCategoryChange}/>
        <FilterByPrice onChange={handleChange}/>
        <FilterByService filters={filters} onChange={handleChange}/>
    </Box>
  )
}

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
}

export default ProductFilter
