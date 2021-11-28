import React from 'react'
import { useStyles } from './checkout.style.page'
import { Grid, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


function Checkout() {
    const classes = useStyles();

    const total = useSelector(state => state.Cart.total);
    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>

            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.title}>
                        <p>Check Out</p>
                    </div>

                    <div className={classes.checkout}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <div className={classes.userinfo}>
                                    <form>
                                        <Grid container spacing={2} rowSpacing={1}>
                                            <Grid item xs={12}>
                                                <input type="text" placeholder="Name on Card"></input>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <input type="text" placeholder="Card Number"></input>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <input type="text" placeholder="MM/YY"></input>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <input type="text" placeholder="Security Code"></input>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <input type="text" placeholder="Postal Code"></input>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <div className={classes.checkbox}>
                                                    <Checkbox {...label} defaultChecked />
                                                    <p>Remember card</p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <div className={classes.payment}>
                                    <h3>Summary</h3>
                                    <div className={classes.item}>
                                        <div className={classes.iteml}>
                                            <p>Original price:</p>
                                        </div>
                                        <div className={classes.itemr}>
                                            <p>$ {total}</p>
                                        </div>
                                    </div>
                                    <div className={classes.item}>
                                        <div className={classes.iteml}>
                                            <p>Coupon discounts:</p>
                                        </div>
                                        <div className={classes.itemr}>
                                            <p>-$0</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={classes.item}>
                                        <div className={classes.iteml}>
                                            <p>Total:</p>
                                        </div>
                                        <div className={classes.itemr}>
                                            <p>$ {total}</p>
                                        </div>
                                    </div>
                                    <Button>
                                        Complete Payment
                                    </Button>
                                    
                                    <Link to="/cart">
                                        <div className={classes.cancle}>
                                            CANCLE
                                        </div>
                                    </Link>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
