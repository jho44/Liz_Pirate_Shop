import React, { Component } from 'react'
import styled from "styled-components"
import {ProductConsumer} from "../context"
import PropTypes from "prop-types"

// to be called in ProductList.js

// products' images in public folder

export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3"> 
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5">
                                <img src={img} alt="product" className="card-img-top"/>
                                <button 
                                    className="cart-btn" 
                                    disabled={inCart ? true: false} 
                                        // if it's already in the cart, disable the button
                                        // further editing of product will be on cart page
                                    onClick={()=>{
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {/* depending on whether it's in the cart, 
                                        will either say "In Cart" or be the 
                                        add-to-cart button  */}
                                    {inCart ? (
                                        <p className="text-capitalize mb-0" disabled>
                                            {" "}
                                            in cart
                                        </p>
                                        ) : (
                                        <i className="fas fa-cart-plus"/>
                                    )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">
                                $
                            </span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}
 
// in case of mistake in data.js
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired   
}

const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer{
        background:transparent;
        border-top: transparent;
        transition: all 0.5s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247, 247, 247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
    }

    // hover over the product image and the cart button 
    // will appear in the bottom right corner
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }

    .cart-btn: hover {
        color: var(--mainBlue);
        cursor: pointer;
    }
`