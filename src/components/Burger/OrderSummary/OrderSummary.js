import React from 'react';

import Aux from '../../../hoc/Aux/Aux';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
   let transformedIngredients = Object.keys(props.ingredient).map(igKey=>{
        return (
            <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span> {props.ingredient[igKey]}</li>
        );
    })

   // console.log(transformedIngredients)
   return (
    <Aux>
         <h3>Your Order</h3>
         <p> A delicious burger with following ingredients:</p>
         <ul>
             {transformedIngredients}
         </ul>
         <b>Total price: {props.price.toFixed(2)}</b>
         <p>Continue to Checkout?</p>
         
         <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
         <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
   );
};

export default orderSummary;