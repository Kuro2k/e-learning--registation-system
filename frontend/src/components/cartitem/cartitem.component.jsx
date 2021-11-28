import React from "react";
import { useStyles } from "./cartitem.style.component";
import { Button, Grid } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { useDispatch } from "react-redux";
import { delToCartAction } from "./../../reducer/cartReducer";
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
const imglink = `./../../asset/${Math.floor(Math.random() * 15)}`;

function CartItem(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const item = props.item;

  const registerCourse = async () => {
    try {
        const data = {
            learner_id: JSON.parse(localStorage.getItem('user')).user.id,
            course_id: item.id,
            enroll_status: 'Enrolled',
            payment_status: 'Pending',
            fee: item.tuition_fee,
            startdate: item.start_date.slice(0,10),
        }
        const result = await axios.post(
            'http://localhost:3300/api/v1/enroll/register',
            data
        );
        alert(result.data);
    } catch (error) {
        alert("Đăng ký không thành công!");
    }
  }

  const deleteCourse = async () => {
      try {
        const data = {
            learner_id: JSON.parse(localStorage.getItem('user')).user.id,
            course_id: item.id,
        }
        const result = await axios.post(
            'http://localhost:3300/api/v1/enroll/delete',
            data
        );
        dispatch(delToCartAction(item.id));
      } catch (error) {
        dispatch(delToCartAction(item.id));
      }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <img src="https://picsum.photos/200/100" alt=""></img>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.content}>
            <h3>{item.name}</h3>
            <p>By Jose Portilla, Head of Data Science, Pierian Data Inc.</p>
            <div className={classes.subinfo}>
              <PersonIcon />  
              <p>{item.num_learner} people</p>
              <p>{item.course_length} lessons</p>
              <p>{item.start_date.slice(0,10)}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.button}>
            <Button onClick={deleteCourse}>Remove</Button>
            <Button onClick={registerCourse}>Save for later</Button>
          </div>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.price}>
            <div className={classes.detail}>
              <h4>$ {item.tuition_fee}</h4>
            </div>
            <div className={classes.note} title="Giam gia">
              <LocalOfferIcon />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CartItem;
