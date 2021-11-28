import React, { useState } from 'react'
import { useStyles } from './signup.style.page'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';

function SignUp() {
    const classes = useStyles();
    const [newuser, setNewuser] = useState(
        {
            ssn: '',
            last_name: '',
            first_name: '',
            gender: 'Male',
            dob: '2000-01-01',
            phone_number: '',
            address: '',
            username: '',
            password_user: '',
            email: '',
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewuser({...newuser, [name]: value});
    }

    const handleSignup = async (e) => {
        try {
            setNewuser({...newuser, ssn: newuser.username});
            const result = await axios.post(
                'http://localhost:3300/api/v1/user/register',
                newuser
            );
            console.log(result.data);
            alert('Đăng ký thành công!');
        } catch (error) {
            alert('Đăng ký không thành công!');
        } 
    }

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
                                <input onChange={handleChange} name="username" type="text" placeholder="Username"></input>
                            </div>

                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <EmailIcon/>
                                </div>
                                <input onChange={handleChange} name="email" type="email" placeholder="Email"></input>
                            </div>

                            <div className={classes.inputbox}>
                                <div className={classes.icon}>
                                    <LockIcon/>
                                </div>
                                <input onChange={handleChange} name="password_user" type="password" placeholder="Password"></input>
                            </div>

                            <Button onClick={handleSignup} type="button">
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