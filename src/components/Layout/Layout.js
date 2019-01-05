import React, { Component } from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Aux';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedeHandler = () =>{
        this.setState({
            showSideDrawer: false,
        })
    }

    sideDrawerToggleeHandler = () =>{
        this.setState((prevState)=>{
            return {showSideDrawer: !prevState.showSideDrawer,}
        })
    }

    render() {
        return(
                <Aux>
                    <Toolbar  toggleSideBar={this.sideDrawerToggleeHandler}/>
                    <SideDrawer open={this.state.showSideDrawer} sideDrawer={this.sideDrawerClosedeHandler} />
                    <main className={classes.Content}>
                        {this.props.children}
                    </main>
                </Aux>
            
        );
    }
} 

export default Layout;