import React from "react";
import useStyle from "./MenuStyles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Advertice from "./Advertice";
import SubMenu from "./subMenu";
import SubMenu2 from "./subMenu2";

import "./MenuCss.css";

function Menu() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.divMenu}>
        <ul className={classes.ul}>
          <li className={classes.li} class="submenuHover">
            <a className={classes.a} href="w">
              گوشی هوشمند
            </a>
            <ExpandMoreIcon fontSize="small" color="secondary" />
            <div class="sub-menu">
              <SubMenu />
            </div>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="w">
              لپ تاپ
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="w">
              هدفون و هندزفری
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="w">
              ساعت هوشمند
            </a>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="w">
              قاب و محافظ
            </a>
          </li>
          <li className={classes.li} class="submenuHover">
            <a className={classes.a} href="w">
              اسپیکر
            </a>
            <ExpandMoreIcon fontSize="small" color="secondary" />
            <div class="sub-menu">
              <SubMenu2 />
            </div>
          </li>
          <li className={classes.li}>
            <a className={classes.a} href="w">
              گجت های پوشیدنی
            </a>
          </li>
        </ul>
      </div>
      <Advertice />
    </div>
  );
}

export default Menu;
