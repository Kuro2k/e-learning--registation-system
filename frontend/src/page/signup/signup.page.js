import React from 'react'
import { useStyles } from './signup.style.page'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

function SignUp() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>
            <div className={classes.container}>
                <div className={classes.box}>
                    <div className={classes.boxtitle}>
                        <p>
                        Sign Up and Start Learning!
                        </p>
                    </div>
                    <div className={classes.boxform}>
                        <form action="" autoComplete="off">
                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <PersonIcon/>
                                </div>
                                <input type="text" placeholder="Name"></input>
                            </div>

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
                                Sign Up
                            </Button>

                        </form>

                        <div className={classes.signup}>
                            Already have an account?
                            <Link to="/login">
                                Log In
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp