import { makeStyles } from "@mui/styles";
const useStyles=makeStyles((theme)=>({
    root:{

    },
    TitleMain:{
        width:'100%',
        height:60,
        backgroundColor:'#eee',
        borderRadius:20,
        marginTop:25,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    Typography:{
        padding:"0px 8px",
        cursor:'pointer'
    },



    GridContainer:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',

    }
    

}))
export default useStyles