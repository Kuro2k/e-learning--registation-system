import React from "react";
import { useStyles } from "./header.style.component";
import { Grid, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import logo from "./../../asset/logolight.jpg";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";
import { setlogoutAction } from "./../../reducer/loginReducer";
import axios from 'axios';
import { setcourseviewAction } from './../../reducer/courseReducer';

function LoginComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    dispatch(setlogoutAction());
  };

  return (
    <div className={classes.logincomponent}>
      <Link to="/cart">
        <Button title="">
          <LocalGroceryStoreOutlinedIcon />
        </Button>
      </Link>
      <Link to="/user">
        <Button title="Người dùng">
          <PersonOutlineOutlinedIcon />
        </Button>
      </Link>
      <Link to="/login">
      <Button onClick={handleLogout} title="Đăng xuất">
        <LogoutIcon />
      </Button>
      </Link>
    </div>
  );
}

function LoginButton() {
  const classes = useStyles();
  return (
    <div className={classes.loginbutton}>
      <div className={classes.white}>
        <Link to="/login">
          <Button title="Đăng nhập">Login</Button>
        </Link>
      </div>
      <div className={classes.black}>
        <Link to="/signup">
          <Button title="Đăng ký">Sign up</Button>
        </Link>
      </div>
    </div>
  );
}

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const login = useSelector((state) => state.Login.login);
  const [search, setSearch] = React.useState({
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const findCourse = async () => {
    try {
      const result = await axios.post(
        "http://localhost:3300/api/v1/course/find",
        search
      );
      console.log(result.data);
      dispatch(setcourseviewAction(result.data));
    } catch (error) {}
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Link to="/">
            <div className={classes.logo}>
              <img src={logo} alt="logo"></img>
            </div>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.searchbox}>
            <div className={classes.search}>
              <Button onClick={findCourse}>
                <SearchIcon />
              </Button>
              <input autoComplete="off" onChange={handleChange} name="name" type="text" placeholder="Search for anything"></input>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.login}>
            {!login ? <LoginButton /> : <LoginComponent />}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
