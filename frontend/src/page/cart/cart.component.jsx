import React from 'react'
import { useStyles } from './cart.style.component';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartitem/cartitem.component';

function Cart() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>

            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <p>Shopping Cart</p>
                    </div>

                    <div className={classes.cartlist}>
                        <Grid container spacing={2}>
                            <Grid item xs={9}>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                                <CartItem/>
                            </Grid>
                            <Grid item xs={3}>
                                <div className={classes.payment}>
                                    <h3>Total:</h3>
                                    <p>$19.9</p>
                                    <div>
                                    <span>$26.9</span>
                                    <h6>
                                        80% off
                                    </h6>
                                    </div>
                                    <Link to="/checkout">
                                    <Button>
                                        Checkout
                                    </Button>
                                    </Link>

                                    <div className={classes.coupon}>
                                        <input type="text" placeholder="Enter coupon"></input>
                                        <Button>
                                            Apply
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
