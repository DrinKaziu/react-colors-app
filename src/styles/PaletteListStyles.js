import bg from './bg.svg';
import sizes from './sizes';

export default {
  root: {
    minHeight: "120vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: '#f5c107',
    backgroundImage: `url(${bg})`,
    overFlow: "scroll"
  },
  container: {
    width: "70%",
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
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    [sizes.down('md')]: {
      gridTemplateColumns: "repeat(2, 50%)",
      gridGap: "2.5%"
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1%"
    }
  }
}