import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: 269,
    height:433,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#eee",
    borderRadius:5,
    margin:'20px 0px ',
    position:'relative'
  },
  Discount:{
      position:'absolute',
      width:65,
      height:25,
      top:0,
      right:0,
      backgroundColor:"#ff0000b8",
      padding:4,
      fontSize:11,
      borderBottomLeftRadius:20,
      fontWeight:'bold',

  },
  img: {
    width:260,
    height:200,
    marginTop:40,
  },
  title:{
      textAlign:'center',
      lineHeight:1.5,
      margin:0,
      padding:0,
  },
  price1:{
      fontSize:14,
      color:'rgb(92, 193, 185)',
      textDecoration:'line-through'
  },
  price2:{
    fontSize:14,
    color:'red',
  },
  divPrice:{
      width:'80%',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
  }
}));
export default useStyles;
