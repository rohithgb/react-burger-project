import React, { Component } from 'react';
import './App.css';

// import Aux from './hoc/Aux';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          Burger
        </Layout>
      </div>
    );
  }
}

export default App;
