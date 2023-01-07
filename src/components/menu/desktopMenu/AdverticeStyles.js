import { makeStyles } from "@mui/styles";
const useStyle=makeStyles(()=>({
    root:{
width:'25%',
height:55,
display:"flex",
flexDirection:'row',
alignItems:'center',
marginRight:30,
borderTop: "1px solid #d1d4d3",
borderBottom: "1px solid #d1d4d3",
cursor:'pointer',

    },
    img:{
        width:30,
        height:30,
        marginRight:20,
        marginLeft:10,
    },
    h5:{
        color:'#878d8b'
    }

}))
export default useStyle