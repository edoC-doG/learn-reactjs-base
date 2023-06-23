import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            textColor='primary'
            indicatorColor='primary'
            onChange={handleSortChange}
            aria-label='disabled tabs example'
        >
            <Tab label='Gia thap toi cao' value="salePrice:ASC"></Tab>
            <Tab label='Gia cao toi thap' value="salePrice:DESC"></Tab>
        </Tabs>
    );
}

export default ProductSort;