import React from 'react'
import { useStyles } from './prodcutlist.style.component';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import Product from '../product/product.component';

function ProductList() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <div className={classes.search}>
                <div className={classes.icon}>
                    <SearchIcon/>
                </div>
                <input type="text" placeholder="Search courses"></input>
            </div>

            <div>
            <Grid style={{width: '1300px'}} rowSpacing={4}  container spacing={2}>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
                <Grid item xs={3}>
                    <Product/>
                </Grid>
            </Grid>
            </div>

        </div>
    )
}

export default ProductList
