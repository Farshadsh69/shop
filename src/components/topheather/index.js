import { Container, Hidden, Typography } from "@mui/material";
import React from "react";
import useStyles from "./insexStyles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import imageTop from "../../assets/images/disCuont.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.topheather}>
          <Hidden smDown>
          <div className={classes.divEmail}>
            <Typography className={classes.flex}>
              <EmailIcon color="info" fontSize="small" />
            </Typography>
            <Typography
              className={classes.textEmail}
              color="#fff"
              variant="body"
            >
              پشتیبانی . farshadshabani69@gmail.com{" "}
            </Typography>
          </div>
          </Hidden>
          <div className={classes.phoneT}>
            <Typography className={classes.flex}>
              <PhoneIphoneIcon color="info" fontSize="small" />
            </Typography>
            <Typography
              className={classes.textFollowup}
              color="#fff"
              variant="body"
            >
              پیگیری سفارش . 09189173524{" "}
            </Typography>
          </div>

          <div className={classes.divSignin}>
            <AdminPanelSettingsIcon color="info" fontSize="small" />
            <button className={classes.btn}>ورود</button>
            <span style={{ color: "#fff" }}>/</span>
            <button className={classes.btn}>ثبت نام</button>
          </div>
          <div
            style={{ backgroundImage: "url(" + imageTop + ")" }}
            className={classes.divImg}
          >
            <Typography className={classes.Tshopp}>سبد خرید</Typography>
            <div className={classes.Buy}>0</div>

            <ShoppingCartIcon fontSize="medium" className={classes.IconShopp} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Index;
