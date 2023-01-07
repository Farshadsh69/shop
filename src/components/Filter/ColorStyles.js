import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    width:'80%',
    display:'flex',
    flexDirection:'column',
    borderTop: "8px solid rgb(92, 193, 185)",
    borderTopRightRadius: 10,
    marginTop:10,
    marginBottom:10,
  },
  divColor:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    marginBottom:20,
  },
  h6:{
    color:'#000'  ,
    
  }

}));
export default useStyles;
