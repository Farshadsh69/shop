import React from "react";
import useStyles from "./filterStyles";
import "./filetStyles.css";
import Color from '../../../Filter/Color'
import Gender from "../../../Filter/Gender";
import Price from "../../../Filter/price";
import Country from '../../../Filter/Country'
import Brand from '../../../Filter/Brand'

function Filter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.divCategories}>
        <ul>
          <h4>دسته ها</h4>
          <li>
            <a href="www">هدفون و هندزفری</a>
          </li>
          <li>
            <a href="www">اسپیکر</a>
          </li>
          <li>
            <a href="www">قاب و محافظ</a>
          </li>
          <li>
            <a href="www">گوشی هوشمند</a>
          </li>
          <li>
            <a href="ww"> تاپ لپ</a>
          </li>
          <li>
            <a href="ww"> پاوربانک و شارژر </a>
          </li>
          <li>
            <a href="ww"> ساعت هوشمند</a>
          </li>
        </ul>
      </div>
      <Price />
      <Color />
      <Gender />
      <Country />
      {/* <Brand /> */}
      
    </div>
  );
}

export default Filter;
