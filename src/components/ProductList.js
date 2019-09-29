import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import {ProductConsumer} from "../context"
import AOS from 'aos';  // library that assists in animating objects
import 'aos/dist/aos.css';

// renders list of products on Products page

export default class ProductList extends Component {

    componentDidMount(){
        AOS.init({
            duration : 1500
        })
    }

    render() {
        return (
            <React.Fragment>
                    <div data-aos="fade-down">
                        <Title name="our" title="products"/>
                    </div>
                    <div className="container" style={{paddingTop: "5rem"}} >
                        <div className="row" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                            <ProductConsumer>
                                {value=> {
                                    // loop through and put product cards in
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product}/>;
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
