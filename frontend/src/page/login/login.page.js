import React from 'react'
import { useStyles } from './login.style.page'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

function Login() {
    const classes = useStyles();
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
                                <input type="email" placeholder="Email"></input>
                            </div>

                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <LockIcon/>
                                </div>
                                <input type="password" placeholder="Password"></input>
                            </div>

                            <Button type="button">
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