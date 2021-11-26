import React from 'react'
import { useStyles } from './product.style.component';
import img from './../../asset/4.jpg';
import { Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

function Product() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <div className={classes.imagebox}>
                    <div className={classes.image}>
                        <img src={img} alt=""></img>
                    </div>
                    <div className={classes.fade}>
                        <Button>
                            add to cart
                        </Button>
                    </div>
                </div>
                <div className={classes.title}>
                    <p>
                        2022 Complete Python Bootcamp From Zero to Hero in Python
                    </p>
                </div>
                <div className={classes.author}>
                    <p>
                        Jose Portilla
                    </p>
                </div>
                <div className={classes.dg}>
                    
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                </div>

                <div className={classes.price}>
                    <p>
                        $19.99
                        <span>$25.99</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product
