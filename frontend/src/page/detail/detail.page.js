import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useStyles } from './detail.style.page';
import axios from 'axios';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCartAction } from './../../reducer/cartReducer';

function Detail() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const getImageUrl = () => {
        return (
          "https://picsum.photos/400/200?second=" + new Date().toLocaleString()
        );
    };

    const [lecturer, setLecturer] = useState();

    const course = useSelector(state => state.Courses.courseselect);

    const getLecturer = async () => {
        try {
            const result = await axios.get(
                `http://localhost:3300/api/v1/user/teachers/${course.id}`
            )
            console.log(result.data);
            setLecturer(result.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        getLecturer();
    }, []);

    const handleAddToCart = () => {
        dispatch(addToCartAction(course));
    };

    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>

            <div className={classes.container}>
                <div className={classes.content}>
                    <h3>Thông tin chi tiết khóa học</h3>
                    <div className={classes.pic}>
                        <img src={getImageUrl()} alt=""></img>
                    </div>
                    <div>
                        <p>Name: <span>{course.name}</span></p>
                    </div>
                    <div>
                        <p>Lecturer: 
                            {
                                (lecturer) ? (lecturer.map((item, index) => {
                                    return (
                                        <span key={index}>
                                            {
                                                `${item.first_name} ${item.last_name}`
                                            }
                                        </span>
                                    )
                                }, '')) : ''
                            }
                        </p>
                    </div>
                    <div>
                        <p>Fee: <span>$ {course.tuition_fee}</span></p>
                    </div>
                    <div>
                        <p>Lessons: <span>{course.course_length}</span></p>
                    </div>
                    <div>
                        <p>Learner: <span>{course.num_learner}</span></p>
                    </div>
                    <div>
                        <p>Start date: <span>{course.start_date.slice(0,10)}</span></p>
                    </div>
                    <div className={classes.button}>
                        <Button onClick={handleAddToCart}>
                            Add to cart 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
