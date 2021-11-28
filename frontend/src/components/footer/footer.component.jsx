import React from "react";
import { useStyles } from "./footer.style.component";
import { Grid } from '@mui/material';
import logolight from "./../../asset/logodark.jpg";

function Footer() {
	const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
					<div className={classes.logolight}>
            <img src={logolight} alt="logo"></img>
          </div>
        </Grid>
        <Grid item xs={9}>
          
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
