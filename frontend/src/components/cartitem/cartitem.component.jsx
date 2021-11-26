import React from 'react'
import { useStyles } from './cartitem.style.component';
import Image from './../../asset/2.jpg'
import { Button, Grid } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function CartItem() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <img src={Image} alt=""></img>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.content}>
                        <h3>2022 Complete Python Bootcamp From Zero to Hero in Python</h3>
                        <p>
                            By Jose Portilla, Head of Data Science, Pierian Data Inc.
                        </p>
                        <div>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <div className={classes.button}>
                        <Button>
                            Remove
                        </Button>
                        <Button>
                            Save for later
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    
                    <div className={classes.price}>
                        <div className={classes.detail}>
                            <h4>
                                $9.99
                            </h4>
                            <p>
                                $88.9
                            </p>
                        </div>
                        <div className={classes.note} title="Giam gia">
                            <LocalOfferIcon/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default CartItem
