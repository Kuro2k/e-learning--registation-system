import React from "react";
import { useStyles } from "./header.style.component";
import { Grid, Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import logo from "./../../asset/logo.svg";
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

function LoginComponent() {
  const classes = useStyles();
  return (
    <div className={classes.logincomponent}>
      <Link to="/cart">
        <Button title="">
          <LocalGroceryStoreOutlinedIcon/>
        </Button>
      </Link>
      <Link to="/cart">
        <Button title="Người dùng">
          <PersonOutlineOutlinedIcon/>
        </Button>
      </Link>
      <Button title="Đăng xuất">
        <LogoutIcon/>
      </Button>
    </div>
  )
}

function LoginButton() {
  const classes = useStyles();
  return (
    <div className={classes.loginbutton}>
      <div className={classes.white}>
        <Link to="/login">
          <Button title="Đăng nhập">
            Login
          </Button>
        </Link>
      </div>
      <div className={classes.black}>
        <Link to="/signup">
        <Button title="Đăng ký">
          Sign up
        </Button>
        </Link>
      </div>
    </div>
  )
}

function Header() {
  const classes = useStyles();

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
              <div className={classes.icon}>
                <SearchIcon/>
              </div>
              <input type="text" placeholder="Search for anything"></input>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.login}>
            {
              (false) ? <LoginButton/> : <LoginComponent/>
            }
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
