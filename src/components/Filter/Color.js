import React from "react";
import useStyles from "./ColorStyles";
import ColorItem from "./ColorItem";
function Color() {
  const classes = useStyles();
  const colors = [
    { id: 1, background: "#212121", color: "مشکی" },
    { id: 2, background: "#ffeb3b", color: "زرد " },
    { id: 3, background: "#0288d1", color: "آبی" },
    { id: 4, background: "#d50000", color: "قرمز" },
    { id: 5, background: "#ef6c00", color: "نارنجی" },
  ];

  return (
    <div className={classes.root}>
      <h4>رنگ :</h4>
      <div className={classes.divColor}>
        {colors.map((item) => (
            <ColorItem key={item.id} background={item.background} color={item.color}/>
        ))}
      </div>
    </div>
  );
}

export default Color;
