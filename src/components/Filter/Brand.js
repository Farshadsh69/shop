import React from 'react'
import useStyles from './CountryStyle'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
function Brand() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <h4> برند :</h4>
            <FormGroup>
                <FormControlLabel  control={<Checkbox size='small'/>} label='آمریکا'/>
                <FormControlLabel  control={<Checkbox size='small'/>} label=' تایوان'/>
                <FormControlLabel  control={<Checkbox size='small'/>} label=' چین'/>
                <FormControlLabel  control={<Checkbox size='small'/>} label=' ژاپن'/>
                <FormControlLabel  control={<Checkbox size='small'/>} label=' کره جنوبی'/>
            </FormGroup>
        </div>
    )
}

export default Brand
