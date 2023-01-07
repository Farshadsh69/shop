import React from "react";
import useStyles from "./priceStyles";
import Slider from "@mui/material/Slider";

function Price() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h4>قیمت :</h4>
    <div className={classes.divSlider}>
      <Slider
        aria-label="Small steps"
        min={0}
        max={21000000}
        valueLabelDisplay="auto"
        defaultValue={0}
        size="small"
        step={100000}
      />
      </div>
    </div>
  );
}

export default Price;
