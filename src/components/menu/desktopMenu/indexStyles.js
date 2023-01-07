import { makeStyles } from "@mui/styles";
import { fontFamily, margin } from "@mui/system";
const useStyle = makeStyles(() => ({
  root: {
    width: "100%",
  },
  TopHeather: {
    marginTop: 30,
    marginBottom: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  divBrand: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  brandImg: {
    width: 160,
    height: 70,
    borderRadius: 50,
    boxShadow: "5px 1px 20px 0px rgb(92, 193, 185)",
  },
  divInpute: {
    display: "flex",
    alignItems: "center",
    width: 450,
    height: 45,
    border: "3px solid rgb(92, 193, 185)",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  input: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: "80%",
    height: "100%",
    border: "none",
    outline: "none",
    fontFamily: "IRANsans",
    fontSize: 13,
    paddingRight: 5,
  },
  btnSearch: {
    height: 45,
    width: 100,
    backgroundColor: "rgb(92, 193, 185)",
    border: "none",
    margin: 0,
    fontSize: 15,
    color: "#fff",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    fontFamily: "IRANsans",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "black",
      transition: "0.5s",
    },
  },
  divDelivery: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:50,
  },
  divIconCar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 70,
    backgroundColor: "rgb(235, 235, 235)",
    borderRadius: 50,
  },
  divtextDelivery: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  pDelivery: {
    fontFamily: "IRANsans",
    fontSize: 12,
    lineHeight:0
  },
  HDelivery: {
    lineHeight:0,
  },
}));
export default useStyle;
