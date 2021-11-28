import React from 'react'
import { useStyles } from './cart.style.component';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CartItem from '../../components/cartitem/cartitem.component';
import { useSelector } from 'react-redux';


function Cart() {
    const classes = useStyles();

    const cart = useSelector(state => state.Cart.cart);
    const total = useSelector(state => state.Cart.total);

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
                                {
                                    cart.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <CartItem item={item}/>
                                            </div>
                                        )
                                    }, '')
                                }
                            </Grid>
                            <Grid item xs={3}>
                                <div className={classes.payment}>
                                    <h3>Total:</h3>
                                    <p>$ {total}</p>
                                    <div>
                                    <span>$0</span>
                                    <h6>
                                        0% off
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
