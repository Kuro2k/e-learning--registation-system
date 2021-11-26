import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '1300px',
        minHeight: '400px',
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        width: '260px',
        
        margin: '30px 0px',
        borderRadius: '25px',
        transition: '0.5s',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        '& input': {
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            color: '#555',
            width: '200px'
        },
        '&:hover': {
            width: '300px',
            boxShadow: "0px 5px 30px 0px #a430f010",
        }
    },
    icon: {
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#a430f0',
    }
}))