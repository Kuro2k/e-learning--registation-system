import React from 'react'
import { useStyles } from './prodcutlist.style.component';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Button } from '@mui/material';
import Product from '../product/product.component';
import { useDispatch, useSelector } from 'react-redux';
import { setcourseviewAction } from './../../reducer/courseReducer';
import axios from 'axios';
function ProductList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.Courses.coursesview);

    const [search, setSearch] = React.useState({
        name: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearch({...search, [name]: value});
    }

    const findCourse = async () => {
        try {
            const result = await axios.post(
                'http://localhost:3300/api/v1/course/find',
                search
            );
            console.log(result.data);
            dispatch(setcourseviewAction(result.data));
        } catch (error) {}
    }

    return (
        <div className={classes.root}>
            
            <div className={classes.search}>
                <Button onClick={findCourse}>
                    <SearchIcon/>
                </Button>
                <input autoComplete="off" onChange={handleChange} name="name" type="text" placeholder="Search courses"></input>
            </div>

            <div>
            <Grid style={{width: '1300px'}} rowSpacing={4}  container spacing={2}>
                {
                    courses.map((course, index) => {
                        return (
                            <Grid key={index}  item xs={3}>
                                <Product course={course}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            </div>

        </div>
    )
}

export default ProductList
