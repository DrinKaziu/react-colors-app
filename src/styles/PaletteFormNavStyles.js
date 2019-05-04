import sizes from './sizes';

const drawerWidth = 400;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    [sizes.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    }
  },
  navBtns: {
    marginRight: '1rem',
    "& a": {
      textDecoration: 'none'
    },
    [sizes.down('xs')]: {
      marginRight: '0'
    }
  },
  button: {
    margin: '0 0.5rem',
  }
});

export default styles; 