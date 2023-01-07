import React from "react";
import useStyle from "./indexStyles";
import brandImg from "../../../assets/images/brand.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Menu from "./Menu";
import Main from "./main/index";
import { Hidden } from "@mui/material";
function Index() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.TopHeather}>
        <div className={classes.divBrand}>
          <img src={brandImg} alt="brand" className={classes.brandImg} />
        </div>
        <div className={classes.divInpute}>
          <input
            placeholder="جست و جوی نام برند ، کالا ،دسته بندی و ..."
            className={classes.input}
          ></input>
          <button className={classes.btnSearch}>جستجو</button>
        </div>
        <div className={classes.divDelivery}>
          <div className={classes.divIconCar}>
            <LocalShippingIcon fontSize="large" color="secondary" />
          </div>
          <div className={classes.divtextDelivery}>
            <h4 className={classes.HDelivery}>سرویس ارسال اکسپرس</h4>
            <p className={classes.pDelivery}>
              ارسال رایگان بالای 50 هزار تومان
            </p>
          </div>
        </div>
      </div>
      <Hidden lgDown>
        <div className={classes.divMenu}>
          <Menu />
        </div>
      </Hidden>
      <Main />
    </div>
  );
}

export default Index;
