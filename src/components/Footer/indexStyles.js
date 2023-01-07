import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "40px 180px",
    backgroundColor: "rgb(38, 38, 38)",
    color: "#999999",
  },
  divBrand: {
    display: "flex",
    alignItems: "center",
  },
  brandImg: {
    width: 160,
    height: 70,
    borderRadius: 50,
    boxShadow: "5px 1px 20px 0px rgb(92, 193, 185)",
    opacity: "0.6",
  },
  GridLogo: {
    width: "80%",
    borderLeft: "1px solid #999999",
  },
  divSpan: {
    fontSize: 13,
    width: "60%",
    marginTop: 20,
    textAlign: "justify",
    verticalAlign: "middle",
    position: "relative",
    "&::after": {
      content: '" "',
      position: "absolute",
      width: "50%",
      height: 2,
      backgroundColor: "#5cc1b9",
      right: 0,
      top: 150,
    },
  },
  divSupport: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    color: "#999999",
    fontSize: 13,
    marginTop: 25,
    lineHeight: 0,
    marginBottom: 50,
  },
  GridOrder: {
    padding: "0px 40px",
  },
  divTitle: {
    color: "#fff",
    position: "relative",
    lineHeight: 1,
    "&::after": {
      content: '" "',
      position: "absolute",
      width: "35%",
      height: 1,
      backgroundColor: "#5cc1b9",
      right: 0,
    },
  },
  divOrder: {
    marginTop: 40,
  },
}));

export default useStyles;
