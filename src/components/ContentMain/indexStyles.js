import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
      display:'flex',
      flexDirection:'column',
  },
  divOrdering: {
    width: "25%",
    marginBottom:30,
  },
  divItem:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      flexWrap:'wrap'
  },
  pagination:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
  }

}));
export default useStyles;
