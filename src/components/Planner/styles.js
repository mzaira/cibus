import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  container: {
    minHeight: '140vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  dropContainer: {
    padding: '15px',
    paddingTop: '25vh',
    minHeight: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  dragGroup: {
    minHeight: '15vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listText: {
    textAlign: 'center',
    width: '18vw',
    height: '8vh',
  },
  item: {
    marginLeft: '5px',
    width: '18vw',
    height: '10vh',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '5px',
  },
  text: {
    width: '80px',
  },
  media: {
    width: '40px',
    height: '40px',
  },
  cardText: {
    marginLeft: '5px',
  },
  appBar: {
    paddingTop: '10vh',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    maxHeight: '20vh',
    zIndex: 2,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
  },
}));