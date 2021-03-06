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
        
        overflow: 'hidden',
    },
    box: {
        height: '350px',
        width: '100%',
        zIndex: 10,
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
        zIndex: 1000,
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
    contentbox: {
        cursor: 'pointer',
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
        marginTop: '10px',
        '& p': {
            fontSize: '14px',
            padding: '5px 10px',
        }
    },
    dg: {
        height: '25px',
        color: '#777',
        display: 'flex',
        padding: '0px 5px',
        fontSize: '16px',
        alignItems: 'center',
        '& svg': {
            height: '20px',
            width: '20px',
            color: '#e59819',
            marginRight: '10px',
        },
        '& p': {
            marginLeft: '30px',
        }
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
        },
        
    },
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
    }
}))