import React from 'react'
import useStyles from './GenderStyles'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function Gender() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <h4>جنس :</h4>
            <FormGroup>
                <FormControlLabel control={<Checkbox size='small'/>} label='آلومینیوم'/>
                <FormControlLabel control={<Checkbox size='small'/>} label='آلیاژ آلومینیوم'/>
                <FormControlLabel control={<Checkbox size='small'/>} label='پلاستیک فشرده'/>
            </FormGroup>
        </div>
    )
}

export default Gender
