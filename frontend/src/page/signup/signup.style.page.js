import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '840px',
        width: '100%',
    },
    container: {
        height: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '380px',
        height: '400px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
    },
    boxtitle: {
        width: '380px',
        padding: '20px 20px',
        borderBottom: '1px solid #ddd',
    },
    boxform: {
        width: '380px',
        padding: '20px 20px',
        '& button': {
            height: '50px',
            width: '100%',
            marginBottom: '20px',
            color: 'white',
            boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
            borderRadius: '0px',
            backgroundColor: '#a435f0',
            fontSize: '16px',
            fontWeight: '600',
            '&:hover': {
                backgroundColor: '#7325a3',
            }
        }
    },
    inputbox: {
        height: '50px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '0px 10px',
        boxShadow: '0 2px 2px 0 rgb(28 29 31 / 24%), 0 0 2px 0 rgb(28 29 31 / 12%)',
        '& input': {
            border: 'none',
            outline: 'none',
            fontSize: '16px',
            height: '40px',
            width: '300',
            color: '#555',
        }
    },
    icon: {
        marginRight: '10px',
        '& svg': {
            height: '20px',
            width: '20px',
            color: '#666',
        }
    },
    signup: {
        '& a': {
            margin: '0px 10px',
            fontWeight: '500',
            color: '#a435f0',
        }
    }
}))