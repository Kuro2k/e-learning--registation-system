import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        marginBottom: '80px',
    },
    bannerbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: '30px 0px',
    },
    banner: {
        width: '1300px',
        height: '480px',
        '& img': {
            width: '1300px',
            height: '480px',
        }
    },
    tabbannerbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '90px',
        backgroundColor: '#a430f0',
    },
    content: {
        width: '1300px',
    },
    item: {
        width: '400px',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        '& p': {
            width: '300px',
        }
    },
    icon: {
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        border: '2px solid white',
        borderRadius: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            width: '30px',
            height: '30px',
        },
        marginRight: '10px',
    },
    recommendproductsbox: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0 30px',
        alignItems: 'center',
    },
    recommendproducts: {
        width: '1300px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        padding: '10px',
    },
    buttonleft: {
        margin: '0px 5px',
        '& button': {
            height: '50px',
            minWidth: '50px',
            width: '50px',
            color: '#a430f0',
            '& svg': {
                height: '40px',
                width: '40px',
            },
            boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
            borderRadius: '25px',
        },
        position: 'absolute',
        top: '50%',
        left: '0px',
        transform: 'translate(-75px, -50%)',
    },
    buttonright: {
        margin: '0px 5px',
        '& button': {
            height: '50px',
            minWidth: '50px',
            width: '50px',
            color: '#a430f0',
            '& svg': {
                height: '40px',
                width: '40px',
            },
            boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',

            borderRadius: '25px',
        },
        position: 'absolute',
        top: '50%',
        right: '0px',
        transform: 'translate(75px, -50%)',
    },
    title: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        '& div': {
            width: '1300px',
            fontSize: '20px',
            fontWeight: '600',
        },
        marginTop: '30px',
        color: '#333',
    },
    p: {
        width: '200px',
        height: '40px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        backgroundColor: '#eceb98',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20px',
    },

    allcourses: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    }
}));