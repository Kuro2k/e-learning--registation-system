import React from 'react'
import { useStyles } from './product.style.component';
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from 'react-redux';
import { addToCartAction } from './../../reducer/cartReducer';
const imglink = `./../../asset/${Math.floor(Math.random() * 15)}.jpg`;

function Product(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const course = props.course;

    const handleAddToCart = () => {
        dispatch(addToCartAction(course));
    }

    const getImageUrl = () => {
        return 'https://picsum.photos/200/300?second=' + new Date().toLocaleString();
    }

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <div className={classes.imagebox}>
                    <div className={classes.image}>
                        <img src={getImageUrl()} alt=""></img>
                    </div>
                    <div className={classes.fade}>
                        <Button onClick={handleAddToCart}>
                            add to cart
                        </Button>
                    </div>
                </div>
                <div className={classes.title}>
                    <p>
                        {course.name}
                    </p>
                </div>
                <div className={classes.author}>
                    <p>
                        Jose Portilla
                    </p>
                </div>
                <div className={classes.dg}>
                    <PersonIcon/>  {course.num_learner}  people
                    <p>
                        {course.course_length} lessons
                    </p>
                </div>

                <div className={classes.price}>
                    <p>
                        $ {course.tuition_fee}
                        <span>{course.start_date.slice(0,10)}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product
