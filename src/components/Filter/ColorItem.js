import React, { useState } from "react";
import useStyles from "./ColorItemStyle";
import './colorItem.css'
function ColorItem({ background, color }) {
  const [active, setActive] = useState(false);
  const classes = useStyles();
  return (
    <div
      onClick={() => setActive(!active)}
      className={classes.root}
      style={{
        backgroundColor: background,
        boxShadow: active ? "0px 2px 10px 4px #000" : "",
      }}
    >
            <h6 className={classes.h6}>{color}</h6>

    </div>

  );
}

export default ColorItem;
