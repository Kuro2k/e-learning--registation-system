import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '320px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        margin: '0px 10px',
        transition: '0.5s',
        backgroundColor: 'white',
        '&:hover': {
            boxShadow: "0px 5px 30px 0px rgb(0 0 0 / 10%)",
            '& $fade': {
                display: 'flex',
                '& button': {
                    transform: 'translateY(0px)',
                },
                height: '170px',
            }
        },
        cursor: 'pointer',
        overflow: 'hidden',
    },
    box: {
        height: '350px',
        width: '100%',
    },
    imagebox: {
        height: '170px',
        width: '100%',
        position: 'relative',
    },
    image: {
        position: 'absolute',
        height: '170px',
        width: '100%',
        '& img': {
            height: '170px',
            width: '100%',
        }
    },
    fade: {
        position: 'absolute',
        height: '0px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        display: 'flex',
        
        alignItems: 'center',
        justifyContent: 'center',
        transition: '0.5s',
        '& button': {
            backgroundColor: '#a435f0',
            color: 'white',
            border: '1px solid white',
            fontWeight: '600',
            transform: 'translateY(-150px)',
            transition: '0.5s',
            '&:hover': {
                backgroundColor: '#8710d8',
            }
        },
    },

    title: {
        height: '50px',
        overflow: 'hidden',
        width: '100%',
        padding: '15px 10px',
        '& p': {
            fontSize: '',
            fontWeight: '500',
        }
    },
    author: {
        '& p': {
            fontSize: '14px',
            padding: '5px 10px',
        }
    },
    dg: {
        padding: '0px 10px',
        '& svg': {
            height: '17px',
            width: '17px',
            color: '#e59819',
        },
    },
    price: {
        padding: '0px 10px',
        '& p': {
            fontSize: '16px',
            fontWeight: '600',
            color: '#a435f0',
        },
        '& span': {
            marginLeft: '10px',
            color: 'gray',
            fontSize: '14px',
            textDecoration: 'line-through',
        }
    },
}))