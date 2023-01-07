import React from "react";
import useStyle from "./AdverticeStyles";
import Percentage from '../../../assets/images/Percentage.png'

function Advertice() {
  const classes = useStyle();
  return <div className={classes.root}>

<img alt="Percentage" src={Percentage} className={classes.img}/>
<h5 className={classes.h5}>بزرگ ترین حراج آنلاین رو از دست نده!</h5>
  </div>
}

export default Advertice;
