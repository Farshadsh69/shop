import React from "react";
import useStyles from "./ItemStyles";
import { Button } from "@mui/material";

function Item({ image, title, price }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.Discount}>
            تخفیف %
        </div>
      <img src={image} alt="#" className={classes.img} />
      <h4 className={classes.title}>{title} </h4>
      <div className={classes.divPrice}>
        <p className={classes.price1}>
          <span style={{ padding: "0px 4px" }}>{price}</span>
          تومان
        </p>
        <p className={classes.price2}>
          <span style={{ padding: "0px 4px" }}>1,900,000</span>
          تومان
        </p>
      </div>
      <Button variant="contained" fullWidth color="secondary">
        افزودن به سبد خرید
      </Button>
    </div>
  );
}

export default Item;
