import React, { Component } from 'react'
import CartColumns from "./CartColumns"
import EmptyCart from "./EmptyCart"
import {ProductConsumer} from "../../context"
import CartList from "./CartList"
import CartTotals from "./CartTotals"
import styled from "styled-components"

// if cart is empty, shows EmptyCart page as described in EmptyCart.js
// else shows products and totals calculated for items in your cart

// package.json included in Cart folder to ensure that I wouldn't 
// have to worry about Cart/Cart showing up in import paths

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <Header>
                                        <div className="pretty-header">
                                            <h1 className="text-yellow">Your Cart</h1>
                                        </div>
                                    </Header>
                                    <CartColumns/> 
                                    <CartList value={value}/>
                                    <CartTotals value={value}/>
                                </React.Fragment>
                            )
                        }
                        else {
                            return <EmptyCart/>
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}

const Header = styled.div`
    .pretty-header {
        background-image: linear-gradient(to bottom, black, var(--mainBlue));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 20vh;
        margin-bottom: 5rem;
    }

`