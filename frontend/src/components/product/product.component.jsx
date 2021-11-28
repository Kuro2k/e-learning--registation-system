import React from "react";
import { useStyles } from "./product.style.component";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { addToCartAction } from "./../../reducer/cartReducer";
import { useHistory } from 'react-router-dom';
import { setcourseSelectAction } from './../../reducer/courseReducer';
// import Modal from "@mui/material/Modal";

function Product(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const course = props.course;
  const history = useHistory();

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

  const handleAddToCart = () => {
    dispatch(addToCartAction(course));
  };

  const getImageUrl = () => {
    return (
      "https://picsum.photos/200/300?second=" + new Date().toLocaleString()
    );
  };

  const getdetailcourse = () => {
    dispatch(setcourseSelectAction(course));
    history.push('/detail');
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <div className={classes.imagebox}>
          <div className={classes.image}>
            <img src={getImageUrl()} alt=""></img>
          </div>
          <div className={classes.fade}>
            <Button onClick={handleAddToCart}>add to cart</Button>
          </div>
        </div>
        <div className={classes.contentbox} onClick={getdetailcourse}>
            <div className={classes.title}>
            <p>{course.name}</p>
            </div>
            <div className={classes.author}>
            {/* <p>Jose Portilla</p> */}
            </div>
            <div className={classes.dg}>
            <PersonIcon /> {course.num_learner} people
            <p>{course.course_length} lessons</p>
            </div>

            <div className={classes.price}>
            <p>
                $ {course.tuition_fee}
                <span>{course.start_date.slice(0, 10)}</span>
            </p>
            </div>
        </div>
      </div>

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={classes.modal}>
          <div className={classes.imagebox}>
            <div className={classes.image}>
              <img src={getImageUrl()} alt=""></img>
            </div>
          </div>
          <div className={classes.title}>
            <p>{course.name}</p>
          </div>
          <div className={classes.author}>
            <p>Lecturer: Jose Portilla</p>
          </div>
          <div className={classes.dg}>
            <PersonIcon /> {course.num_learner} people
            <p>{course.course_length} lessons</p>
          </div>

          <div className={classes.price}>
            <p>
              $ {course.tuition_fee}
              <span>{course.start_date.slice(0, 10)}</span>
            </p>
          </div>

          <div></div>
        </div>
      </Modal> */}
    </div>
  );
}

export default Product;
