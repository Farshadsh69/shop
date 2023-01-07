import React from 'react'
import useStyle from './subMenuStyles2'
function SubMenu() {
    const classes=useStyle()
    return (
        <div className={classes.root}> 
        <div className={classes.divIphone}>
            <a className={classes.aIphone}>اسپیکر قابل حمل</a>
          <ul style={{listStyleType:'none'}}>
              <li>
              <a className={classes.aIphone2}> جیبی</a>
              </li>
             
          </ul>
          </div>
          <div className={classes.divIphone}>
            <a className={classes.aIphone}>اسپیکر استدیو</a>
          <ul style={{listStyleType:'none'}}>
              <li>
              <a className={classes.aIphone2}>اسپیکر مکی</a>
              </li>
              <li>
              <a className={classes.aIphone2}>{""}</a>
              </li>
          </ul>
          </div>
   
        </div>
    )
}

export default SubMenu
