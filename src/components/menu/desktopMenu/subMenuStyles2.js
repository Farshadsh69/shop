import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => ({
  root: {
    cursor: "default",
    position: "absolute",
    width: "90%",
    backgroundColor: "#fff",
    top: 40,
    right:0,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    animationName:'animate',
    boxShadow:'5px 0px 5px -2px #5cc1b9',
    zIndex:1,
    borderRadius:10,
  },
  divIphone: {
      width:'100%'
  },
  aIphone: {
    textDecoration: "none",
    fontSize: 14,
    marginRight: 10,
    paddingTop: 10,
    cursor: "pointer",
    fontWeight: "bold",
    transition:"0.3s",
    "&:hover":{
        color:"rgb(92, 193, 185)",
        transition:"0.3s",

    }
  },
  aIphone2: {
    cursor: "pointer",
    lineHeight:2,

    transition:"0.3s",
    "&:hover":{
      fontSize:14,
      marginRight:5,
        color:"rgb(92, 193, 185)",
        transition:"0.3s",

    }
  },
}));
export default useStyle;
