import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    width:25,
    height:25,
    borderRadius:15,
    cursor:'pointer',
    position:'relative',
  
  },
  h6:{
    position:'absolute',
    transition:'0.2s',
    "&:hover":{
      fontSize:12,
      color:'red',
      transition:'0.2s',
    }
  }

}));
export default useStyles;
