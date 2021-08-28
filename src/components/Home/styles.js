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
        padding: '5vh',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    containerSmall: {
        minHeight: '50vh',
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
    containerSec4: {
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    containerSec5: {
        minHeight: '130vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    containerSec5_2: {
        minHeight: '60vh',
        padding: '10px',
        marginTop: '5vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSec7: {
        minHeight: '200vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        color: 'white',
        backgroundColor: 'green',
        marginTop: '3vh',
        BorderAllRounded,
    },
    text: {
        marginBottom: '5vh',
    },
    card: {
        marginBottom: '3vh'
    },
    bulletPoint: {
        fontSize: 15
    },
    videoSec2: {
        marginTop: '3vh',
        height: 'auto',
        width: '60vw',
        BorderAllRounded
    },
    sec5Grid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sec5_2Grid: {
        padding: '10px',
        marginTop: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    work: {
        height: '40vh',
        width: '30vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        BorderAllRounded,
    },
    workList: {
        height: '40vh',
        width: '30vw',
    },
    testimony: {
        padding: '3vh 2vw',
        backgroundColor: '#E3FFBF',
        borderRadius: '30px'
    },
    reviewImg: {
        height: '30vh',
        width: '15vw',
        borderRadius: '150px',
    },
    reviewMessage: {
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    healthCard: {
        marginTop: '2vh',
    },
    health: {
        height: '40vh',
        padding: '2vh 8vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    root: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardText: {
        padding: '1vh 1vw',
    },
}));