import React from 'react';
import {Switch, Route} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from "./components/Modal"

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
          {/* where it goes to when link is incorrect */}
      </Switch>
      <Modal/> {/* what opens up when add item to cart */}
    </React.Fragment>
  );
}

export default App;
