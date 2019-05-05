import bg from './bg.svg';
import sizes from './sizes';

export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: '#f5c107',
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  heading: {
    fontSize: '2rem'
  },
  container: {
    width: "60%",
    marginBottom: '10rem',
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white"
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 23%)",
    gridGap: "3%",
    [sizes.down('lg')]: {
      gridTemplateColumns: "repeat(3, 32%)",
      gridGap: "2.5%",
      marginBottom: '5rem'
    },
    [sizes.down('md')]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "2.5%",
      marginBottom: '5rem'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1%",
      marginBottom: '5rem'
    }
  }
}