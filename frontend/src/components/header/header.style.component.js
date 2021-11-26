import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "80px",
    width: "100%",
    boxShadow: "0px 5px 30px 0px rgb(0 0 0 / 10%)",
    position: "fixed",
    backgroundColor: 'white',
    zIndex: '1000',
  },
  logo: {
    width: "100%",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": {
      height: "40px",
    },
  },
  searchbox: {
    width: "100%",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    height: "50px",
    width: "400px",
    display: "flex",
    alignItems: "center",
    borderRadius: "25px",
    backgroundColor: "#eee",
    boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',

    "& input": {
      height: "40px",
      width: "350px",
      borderRadius: "20px",
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: "16px",
      color: "#555",
    },
  },
  icon: {
    width: "50px",
    textAlign: "center",
    color: "#555",
  },
  login: {
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginbutton: {
    height: "40px",
    width: "300px",
    display: "flex",
    "& button": {
      height: "40px",
      minWidth: "80px",
      margin: "0px 5px",
      borderRadius: "0px",
      fontWeight: "600",
    },
  },
  black: {
    "& button": {
      boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
      backgroundColor: "black",
      color: "white",
      "&:hover": {
        backgroundColor: "black",
      },
    },
  },
  white: {
    "& button": {
      boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
      color: "black",
      "&:hover": {
        backgroundColor: "#eee",
      },
    },
  },

  logincomponent: {
    height: "40px",
    width: "300px",
    display: "flex",
    "& button": {
      boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
      color: "black",
      height: "40px",
      minWidth: "80px",
      borderRadius: "0px",
      margin: "0px 5px",
    },
  },
}));
