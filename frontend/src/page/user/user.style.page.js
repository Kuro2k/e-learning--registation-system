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
        width: '600px',
        height: '600px',
        border: '1px solid #333',
        marginTop: '50px',
        padding: '30px 50px',
        '& h3': {
            marginBottom: '30px',
        }
    },
    item: {
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        width: '30%',

    },
    input: {
        width: '70%',
        '& input': {
            height: '40px',
            width: '100%',
            padding: '0px 10px',
            fontSize: '16px',
            color: '#555',
        }
    },
    button: {
        '& button': {
            backgroundColor: '#a430f0',
            color: 'white',
            height: '40px',
            width: '150px',
            '&:hover': {
                backgroundColor: '#8710d8',
            }
        }
    }
}));