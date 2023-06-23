import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  list: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',

    '& > li': {
      margin: 0,
      marginTop: theme.spacing(1),
    },
  },
}));

function FilterByService({ filters = {}, onChange }) {
  const classes = useStyles();
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">SERVICE</Typography>

      <ul className={classes.list}>
        {[
          { value: 'isPromotion', label: 'Co khuyen mai' },
          { value: 'isFreeShip', label: 'Co free ship' },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={<Checkbox checked={Boolean(filters[service.value])} onChange={handleChange} name={service.value} color="primary" />}
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

FilterByService.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object,
};

export default FilterByService;
