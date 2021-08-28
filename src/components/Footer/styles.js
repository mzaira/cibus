import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
      boxShadow: 'none',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      bottom: 0,
      maxHeight: '20vh',
      display: 'flex',
      justifyContent: 'center',
    },
    containerFooter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));