import { makeStyles } from '@material-ui/core/styles';

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
        paddingTop: '10vh',
        paddingBottom: '10vh',
    },
    paper: {
        padding: '3vh 3vw',
        maxWidth: '70vw',
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
    },
    itemList: {
        padding: '3vh 3vw',
    },
    itemName: {
        display: 'flex',
        margin: '3vh 3vw',
        flexDirection: 'row',
    },
    margin: {
        marginRight: '1vw'
    }
}));