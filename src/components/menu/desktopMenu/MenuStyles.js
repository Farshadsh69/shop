import { makeStyles } from "@mui/styles";
const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  divMenu: {
    position: "relative",
    width: "75%",
    borderTop: "1px solid #d1d4d3",
    borderBottom: "1px solid #d1d4d3",
  },
  ul: {
    width: "80%",
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "small",
  },
  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  a: {
    textDecoration: "none",
    color: "rgb(92, 193, 185)",
  },
  divSub: {
    display: "flex",
    alignItems: "center",
  },
}));
export default useStyle;
