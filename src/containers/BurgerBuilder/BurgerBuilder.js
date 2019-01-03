import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:10,
    bacon:20,
    cheese:30,
    meat:40,
}

class BurgerBuilder extends Component {

    state = {
        ingredient: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice: 50,
        purchaseable: false,
        purchasing: false,
    }

    updatePurchaseable = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey=>{
            return ingredients[igKey];
        }).reduce((sum, el)=>{
            return sum+el;
        },0)

        this.setState({
            purchaseable: sum>0
        })
    }

    addIngredientsHander = (type)=>{
        //get old count and update on every click
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount +1;

        // ingredient obj copy
        const updatedIngredients = {
            ...this.state.ingredient
        }

        // updatedIngredients count by matching type
        updatedIngredients[type] = updatedCount

        // get ingredient price by matching type
        const priceAddtion = INGREDIENT_PRICES[type];

        // get old price from the state
        const oldPrice = this.state.totalPrice;

        // add oldprice and price addition
        const newPrice = oldPrice + priceAddtion;

        // set state 
        this.setState({
            totalPrice: newPrice,
            ingredient:updatedIngredients
        })
        this.updatePurchaseable(updatedIngredients)
    }


    removeIngredientHandler = (type) => {
         //get old count and update on every click
         
         const oldCount = this.state.ingredient[type];
         if(oldCount<=0){
             return;
         }
         const updatedCount = oldCount -1;
 
         // ingredient obj copy
         const updatedIngredients = {
             ...this.state.ingredient
         }
 
         // updatedIngredients count by matching type
         updatedIngredients[type] = updatedCount
 
         // get ingredient price by matching type
         const priceAddtion = INGREDIENT_PRICES[type];
 
         // get old price from the state
         const oldPrice = this.state.totalPrice;
 
         // subtract oldprice and price addition
         const newPrice = oldPrice - priceAddtion;
 
         // set state 
         this.setState({
             totalPrice: newPrice,
             ingredient:updatedIngredients
         })
        this.updatePurchaseable(updatedIngredients)

        
    }

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        })
    } 

    backdropHandler = () => {
        this.setState({
            purchasing: false,
        })
    } 
    
    render(){
        const disabledIngredients  = {
            ...this.state.ingredient
        }

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key]<=0
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClose={this.backdropHandler}> 
                    <OrderSummary ingredient={this.state.ingredient} />
                </Modal>
                <Burger ingredients={this.state.ingredient}/>
                <BuildControls
                    addIngredients={this.addIngredientsHander}
                    removeIngredients={this.removeIngredientHandler}
                    disabledInfo={disabledIngredients}
                    totalPrice={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    purchasing={this.purchaseHandler}
                    
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;