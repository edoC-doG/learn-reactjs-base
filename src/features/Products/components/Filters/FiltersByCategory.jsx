import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    menu: {
        padding: 0,
        margin: 0 ,
        listStyleType: 'none',

        '& >li': {
            marginTop : theme.spacing(1),   
            transition: 'all .25s',
            '&:hover': {
                color: theme.palette.primary.main,
                cursor: 'pointer',
            },
        },
    },
}))


function FiltersByCategory({onChange}) {
    const [categoryList, setCategoryList] = useState([])
    const classes = useStyles()
    useEffect(() => {
    (async() => {
        try {
            const listCategory = await categoryApi.getAll()
            console.log({listCategory})
            setCategoryList(listCategory.map(cate => ({
                id : cate.id,
                name: cate.name
            })))
        } catch (error) {
            console.log('FAIL TO FETCH CATEGORY LIST', error)
        }
    })()
    }, [])

    const handleCategoryClick = (category) => {
        if(onChange){
            onChange(category.id)
        }
    }
  return (
    <Box className={classes.root}>
      <Typography variant='subtitle2'>DANH MUC SAN PHAM</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
            <li key={category.id} onClick={()=> handleCategoryClick(category)}>
            <Typography variant='body2'>
            {category.name} 
            </Typography>
            </li>
        ))}
      </ul>
    </Box>
  );
}

FiltersByCategory.propTypes = {
    onChange: PropTypes.func,

};

export default FiltersByCategory;
