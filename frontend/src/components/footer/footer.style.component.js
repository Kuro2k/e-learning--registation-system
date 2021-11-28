import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100px',
        backgroundColor: 'black',
        width: "100%",
    },
    logolight: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            height: '70px',
        }
    },
}));