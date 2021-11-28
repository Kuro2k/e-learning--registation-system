import React, { useEffect } from "react";
import { useStyles } from "./home.style.page";
import banner from "./../../asset/banner.jpg";
import Product from "../../components/product/product.component";
import { Grid, Button } from "@mui/material";

import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import StarIcon from "@mui/icons-material/Star";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import ProductList from "../../components/productlist/productlist.component";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setcoursesAction } from "./../../reducer/courseReducer";
import { initCartAction } from './../../reducer/cartReducer';

function ArrowButtonLeft(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <div className={classes.buttonleft}>
        <Button>
          <ArrowLeftIcon />
        </Button>
      </div>
    </div>
  );
}

function ArrowButtonRight(props) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <div className={classes.buttonright}>
        <Button>
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}

function Home(props) {
  const classes = useStyles();
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <ArrowButtonRight />,
    prevArrow: <ArrowButtonLeft />,
  };
  const dispatch = useDispatch();

  // const courses = useSelector((state) => state.Courses.coursesview);
  const topcourse = useSelector((state) => state.Courses.topcourse);

  const getCourses = async (e) => {
    try {
      const result = await axios.get(
        "http://localhost:3300/api/v1/course/courses"
      );
      dispatch(setcoursesAction(result.data));
    } catch (error) {}
  };

  const getAllCourse = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3300/api/v1/course/registercourse/${
          JSON.parse(localStorage.getItem("user")).user.id
        }`,
        {
          headers: {
            token: JSON.parse(localStorage.getItem("user")).token,
          },
        }
      );
      dispatch(initCartAction(result.data[0]))
    } catch (error) {}
  };

  useEffect(() => {
    getCourses();
    getAllCourse();
  }, []);

  return (
    <div className={classes.root}>
      <div style={{ height: "80px" }}></div>

      <div className={classes.bannerbox}>
        <div className={classes.banner}>
          <img src={banner} alt=""></img>
        </div>
      </div>

      <div className={classes.tabbannerbox}>
        <div className={classes.content}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <div className={classes.item}>
                <div className={classes.icon}>
                  <PlayArrowRoundedIcon />
                </div>
                <div>
                  <p>Learn in-demand skills with over 183,000 video courses</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.item}>
                <div className={classes.icon}>
                  <StarIcon />
                </div>
                <div>
                  <p>Choose courses taught by real-world experts</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.item}>
                <div className={classes.icon}>
                  <AllInclusiveIcon />
                </div>
                <div>
                  <p>
                    Learn at your own pace, with lifetime access on mobile and
                    desktop
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.title}>
        <div>
          <p className={classes.p}>Top Courses</p>
        </div>
      </div>
      <div className={classes.recommendproductsbox}>
        <div className={classes.recommendproducts}>
          <div>
            <Slider {...settings}>
              {topcourse.map((course, index) => {
                return (
                  <div key={index}>
                    <Product course={course} />
                  </div>
                );
              }, "")}
            </Slider>
          </div>
        </div>
      </div>

      <div className={classes.title}>
        <div>
          <p className={classes.p}>All Courses</p>
        </div>
      </div>

      <div className={classes.allcourses}>
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
