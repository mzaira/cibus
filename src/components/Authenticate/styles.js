import { makeStyles } from '@material-ui/core/styles';
import { BorderAllRounded } from '@material-ui/icons';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
    },
    paper:{
        padding: '2vh 2vw',
        minHeight: '70vh',
        width: '25vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    grid: {
    },
    textField: {
        marginTop: '2vh',
    },
    btn: {
        color: 'white',
        backgroundColor: 'green',
        marginTop: '3vh',
        BorderAllRounded,
    },
    checkbox:{
    }
}));