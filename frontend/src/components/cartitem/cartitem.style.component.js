import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100px',
        width: '100%',
        padding: '10px 0px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        margin: '20px 0',
        display: 'flex',
        alignItems: 'center',
        '& img': {
            margin: '10px 0px',
            height: '80px',
            width: '100%',
        },
        border: '1px solid #ddd',
    },

    content: {
        height: '100px',
        width: '100%',
        padding: '10px 0px',
        color: '#666',
        '& h3': {
            fontSize: '14px',
            margin: '5px 0px',
        },
        '& p': {
            fontSize: '12px',
            margin: '5px 0px',
        },
        '& svg': {
            width: '15px',
            height: '15px',
            color: '#e59819',
        }
    },
    button: {
        '& button': {
            height: '40px',
            fontSize: '10px',
            border: '1px solid #white',
            width: '100%',
            margin: '5px 0',
            color: '#a435f0',
        }
    },
    price: {
        display: 'flex',
        padding: '20px 0px',
        
    },
    detail: {
        width: '50%',
        '& h4': {
            color: '#a435f0',
        },
        '& p': {
            fontSize: '12px',
            marginTop: '5px',
            textDecoration: 'line-through',
        }
    },
    note: {
        color: '#a435f0',
    }
}));