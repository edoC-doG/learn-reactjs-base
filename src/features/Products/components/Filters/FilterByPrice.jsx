import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography, makeStyles } from '@material-ui/core';
import { BorderTop } from '@material-ui/icons';




const useStyles = makeStyles((theme) =>({
    root: {
      padding: theme.spacing(2),
      borderTop: `1px solid ${theme.palette.grey[300]}`
    },
    range: {
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      marginTop: theme.spacing (1),
      marginBottom: theme.spacing(1),

      '& > span ': {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
      }
    },
}));

function FilterByPrice({onChange}) {
  const classes = useStyles()
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(values);
    if (onChange) onChange(values)
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Price</Typography>

      <Box className={classes.range}>
        <TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
        <span>-</span>
        <TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
      </Box>

      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Apply
      </Button>
    </Box>
  );
}

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

export default FilterByPrice;
