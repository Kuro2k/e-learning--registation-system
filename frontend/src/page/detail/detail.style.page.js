import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '900px',
        width: '100%',
    },
    container: {
        height: '900px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    content: {
        height: '530px',
        width: '500px',
        border: '1px solid #000',
        marginTop: '50px',
        color: '#a430f0',
        padding: '30px',
        '& h3': {
            marginBottom: '20px',
        },
        '& span': {
            color: '#666',
            marginLeft: '20px',
            textTransform: 'capitalize',
        },
        '& div': {
            margin: '5px 0px',
        },
        '& img': {
            marginBottom: '20px',
        }
    },
    pic: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
    },
    button: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        height: '60px',
        alignItems: 'center',
        '& button': {
            backgroundColor: '#a430f0',
            color: 'white',
        }
    }
}))