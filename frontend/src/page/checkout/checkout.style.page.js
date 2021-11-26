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
    checkout: {
        width: '1000px',
    },
    userinfo: {
        border: '1px solid #ddd',
        height: '400px',
        padding: '30px 40px',
        width: '90%',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        '& input': {
            height: '50px',
            width: '100%',
            margin: '10px 0px',
            padding: '0px 10px',
            fontSize: '16px',
        }
    },
    checkbox: {
        display: 'flex',
        height: '40px',
        alignItems: 'center',
    },
    payment: {
        width: '100%',
        height: '280px',
        border: '1px solid #ddd',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        padding: '20px',
        '& button': {
            width: '100%',
            height: '50px',
            backgroundColor: '#a435f0',
            color: 'white',
            fontWeight: '600',
            '&:hover': {
                backgroundColor: '#7325a3',
            }
        }
    },
    item: {
        width: '100%',
        display: 'flex',
        margin: '10px 0px',
    },
    iteml: {
        width: '50%',

    },
    itemr: {
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cancle: {
        color: 'white',
        backgroundColor: 'red',
        marginTop: '20px',
        height: '40px',
        borderRadius: '5px',
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: '40px',
    }
}))