import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  root: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    borderTop: "8px solid rgb(92, 193, 185)",
    borderTopRightRadius: 10,
  },
  divSlider: {
    width: "100%",
    marginTop: 10,
  },
}));
export default useStyles;
