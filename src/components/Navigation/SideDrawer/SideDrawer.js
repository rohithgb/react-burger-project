import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachSideBar = [classes.SideDrawer, classes.Close];
    if(props.open){

        attachSideBar = [classes.SideDrawer, classes.Open];
    }
    return(
        <Aux>
            <Backdrop  show={props.open} clicked={props.sideDrawer} />
            <div className={attachSideBar.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
            
            <nav>
                <NavigationItems />
            </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
