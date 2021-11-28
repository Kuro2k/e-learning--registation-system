import React, { useState, useEffect } from 'react'
import { useStyles } from './user.style.page';
import { Button } from '@mui/material';
import axios from 'axios';

function User() {
    const classes = useStyles();
    const [learner, setLearner] = useState(
        {
            id: '',
            ssn: '',
            last_name: '',
            first_name: '',
            gender: 'Male - Female - Orther',
            dob: 'YYYY - MM - DD',
            phone_number: '',
            address: '',
            email: '',
            num_course_reg: '',
        }
    )

    const [newlearner, setNewlearner] = useState(
        {
            id: '',
            ssn: '',
            last_name: '',
            first_name: '',
            gender: 'Male - Female - Orther',
            dob: 'YYYY - MM - DD',
            phone_number: '',
            address: '',
            email: '',
            num_course_reg: '',
        }
    )
    const id = JSON.parse(localStorage.getItem('user')).user.id;

    const getLeaner = async (e) => {
        try {
            const result = await axios.get(
                `http://localhost:3300/api/v1/user/learnerdetail/${id}`,
                {
                    headers: {
                        token: JSON.parse(localStorage.getItem('user')).token,
                    }
                }
            )
            console.log(result.data);
            setLearner(result.data[0]);
            setNewlearner(result.data[0]);
        } catch (error) {}
    }

    useEffect(() => {
        getLeaner();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewlearner({...newlearner, [name]: value});
    }

    const handleUpdate = async () => {
        try {
            const data = {
                ssn: newlearner.ssn,
                last_name: newlearner.last_name,
                first_name: newlearner.first_name,
                gender: newlearner.gender,
                dob: newlearner.dob.slice(0,10),
                phone_number: newlearner.phone_number,
                address: newlearner.address,
                email: newlearner.email,
            }
            console.log(data);
            const result = await axios.put(
                `http://localhost:3300/api/v1/user/update/${learner.id}`,
                data,
                {
                    headers: {
                        token: JSON.parse(localStorage.getItem('user')).token,
                    }
                }
            )
            console.log(result.data);
            alert("Cập nhật thành công!");
        }
        catch (error) {

        }
    }

    return (
        <div className={classes.root}>
            <div style={{ height: "100px" }}></div>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h3>User Infomation</h3>
                    <div className={classes.item}>
                        <div className={classes.title}>
                            First Name
                        </div>
                        <div className={classes.input}>
                            <input name="first_name" onChange={handleChange} type="text" placeholder={learner.first_name}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Last Name
                        </div>
                        <div className={classes.input}>
                            <input name="last_name" onChange={handleChange} type="text" placeholder={learner.last_name}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Email
                        </div>
                        <div className={classes.input}>
                            <input name="email" onChange={handleChange} type="email" placeholder={learner.email}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Gender
                        </div>
                        <div className={classes.input}>
                            <input name="gender" onChange={handleChange} type="text" placeholder={learner.gender}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Address
                        </div>
                        <div className={classes.input}>
                            <input name="address" onChange={handleChange} type="text" placeholder={learner.address}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Phone
                        </div>
                        <div className={classes.input}>
                            <input name="phone_number" onChange={handleChange} type="text" placeholder={learner.phone_number}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            Date of birth
                        </div>
                        <div className={classes.input}>
                            <input name="dob" onChange={handleChange} type="text" placeholder={learner.dob.slice(0,10)}></input>
                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.title}>
                            
                        </div>
                        <div className={classes.button}>
                            <Button onClick={handleUpdate}>
                                Cập nhật
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
