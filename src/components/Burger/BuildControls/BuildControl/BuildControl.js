import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = ( props ) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            onClick={()=>{props.removeIngredients(props.type)}} 
            className={classes.Less}
            disabled={props.disabled}>Less</button>
        <button 
            onClick={()=>{props.addIngredients(props.type)}} 
            className={classes.More}>More</button>
    </div>
);

export default buildControl;