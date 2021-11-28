import React, { useState } from 'react'
import { useStyles } from './login.style.page'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setloginAction } from './../../reducer/loginReducer';

function Login() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const [login, setLogin] = useState({
        username: "",
        password_user: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLogin({...login, [name]: value});
    }

    const handleLogin = async (e) => {
        try {
            const result = await axios.post(
                'http://localhost:3300/api/v1/user/login',
                login
            );
            localStorage.setItem('user', JSON.stringify(result.data));
            dispatch(setloginAction());
            history.push('/');
        } catch (error) {
            alert('Đăng nhập không thành công!');
        }
    }

    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>
            <div className={classes.container}>
                <div className={classes.box}>
                    <div className={classes.boxtitle}>
                        <p>
                        Log In to Your Udemy Account!
                        </p>
                    </div>
                    <div className={classes.boxform}>
                        <form action="" autoComplete="off">
                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <EmailIcon/>
                                </div>
                                <input onChange={handleChange} name="username" type="text" placeholder="Username"></input>
                            </div>

                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <LockIcon/>
                                </div>
                                <input onChange={handleChange} name="password_user" type="password" placeholder="Password"></input>
                            </div>

                            <Button onClick={handleLogin} type="button">
                                Log In
                            </Button>

                        </form>

                        <div className={classes.signup}>
                            Don't have an account? 
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login