import React from 'react';
import classes from './BuildControls.module.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},  
];

const buildControls = ( props ) =>(
    <div className={classes.BuildControls}>
        <p>Current price: <b>{props.totalPrice.toFixed(2)}</b></p>
        {controls.map(ctrl=>(
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                type={ctrl.type}
                addIngredients={props.addIngredients}
                removeIngredients={props.removeIngredients}
                disabled={props.disabledInfo[ctrl.type]}
                />
        ))}
        <button onClick={props.purchasing} className={classes.OrderButton} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
);

export default buildControls;