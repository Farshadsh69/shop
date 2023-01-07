import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 30,
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      height: 50,
    },
  },
  topheather: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  divEmail: {
    marginTop: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textEmail: {
    fontSize: 12,
    marginRight: "5px !important",
  },
  textFollowup: {
    fontSize: 12,
    marginRight: "5px !important",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px !important",
      fontSize: 10,
    },
  },
  phoneT: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    flex: 1,
    [theme.breakpoints.down('md')]:{
flex:''
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      justifyContent: "start",
    },
  },
  btn: {
    background: "none",
    color: "#fff",
    border: "none",
    fontSize: 12,
    fontFamily: "IRANSans",
    cursor: "pointer",
  },
  divSignin: {
    marginLeft:170,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    [theme.breakpoints.down('md')]:{
      flex:'',
      marginLeft:70
          },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
  },
  divImg: {
    borderRadius:2,
    position: "absolute",
    width: 150,
    height: 45,
    zIndex: 1,
    left: 0,
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down('md')]:{
      width:120
    },
    [theme.breakpoints.down('sm')]:{
      height:60
    }
  },
  IconShopp: {
    color: "#fff",
    position: "relative",
    marginRight: 15,
    display: "flex",
  },
  Tshopp: {
    color: "#fff",
    fontSize: 10,
    display: "flex",
    [theme.breakpoints.down('sm')]:{
      "&.MuiTypography-root":{
        fontSize:14
      }
    }
  },
  Buy: {
    position: "absolute",
    width: 15,
    height: 15,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    left: 45,
    top: 8,
    [theme.breakpoints.down('md')]:{
      left:30
    }
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default useStyles;
