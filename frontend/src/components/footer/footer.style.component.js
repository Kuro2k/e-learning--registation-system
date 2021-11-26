import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '70px',
        backgroundColor: 'black',
        width: "100%",
    },
    logolight: {
        height: '70px',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            height: '40px',
        }
    },
}));