import React from 'react'
import useStyle from './subMenuStyles'
function SubMenu() {
    const classes=useStyle()
    return (
        <div className={classes.root}> 
        <div className={classes.divIphone}>
            <a className={classes.aIphone}>آیفون</a>
          <ul style={{listStyleType:'none'}}>
              <li>
              <a className={classes.aIphone2}>آیفون 6s</a>
              </li>
              <li>
              <a className={classes.aIphone2}>آیفون5</a>
              </li>
          </ul>
          </div>
          <div className={classes.divIphone}>
            <a className={classes.aIphone}>سامسونگ</a>
          <ul style={{listStyleType:'none'}}>
              <li>
              <a className={classes.aIphone2}> سری A</a>
              </li>
              <li>
              <a className={classes.aIphone2}>سری S</a>
              </li>
          </ul>
          </div>
          <div className={classes.divIphone}>
            <a className={classes.aIphone}>نوکیا</a>
          <ul style={{listStyleType:'none'}}>
              <li>
              <a className={classes.aIphone2}>نوکیا 8</a>
              </li>
              <li>
              <a className={classes.aIphone2}> نوکیا 7.2</a>
              </li>
          </ul>
          </div>
        </div>
    )
}

export default SubMenu
