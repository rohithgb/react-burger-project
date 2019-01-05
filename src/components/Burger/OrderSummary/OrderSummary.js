import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
   let transformedIngredients = Object.keys(props.ingredient).map(igKey=>{
        return (
            <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}:</span> {props.ingredient[igKey]}</li>
        );
    })

    console.log(transformedIngredients)
   return (
    <Aux>
         <h3>Your Order</h3>
         <p> A delicious burger with following ingredients:</p>
         <ul>
             {transformedIngredients}
         </ul>
         <p>Continue to Checkout?</p>
    </Aux>
   );
};

export default orderSummary;