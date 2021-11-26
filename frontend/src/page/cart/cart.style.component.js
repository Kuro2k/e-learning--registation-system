import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '950px',
        padding: '20px 0',
    },
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        padding: '30px',
        fontSize: '25px',
        fontWeight: '600',
    },
    cartlist: {
        width: '1100px',
    },
    payment: {
        width: '100%',
        height: '300px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        margin: '20px 0',
        padding: '30px 20px',
        border: '1px solid #ddd',
        '& h3': {
            fontSize: '16px',
            marginBottom: '10px',
        },
        '& p': {
            fontSize: '25px',
            fontWeight: '600',
            letterSpacing: '1px',
            color: '#a435f0',
            margin: '5px 0',
        },
        '& span': {
            fontSize: '14px',
            textDecoration: 'line-through',
        },
        '& button': {
            marginTop: '20px',
            backgroundColor: '#a435f0',
            color: 'white',
            width: '100%',
            height: '50px',
            fontWeitght: '600',
            '&:hover': {
                backgroundColor: '#7325a3',
            }
        },
        '& h6': {
            marginTop: '10px',
        }
    },
    coupon: {
        height: '35px',
        width: '100%',
        border: '1px solid #555',
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        '& input': {
            height: '33px',
            border: 'none',
            outline: 'none',
            padding: '0px 10px',
            width: '80%',
        },
        '& button': {
            height: '35px',
            width: '20%',
            margin: '0',
            borderRadius: '0px',
        },
        
    },
}))